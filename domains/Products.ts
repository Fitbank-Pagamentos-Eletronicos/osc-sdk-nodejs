import { ProductLoan } from "./ProductLoan";
import { ProductCard } from "./ProductCard";
import { ProductAuto } from "./ProductAuto";
import { ProductHome } from "./ProductHome";

export class Products {
  private _productLoan: ProductLoan;
  private _productCard: ProductCard;
  private _productAuto: ProductAuto;
  private _productHome: ProductHome;

  get productLoan() {
    return this._productLoan;
  }

  get productCard() {
    return this._productCard;
  }

  get productAuto() {
    return this._productAuto;
  }

  get productHome() {
    return this._productHome;
  }

  set productLoan(productLoan: ProductLoan) {
    this._productLoan = productLoan;
  }

  set productCard(productCard: ProductCard) {
    this._productCard = productCard;
  }

  set productAuto(productAuto: ProductAuto) {
    this._productAuto = productAuto;
  }

  set productHome(productHome: ProductHome) {
    this._productHome = productHome;
  }
}
