export class Banks {
  public code: string;
  public desc: string;
  public static readonly B001 = new Banks("001", "Banco do Brasil");
  public static readonly B450 = new Banks("450", "Fitbank");
  private constructor(code: string, desc: string) {
    this.code = code;
    this.desc = desc;
  }
  public toString(): string {
    return this.code;
  }
}
// console.log(Banks.B001);
// console.log(Banks.B001.code);
// console.log(Banks.B001.desc);
