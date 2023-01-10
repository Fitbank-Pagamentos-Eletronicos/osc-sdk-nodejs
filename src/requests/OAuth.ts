// @ts-ignore
import fetch, { RequestInit, Headers } from 'node-fetch';
import { Auth } from '../domains/Auth';
import { Scopes } from '../domains/enums';
import { resolve } from 'path';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: resolve(__dirname, '../../.env') });

export const OAuth = async (auth: Auth) => {
  const myHeaders = new Headers();

  auth.setScopes(Scopes.api_external);

  const userAuth = Buffer.from(
    `${auth.getClient_id()}:${auth.getClient_secret()}`
  ).toString('base64');

  myHeaders.append('Authorization', `Basic ${userAuth}`);
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    scopes: auth.getScopes()
  });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(
    `${process.env.auth_server_url}/auth`,
    requestOptions
  );
  return response.text();
};
