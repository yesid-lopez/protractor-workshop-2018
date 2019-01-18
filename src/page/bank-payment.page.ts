import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmationButton: ElementFinder;
  constructor () {
    this.confirmationButton = $('#cart_navigation > button > span');
  }

  public async goToConfirmationButton(): Promise<void> {
    await this.confirmationButton.click();
  }
}
