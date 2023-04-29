type AddressTitleType = {
    title: string
}

type AddressType = {
    number: number
    street: AddressTitleType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type AddressGovermentType = {
    street: AddressTitleType
}

type GovermentBuildingType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressGovermentType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    govermentBuildings: Array<GovermentBuildingType>
    citizenNumbers: number
}