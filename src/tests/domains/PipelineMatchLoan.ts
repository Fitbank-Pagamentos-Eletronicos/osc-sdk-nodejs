import { MatchAuto } from "../../domains/MatchAuto";
import { MatchCard } from "../../domains/MatchCard";
import { MatchHome } from "../../domains/MatchHome";
import { MatchLoan } from "../../domains/MatchLoan";
import { PipelineMatchLoan } from "../../domains/PipelineMatchLoan";

const pipelineMatchLoan = new PipelineMatchLoan();

pipelineMatchLoan.setId("003");
pipelineMatchLoan.setStatus("Online");
pipelineMatchLoan.setCpf(60343933373);
pipelineMatchLoan.setName("John Doe");
pipelineMatchLoan.setDateCreated("2022-11-08");
pipelineMatchLoan.setLastUpdated("2022-11-09");

pipelineMatchLoan.setMatches(
  (() => {
    //test MatchLoan
    const matchLoan = new MatchLoan();
    matchLoan.setProductId(1914);
    matchLoan.setName("John Doe");
    matchLoan.setLogo("Logo FitBank");
    matchLoan.setMinValue(1000);
    matchLoan.setMaxValue(2000);
    matchLoan.setMinInstallment(12);
    matchLoan.setMaxInstallment(24);
    matchLoan.setMonthlyTax(6);

    //test MatchCard
    const matchCard = new MatchCard();
    matchCard.setProductId(2015);
    matchCard.setName("João do Arroz");
    matchCard.setLogo("Logo EasyCrédito");
    matchCard.setAnnuity(150);
    matchCard.setNetwork(0);

    //test MatchLoan
    const matchAuto = new MatchAuto();
    matchAuto.setProductId(2020);
    matchAuto.setName("Ana Feijão");
    matchAuto.setLogo("Logo Banco Zap");
    matchAuto.setMinValue(1500);
    matchAuto.setMaxValue(2500);
    matchAuto.setMinInstallment(10);
    matchAuto.setMaxInstallment(20);
    matchAuto.setMonthlyTax(8);

    //test MatchLoan
    const matchHome = new MatchHome();
    matchHome.setProductId(1996);
    matchHome.setName("Francisco Xico");
    matchHome.setLogo("Logo Login");
    matchHome.setMinValue(2000);
    matchHome.setMaxValue(3000);
    matchHome.setMinInstallment(15);
    matchHome.setMaxInstallment(25);
    matchHome.setMonthlyTax(10);

    return [matchLoan, matchCard, matchAuto, matchHome];
  })()
);

const json = `{"id":"003","status":"Online","cpf":60343933373,"name":"John Doe","dateCreated":"2022-11-08","lastUpdated":"2022-11-09","matches":[{"productId":1914,"name":"John Doe","logo":"Logo FitBank","minValue":1000,"maxValue":2000,"minInstallment":12,"maxInstallment":24,"monthlyTax":6},{"productId":2015,"name":"João do Arroz","logo":"Logo EasyCrédito","annuity":150,"network":0},{"productId":2020,"name":"Ana Feijão","logo":"Logo Banco Zap","minValue":1500,"maxValue":2500,"minInstallment":10,"maxInstallment":20,"monthlyTax":8},{"productId":1996,"name":"Francisco Xico","logo":"Logo Login","minValue":2000,"maxValue":3000,"minInstallment":15,"maxInstallment":25,"monthlyTax":10}]}`;
const serialized = JSON.stringify(pipelineMatchLoan);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
