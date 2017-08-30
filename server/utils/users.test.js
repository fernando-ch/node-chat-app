const expect = require('expect')

const {Users} = require('./users')


describe('Users', () => {
    var users
    
    beforeEach(() => {
        users = new Users()
        users.users = [{
                id: 1, 
                name: 'User 1', 
                room: 'Node Course'
            },{
                id: 2, 
                name: 'User 2', 
                room: 'Another Course'
            },{
                id: 3, 
                name: 'User 3', 
                room: 'Node Course'
            }
        ]
    })

    it('should add new user', () => {
        var users = new Users()
        var user = {
            id: '123',
            name: 'Fernando',
            room: 'Node'
        }
        var resUser = users.addUser(user.id, user.name, user.room)
        
        expect(users.users).toEqual([user])
    })

    it('should find user', () => {
        var user = users.getUser(1)
        expect(user.id).toBe(1)
    })

    it('should not find user', () => {
        var user = users.getUser(999)
        expect(user).toNotExist()
    })

    it('should remove a user', () => {
        var user = users.removeUser(2)
        expect(user.id).toBe(2)
        expect(users.users.length).toBe(2)
    })

    it('should not remove a user', () => {
        var user = users.removeUser(999)
        expect(user).toNotExist()
        expect(users.users.length).toBe(3)
    })

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course')
        expect(userList).toEqual(['User 1', 'User 3'])
    })

    it('should return name for another course', () => {
        var userList = users.getUserList('Another Course')
        expect(userList).toEqual(['User 2'])
    })
})