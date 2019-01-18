import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private loginButton: ElementFinder;
  private emailInput: ElementFinder;
  private psswdInput: ElementFinder;

  constructor() {
    this.emailInput = $('#email');
    this.psswdInput = $('#passwd');
    this.loginButton = $('#SubmitLogin > span');
  }

  public async fillEmail(email): Promise <void> {
    await this.emailInput.sendKeys(email);
  }

  public async fillPasswd(psswd): Promise<void> {
    await this.psswdInput.sendKeys(psswd);
  }

  public async goToLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

}
