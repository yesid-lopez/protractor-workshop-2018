import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { DownloadService } from '../src/service';

const userWithDownload = {
  firstName: 'Alejandro',
  lastName: 'Perdomo',
  sex: 'Male',
  experience: 7,
  profession: ['Automation Tester'],
  tools: ['Selenium Webdriver'],
  continent: 'South America',
  commands: [
    'Browser Commands',
    'Navigation Commands',
    'Switch Commands',
    'Wait Commands',
    'WebElement Commands'],
  file: '../../../resources/image.png',
  downloadFile: true
};
const userWithoutDownload = {
  firstName: 'Alejandro',
  lastName: 'Perdomo',
  sex: 'Male',
  experience: 7,
  profession: ['Automation Tester'],
  tools: ['Selenium Webdriver'],
  continent: 'South America',
  commands: [
    'Browser Commands',
    'Navigation Commands',
    'Switch Commands',
    'Wait Commands',
    'WebElement Commands'],
  file: '../../../resources/image.png',
  downloadFile: true
};

describe('Given an automation practice form', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });
  describe('When you want to fill a personal information form without download nothing', () => {
    beforeAll(async () => {
      const personalInformationPage = new PersonalInformationPage();
      await personalInformationPage.fillForm(userWithoutDownload);
    });
    it('Then the image should be uploaded', async () => {
      const personalInformationPage = new PersonalInformationPage();
      await expect(personalInformationPage.getValueImage()).toBeDefined();
    });
  });
  describe('When you want to fill a personal information form and download something', () => {
    beforeAll(async () => {
      const personalInformationPage = new PersonalInformationPage();
      await personalInformationPage.fillForm(userWithDownload);
    });
    it('Then the file should be downloaded', async () => {
      const downloadService = new DownloadService();
      const file = await downloadService.readFileFromTemp('archivo.txt');
      expect(file.byteLength).toBeGreaterThanOrEqual(8000);
    });
  });
});
