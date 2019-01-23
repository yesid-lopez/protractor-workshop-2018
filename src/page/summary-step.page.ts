import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private checkoutButton: ElementFinder;
  constructor() {
    this.checkoutButton = $('.cart_navigation span');
  }
  public async goToCheckoutButton(): Promise <void> {
    await this.checkoutButton.click();
  }
}
