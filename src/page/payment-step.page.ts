import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankButton: ElementFinder;
  constructor () {
    this.payByBankButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToPayByBankButton(): Promise<void> {
    await this.payByBankButton.click();
  }
}
