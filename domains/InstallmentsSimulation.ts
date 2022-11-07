import { PrevisaoDeParcela } from "./PrevisaoDeParcela";
import { DetalhamentoDaCET } from "./DetalhamentoDaCET";

export class InstallmentsSimulation {
  private _xmlnsd5p1: string;
  private _conta: string;
  private _valorBruto: string;
  private _valorSeguro: string;
  private _valorDoSeguro: string;
  private _valorDaCAD: string;
  private _valorDoIOF: string;
  private _valorLiquido: string;
  private _taxaDeJuros: string;
  private _CET: string;
  private _CET_ANUAL: string;
  private _dataDeLiberacao: string;
  private _dataDeVencimentoInicial: string;
  private _dataDeVencimentoFinal: string;
  private _numeroDeParcelas: string;
  private _parcelas: PrevisaoDeParcela;
  private _totalDeAmortizacao: string;
  private _totalDaTaxaDeServico: string;
  private _totalDoSeguro: string;
  private _totalDaTaxaDeCorrecao: string;
  private _totalDeJuros: string;
  private _totalDoValorDasParcelas: string;
  private _detalhamentoDaCET: DetalhamentoDaCET;

  public get xmlnsd5p1(): string {
    return this._xmlnsd5p1;
  }

  public set xmlnsd5p1(xmlnsd5p1: string) {
    this._xmlnsd5p1 = xmlnsd5p1;
  }

  public get conta(): string {
    return this._conta;
  }

  public set conta(conta: string) {
    this._conta = conta;
  }

  public get valorBruto(): string {
    return this._valorBruto;
  }

  public set valorBruto(valorBruto: string) {
    this._valorBruto = valorBruto;
  }

  public get valorSeguro(): string {
    return this._valorSeguro;
  }

  public set valorSeguro(valorSeguro: string) {
    this._valorSeguro = valorSeguro;
  }

  public get valorDoSeguro(): string {
    return this._valorDoSeguro;
  }

  public set valorDoSeguro(valorDoSeguro: string) {
    this._valorDoSeguro = valorDoSeguro;
  }

  public get valorDaCAD(): string {
    return this._valorDaCAD;
  }

  public set valorDaCAD(valorDaCAD: string) {
    this._valorDaCAD = valorDaCAD;
  }

  public get valorDoIOF(): string {
    return this._valorDoIOF;
  }

  public set valorDoIOF(valorDoIOF: string) {
    this._valorDoIOF = valorDoIOF;
  }

  public get valorLiquido(): string {
    return this._valorLiquido;
  }

  public set valorLiquido(valorLiquido: string) {
    this._valorLiquido = valorLiquido;
  }

  public get taxaDeJuros(): string {
    return this._taxaDeJuros;
  }

  public set taxaDeJuros(taxaDeJuros: string) {
    this._taxaDeJuros = taxaDeJuros;
  }

  public get CET(): string {
    return this._CET;
  }

  public set CET(CET: string) {
    this._CET = CET;
  }

  public get CET_ANUAL(): string {
    return this._CET_ANUAL;
  }

  public set CET_ANUAL(CET_ANUAL: string) {
    this._CET_ANUAL = CET_ANUAL;
  }

  public get dataDeLiberacao(): string {
    return this._dataDeLiberacao;
  }

  public set dataDeLiberacao(dataDeLiberacao: string) {
    this._dataDeLiberacao = dataDeLiberacao;
  }

  public get dataDeVencimentoInicial(): string {
    return this._dataDeVencimentoInicial;
  }

  public set dataDeVencimentoInicial(dataDeVencimentoInicial: string) {
    this._dataDeVencimentoInicial = dataDeVencimentoInicial;
  }

  public get dataDeVencimentoFinal(): string {
    return this._dataDeVencimentoFinal;
  }

  public set dataDeVencimentoFinal(dataDeVencimentoFinal: string) {
    this._dataDeVencimentoFinal = dataDeVencimentoFinal;
  }

  public get numeroDeParcelas(): string {
    return this._numeroDeParcelas;
  }

  public set numeroDeParcelas(numeroDeParcelas: string) {
    this._numeroDeParcelas = numeroDeParcelas;
  }

  public get parcelas(): PrevisaoDeParcela {
    return this._parcelas;
  }

  public set parcelas(parcelas: PrevisaoDeParcela) {
    this._parcelas = parcelas;
  }

  public get totalDeAmortizacao(): string {
    return this._totalDeAmortizacao;
  }

  public set totalDeAmortizacao(totalDeAmortizacao: string) {
    this._totalDeAmortizacao = totalDeAmortizacao;
  }

  public get totalDaTaxaDeServico(): string {
    return this._totalDaTaxaDeServico;
  }

  public set totalDaTaxaDeServico(totalDaTaxaDeServico: string) {
    this._totalDaTaxaDeServico = totalDaTaxaDeServico;
  }

  public get totalDoSeguro(): string {
    return this._totalDoSeguro;
  }

  public set totalDoSeguro(totalDoSeguro: string) {
    this._totalDoSeguro = totalDoSeguro;
  }

  public get totalDaTaxaDeCorrecao(): string {
    return this._totalDaTaxaDeCorrecao;
  }

  public set totalDaTaxaDeCorrecao(totalDaTaxaDeCorrecao: string) {
    this._totalDaTaxaDeCorrecao = totalDaTaxaDeCorrecao;
  }

  public get totalDeJuros(): string {
    return this._totalDeJuros;
  }

  public set totalDeJuros(totalDeJuros: string) {
    this._totalDeJuros = totalDeJuros;
  }

  public get totalDoValorDasParcelas(): string {
    return this._totalDoValorDasParcelas;
  }

  public set totalDoValorDasParcelas(totalDoValorDasParcelas: string) {
    this._totalDoValorDasParcelas = totalDoValorDasParcelas;
  }

  public get detalhamentoDaCET(): DetalhamentoDaCET {
    return this._detalhamentoDaCET;
  }

  public set detalhamentoDaCET(detalhamentoDaCET: DetalhamentoDaCET) {
    this._detalhamentoDaCET = detalhamentoDaCET;
  }
}
