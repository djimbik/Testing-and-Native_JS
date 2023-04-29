type TechnologiesType = {
    id: number
    title: string
}

type CityType = {
    title: string
    countryTitle: string
}

type AdressType = {
    streetTitle: string
    city: CityType
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AdressType
    technologies: Array<TechnologiesType>
}

export const student:StudentType = {
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

console.log(student.technologies[0].title)