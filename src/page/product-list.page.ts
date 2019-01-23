import { ElementFinder, ElementArrayFinder, $$ } from 'protractor';

export class ProductListPage{
  private products: ElementArrayFinder;

  constructor () {
    this.products = $$('.product-container');
  }

  private findByProduct(nameProduct:string): ElementFinder {
    return this.products.filter((element:ElementFinder) =>
      element.$('.product-name').getText().then(
        (text:string) => text === nameProduct
      )
    ).first();
  }

  public async selectProduct(nameProduct:string): Promise<void> {
    const product:ElementFinder = await this.findByProduct(nameProduct);
    await product.$('.ajax_add_to_cart_button').click();

  }

}
