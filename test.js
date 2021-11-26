const { defaulf: AllureReporter } = require('@wdio/allure-reporter');

describe('test', () => {
    it('should test', async () => {
        await browser.url('https://github.com/');
    });
})