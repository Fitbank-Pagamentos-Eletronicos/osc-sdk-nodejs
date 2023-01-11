import { Matches } from './Matches';
import { Proposals } from './Proposals';

export class Pipeline {
  private id: string;
  private status: string;
  private cpf: number;
  private name: string;
  private dateCreated: string;
  private lastUpdated: string;
  private matches: Matches[];
  private proposals: [Proposals];

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public getCpf(): number {
    return this.cpf;
  }

  public setCpf(cpf: number): void {
    this.cpf = cpf;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getDateCreated(): string {
    return this.dateCreated;
  }

  public setDateCreated(dateCreated: string): void {
    this.dateCreated = dateCreated;
  }

  public getLastUpdated(): string {
    return this.lastUpdated;
  }

  public setLastUpdated(lastUpdated: string): void {
    this.lastUpdated = lastUpdated;
  }

  public getMatches(): Matches[] {
    return this.matches;
  }

  public setMatches(matches: Matches[]): void {
    this.matches = matches;
  }

  public getProposals(): [Proposals] {
    return this.proposals;
  }

  public setProposals(proposals: [Proposals]): void {
    this.proposals = proposals;
  }
}
