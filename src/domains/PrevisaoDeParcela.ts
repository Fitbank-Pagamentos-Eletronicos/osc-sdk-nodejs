export class PrevisaoDeParcela {
  private numeroDaParcela: string;
  private dataDeVencimento: string;
  private valorDaAmortizacao: string;
  private valorDaCorrecao: string;
  private valorDoJuros: string;
  private valorDoSeguro: string;
  private valorTaxaBancaria: string;
  private valorDaPrestacao: string;
  private valorDoSaldoAnterior: string;
  private valorDoJurosCapitalizados: string;
  private valorDoSaldoAtual: string;

  public getNumeroDaParcela(): string {
    return this.numeroDaParcela;
  }

  public setNumeroDaParcela(numeroDaParcela: string): void {
    this.numeroDaParcela = numeroDaParcela;
  }

  public getDataDeVencimento(): string {
    return this.dataDeVencimento;
  }

  public setDataDeVencimento(dataDeVencimento: string): void {
    this.dataDeVencimento = dataDeVencimento;
  }

  public getValorDaAmortizacao(): string {
    return this.valorDaAmortizacao;
  }

  public setValorDaAmortizacao(valorDaAmortizacao: string): void {
    this.valorDaAmortizacao = valorDaAmortizacao;
  }

  public getValorDaCorrecao(): string {
    return this.valorDaCorrecao;
  }

  public setValorDaCorrecao(valorDaCorrecao: string): void {
    this.valorDaCorrecao = valorDaCorrecao;
  }

  public getValorDoJuros(): string {
    return this.valorDoJuros;
  }

  public setValorDoJuros(valorDoJuros: string): void {
    this.valorDoJuros = valorDoJuros;
  }

  public getValorDoSeguro(): string {
    return this.valorDoSeguro;
  }

  public setValorDoSeguro(valorDoSeguro: string): void {
    this.valorDoSeguro = valorDoSeguro;
  }

  public getValorTaxaBancaria(): string {
    return this.valorTaxaBancaria;
  }

  public setValorTaxaBancaria(valorTaxaBancaria: string): void {
    this.valorTaxaBancaria = valorTaxaBancaria;
  }

  public getValorDaPrestacao(): string {
    return this.valorDaPrestacao;
  }

  public setValorDaPrestacao(valorDaPrestacao: string): void {
    this.valorDaPrestacao = valorDaPrestacao;
  }

  public getValorDoSaldoAnterior(): string {
    return this.valorDoSaldoAnterior;
  }

  public setValorDoSaldoAnterior(valorDoSaldoAnterior: string): void {
    this.valorDoSaldoAnterior = valorDoSaldoAnterior;
  }

  public getValorDoJurosCapitalizados(): string {
    return this.valorDoJurosCapitalizados;
  }

  public setValorDoJurosCapitalizados(valorDoJurosCapitalizados: string): void {
    this.valorDoJurosCapitalizados = valorDoJurosCapitalizados;
  }

  public getValorDoSaldoAtual(): string {
    return this.valorDoSaldoAtual;
  }

  public setValorDoSaldoAtual(valorDoSaldoAtual: string): void {
    this.valorDoSaldoAtual = valorDoSaldoAtual;
  }
}
