import { ProductWorkingCapital } from '../../domains/ProductWorkingCapital';
import { Bank } from '../../domains';
import {
  ProductType,
  EmployeesCount,
  BusinessProfession,
  WorkingCapitalLoanObjectives,
  Banks,
  AccountType
} from '../../domains/enums';

test('ProductWorkingCapital Serialize + Deserialize', () => {
  const productWorkingCapital = new ProductWorkingCapital();

  productWorkingCapital.setType(ProductType[ProductType.WORKING_CAPITAL]);
  productWorkingCapital.setInstallments(1);
  productWorkingCapital.setValue(2022);
  productWorkingCapital.setCnpj('36008643000129');
  productWorkingCapital.setBusinessProfession(
    BusinessProfession[BusinessProfession.SOCIO_DONO]
  );
  productWorkingCapital.setEmployeesCount(
    EmployeesCount[EmployeesCount.MAIS_DE_10]
  );
  productWorkingCapital.setBusinessIncomeCnpj(36008643000129);
  productWorkingCapital.setWorkingCapitalLoanObjectives(
    WorkingCapitalLoanObjectives[WorkingCapitalLoanObjectives.CAPITAL_DE_GIRO]
  );
  productWorkingCapital.setBank(
    (() => {
      const bank = new Bank();
      bank.setAccount('299901-3');
      bank.setAgency('2850');
      bank.setBank(Banks.B450);
      bank.setType(AccountType[AccountType.CONTA_CORRENTE_INDIVIDUAL]);

      return bank;
    })()
  );
  productWorkingCapital.setAccountType(
    (() => {
      const bank = new Bank();
      bank.setAccount('299901-3');
      bank.setAgency('2850');
      bank.setBank(Banks.B450);
      bank.setType(AccountType[AccountType.CONTA_CORRENTE_INDIVIDUAL]);

      return bank;
    })()
  );
  productWorkingCapital.setAgency(
    (() => {
      const bank = new Bank();
      bank.setAccount('299901-3');
      bank.setAgency('2850');
      bank.setBank(Banks.B450);
      bank.setType(AccountType[AccountType.CONTA_CORRENTE_INDIVIDUAL]);

      return bank;
    })()
  );
  productWorkingCapital.setAccount(
    (() => {
      const bank = new Bank();
      bank.setAccount('299901-3');
      bank.setAgency('2850');
      bank.setBank(Banks.B450);
      bank.setType(AccountType[AccountType.CONTA_CORRENTE_INDIVIDUAL]);

      return bank;
    })()
  );

  const serialized = JSON.stringify(productWorkingCapital);
  const deserialized = Object.assign(
    new ProductWorkingCapital(),
    JSON.parse(serialized)
  );

  expect(productWorkingCapital.getInstallments()).toBe(
    deserialized.getInstallments()
  );
  expect(productWorkingCapital.getValue()).toBe(deserialized.getValue());
  expect(productWorkingCapital.getCnpj()).toBe(deserialized.getCnpj());
  expect(productWorkingCapital.getBusinessIncomeCnpj()).toBe(
    deserialized.getBusinessIncomeCnpj()
  );
  expect(productWorkingCapital.getEmployeesCount()).toBe(
    deserialized.getEmployeesCount()
  );
  expect(productWorkingCapital.getBusinessIncomeCnpj()).toBe(
    deserialized.getBusinessIncomeCnpj()
  );
  expect(productWorkingCapital.getWorkingCapitalLoanObjectives()).toBe(
    deserialized.getWorkingCapitalLoanObjectives()
  );
  expect(productWorkingCapital.getBank()).toEqual(deserialized.getBank());
  expect(productWorkingCapital.getAccount()).toEqual(deserialized.getAccount());
  expect(productWorkingCapital.getAgency()).toEqual(deserialized.getAgency());
  expect(productWorkingCapital.getAccount()).toEqual(deserialized.getAccount());
});
