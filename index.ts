import { OAuth } from './src/requests/OAuth';
import { Scopes } from './src/domains/enums';
import { Auth } from './src/domains/Auth';
import moment from 'moment';
import { AuthSucess } from './src/domains/AuthSucess';
import * as Collections from 'typescript-collections';

export class OSC {
  static #instances = new Collections.Dictionary<String, OSC>();
  static #default_instance_name = 'default';
  static #default_scopes = Scopes.api_external;

  #auth_response = ['api-external']; //Scopes.api_external

  name: string;
  client_id: string;
  client_secret: string;
  scopes: Scopes;

  #access_token: string;
  #expire_at: string;

  constructor(
    client_id: string,
    client_secret: string,
    scopes: Scopes,
    name: string
  ) {
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.scopes = scopes;
    this.name = name;
  }

  static #normalize(name: string) {
    return name
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/gi, '-');
  }

  // static exist(name?: string) {
  //   if (name!) {
  //     Object.values(this.#instances).includes(this.#normalize(name)!);
  //   } else {
  //     this.exist(this.#default_instance_name);
  //   }
  // }

  static getInstance(name?: string): OSC {
    if (name) {
      const osc = this.#instances.getValue(this.#normalize(name));
      if (osc !== null) {
        if (osc !== undefined) return osc;
        else throw 'Instance not found!';
      } else {
        throw 'Instance not found!';
      }
      const availableNames = this.#instances.keys();
      let availableNamesMsg;
      if (availableNames === null || availableNames.length < 0) {
        availableNamesMsg = '';
      } else {
        availableNamesMsg = `Available Names: ${availableNames.map(
          (num) => (num += ', ')
        )}`;
      }
    } else {
      return this.getInstance(this.#default_instance_name);
    }
  }

  public static createInstance(
    client_id: string,
    client_secret: string,
    scopes?: Scopes,
    name?: string
  ) {
    if (name) {
      const normalizedName = this.#normalize(name);
      if (this.#instances.getValue(normalizedName)) {
        throw `Já existe uma instância com nome ${normalizedName}`;
      }
      const osc = new OSC(
        client_id,
        client_secret,
        scopes!,
        this.#normalize(name)
      );
      this.#instances.setValue(normalizedName, osc);
      return osc;
    } else {
      this.createInstance(
        client_id,
        client_secret,
        scopes,
        this.#default_instance_name
      );
    }
  }

  async auth() {
    const auth = new Auth();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);
    const oAuth = JSON.parse(await OAuth(auth));
    this.#expire_at = await oAuth.expire_at;
    this.#access_token = await oAuth.access_token;
  }

  async getToken() {
    await this.auth();
    const authSuccess = new AuthSucess();
    if (
      this.#access_token === null ||
      this.#expire_at === null ||
      moment(this.#expire_at).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]') <
        moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
    ) {
      return await this.auth();
    } else {
      authSuccess.setAccess_token(this.#access_token);
      authSuccess.setExpire_at(this.#expire_at);
      // return authSuccess;
      return this.#access_token;
    }
  }

  // async newToken() {
  //   await this.auth();
  //   const authSuccess = new AuthSucess();
  //   if (authSuccess && authSuccess.getAccess_token()) {
  //     this.#expire_at = authSuccess.getExpire_at()
  //       ? authSuccess.getExpire_at()
  //       : moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
  //     this.#access_token = authSuccess.getAccess_token();
  //     return this.#access_token;
  //   } else {
  //     // throw new Exception("Não foi possível autenticar: ${resposta?.raw}")
  //     console.log('Não foi possível autenticar');
  //   }
  // }
}
