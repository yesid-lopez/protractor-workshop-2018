import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

const user = {
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
  file: '../../../resources/image.png'
};

describe('Given an automation practice form', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });
  describe('When you want to fill a personal information form', () => {
    beforeAll(async () => {
      const personalInformationPage = new PersonalInformationPage();
      await personalInformationPage.fillForm(user);
    });
    it('Then the image should be uploaded', async () => {
      const personalInformationPage = new PersonalInformationPage();
      await expect(personalInformationPage.getValueImage()).toBeDefined();
    });
  });
});
