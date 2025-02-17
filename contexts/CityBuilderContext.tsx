/* eslint-disable no-unused-vars */
'use client'
import { BUILDING_KEY } from '@/constants/buildingKeys'
import { cityBuilderConfig } from '@/constants/cityBuilderConfig'
import { Building } from '@/types/building.type'
import { TCityBuilderContext } from '@/types/cityBuilderContext.type'
import { getDataFromLocalStorage, saveDataToLocalStorage } from '@/utils/localstorageUtil'
import { ChangeEvent, createContext, FC, FormEvent, PropsWithChildren, useCallback, useEffect, useState } from 'react'

const contextInitialValue: TCityBuilderContext = {
  changeColor: (e: ChangeEvent<HTMLSelectElement>, building?:Building) => {},
  changeFloor: (e: ChangeEvent<HTMLInputElement>, building?:Building) => {},
  changeHouseName: (e: ChangeEvent<HTMLInputElement>, building?:Building) => {},
  createNewBuilding: (e: FormEvent<HTMLFormElement>, building_id?: string) => {},
  setOpenModal: (open: boolean) => {},
  deleteBuilding: (building_id: Building['building_id']) => {},
  duplicateBuilding: (building: Building) => {},
  formReset: () => {},
  color: '#FFA500',
  floors: 1,
  houseName: 'House 1',
  openModal: false,
  buildingList: [],
}

export const CityBuilderContext = createContext<TCityBuilderContext>(contextInitialValue)

const CityBuilderProvider: FC<PropsWithChildren> = ({ children }) => {
  const [buildingList, setBuildingList] = useState<Building[]>([])
  const [floors, setFloors] = useState<number>(1)
  const [color, setColor] = useState<string>('#FFA500')
  const [houseName, setHouseName] = useState<string>('House 1')
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { maxFloor } = cityBuilderConfig

  useEffect(() => {
    if(typeof window !== undefined){
      const dataFromLocalStorage = getDataFromLocalStorage<Building[]>(BUILDING_KEY) ?? []
      setBuildingList(dataFromLocalStorage)
    }
    return () => {
    }
  }, [])

  const createNewBuilding = (e: FormEvent<HTMLFormElement>, building_id?: string) => {
    e.preventDefault()
    formReset()
    if(!building_id) return
    const newBuilding: Building = {
      building_id,
      color,
      floors,
      house_name: houseName,
    }
    setBuildingList((prevBuildingList) => [...prevBuildingList, newBuilding])
    saveDataToLocalStorage(BUILDING_KEY,[...buildingList, newBuilding])
    setOpenModal(false)
  }

  const updateBuilding = ({ key, value }: {key: keyof Building, value: string | number}, building: Building) => {
    const updatedBuilding = {
      ...building,
      [key]: value,
    }
    const updatedBuildingList = buildingList.map(((build) => build.building_id === building.building_id ? { ...build, ...updatedBuilding }: build))
    setBuildingList(updatedBuildingList)
    saveDataToLocalStorage(BUILDING_KEY, updatedBuildingList)
  }

  const deleteBuilding = (building_id: string) => {
    const updatedBuildingList = buildingList.filter((building) => building.building_id !== building_id)
    setBuildingList(updatedBuildingList)
    saveDataToLocalStorage(BUILDING_KEY, updatedBuildingList)
  }

  const changeFloor = (e:ChangeEvent<HTMLInputElement>, building?: Building): void => {
    const { target } = e
    const { valueAsNumber } = target

    if(building) {
      updateBuilding({ key: 'floors', value: valueAsNumber }, building)
    }
    if(valueAsNumber > maxFloor){
      setFloors(maxFloor)
      return
    }
    setFloors(valueAsNumber)
  }

  const changeColor = (e: ChangeEvent<HTMLSelectElement>, building?: Building): void => {
    const { value } = e.target
    if(building) {
      updateBuilding({ key: 'color', value }, building)
      return
    }
    setColor(value)
  }

  const changeHouseName = (e:ChangeEvent<HTMLInputElement>, building?: Building): void => {
    const { value } = e.target
    if(building) {
      updateBuilding({ key: 'house_name', value }, building)
      return
    }
    setHouseName(value)
  }

  const formReset = useCallback(() => {
    setHouseName('')
    setFloors(1)
    setColor('#FFA500')
  }, [])

  const duplicateBuilding = (building: Building) :void => {
    setOpenModal(true)
    setFloors(building.floors)
    setColor(building.color)
  }

  return (
    <CityBuilderContext.Provider 
      value={{ 
        floors, 
        color, 
        houseName, 
        openModal, 
        buildingList, 
        changeFloor, 
        changeColor,
        createNewBuilding,
        changeHouseName, 
        setOpenModal, 
        deleteBuilding,
        duplicateBuilding,
        formReset,
      }}>
      {children}
    </CityBuilderContext.Provider>
  )}

export default CityBuilderProvider