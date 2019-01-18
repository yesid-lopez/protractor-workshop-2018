import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmationLabel: ElementFinder;
  constructor () {
    this.confirmationLabel = $('#center_column > div > p > strong');
  }

  public async getConfirmationLabelText(): Promise<string> {
    return await this.confirmationLabel.getText();
  }
}
