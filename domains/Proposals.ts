import { Auto } from "./Auto";
import { Card } from "./Card";
import { Home } from "./Home";
import { Loan } from "./Loan";

export class Proposals {
  private _loan: Loan;
  private _card: Card;
  private _auto: Auto;
  private _home: Home;

  public get loan(): Loan {
    return this._loan;
  }

  public set loan(loan: Loan) {
    this._loan = loan;
  }

  public get card(): Card {
    return this._card;
  }

  public set card(card: Card) {
    this._card = card;
  }

  public get auto(): Auto {
    return this._auto;
  }

  public set auto(auto: Auto) {
    this._auto = auto;
  }

  public get home(): Home {
    return this._home;
  }

  public set home(home: Home) {
    this._home = home;
  }
}
