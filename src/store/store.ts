import { combineReducers, configureStore } from "@reduxjs/toolkit";
import simulationReducer from './reducers/simulationSlice'


const rootReducer = combineReducers({
  simulationReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
