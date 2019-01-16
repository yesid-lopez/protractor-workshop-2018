"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Given a SDET learning protractor', () => {
    describe('when open Google Page', () => {
        beforeEach(() => {
            protractor_1.browser.get('http://www.google.com');
        });
        it('then should have a title', () => {
            expect(protractor_1.browser.getTitle()).toEqual('Google');
        });
    });
});
//# sourceMappingURL=google.spec.js.map