export class DetalhamentoDaCET {
  private _porcentagemDeJuros: string;
  private _PorcentagemDeImpostos: string;
  private _PorcentagemDeTarifas: string;
  private _PorcentagemDeServicos: string;

  public get porcentagemDeJuros(): string {
    return this._porcentagemDeJuros;
  }

  public set porcentagemDeJuros(porcentagemDeJuros: string) {
    this._porcentagemDeJuros = porcentagemDeJuros;
  }

  public get PorcentagemDeImpostos(): string {
    return this._PorcentagemDeImpostos;
  }

  public set PorcentagemDeImpostos(PorcentagemDeImpostos: string) {
    this._PorcentagemDeImpostos = PorcentagemDeImpostos;
  }

  public get PorcentagemDeTarifas(): string {
    return this._PorcentagemDeTarifas;
  }

  public set PorcentagemDeTarifas(PorcentagemDeTarifas: string) {
    this._PorcentagemDeTarifas = PorcentagemDeTarifas;
  }

  public get PorcentagemDeServicos(): string {
    return this._PorcentagemDeServicos;
  }

  public set PorcentagemDeServicos(PorcentagemDeServicos: string) {
    this._PorcentagemDeServicos = PorcentagemDeServicos;
  }
}
