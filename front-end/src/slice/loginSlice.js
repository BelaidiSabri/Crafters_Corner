import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (info, { rejectWithValue }) => {
  try {
    const { email, password } = info;
    const { data } = await axios.post('http://localhost:7000/api/login', {
      email,
      password,
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.response.data.msg);
    // Handle the error response
    return rejectWithValue({ msg: err.response.data.msg });
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.msg;
      });
  },
});

export default loginSlice.reducer;
