import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface player {
  play: boolean
}

const MusicPlay: player = {
  play: false,
}

export const PlayerSlice = createSlice({
  name: 'Player-Slice',
  initialState: MusicPlay,
  reducers: {
    setPlayer: (state) => {
      state.play = !state.play
    },
  },
})
export const { setPlayer } = PlayerSlice.actions

export const MusicPlayerState = PlayerSlice.actions
