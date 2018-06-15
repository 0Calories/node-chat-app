const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('it should reject non-string values', ()=> {
        var notAString = 10;
        expect(isRealString(notAString)).toBe(false); 
    });

    it('it should reject string with only spaces', () => {
        var spaceString = '     ';
        expect(isRealString(spaceString)).toBe(false);
    });

    it('it should allow string with non-space characters', () => {
        var validString = 'testString';
        expect(isRealString(validString)).toBe(true);
    });
});