import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given an automation practice form', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });
  describe('When you want to fill a personal information form', () => {
    beforeAll(async () => {
      const personalInformationPage = new PersonalInformationPage();
      await personalInformationPage.fillForm({
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
          'WebElement Commands']
      });
    });
    it('then you sould send the information', async () => {
      const personalInformationPage = new PersonalInformationPage();
      expect(personalInformationPage.getConfirmationText()).toBe('Practice Automation Form');
    });
  });
});
