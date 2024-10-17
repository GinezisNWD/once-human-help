import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IWeaponStats, ISimulationReport, IAcs12CorrosionStats } from "../../models/IStats"

interface SimulationState {
  stats: {
    mps7: IWeaponStats[],
    acs12corrosion: IAcs12CorrosionStats[]
  }
}

const initialState: SimulationState = {
  stats: {
    mps7: [],
    acs12corrosion: [],
  }
}


export const simulationSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    addMps7Stats(state, action: PayloadAction<IWeaponStats>) {
      state.stats.mps7.push(action.payload)
    },
    addMps7Simulation(state, action: PayloadAction<{ id: number, value: ISimulationReport }>,) {
      const item = state.stats.mps7.find(elem => elem.id === action.payload.id)
      item?.simulations.push(action.payload.value)
    },
    addAcs12CorrosionStats(state, action: PayloadAction<IAcs12CorrosionStats>) {
      state.stats.acs12corrosion.push(action.payload)
    },
    addAcs12CorrosionSimulation(state, action: PayloadAction<{ id: number, value: ISimulationReport }>,) {
      const item = state.stats.acs12corrosion.find(elem => elem.id === action.payload.id)
      item?.simulations.push(action.payload.value)
    },
  },
})

export default simulationSlice.reducer;
