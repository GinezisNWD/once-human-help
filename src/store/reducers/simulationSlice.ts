import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IWeaponStats, IElementalStats, IWeaponSimulation } from "../../models/IStats"

interface SimulationState {
  stats: {
    mps7: IWeaponStats[],
    acs12corruption: IElementalStats[]
  }
}

const initialState: SimulationState = {
  stats: {
    mps7: [],
    acs12corruption: [],
  }
}


export const simulationSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    addMps7Stats(state, action: PayloadAction<IWeaponStats>) {
      state.stats.mps7.push(action.payload)
    },
    addMps7Simulation(state, action: PayloadAction<{ id: number, value: IWeaponSimulation }>,) {
      const item = state.stats.mps7.find(elem => elem.id === action.payload.id)
      item?.simulations.push(action.payload.value)
    },
  },
})

export default simulationSlice.reducer;
