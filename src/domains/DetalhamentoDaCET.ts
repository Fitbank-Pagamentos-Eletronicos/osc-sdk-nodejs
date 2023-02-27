export class DetalhamentoDaCET {
  private porcentagemDeJuros: string;
  private PorcentagemDeImpostos: string;
  private PorcentagemDeTarifas: string;
  private PorcentagemDeServicos: string;

  public getPorcentagemDeJuros(): string {
    return this.porcentagemDeJuros;
  }

  public setPorcentagemDeJuros(porcentagemDeJuros: string): void {
    this.porcentagemDeJuros = porcentagemDeJuros;
  }

  public getPorcentagemDeImpostos(): string {
    return this.PorcentagemDeImpostos;
  }

  public setPorcentagemDeImpostos(PorcentagemDeImpostos: string): void {
    this.PorcentagemDeImpostos = PorcentagemDeImpostos;
  }

  public getPorcentagemDeTarifas(): string {
    return this.PorcentagemDeTarifas;
  }

  public setPorcentagemDeTarifas(PorcentagemDeTarifas: string): void {
    this.PorcentagemDeTarifas = PorcentagemDeTarifas;
  }

  public getPorcentagemDeServicos(): string {
    return this.PorcentagemDeServicos;
  }

  public setPorcentagemDeServicos(PorcentagemDeServicos: string): void {
    this.PorcentagemDeServicos = PorcentagemDeServicos;
  }
}
