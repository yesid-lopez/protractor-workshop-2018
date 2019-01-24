import { $, browser, ElementFinder, promise } from 'protractor';

export class IFramePage {

  private iframe1:ElementFinder;

  constructor() {
    this.iframe1 = $('#IF1');
  }

  public async switchToFrame(): Promise<void> {
    await browser.switchTo().frame(this.iframe1.getWebElement());
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }

  public async getFormFrameHeight(): Promise<string> {
    return await this.iframe1.getAttribute('height');
  }
}
