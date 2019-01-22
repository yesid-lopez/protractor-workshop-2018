import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';
export class ProductAddedModalPage {
  private proceedToCheckoutButton: ElementFinder;
  constructor () {
    this.proceedToCheckoutButton = $('#layer_cart a[title="Proceed to checkout"]');
  }
  public async goToCheckoutButton(): Promise <void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton));
    await this.proceedToCheckoutButton.click();
  }
}
