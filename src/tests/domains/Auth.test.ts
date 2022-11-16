import { Auth } from "../../domains/Auth";
import { Scopes } from "../../domains/enums";

test('Auth Serialize + Deserialize', () => {

    let authTest = new Auth();
    authTest.setClient_id("4");
    authTest.setClient_secret("password");
    authTest.setScopes(Scopes.api_external);

    const serialized = JSON.stringify(authTest);
    const deserialized = Object.assign(new Auth, JSON.parse(serialized));

    expect(authTest.getClient_id()).toBe(deserialized.getClient_id());
    expect(authTest.getClient_secret()).toBe(deserialized.getClient_secret());
    expect(authTest.getScopes()).toBe(deserialized.getScopes());
});
