import { $, ElementFinder } from 'protractor';

export class ProductListPage{
  private addToCarButton : ElementFinder;

  constructor () {
    this.addToCarButton = $('#center_column a[title="Add to cart"]');
  }

  public async goToCardButton(): Promise<void> {
    await this.addToCarButton.click();
  }

}
