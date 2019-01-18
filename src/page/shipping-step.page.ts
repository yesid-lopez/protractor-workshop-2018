import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private agreementCheckBox: ElementFinder;
  private checkoutButton: ElementFinder;

  constructor () {
    this.agreementCheckBox = $('#cgv');
    this.checkoutButton = $('#form > p > button > span');
  }

  public async checkAgreement(): Promise<void> {
    await this.agreementCheckBox.click();
  }

  public async goToCheckoutButton(): Promise<void> {
    await this.checkoutButton.click();
  }
}
