import {StudentType} from "../02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "../03";


let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Dimych',
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Timptonskaya",
            city: {
                title: 'Neryungri',
                countryTitle: 'Russia',
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test(
    'new tech skill should be added to student', () => {
        expect(student.technologies.length).toBe(3);

        addSkill(student, 'JS');

        expect(student.technologies.length).toBe(4);
        expect(student.technologies[3].title).toBe('JS');
        expect(student.technologies[3].title).toBeDefined();
    }
)

test(
    'student should be active', () => {
        expect(student.isActive).toBe(false);

        makeStudentActive(student);
        expect(student.isActive).toBe(true);

    }
)

test(
    'Does student lives in city?', () => {


        let result1 = doesStudentLiveIn(student, 'Neryungri');
        let result2 = doesStudentLiveIn(student, 'Moscow');
        expect(result1).toBe(true);
        expect(result2).toBe(false);

    }
)