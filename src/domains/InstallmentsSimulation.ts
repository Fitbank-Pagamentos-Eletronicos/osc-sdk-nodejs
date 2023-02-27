import { DetalhamentoDaCET } from './DetalhamentoDaCET';

export class InstallmentsSimulation {
  private xmlnsd5p1: string;
  private conta: string;
  private valorBruto: string;
  private valorSeguro: string;
  private valorDoSeguro: string;
  private valorDaCAD: string;
  private valorDoIOF: string;
  private valorLiquido: string;
  private taxaDeJuros: string;
  private CET: string;
  private CETANUAL: string;
  private dataDeLiberacao: string;
  private dataDeVencimentoInicial: string;
  private dataDeVencimentoFinal: string;
  private numeroDeParcelas: string;
  private totalDeAmortizacao: string;
  private totalDaTaxaDeServico: string;
  private totalDoSeguro: string;
  private totalDaTaxaDeCorrecao: string;
  private totalDeJuros: string;
  private totalDoValorDasParcelas: string;
  private detalhamentoDaCET: DetalhamentoDaCET;

  public getXmlnsd5p1(): string {
    return this.xmlnsd5p1;
  }

  public setXmlnsd5p1(xmlnsd5p1: string): void {
    this.xmlnsd5p1 = xmlnsd5p1;
  }

  public getConta(): string {
    return this.conta;
  }

  public setConta(conta: string): void {
    this.conta = conta;
  }

  public getValorBruto(): string {
    return this.valorBruto;
  }

  public setValorBruto(valorBruto: string): void {
    this.valorBruto = valorBruto;
  }

  public getValorSeguro(): string {
    return this.valorSeguro;
  }

  public setValorSeguro(valorSeguro: string): void {
    this.valorSeguro = valorSeguro;
  }

  public getValorDoSeguro(): string {
    return this.valorDoSeguro;
  }

  public setValorDoSeguro(valorDoSeguro: string): void {
    this.valorDoSeguro = valorDoSeguro;
  }

  public getValorDaCAD(): string {
    return this.valorDaCAD;
  }

  public setValorDaCAD(valorDaCAD: string): void {
    this.valorDaCAD = valorDaCAD;
  }

  public getValorDoIOF(): string {
    return this.valorDoIOF;
  }

  public setValorDoIOF(valorDoIOF: string): void {
    this.valorDoIOF = valorDoIOF;
  }

  public getValorLiquido(): string {
    return this.valorLiquido;
  }

  public setValorLiquido(valorLiquido: string): void {
    this.valorLiquido = valorLiquido;
  }

  public getTaxaDeJuros(): string {
    return this.taxaDeJuros;
  }

  public setTaxaDeJuros(taxaDeJuros: string): void {
    this.taxaDeJuros = taxaDeJuros;
  }

  public getCET(): string {
    return this.CET;
  }

  public setCET(CET: string): void {
    this.CET = CET;
  }

  public getCETANUAL(): string {
    return this.CETANUAL;
  }

  public setCETANUAL(CETANUAL: string): void {
    this.CETANUAL = CETANUAL;
  }

  public getDataDeLiberacao(): string {
    return this.dataDeLiberacao;
  }

  public setDataDeLiberacao(dataDeLiberacao: string): void {
    this.dataDeLiberacao = dataDeLiberacao;
  }

  public getDataDeVencimentoInicial(): string {
    return this.dataDeVencimentoInicial;
  }

  public setDataDeVencimentoInicial(dataDeVencimentoInicial: string): void {
    this.dataDeVencimentoInicial = dataDeVencimentoInicial;
  }

  public getDataDeVencimentoFinal(): string {
    return this.dataDeVencimentoFinal;
  }

  public setDataDeVencimentoFinal(dataDeVencimentoFinal: string): void {
    this.dataDeVencimentoFinal = dataDeVencimentoFinal;
  }

  public getNumeroDeParcelas(): string {
    return this.numeroDeParcelas;
  }

  public setNumeroDeParcelas(numeroDeParcelas: string): void {
    this.numeroDeParcelas = numeroDeParcelas;
  }

  public getTotalDeAmortizacao(): string {
    return this.totalDeAmortizacao;
  }

  public setTotalDeAmortizacao(totalDeAmortizacao: string): void {
    this.totalDeAmortizacao = totalDeAmortizacao;
  }

  public getTotalDaTaxaDeServico(): string {
    return this.totalDaTaxaDeServico;
  }

  public setTotalDaTaxaDeServico(totalDaTaxaDeServico: string): void {
    this.totalDaTaxaDeServico = totalDaTaxaDeServico;
  }

  public getTotalDoSeguro(): string {
    return this.totalDoSeguro;
  }

  public setTotalDoSeguro(totalDoSeguro: string): void {
    this.totalDoSeguro = totalDoSeguro;
  }

  public getTotalDaTaxaDeCorrecao(): string {
    return this.totalDaTaxaDeCorrecao;
  }

  public setTotalDaTaxaDeCorrecao(totalDaTaxaDeCorrecao: string): void {
    this.totalDaTaxaDeCorrecao = totalDaTaxaDeCorrecao;
  }

  public getTotalDeJuros(): string {
    return this.totalDeJuros;
  }

  public setTotalDeJuros(totalDeJuros: string): void {
    this.totalDeJuros = totalDeJuros;
  }

  public getTotalDoValorDasParcelas(): string {
    return this.totalDoValorDasParcelas;
  }

  public setTotalDoValorDasParcelas(totalDoValorDasParcelas: string): void {
    this.totalDoValorDasParcelas = totalDoValorDasParcelas;
  }

  public getDetalhamentoDaCET(): DetalhamentoDaCET {
    return this.detalhamentoDaCET;
  }

  public setDetalhamentoDaCET(detalhamentoDaCET: DetalhamentoDaCET): void {
    this.detalhamentoDaCET = detalhamentoDaCET;
  }
}
