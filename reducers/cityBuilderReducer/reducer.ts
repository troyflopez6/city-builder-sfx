import { Action } from './action';
import { TBuildingReducerState } from './types';
import { filterBuildingList, updateBuildingList } from './util';

export const buildingReducer = (state:TBuildingReducerState, action: Action ): TBuildingReducerState => {
  const { type, payload } = action
  switch (type) {
  case 'CREATE_BUILDING':
    return {
      ...state,
      buildingList: [...state.buildingList, action.payload],
    }
  case 'DELETE_BUILDING': 
    return {
      ...state,
      buildingList: filterBuildingList({ buildingList: state.buildingList, building_id: payload }),
    }
  case 'UPDATE_BUILDING': 
    return {
      ...state,
      buildingList: updateBuildingList({ buildingList: state.buildingList, building: payload }),
    }
  case 'SET_FLOOR': 
    return {
      ...state,
      floor: payload,
    }
  case 'SET_COLOR': 
    return {
      ...state,
      color: payload,
    }
  case 'SET_HOUSE_NAME':
    return {
      ...state,
      houseName: payload,
    }
  case 'SET_MODAL_OPEN':
    return {
      ...state,
      openModal: payload,
    }
  default:
    return state
  }
}