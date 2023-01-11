import { Auto } from './Auto';
import { BankAccount } from './BankAccount';
import { Card } from './Card';
import { Home } from './Home';
import { Loan } from './Loan';

export class Proposals {
  private loan: Loan;
  private card: Card;
  private auto: Auto;
  private home: Home;
  private bankAccount: BankAccount;

  public getLoan(): Loan {
    return this.loan;
  }

  public setLoan(loan: Loan): void {
    this.loan = loan;
  }

  public getCard(): Card {
    return this.card;
  }

  public setCard(card: Card): void {
    this.card = card;
  }

  public getAuto(): Auto {
    return this.auto;
  }

  public setAuto(auto: Auto): void {
    this.auto = auto;
  }

  public getHome(): Home {
    return this.home;
  }

  public setHome(home: Home): void {
    this.home = home;
  }

  public getBankAccount(): BankAccount {
    return this.bankAccount;
  }

  public setBankAccount(bankAccount: BankAccount): void {
    this.bankAccount = bankAccount;
  }
}
