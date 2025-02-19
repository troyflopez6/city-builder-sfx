import { configureStore } from '@reduxjs/toolkit'
import { localStorageMiddleware } from './middleware/localStorageMiddleware'
import { rootReducer } from './reducers'

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']