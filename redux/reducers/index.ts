import { combineReducers } from '@reduxjs/toolkit'
import building, { CityBuilderState } from '../features/building/slice'

export type RootReducerState = {
  cityBuilder: CityBuilderState
}

const reducers = {
  cityBuilder:building,
}

export const rootReducer = combineReducers(reducers)