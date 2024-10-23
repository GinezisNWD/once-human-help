import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IWeaponStats, ISimulationReport, IAcs12CorrosionStats, IMps7OuterSpaceStats, ISocrOutsiderStats } from "../../models/IStats"

interface SimulationState {
  stats: {
    mps7: IWeaponStats[],
    acs12Corrosion: IAcs12CorrosionStats[],
    mps7OuterSpace: IMps7OuterSpaceStats[],
    socrOutsider: ISocrOutsiderStats[],
  }
}

const initialState: SimulationState = {
  stats: {
    mps7: [],
    acs12Corrosion: [],
    mps7OuterSpace: [],
    socrOutsider: [],
  }
}


export const simulationSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    addMps7Stats(state, action: PayloadAction<IWeaponStats>) {
      state.stats.mps7.push(action.payload)
    },
    removeMps7Stats(state, action: PayloadAction<number>) {
      state.stats.mps7 = state.stats.mps7.filter((elem) => elem.id !== action.payload)
    },
    addMps7Simulation(state, action: PayloadAction<{ id: number, value: ISimulationReport }>,) {
      const item = state.stats.mps7.find(elem => elem.id === action.payload.id)
      item?.simulations.push(action.payload.value)
    },
    addAcs12CorrosionStats(state, action: PayloadAction<IAcs12CorrosionStats>) {
      state.stats.acs12Corrosion.push(action.payload)
    },
    removeAcs12CorrosionStats(state, action: PayloadAction<number>) {
      state.stats.acs12Corrosion = state.stats.acs12Corrosion.filter((elem) => elem.id !== action.payload)
    },
    addAcs12CorrosionSimulation(state, action: PayloadAction<{ id: number, value: ISimulationReport }>,) {
      const item = state.stats.acs12Corrosion.find(elem => elem.id === action.payload.id)
      item?.simulations.push(action.payload.value)
    },



    addMps7OuterSpaceStats(state, action: PayloadAction<IMps7OuterSpaceStats>) {
      state.stats.mps7OuterSpace.push(action.payload)
    },
    removeMps7OuterSpacestats(state, action: PayloadAction<number>) {
      state.stats.mps7OuterSpace = state.stats.mps7OuterSpace.filter((elem) => elem.id !== action.payload)
    },
    addMps7OuterSpaceSimulation(state, action: PayloadAction<{ id: number, value: ISimulationReport }>,) {
      const item = state.stats.mps7OuterSpace.find(elem => elem.id === action.payload.id)
      item?.simulations.push(action.payload.value)
    },

    addSocrOutsiderStats(state, action: PayloadAction<ISocrOutsiderStats>) {
      state.stats.socrOutsider.push(action.payload)
    },
    removeSocrOutsiderstats(state, action: PayloadAction<number>) {
      state.stats.socrOutsider = state.stats.socrOutsider.filter((elem) => elem.id !== action.payload)
    },
    addSocrOutsiderSimulation(state, action: PayloadAction<{ id: number, value: ISimulationReport }>,) {
      const item = state.stats.socrOutsider.find(elem => elem.id === action.payload.id)
      item?.simulations.push(action.payload.value)
    },
  },
})

export default simulationSlice.reducer;
