import { IFramePage } from '../src/page';
import { browser } from 'protractor';

describe('Given a protractor example page', () => {
  beforeAll(async () => {
    await browser.get('https://www.toolsqa.com/iframe-practice-page/');
  });
  describe('When you want to change the frame height', () => {
    beforeAll(async () => {
      const iFramePage = new IFramePage();
      await iFramePage.setFormFrameHeight(250);
    });
    it('Then it should change' , async () => {
      const iFramePage = new IFramePage();
      await expect(iFramePage.getFormFrameHeight()).toBe('250');
    });
  });
});
