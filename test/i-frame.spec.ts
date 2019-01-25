import { IFramePage } from '../src/page';
import { browser } from 'protractor';

describe('Given a protractor example page', () => {
  beforeAll(async () => {
    await browser.get('https://www.toolsqa.com/iframe-practice-page/');
  });
  describe('When you want to motify the Frame height', () => {
    beforeAll(async () => {
      const iFramePage = new IFramePage();
      await iFramePage.setFormFrameHeight(250);
    });
    it('Then it should change' , async () => {
      const iFramePage = new IFramePage();
      await expect(iFramePage.getFormFrameHeight()).toBe('250');
    });
  });
  describe('When you want to verify the main title', () => {
    it('then you should get IFrame practice page', async () => {
      const iFramePage = new IFramePage();
      await expect(iFramePage.getTitleMainFrame()).toBe('IFrame practice page');
    });
  });
  describe('When you move into the iFrame1', () => {
    beforeAll(async () => {
      const iFramePage = new IFramePage();
      await iFramePage.switchToFrame();
    });
    describe('And you want to verify the title', () => {
      it('Then you should get Automation Practice Form', async () => {
        const iFramePage = new IFramePage();
        await expect(iFramePage.getTitleMainFrame()).toBe('Automation Practice Form');
      });
    });
    describe('And you go back to the main frame', () => {
      beforeAll(async () => {
        const iFramePage = new IFramePage();
        await iFramePage.switchToMainPage();
      });
      describe('And you want to verify the title', () => {
        it('Then you should get IFrame practice page', async () => {
          const iFramePage = new IFramePage();
          await expect(iFramePage.getTitleMainFrame()).toBe('IFrame practice page');
        });
      });
    });
  });
});
