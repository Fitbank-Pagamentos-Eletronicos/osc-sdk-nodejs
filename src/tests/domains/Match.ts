import { MatchAuto } from "../../domains/MatchAuto";
import { MatchCard } from "../../domains/MatchCard";
import { MatchHome } from "../../domains/MatchHome";
import { MatchLoan } from "../../domains/MatchLoan";

const matchLoan = new MatchLoan();
matchLoan.setProductId(1914);
matchLoan.setName("John Doe");
matchLoan.setLogo("Logo FitBank");
matchLoan.setMinValue(1000);
matchLoan.setMaxValue(2000);
matchLoan.setMinInstallment(12);
matchLoan.setMaxInstallment(24);
matchLoan.setMonthlyTax(6);

const matchCard = new MatchCard();
matchCard.setProductId(2015);
matchCard.setName("João do Arroz");
matchCard.setLogo("Logo EasyCrédito");
matchCard.setAnnuity(150);
matchCard.setNetwork(0);

const matchAuto = new MatchAuto();
matchAuto.setProductId(2020);
matchAuto.setName("Ana Feijão");
matchAuto.setLogo("Logo Banco Zap");
matchAuto.setMinValue(1500);
matchAuto.setMaxValue(2500);
matchAuto.setMinInstallment(10);
matchAuto.setMaxInstallment(20);
matchAuto.setMonthlyTax(8);

const matchHome = new MatchHome();
matchHome.setProductId(1996);
matchHome.setName("Francisco Xico");
matchHome.setLogo("Logo Login");
matchHome.setMinValue(2000);
matchHome.setMaxValue(3000);
matchHome.setMinInstallment(15);
matchHome.setMaxInstallment(25);
matchHome.setMonthlyTax(10);

const match = [matchLoan, matchCard, matchAuto, matchHome];

const json = `[{"productId":1914,"name":"John Doe","logo":"Logo FitBank","minValue":1000,"maxValue":2000,"minInstallment":12,"maxInstallment":24,"monthlyTax":6},{"productId":2015,"name":"João do Arroz","logo":"Logo EasyCrédito","annuity":150,"network":0},{"productId":2020,"name":"Ana Feijão","logo":"Logo Banco Zap","minValue":1500,"maxValue":2500,"minInstallment":10,"maxInstallment":20,"monthlyTax":8},{"productId":1996,"name":"Francisco Xico","logo":"Logo Login","minValue":2000,"maxValue":3000,"minInstallment":15,"maxInstallment":25,"monthlyTax":10}]`;
const serialized = JSON.stringify(match);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
