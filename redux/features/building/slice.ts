import { TBuildingWithoutId } from '@/hooks/useBuildingForm';
import { TBuilding } from '@/types/building.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ValueOf } from 'next/dist/shared/lib/constants';
import { v4 as uuidv4 } from 'uuid';

export type PersistedData = {
  buildingBuilder: TBuildingBuilderState
}

export type TBuildingBuilderState = {
    buildingList: Record<TBuilding['building_id'], TBuilding>
    openModal: boolean
}

const initialState: TBuildingBuilderState = 
    {
      buildingList: {},
      openModal: false,
    }

const buildingSlice = createSlice({
  name: 'buildingSlice',
  initialState,
  reducers: {
    setBuilding: (state, action: PayloadAction<TBuildingBuilderState['buildingList']>) => {
      state.buildingList = action.payload
    },
    createBuilding: (state, action: PayloadAction<TBuildingWithoutId>) => {
      const { buildingList } = state
      const randomId = uuidv4().replace(/-/g, '')      
      state.buildingList = {
        ...buildingList,
        [randomId]: {
          ...action.payload,
          building_id: randomId,
        },
      }

      state.openModal = false
    },
    deleteBuilding: (state, action:PayloadAction<TBuilding['building_id']>) => {
      delete state.buildingList[action.payload]
    },
    updateBuilding: (state, action:PayloadAction<{key: keyof TBuilding , value: ValueOf<TBuilding>, building: TBuilding }>) => {
      const { building, key, value } = action.payload
      const { building_id } = building
      const isUpdatingFloors = key === 'floors'

      state.buildingList[building_id] = {
        ...state.buildingList[building_id],
        [key]:  isUpdatingFloors ? Number(value) : value,
      }
    },
    duplicateBuilding: (state, action:PayloadAction<TBuilding['building_id']>) => {
      const { buildingList } = state
      const { payload } = action
      const buildingToDuplicate = buildingList[payload]
      if(buildingToDuplicate) {
        const duplicateNewId = uuidv4().replace(/-/g, '')
        const newDuplicateBuilding = {
          ...buildingToDuplicate,
          building_id: duplicateNewId,
        }
        state.buildingList[duplicateNewId] = newDuplicateBuilding
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