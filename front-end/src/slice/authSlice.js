import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk('auth/register', async (info, { rejectWithValue }) => {
  try {
    const { email, name, lastname, password, role } = info;
    const { data } = await axios.post('http://localhost:7000/api/register', {
      email,
      name,
      lastname,
      password,
      role,
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.response.data.msg);
    // Handle the error response
    return rejectWithValue({ msg: err.response.data.msg });
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuth: false,
    isLoading: false,
    errors: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.errors = null;
        state.isAuth = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload.msg;
        state.isAuth = false;
        state.token = null;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
