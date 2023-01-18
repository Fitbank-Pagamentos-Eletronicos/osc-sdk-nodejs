// @ts-ignore
import fetch, { RequestInit, Headers } from 'node-fetch';
import { Authorization, Proposal } from '../domains/';
import { OAuth } from './OAuth';

export const SimpleProposalRequest = async (
  simpleProposal: Proposal,
  id: string,
  auth: Authorization
) => {
  const myHeaders = new Headers();

  const oAuth = JSON.parse(await OAuth(auth));
  const access_token = await oAuth.access_token;

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${access_token}`);

  const raw = JSON.stringify(simpleProposal);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch(
    `https://demo-api.easycredito.com.br/api/external/v2.1/process/simple_proposal/${id}`,
    requestOptions
  );
  return response.text();
};
