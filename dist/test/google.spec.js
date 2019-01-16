"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('This is the first example of protractor', () => {
    it('should have a title', () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('http://www.google.com');
        expect(protractor_1.browser.getTitle()).toEqual('Google');
    });
});
//# sourceMappingURL=google.spec.js.map