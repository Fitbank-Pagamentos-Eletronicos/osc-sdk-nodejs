// @ts-ignore
import fetch, { RequestInit, Headers } from 'node-fetch';
import { SimpleSignUp } from '../domains/SimpleSignUp';
import { Auth } from '../domains/Auth';
import { OSC } from '../../index';

export const SimpleSignUpRequest = async (
  simpleSignUp: SimpleSignUp,
  auth: Auth
) => {
  const myHeaders = new Headers();

  const osc = new OSC(
    auth.getClient_id(),
    auth.getClient_secret(),
    auth.getScopes(),
    simpleSignUp.getName()
  );

  OSC.createInstance(
    auth.getClient_id(),
    auth.getClient_secret(),
    auth.getScopes(),
    simpleSignUp.getName()
  );

  const access_token = await osc.getToken();

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${access_token}`);

  const raw = JSON.stringify(simpleSignUp);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(
    `${process.env.server_url}/v2.1/process/simple_signup`,
    requestOptions
  );
  return response.text();
};
