"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("./helpers/reporter");
exports.config = {
    framework: 'jasmine',
    specs: ['../test/google.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        reporter_1.reporter();
    }
};
//# sourceMappingURL=local.config.js.map