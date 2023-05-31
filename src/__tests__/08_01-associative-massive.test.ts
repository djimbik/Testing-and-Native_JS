import {UsersType} from '../08_01-associative-massive'

let users: UsersType

beforeEach(() => {
    users = {
        '358645': {id: 358645, name: "Roma"},
        '35864': {id: 35864, name: "Marta"},
        '3586': {id: 3586, name: "Petya"},
        '358': {id: 358, name: "Oleg"},
    }
})

test('should select corrseponding user from obj', () => {

    users[358].name = 'Andrew'

    expect(users[358].name).toBe('Andrew')
    expect(users[358]).toEqual({id: 358, name: "Andrew"}) //toEqual Сравнивает по значению

})