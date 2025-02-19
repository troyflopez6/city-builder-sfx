import { BuildingWithoutId } from '@/hooks/useCityForm';
import { Building } from '@/types/building.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ValueOf } from 'next/dist/shared/lib/constants';
import { v4 as uuidv4 } from 'uuid';

export type PersistedData = {
  cityBuilder: CityBuilderState
}

export type CityBuilderState = {
    buildingList: Building[]
    openModal: boolean
}

const initialState: CityBuilderState = 
    {
      buildingList: [],
      openModal: false,
    }

const buildingSlice = createSlice({
  name: 'buildingSlice',
  initialState,
  reducers: {
    setBuilding: (state, action: PayloadAction<Building[]>) => {
      state.buildingList = action.payload
    },
    createBuilding: (state, action: PayloadAction<BuildingWithoutId>) => {
      const { buildingList } = state
      const  { payload } = action
      state.buildingList = [...buildingList, { ...payload, building_id: uuidv4() }]
      state.openModal = false
    },
    deleteBuilding: (state, action:PayloadAction<Building['building_id']>) => {
      const { buildingList } = state
      const { payload } = action
      const updatedBuildingList = buildingList.filter((building) => building.building_id !== payload)
      state.buildingList = updatedBuildingList
    },
    updateBuilding: (state, action:PayloadAction<{key: keyof Building , value: ValueOf<Building>, building: Building }>) => {
      const { buildingList } = state
      const { building, key, value } = action.payload

      const updatedBuilding = buildingList.map((b) => {
        if(b.building_id === building.building_id){
          return {
            ...b,
            [key]: value,
          }
        }
        return b
      })
      state.buildingList = updatedBuilding
    },
    duplicateBuilding: (state, action:PayloadAction<Building['building_id']>) => {
      const { buildingList } = state
      const { payload } = action
      const buildingToDuplicate = buildingList.find((building) => building.building_id === payload)
      if(buildingToDuplicate) {
        const duplicateNewId = uuidv4()
        const newDuplicateBuilding = {
          ...buildingToDuplicate,
          building_id: duplicateNewId,
        }
        state.buildingList = [...buildingList, newDuplicateBuilding]
      }
    },
    setOpenModal: (state, action:PayloadAction<boolean>) => {
      state.openModal = action.payload
    },
  },
})

export const { 
  createBuilding,
  deleteBuilding,
  duplicateBuilding,
  setOpenModal,
  updateBuilding,
  setBuilding,
} = buildingSlice.actions
export default buildingSlice.reducer