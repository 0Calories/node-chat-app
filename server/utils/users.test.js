const expect = require('expect');
const {Users} = require('./users.js');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Lil Pump',
            room: 'Trap House'
        }, {
            id: '2',
            name: 'Tekashi',
            room: 'B'
        }, {
            id: '3',
            name: 'Trippie Redd',
            room: 'Trap House'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Lil Uzi',
            room: 'Trap House'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return all peeps in da trap house', () => {
        var userList = users.getUserList('Trap House');

        expect(userList).toEqual(['Lil Pump', 'Trippie Redd']);
    });

    it('should remove a user', () => {
        users.removeUser('3');

        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        users.removeUser('420');

        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var pump = users.getUser('1');

        expect(pump.name).toBe('Lil Pump');
    });

    it('should not find user', () => {
        var notATrapper = users.getUser('567');

        expect(notATrapper).toBeFalsy();
    });
});