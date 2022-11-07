export class PrevisaoDeParcela {
  private _numeroDaParcela: string;
  private _dataDeVencimento: string;
  private _valorDaAmortizacao: string;
  private _valorDaCorrecao: string;
  private _valorDoJuros: string;
  private _valorDoSeguro: string;
  private _valorTaxaBancaria: string;
  private _valorDaPrestacao: string;
  private _valorDoSaldoAnterior: string;
  private _valorDoJurosCapitalizados: string;
  private _valorDoSaldoAtual: string;

  public get numeroDaParcela(): string {
    return this._numeroDaParcela;
  }

  public set numeroDaParcela(numeroDaParcela: string) {
    this._numeroDaParcela = numeroDaParcela;
  }

  public get dataDeVencimento(): string {
    return this._dataDeVencimento;
  }

  public set dataDeVencimento(dataDeVencimento: string) {
    this._dataDeVencimento = dataDeVencimento;
  }

  public get valorDaAmortizacao(): string {
    return this._valorDaAmortizacao;
  }

  public set valorDaAmortizacao(valorDaAmortizacao: string) {
    this._valorDaAmortizacao = valorDaAmortizacao;
  }

  public get valorDaCorrecao(): string {
    return this._valorDaCorrecao;
  }

  public set valorDaCorrecao(valorDaCorrecao: string) {
    this._valorDaCorrecao = valorDaCorrecao;
  }

  public get valorDoJuros(): string {
    return this._valorDoJuros;
  }

  public set valorDoJuros(valorDoJuros: string) {
    this._valorDoJuros = valorDoJuros;
  }

  public get valorDoSeguro(): string {
    return this._valorDoSeguro;
  }

  public set valorDoSeguro(valorDoSeguro: string) {
    this._valorDoSeguro = valorDoSeguro;
  }

  public get valorTaxaBancaria(): string {
    return this._valorTaxaBancaria;
  }

  public set valorTaxaBancaria(valorTaxaBancaria: string) {
    this._valorTaxaBancaria = valorTaxaBancaria;
  }

  public get valorDaPrestacao(): string {
    return this._valorDaPrestacao;
  }

  public set valorDaPrestacao(valorDaPrestacao: string) {
    this._valorDaPrestacao = valorDaPrestacao;
  }

  public get valorDoSaldoAnterior(): string {
    return this._valorDoSaldoAnterior;
  }

  public set valorDoSaldoAnterior(valorDoSaldoAnterior: string) {
    this._valorDoSaldoAnterior = valorDoSaldoAnterior;
  }

  public get valorDoJurosCapitalizados(): string {
    return this._valorDoJurosCapitalizados;
  }

  public set valorDoJurosCapitalizados(valorDoJurosCapitalizados: string) {
    this._valorDoJurosCapitalizados = valorDoJurosCapitalizados;
  }

  public get valorDoSaldoAtual(): string {
    return this._valorDoSaldoAtual;
  }

  public set valorDoSaldoAtual(valorDoSaldoAtual: string) {
    this._valorDoSaldoAtual = valorDoSaldoAtual;
  }
}
