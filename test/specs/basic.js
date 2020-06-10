
const URL = 'https://likejean.github.io/homework-5/';

describe('Test RFL', () => {

    before('App URL', () => {
        browser.url(URL);
    });

    it('Verify that the header "Counters" is present', () => {
        const actualHeader = $('h1').getText();
        const expected = 'Counters';
        expect(actualHeader).toEqual(expected);
    });







    // it('should Verify that RFL accepts 1', () => {
    //     browser.url('https://likejean.github.io/homework-5/');
    //     const rfl = $('//button[@name="positive"]');
    //     rfl.click();
    //     const rflValue = $('//input[@name="upper"]');
    //     rflValue.setValue('1');
    //     const buttonActual = $('//button[@step="1"]').getText();
    //     expect(buttonActual).toEqual('1');
    // });
    //
    //
    // it('should Verify that RFL accepts 9', () => {
    //     browser.url('https://likejean.github.io/homework-5/');
    //     const rfl = $('//button[@name="positive"]');
    //     rfl.click();
    //     const rflValue = $('//input[@name="upper"]');
    //     rflValue.setValue('9');
    //     const buttonActual = $('//button[@step="9"]').getText();
    //     expect(buttonActual).toEqual('9');
    // });

    // it('should Verify that RFL does not accept "e" ', () => {
    //     browser.url('https://likejean.github.io/homework-5/');
    //     const rfl = $('//button[@name="positive"]');
    //     rfl.click();
    //     const rflValue = $('//input[@name="upper"]');
    //     rflValue.setValue('e');
    //     const alertActual = $('//div[@role="alert"]//span').getValue();
    //     expect(alertActual).toEqual("ERROR: Input must be an INTEGER")
    // });

    // it('should Verify that RFL does not accept "$" ', () => {
    //     browser.url('https://likejean.github.io/homework-5/');
    //     const rfl = $('//button[@name="positive"]');
    //     rfl.click();
    //     const rflValue = $('//input[@name="upper"]');
    //     rflValue.setValue('$');
    //     const alertActual = $('//div[@role="alert"]//span').getText();
    //     expect(alertActual).toEqual("ERROR: Input must be an INTEGER")
    // });
});