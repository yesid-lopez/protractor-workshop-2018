import { IFramePage } from '../src/page';
import { browser } from 'protractor';

describe('Given a protractor example page', () => {
  beforeAll(async () => {
    await browser.get('https://www.toolsqa.com/iframe-practice-page/');
  });
  describe('When you want to verify the main title', () => {
    beforeAll(async () => {
      const iFramePage = new IFramePage();
      await iFramePage.setFormFrameHeight(250);
    });
    it('Then it should change' , async () => {
      const iFramePage = new IFramePage();
      await expect(iFramePage.getFormFrameHeight()).toBe('250');
    });
  });
  describe('When you want to verify main title', () => {

  });
});
