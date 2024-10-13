import { createSlice } from "@reduxjs/toolkit"
import { IElementalStats } from "../../models/IStats"

interface SimulationState {
  stats: IElementalStats[]
}

const initialState: SimulationState = {
  stats: []
}


export const simulationSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
})

export default simulationSlice.reducer;
