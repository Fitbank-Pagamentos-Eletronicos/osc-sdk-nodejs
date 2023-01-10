// @ts-ignore
import fetch, { RequestInit, Headers } from 'node-fetch';
import { Contract } from '../domains/Contract';
import { Auth } from '../domains/Auth';
import { OAuth } from './OAuth';

export const SignContracts = async (
  contract: Contract,
  customerServiceNumber: string,
  auth: Auth
) => {
  const myHeaders = new Headers();

  const oAuth = JSON.parse(await OAuth(auth));
  const access_token = await oAuth.access_token;

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${access_token}`);

  const raw = JSON.stringify(contract);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(
    `${process.env.server_url}/v2.1/contract/${customerServiceNumber}`,
    requestOptions
  );
  return response.text();
};
