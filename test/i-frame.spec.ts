import { IFramePage } from '../src/page';
import { browser } from 'protractor';

describe('Given a protractor example page', () => {
  beforeAll(async () => {
    await browser.get('https://www.toolsqa.com/iframe-practice-page/');
  });
  it('Then should change the frame', async () => {
    const iFramePage = new IFramePage();
    await iFramePage.setFormFrameHeight(250);
    await expect(iFramePage.getFormFrameHeight()).toBe('250');
  });
});
