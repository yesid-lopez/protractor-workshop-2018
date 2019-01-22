import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private agreementCheckBox: ElementFinder;
  private checkoutButton: ElementFinder;

  constructor () {
    this.agreementCheckBox = $('#cgv');
    this.checkoutButton = $('button[name="processCarrier"]');
  }

  public async chooseShippingOption(): Promise<void> {
    await this.agreementCheckBox.click();
    await this.checkoutButton.click();
  }
}
