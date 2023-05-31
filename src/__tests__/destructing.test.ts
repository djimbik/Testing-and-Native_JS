import {ManType} from "../Destructing";

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Roman',
        age: 29,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Nezavisimosty street'
            }
        }
    }
})

test('', () => {

    // const age = props.age
    // const lessons = props.lessons;

    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(29)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Nezavisimosty street')

})

test('', () => {

    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');

    expect(ls1.title).toBe('1');
    expect(ls2.title).toBe('2');
})

export {}