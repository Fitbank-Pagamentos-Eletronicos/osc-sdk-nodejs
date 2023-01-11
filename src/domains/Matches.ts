import { MatchAuto } from './MatchAuto';
import { MatchCard } from './MatchCard';
import { MatchHome } from './MatchHome';
import { MatchLoan } from './MatchLoan';

export class Matches {
  private matchLoan: MatchLoan;
  private matchCard: MatchCard;
  private matchAuto: MatchAuto;
  private matchHome: MatchHome;

  public getMatchLoan(): MatchLoan {
    return this.matchLoan;
  }

  public setMatchLoan(matchLoan: MatchLoan): void {
    this.matchLoan = matchLoan;
  }

  public getMatchCard(): MatchCard {
    return this.matchCard;
  }

  public setMatchCard(matchCard: MatchCard): void {
    this.matchCard = matchCard;
  }

  public getMatchAuto(): MatchAuto {
    return this.matchAuto;
  }

  public setMatchAuto(matchAuto: MatchAuto): void {
    this.matchAuto = matchAuto;
  }

  public getMatchHome(): MatchHome {
    return this.matchHome;
  }

  public setMatchHome(matchHome: MatchHome): void {
    this.matchHome = matchHome;
  }
}
