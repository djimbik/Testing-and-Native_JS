import {student} from "./02";
import {StudentType} from './02'
import {CityType, HouseType} from "./02_02";
import {GovermentBuildingType} from './02_02'

export const addSkill = (stud: StudentType, skill: string) => {
    stud.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (stud: StudentType) => {
    stud.isActive = true
}

export const doesStudentLiveIn = (stud: StudentType, city:string) => {
    return stud.address.city.title === city
}

export const addMoneyToBudget = (govermentBuildings: GovermentBuildingType, number: number) => {
    govermentBuildings.budget += number
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (govermentBuildings:GovermentBuildingType, num: number) => {
    govermentBuildings.staffCount -= num
}

export const toHireStaff = (govermentBuildings:GovermentBuildingType, num: number) => {
    govermentBuildings.staffCount += num
}