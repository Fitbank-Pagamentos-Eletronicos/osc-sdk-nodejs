// @ts-ignore
import fetch, { RequestInit, Headers } from 'node-fetch';
import { Authorization, Document } from '../domains/';
import { OAuth } from './OAuth';

export const DocumentAnalysis = async (
  document: Document,
  id: string,
  auth: Authorization
) => {
  const myHeaders = new Headers();

  const oAuth = JSON.parse(await OAuth(auth));
  const access_token = await oAuth.access_token;

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${access_token}`);

  const raw = JSON.stringify(document);

  const requestOptions: RequestInit = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(
    `https://demo-api.easycredito.com.br/api/external/v2/process/document/${id}`,
    requestOptions
  );

  return response.text();
};
