import { ChangeEvent, FormEvent } from 'react'
import { Building } from './building.type'

/* eslint-disable no-unused-vars */
export type TCityBuilderContext = {
    floors: number
    color: string
    houseName: string
    openModal: boolean
    buildingList: Building[]
    changeFloor: (e: ChangeEvent<HTMLInputElement>, building?:Building) => void
    changeColor: (e: ChangeEvent<HTMLSelectElement>, building?:Building) => void
    createNewBuilding: (e: FormEvent<HTMLFormElement>,  building_id?: string) => void
    changeHouseName: (e: ChangeEvent<HTMLInputElement>, building?:Building) => void
    setOpenModal: (open: boolean) => void
    deleteBuilding: (building_id: Building['building_id']) => void,
    duplicateBuilding: (building: Building) => void,
    formReset: () => void
}