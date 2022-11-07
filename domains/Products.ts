import { ProductLoan } from "./ProductLoan";
import { ProductCard } from "./ProductCard";
import { ProductAuto } from "./ProductAuto";
import { ProductHome } from "./ProductHome";

export class Products {
  private _productLoan: ProductLoan;
  private _productCard: ProductCard;
  private _productAuto: ProductAuto;
  private _productHome: ProductHome;

  public get productLoan(): ProductLoan {
    return this._productLoan;
  }

  public set productLoan(productLoan: ProductLoan) {
    this._productLoan = productLoan;
  }

  public get productCard(): ProductCard {
    return this._productCard;
  }

  public set productCard(productCard: ProductCard) {
    this._productCard = productCard;
  }

  public get productAuto(): ProductAuto {
    return this._productAuto;
  }

  public set productAuto(productAuto: ProductAuto) {
    this._productAuto = productAuto;
  }

  public get productHome(): ProductHome {
    return this._productHome;
  }

  public set productHome(productHome: ProductHome) {
    this._productHome = productHome;
  }
}
