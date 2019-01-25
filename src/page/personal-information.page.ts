import { ElementFinder, $, $$, ElementArrayFinder  } from 'protractor';
import { DownloadService } from '../service/download.service';
export class PersonalInformationPage {

  private firstNameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private sexRadioButton: ElementArrayFinder;
  private toolsCheckbox: ElementArrayFinder;
  private experienceRadioButton: ElementArrayFinder;
  private professionCheckbox: ElementArrayFinder;
  private continentSelectOne: ElementArrayFinder;
  private commandsSelectMultiple: ElementArrayFinder;

  private imageInput: ElementFinder;
  private downloadLink: ElementArrayFinder;

  constructor() {
    this.firstNameInput = $('[name="firstname"]');
    this.lastNameInput = $('[name="lastname"]');
    this.sexRadioButton = $$('[name="sex"]');
    this.experienceRadioButton = $$('[name="exp"]');
    this.professionCheckbox = $$('[name="profession"]');
    this.toolsCheckbox = $$('[name="tool"]');
    this.continentSelectOne = $$('#continents option');
    this.commandsSelectMultiple = $$('#selenium_commands option');

    this.imageInput = $('#photo');
    this.downloadLink =
    $$('div.control-group a');
  }

  public async fillForm(data : {
    firstName: string,
    lastName: string,
    sex: string,
    experience: number,
    profession: string[],
    tools: string[],
    continent: string,
    commands: string[],
    file: string,
    downloadFile: boolean}):Promise<void> {

    await this.fillInputs(data.firstName, data.lastName);
    await this.fillRadioButtons(data.sex, data.experience);
    await this.fillCheckBoxes(data.tools, data.profession);
    await this.continentSelectOne.filter(element =>
      element.getText().then(text => text === data.continent)).click();
    await this.commandsSelectMultiple.filter(element =>
      element.getText().then(text =>
        data.commands.some(command => command === text))).click();
    // Upload Image
    const path = require('path');
    const absolutePath = path.resolve(__dirname, data.file);
    await this.imageInput.sendKeys(absolutePath);
    // Download File
    if (data.downloadFile) {
      this.download();
    }
  }

  private download(): void {
    const downloadService:DownloadService = new DownloadService();
    const downloadElement = this.downloadLink.filter((element) => {
      return element.getText().then(text => text === 'Test File to Download');
    }).first();
    downloadElement.getAttribute('href')
    .then(link => downloadService.downloadFile(link, 'archivo.txt'));

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

  public async getValueImage():Promise<string> {
    return await this.imageInput.getAttribute('value');
  }
}
