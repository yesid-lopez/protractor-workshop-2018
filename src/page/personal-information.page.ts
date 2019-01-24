import { ElementFinder, $, $$, ElementArrayFinder  } from 'protractor';

export class PersonalInformationPage {

  private firstNameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private sexRadioButton: ElementArrayFinder;
  private toolsCheckbox: ElementArrayFinder;
  private experienceRadioButton: ElementArrayFinder;
  private professionCheckbox: ElementArrayFinder;
  private continentSelectOne: ElementArrayFinder;
  private commandsSelectMultiple: ElementArrayFinder;

  private buttonButton:ElementFinder;
  private confirmationText:ElementFinder;

  constructor() {
    this.firstNameInput = $('[name="firstname"]');
    this.lastNameInput = $('[name="lastname"]');
    this.sexRadioButton = $$('[name="sex"]');
    this.experienceRadioButton = $$('[name="exp"]');
    this.professionCheckbox = $$('[name="profession"]');
    this.toolsCheckbox = $$('[name="tool"]');
    this.continentSelectOne = $$('#continents option');
    this.commandsSelectMultiple = $$('#selenium_commands option');
    this.buttonButton = $('#submit');
  }

  public async fillForm(data : {
    firstName: string,
    lastName: string,
    sex: string,
    experience: number,
    profession: string[],
    tools: string[],
    continent: string,
    commands: string[] }):Promise<void> {
    await this.fillInputs(data.firstName, data.lastName);
    await this.fillRadioButtons(data.sex, data.experience);
    await this.fillCheckBoxes(data.tools, data.profession);
    await this.continentSelectOne.filter(element =>
      element.getText().then(text => text === data.continent)).click();
    await this.commandsSelectMultiple.filter(element =>
      element.getText().then(text =>
        data.commands.some(command => command === text))).click();
    await this.buttonButton.click();
  }
  private async fillCheckBoxes(tools:string[], professions:string[]):Promise<void> {
    await this.toolsCheckbox.filter(element =>
      element.getAttribute('value').then(
        name => tools.some(tool => tool === name))).click();

    await this.professionCheckbox.filter(element =>
      element.getAttribute('value').then(
        name => professions.some(profession => profession === name))).click();
  }

  private async fillRadioButtons(sex:string, experience:number):Promise<void> {
    await this.sexRadioButton.filter(element =>
      element.getAttribute('value').then(name => name === sex)
      ).first().click();
    await this.experienceRadioButton.filter(element =>
      element.getAttribute('value').then(name => Number(name) === experience)
      ).first().click();
  }

  private async fillInputs(firstName:string, lastName:string):Promise<void> {
    await this.firstNameInput.sendKeys(firstName);
    await this.lastNameInput.sendKeys(lastName);
  }

  public async getConfirmationText():Promise<string> {
    this.confirmationText = $('.wpb_wrapper h1');
    return await this.confirmationText.getText();
  }

}
