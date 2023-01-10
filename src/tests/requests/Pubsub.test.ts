import { Pubsub } from '../../requests/Pubsub';
import { Auth } from '../../domains/Auth';
import { Scopes } from '../../domains/enums';
import { PubSubRequest } from '../../domains/PubSubRequest';

test('the data is equal to PubSubRequest', () => {
  const auth = new Auth();
  auth.setClient_id(process.env.client_id);
  auth.setClient_secret(process.env.client_secret);
  auth.setScopes(Scopes.api_external);

  const pubSubRequest = new PubSubRequest();
  pubSubRequest.setTopic_id('callback-iuri.mendes');
  pubSubRequest.setSubscription_id('callback-iuri.mendes-sub');
  pubSubRequest.setProject_id('project-5341349585364433217');
  pubSubRequest.setService_account(
    '{\n  "type": "service_account",\n  "project_id": "project-5341349585364433217",\n  "private_key_id": "5d6e7cb5e56824538c26bc56621b9dcebda51145",\n  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMx9IW+Qa06JZb\\ncqGqZxC28IU/LkJK0aq76QQz5tAxKDvGrUGiAKbXuvXgsIscrHpv634uXDsUaFRG\\nZXDt8UddUNqM/iySo97r4u2/Kz6iQUYSRELXCBTJXTYSGdSzik3mKrbQlxV112mT\\noM1dMgdKSfMu/LxMKB0GPj9mFPnVK1I+TQERbpT8HzeHmpujvqILRBEzg5dBVRVF\\nHMsvY9ACYcM240f8nHqerYQQznuuG0nyev9IWquqaHWfXw931Uqj03THWR7m6kyP\\nTsV3GWrXmJxBQQYMVHYq8yPmZNjL8oEJO0lVT+TntaUjqBIrxPXgpyarzsFq2vDv\\nvCwo6YDZAgMBAAECggEABMyqH9+2SIcq/vmw0E2aFq+Mb+6lnxtK5RyQ/KZsOrq2\\nq/FjmGhrgKLhIGMC36krNXRPgMaom9HWJ9A41VrSUV2TwbozUTyF/QFUkSZyUVs2\\nSTdQWbnWwuFsYwA3+/1B1iMqJblkx15FGzCpn4WMpjEVggRqZV6LT5ol4j6bnGNc\\nyMCJq1Jyk1bI7M6jW9klnJi8hF3e3zmKVCjcHBlyv8yRyE4FrYh9BIGLpvZ8ufVK\\n3GTMq5uwHZFns3iOClJgvarH7twxFBktMEDpEBLm9QJrWXpERjA+MyX5ju8IgTvA\\ni/eJWXbe/cxLME85CkhnQV7tE8xTXz1wIY/pTPXgAQKBgQD0UzihofnxfeQum/Z/\\nwfPARid7BUGZg4HzZuPZu1LgcLR+J5on4w8hxphQSgu8fgy1v+6pNgXecrhP24CO\\n30yhhuW1QgW81sS5jU38Wyy69ZvhHI4MkxReBAEWW0q0HBYHKu/ZX0HfAWr3x83K\\nNPkEDz2o01Vj92/RRQLJ5U8YjQKBgQDWkNv4IBpSh1ZS/QwUzQqjerhmqdweOcGK\\nQFuQoHkgscpW6fwg1zDsAv0tBmd3HQ3GlUV+APAuV29E89OVcyF7xazQlKNkrnAG\\nxPyQ8e4ukGyr08NZZdSyQOqaDwDnTybYlPKNIK9Hyb6DQh4OYTkFhbcVZD2A20iP\\n1WI9c72UfQKBgBoOKfLqwCnlwAjMbxwuxdzSXnF7HQTPBnO7nD7jADKZMlZlyMXK\\nLBnxANtHGjtOwfI79qqq7TNMzqUNhoc1/wkWxrZuxQffa3lSPWfVHU8O1EHMdsWW\\nhcyE5szIjY3plNvM02k+BFtQ3mRwNV0ECy5Ipc20Q932TEFn96UqRCYdAoGAJM8n\\nHXMMcPoMwiHtL6hZWeBUwDAFth28aSZPTwlonkZB6xUrDss79lEw88d0eoe+dEHp\\ncQtiKOEREqgttSbSKLSpyAKn4T7XsyGaHpeSf+SA8B1dFvoUOhxO4u0N/6ChjmhH\\nEBT6XPtsNoJiO59MM/lThlTzBCcaVKqLtvUjIdUCgYEAuVU1qLOhWkV7OAFEWyDG\\nf5gp+D21KPofcyWkJJAzWCO7m0Z4TaF7k/LDuiAbPfNmBGQVy+E5igItMp2ZhVcE\\nEI86/ie3nxetK7aSfWX/+mH/Z+zd558R2MwT6GS7dm8TpceioQ0Lq4XPr0M6BEey\\neAlovlYEQAR1d+JdmzCDWlw=\\n-----END PRIVATE KEY-----\\n",\n  "client_email": "external-callback-iurimendes@project-5341349585364433217.iam.gserviceaccount.com",\n  "client_id": "112416351937420286595",\n  "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n  "token_uri": "https://oauth2.googleapis.com/token",\n  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/external-callback-iurimendes%40project-5341349585364433217.iam.gserviceaccount.com"\n}'
  );

  const serialized = JSON.stringify(pubSubRequest);

  return Pubsub(auth).then((data) => {
    expect(data).toBe(serialized);
  });
});
