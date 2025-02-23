import { combineReducers } from '@reduxjs/toolkit'
import building, { TBuildingBuilderState } from '../features/building/slice'

export type RootReducerState = {
  buildingBuilder: TBuildingBuilderState
}

const reducers = {
  buildingBuilder:building,
}

export const rootReducer = combineReducers(reducers)