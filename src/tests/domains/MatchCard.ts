import { MatchCard } from "../../domains/MatchCard";

const matchCard = new MatchCard();

matchCard.setProductId(2015);
matchCard.setName("João do Arroz");
matchCard.setLogo("Logo EasyCrédito");
matchCard.setAnnuity(150);
matchCard.setNetwork(0);

const json = `{"productId":2015,"name":"João do Arroz","logo":"Logo EasyCrédito","annuity":150,"network":0}`;
const serialized = JSON.stringify(matchCard);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
