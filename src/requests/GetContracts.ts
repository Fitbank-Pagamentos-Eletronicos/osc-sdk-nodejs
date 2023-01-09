// @ts-ignore
import fetch, { RequestInit, Headers } from 'node-fetch';
import { Contract } from '../domains/Contract';
import { Auth } from '../domains/Auth';
import { OAuth } from './OAuth';

export const GetContracts = async (
  customerServiceNumber: string,
  auth: Auth
) => {
  const myHeaders = new Headers();

  const oAuth = JSON.parse(await OAuth(auth));
  const access_token = await oAuth.access_token;

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${access_token}`);

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(
    `${process.env.server_url}/v2.1/contract/${customerServiceNumber}`,
    requestOptions
  );
  return response.text();
};
