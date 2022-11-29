import fetch, { RequestInit, Headers } from 'node-fetch';
import { SignupMatch } from '../domains/SignupMatch';
import { Auth } from '../domains/Auth';
import { OAuth } from './OAuth';
import { OSC } from '../../index';

export const SignupMatchRequest = async (signUp: SignupMatch, auth: Auth) => {
  const myHeaders = new Headers();

  const osc = new OSC(
    auth.getClient_id(),
    auth.getClient_secret(),
    auth.getScopes(),
    signUp.getName()
  );

  OSC.createInstance(
    auth.getClient_id(),
    auth.getClient_secret(),
    auth.getScopes(),
    signUp.getName()
  );
  const oAuth = JSON.parse(await OAuth(auth));
  // this.#expire_at = await oAuth.expire_at;
  // const access_token = await oAuth.access_token;
  const access_token = await osc.getToken();

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${access_token}`);

  const raw = JSON.stringify(signUp);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(
    'https://demo-api.easycredito.com.br/api/external/v2.1/process/signup',
    requestOptions
  );
  return response.text();
};
