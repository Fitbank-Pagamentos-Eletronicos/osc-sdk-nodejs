// @ts-ignore
import fetch, { RequestInit, Headers } from 'node-fetch';
import { Authorization } from '../domains/';
import { OAuth } from './OAuth';

export const Pubsub = async (auth: Authorization) => {
  const myHeaders = new Headers();

  const oAuth = JSON.parse(await OAuth(auth));
  const access_token = await oAuth.access_token;

  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${access_token}`);

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  const response = await fetch(
    `${process.env.pubsub_url}/pubsub`,
    requestOptions
  );
  return response.text();
};
