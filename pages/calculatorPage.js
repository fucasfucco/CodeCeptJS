// enable I and another page object
const { I } = inject();

module.exports = {

    // setting locators
    digit: '#com.google.android.calculator:id/digit_',
    result: '#com.google.android.calculator:id/result_final',
    plus: '~plus',
    multiply: '~multiply',
    minus: '~minus',
    equals: '~equals',

    // introducing methods
    sum(n1, n2) {
        I.tap({ android: `${this.digit}${n1}`, ios: 'exemplo de seletor ios' });
        I.tap('~plus');
        I.tap({ android: `${this.digit}${n2}` });
        I.tap('~equals');
    },

    sub(n1, n2) {
        I.tap({ android: `${this.digit}${n1}`, ios: 'exemplo de seletor ios' });
        I.tap('~minus');
        I.tap({ android: `${this.digit}${n2}` });
        I.tap('~equals');
    },

    mult(n1, n2) {
        I.tap({ android: `${this.digit}${n1}`, ios: 'exemplo de seletor ios' });
        I.tap('~multiply');
        I.tap({ android: `${this.digit}${n2}` });
        I.tap('~equals');
    },

    async getResult(text) {
        //valida texto dentro de elemento com esse locator
        await I.see(text, this.result)
    }

}