

export type UsersType = {
    [key: string]: {id: number, name: string}
}

export let users: UsersType = {
    '358645': {id: 358645, name: "Roma"},
    '35864': {id: 35864, name: "Marta"},
    '3586': {id: 3586, name: "Petya"},
    '358': {id: 358, name: "Oleg"},
}

//users[356]

//Если нам пришли данные и надо добавить в такой объект данные:
//
const newUser = {id: 100500, name: 'Kolya'}
users[newUser.id] = newUser

// delete users[newUser.id]

// Если мы будем искать в таком объекте данные по ID, то сложность будет
// O(1)
// Если искать также в массиве - O(n)

console.log(users)