import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {text: "null"},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMessage.fulfilled, (state, action) => {
      state = action.payload
    })
  }
})

export const getMessage = createAsyncThunk(
  'messages/getMessage',
  async () => {
    const response = await fetch('http://localhost:3000/messages');
    const data = response.json();
    return data
  }
);


export default messagesSlice.reducer