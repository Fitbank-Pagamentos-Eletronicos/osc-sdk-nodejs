import { OAuth } from "../../requests/OAuth";
import { Auth } from "../../domains/Auth";

const auth = new Auth();

auth.setClient_id("4dbe3aa7-8ce9-43a4-9298-73b700e712bb");
auth.setClient_secret(
  "1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8"
);

OAuth(auth).then((res) => {
  console.log(res);
});
