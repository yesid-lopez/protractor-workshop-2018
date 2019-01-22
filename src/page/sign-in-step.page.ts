import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private loginButton: ElementFinder;
  private emailInput: ElementFinder;
  private psswdInput: ElementFinder;

  constructor() {
    this.emailInput = $('#email');
    this.psswdInput = $('#passwd');
    this.loginButton = $('#SubmitLogin');
  }

  public async login(email, psswd): Promise <void> {
    await this.emailInput.sendKeys(email);
    await this.psswdInput.sendKeys(psswd);
    await this.loginButton.click();
  }

}
