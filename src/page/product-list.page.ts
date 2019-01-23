import { $, ElementFinder } from 'protractor';

export class ProductListPage{
  private addToCarButton : ElementFinder;

  constructor () {
    this.addToCarButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToCardButton(): Promise<void> {
    await this.addToCarButton.click();
  }

}
