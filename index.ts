import { OAuth } from './src/requests/OAuth';
import { Scopes } from './src/domains/enums';
import { Auth } from './src/domains/Auth';
import moment from 'moment';
import { AuthSucess } from './src/domains/AuthSucess';
import * as Collections from 'typescript-collections';

export class OSC {
  static #instances = new Collections.Dictionary<String, any>();
  static #default_instance_name = 'default';
  static #default_scopes = ['api-external'];

  #auth_response = ['api-external'];

  name: string;
  client_id: string;
  client_secret: string;
  scopes: Scopes;

  #access_token: string;
  #expire_at: string;

  constructor(
    name: string,
    client_id: string,
    client_secret: string,
    scopes: Scopes
  ) {
    this.name = name;
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.scopes = scopes;
    /* storage */
  }

  static #normalize(name: string) {
    return name
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    //string.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    /* lowcase, trim, remover acentos, converter [^A-z0-9] para [-] */
  }

  static exist(name?: string) {
    if (name) {
      Object.values(this.#instances).includes(this.#normalize(name));
    } else {
      this.exist(this.#default_instance_name);
    }
  }

  static getInstance(name?: string) {
    if (name) {
      const osc = this.#instances.getValue(this.#normalize(name));
      if (osc !== null) return osc;
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
      this.getInstance(this.#default_instance_name);
    }
    // else {
    //   this.getInstance(this.#default_instance_name);
    // }
    /* verificar se ja existe instancia com o nome default,
    se sim retorna a instancia */
    /* verificar se ja existe instancia com o mesmo nome, 
    se sim retorna a instancia */
  }

  static createInstance(
    client_id: string,
    client_secret: string,
    name?: string,
    scopes?: Scopes
  ) {
    // if (name === Object.values(this.#instances).some((name) => name === name)) {
    // }
    /* validar atributos, verificar se ja existe instancia com o mesmo nome, 
    chamar construtor e armazenar instancia na variavel estatica */
    /* validar atributos, verificar se ja existe instancia com o mesmo nome, 
    chamar construtor e armazenar instancia na variavel estatica */
    /* validar atributos, verificar se ja existe instancia com o mesmo nome,
     chamar construtor e armazenar instancia na variavel estatica */
    /* validar atributos, verificar se ja existe instancia com o mesmo nome,
     chamar construtor e armazenar instancia na variavel estatica */
    if (name) {
      const normalizedName = this.#normalize(name);
      if (this.#instances.getValue(normalizedName)) {
        /*String errorMessage = "Já existe uma instância 
        EasycAuthAPI com nome " + normalizedName
            throw new IllegalStateException(errorMessage)*/
        console.log(`Já existe uma instância 
            com nome ${normalizedName}`);
      }
      const osc = new OSC(name, client_id, client_secret, scopes!);
      this.#instances.setValue(normalizedName, osc);
      return osc;
    }

    this.createInstance(
      this.#default_instance_name,
      client_id,
      client_secret,
      scopes
    );
  }

  getToken() {
    /* verifica se há autenticação e se o token ainda não expirou,
       caso o token seja valido retorna o token,
     caso contra faz requisição de autenticação e retorna o token */
    if (
      this.#access_token === null ||
      this.#expire_at === null ||
      moment(this.#access_token).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]') <
        moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
    ) {
      return this.newToken();
    } else return this.#access_token;

    // this.auth();
    // console.log(`aqui: ${this.#access_token}`);
    // const testDate = moment()
    //   .add(2, 'd')
    //   .format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    // // new Date()
    // console.log(testDate);
    // console.log(`expire: ${this.#expire_at}`);
    // console.log(
    //   `aqui ${
    //     testDate > this.#expire_at ? 'testDate maior' : 'expire_at maior'
    //   }`
    // );
    // if (this.#access_token) {
    // }
    // if (new Date().getTime() > new Date(this.#expire_at).getTime()) {
    //   console.log('Ok');
    // }
  }

  newToken() {
    const authSuccess = new AuthSucess();
    if (authSuccess && authSuccess.getAccess_token()) {
      this.#expire_at = authSuccess.getExpire_at()
        ? authSuccess.getExpire_at()
        : moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
      this.#access_token = authSuccess.getAccess_token();
      return this.#access_token;
    } else {
      // throw new Exception("Não foi possível autenticar: ${resposta?.raw}")
    }
  }

  auth() {
    /* requisição de autenticação */
    const auth = new Auth();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);

    OAuth(auth).then((res) => {
      this.#access_token = res.access_token;
      this.#expire_at = res.expire_at;
      // console.log(res);
    });
  }
}

const testingOSC = new OSC(
  'name',
  '4dbe3aa7-8ce9-43a4-9298-73b700e712bb',
  '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8',
  Scopes.api_external
);
// console.log(testingOSC.auth());
console.log(testingOSC.getToken());
console.log(testingOSC.client_id);
