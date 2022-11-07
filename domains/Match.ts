import { MatchAuto } from "./MatchAuto";
import { MatchCard } from "./MatchCard";
import { MatchHome } from "./MatchHome";
import { MatchLoan } from "./MatchLoan";

export class Match {
  private _matchLoan: MatchLoan;
  private _matchCard: MatchCard;
  private _matchAuto: MatchAuto;
  private _matchHome: MatchHome;

  public get matchLoan(): MatchLoan {
    return this._matchLoan;
  }

  public set matchLoan(matchLoan: MatchLoan) {
    this._matchLoan = matchLoan;
  }

  public get matchCard(): MatchCard {
    return this._matchCard;
  }

  public set matchCard(matchCard: MatchCard) {
    this._matchCard = matchCard;
  }

  public get matchAuto(): MatchAuto {
    return this._matchAuto;
  }

  public set matchAuto(matchAuto: MatchAuto) {
    this._matchAuto = matchAuto;
  }

  public get matchHome(): MatchHome {
    return this._matchHome;
  }

  public set matchHome(matchHome: MatchHome) {
    this._matchHome = matchHome;
  }
}
