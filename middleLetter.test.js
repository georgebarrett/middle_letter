const middleLetter = require('./middleLetter');

describe('middleLetter', () => {

    it('should return an even word', () => {
        expect(middleLetter()).toBe('tree')
    });

})
