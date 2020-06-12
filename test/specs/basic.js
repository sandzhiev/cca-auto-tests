
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

    it('Verify that the Total result "Total " is present', () => {
        const actualHeader = $('h3[class="total-count"]').getText();
        const expected = /Total:\s\d+/;
        expected.test(actualHeader);
    });

    it('Verify that the Total result initially is "0"', () => {
        const actual = $('h3[class="total-count"]').getText();
        const expected = 'Total: 0';
        expect(actual).toEqual(expected);
    });

    it('Verify that the Counter name "1.Default Counter" is present', () => {
        const actual = $('//div/div/div/div//h3').getText();
        const expected = '1. Default Counter';
        expect(actual).toEqual(expected);
    });

    it('Verify that "Count value" is present', () => {
        const countValue = $('//span[@data-test="badge"]');
        const isPresent = countValue.isExisting();
        const expected = true;
        expect(isPresent).toEqual(expected);
    });

    it('Verify that "Count value" initially is "0"', () => {
        const actual = $('//span[@data-test="badge"]').getText();
        const expected = '0';
        expect(actual).toEqual(expected);
    });

    it('Verify that the Left Limit Field is present', () => {
        const lfl = $('//button[@name="negative"]');
        const isPresent = lfl.isExisting();
        const expected = true;
        expect(isPresent).toEqual(expected);
    });

    it('Verify that text in the LLF field "Change step options ?" is present', () => {
        const actual = $('//button[@name="negative"]').getText();
        const expected = 'CHANGE STEP OPTIONS?';
        expect(actual).toEqual(expected);
    });

    it('Verify that by clicking on the LLF The text "Change Step Options ? " disappeared', () => {
        const llf = $('//button[@name="negative"]');
        llf.click();
        const actualText = $('//button[@name="negative"]').getText();
        const expected = 'X';
        expect(actualText).toEqual(expected);
    });

    it('Verify that by clicking on the LLF The number by default "1" is show up', () => {
        const actualInputFieldValue = $('//input[@name="lower"]').getValue();
        const expected = '1';
        expect(actualInputFieldValue).toEqual(expected);
    });

    it('Verify that the Right Limit Field is present ', () => {
        const rfl = $('//button[@name="positive"]');
        const isPresent = rfl.isExisting();
        const expected = true;
        expect(isPresent).toEqual(expected);
    });

    it('Verify that text in the RLF field "Change step options ?" is present', () => {
        const actual = $('//button[@name="positive"]').getText();
        const expected = 'CHANGE STEP OPTIONS?';
        expect(actual).toEqual(expected);
    });

    it('Verify that by clicking on the RLF The text "Change Step Options ? " disappeared', () => {
        const rfl = $('//button[@name="positive"]');
        rfl.click();
        const actualText = $('//button[@name="positive"]').getText();
        const expected = 'X';
        expect(actualText).toEqual(expected);
    });

    it('Verify that by clicking on the RLF The number by default "3" is show up', () => {
        const actualInputFieldValue = $('//input[@name="upper"]').getValue();
        const expected = '3';
        expect(actualInputFieldValue).toEqual(expected);
    });

    it('Verify that user is able to change value in RLF which is >= LLF', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const llf = $('//button[@name="negative"]');
        llf.click();
        const inputLeft = $('//input[@name="lower"]');
        inputLeft.setValue('1');
        const rlf = $('//button[@name="positive"]');
        rlf.click();
        const inputRight = $('//input[@name="upper"]');
        inputRight.setValue('9');
        inputRight.clearValue();
        inputRight.setValue('8');
        const actual = inputRight.getValue();
        const expected = '8';
        expect(actual).toEqual(expected);
    });

    it('Verify that user is able to change value in RLF which is >= LLF', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const llf = $('//button[@name="negative"]');
        llf.click();
        const inputLeft = $('//input[@name="lower"]');
        inputLeft.setValue('1');
        const rlf = $('//button[@name="positive"]');
        rlf.click();
        const inputRight = $('//input[@name="upper"]');
        inputRight.setValue('9');
        inputLeft.clearValue();
        inputLeft.setValue('2');
        const actual = inputLeft.getValue();
        const expected = '2';
        expect(actual).toEqual(expected);
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