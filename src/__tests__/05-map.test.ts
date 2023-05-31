
type ManType = {
    name: string
    age: number
}

let people: Array<ManType> = []

beforeEach( () => {
    people = [
        {name: 'Yura B', age: 24},
        {name: 'Alex', age: 31},
        {name: 'DM', age: 29}
    ]
})
// Сделаем инкапсуляцию
const createGreetingMessage = (people:Array<ManType>) => {
    return people.map(item => `Hello ${item.name}`)
}

test('should get array of greeting messages', () => {

    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Yura B')
    expect(messages[1]).toBe('Hello Alex')
    expect(messages[2]).toBe('Hello DM')
})



export {}