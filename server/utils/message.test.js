const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'User1';
        var text = 'This is a sample message';
        var res = generateMessage(from, text);

        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        var from = 'User1';
        var lat = 0;
        var lon = 0;
        var res = generateLocationMessage(from, lat, lon);

        expect(res.from).toBe(from);
        expect(res.url).toBe(`https://www.google.com/maps/?q=${lat},${lon}`);
    });
});