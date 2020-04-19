const greetings = require("./index");

describe('Greetings lib', () => {
    it('should call console log to log message', () => {
        global.console = {log: jest.fn()}
        greetings("TEST");
        expect(console.log).toBeCalled();
    });
});