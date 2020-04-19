const logger = require("./index");

describe('Logger lib', () => {
    it('should call console log to log message', () => {
        global.console = {log: jest.fn()}
        logger("TEST");
        expect(console.log).toBeCalled();
    });
});