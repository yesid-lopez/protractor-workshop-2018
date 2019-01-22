import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkoutButton: ElementFinder;
  constructor () {
    this.checkoutButton = $('button[name="processAddress"]');
  }

  public async goToCheckoutButton(): Promise<void> {
    await this.checkoutButton.click();
  }
}
