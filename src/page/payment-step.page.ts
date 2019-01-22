import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankButton: ElementFinder;
  constructor () {
    this.payByBankButton = $('#HOOK_PAYMENT a[title="Pay by bank wire"]');
  }

  public async goToPayByBankButton(): Promise<void> {
    await this.payByBankButton.click();
  }
}
