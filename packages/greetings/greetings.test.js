const greetings = require("./index");

describe('Greetings lib', () => {
    it('should call logger to log message', () => {
        global.console = {log: jest.fn()}
        greetings("TEST");
        expect(console.log).toBeCalled();
    });
});