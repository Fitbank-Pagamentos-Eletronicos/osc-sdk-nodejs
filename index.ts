import { Scopes } from './src/domains/enums';
import {
  Authorization,
  AuthSuccess,
  SignupMatch,
  SimpleSignUp,
  Proposal,
  Contract,
  Document
} from './src/domains/';
import {
  OAuth,
  SignupMatchRequest,
  SimpleSignUpRequest,
  ProposalsRequest,
  PubsubSubscribe,
  Pubsub,
  GetContracts,
  SignContracts,
  DocumentAnalysis,
  SimpleProposalRequest
} from './src/requests/';
import moment from 'moment';
import * as Collections from 'typescript-collections';
import { resolve } from 'path';
import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '.env') });

export class OSC {
  static #instances = new Collections.Dictionary<String, OSC>();
  static #default_instance_name = 'default';
  static #default_scopes = Scopes.api_external;

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
    const auth = new Authorization();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);
    const oAuth = JSON.parse(await OAuth(auth));
    this.#expire_at = await oAuth.expire_at;
    this.#access_token = await oAuth.access_token;
  }

  async getToken() {
    await this.auth();
    const authSuccess = new AuthSuccess();
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
      return this.#access_token;
    }
  }

  async setResponseListening(
    topicId: string,
    subscriptionId: string,
    projectId: string,
    serviceAccount: string,
    listeningFunction: Function
  ) {
    const auth = new Authorization();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);
    auth.setScopes(Scopes.api_external);
    const pubsub = await Pubsub(auth);
    return await PubsubSubscribe(
      topicId,
      subscriptionId,
      projectId,
      serviceAccount,
      listeningFunction
    );
  }

  async signUpMatch(signUp: SignupMatch) {
    const auth = new Authorization();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);
    auth.setScopes(Scopes.api_external);

    return await SignupMatchRequest(signUp, auth);
  }

  async getContract(customerServiceNumber: string) {
    const auth = new Authorization();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);
    auth.setScopes(Scopes.api_external);

    return await GetContracts(customerServiceNumber, auth);
  }

  async postContract(contract: Contract, customerServiceNumber: string) {
    const auth = new Authorization();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);
    auth.setScopes(Scopes.api_external);

    return await SignContracts(contract, customerServiceNumber, auth);
  }

  async pubsub() {
    const auth = new Authorization();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);
    auth.setScopes(Scopes.api_external);

    return await Pubsub(auth);
  }

  async simpleSignUp(simpleSignUp: SimpleSignUp) {
    const auth = new Authorization();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);
    auth.setScopes(Scopes.api_external);

    return await SimpleSignUpRequest(simpleSignUp, auth);
  }

  async sendDocument(document: Document, id: string) {
    const auth = new Authorization();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);
    auth.setScopes(Scopes.api_external);

    return await DocumentAnalysis(document, id, auth);
  }

  async proposal(pipelineId: string, proposal: Proposal) {
    const auth = new Authorization();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);
    auth.setScopes(Scopes.api_external);

    return await ProposalsRequest(proposal, pipelineId, auth);
  }

  async simpleProposal(simpleProposal: Proposal, id: string) {
    const auth = new Authorization();
    auth.setClient_id(this.client_id);
    auth.setClient_secret(this.client_secret);
    auth.setScopes(Scopes.api_external);

    return await SimpleProposalRequest(simpleProposal, id, auth);
  }
}
