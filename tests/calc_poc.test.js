Feature('Poc automação mobile com CodeceptJS');
const allure = codeceptjs.container.plugins('allure');

describe('Automação mobile com CodeceptJS', () => {

    Scenario('teste soma simples', async ({ I, calculatorPage }) => {
        let screenshot = await I.saveScreenshot('image.png')
        allure.addAttachment('screenshot: ', screenshot, 'image/png')
        calculatorPage.sum(1, 2)
        calculatorPage.getResult(3)
        screenshot = await I.saveScreenshot('image.png')
        allure.addAttachment('screenshot2: ', screenshot, 'image/png')

    }).tag('@regressivo').tag('@sucesso').tag("diferent")

    Scenario('teste soma simples 2', ({ I, calculatorPage }) => {
        I.saveScreenshot('image.png')
        calculatorPage.sum(9, 8)
        calculatorPage.getResult(17)
        I.saveScreenshot('image2.png')

    }).tag('@regressivo').tag('@sucesso')

    Scenario('teste multiplicação simples', ({ I, calculatorPage }) => {
        I.saveScreenshot('image.png')
        calculatorPage.mult(9, 8)
        calculatorPage.getResult(72)
        I.saveScreenshot('image2.png')

    }).tag('@regressivo').tag('@sucesso')

    Scenario('teste subtração simples', ({ I, calculatorPage }) => {
        I.saveScreenshot('image.png')
        calculatorPage.sub(9, 8)
        calculatorPage.getResult(1)
        I.saveScreenshot('image2.png')

    }).tag('@regressivo').tag('@sucesso')

    Scenario('teste subtração - forçando falha', ({ I, calculatorPage }) => {
        I.saveScreenshot('image.png')
        calculatorPage.sub(9, 9)
        calculatorPage.getResult(1)
        I.saveScreenshot('image2.png')

    }).tag('@regressivo').tag('@falha')

})



