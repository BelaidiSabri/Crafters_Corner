import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUserProfile from "../utils/fetchUserProfile";

const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

export const fetchProfileData = createAsyncThunk(
  "profile/fetchProfileData",
  async (username, { rejectWithValue }) => {
    try {
      const profile = await fetchUserProfile(username);
      console.log('profile :' ,profile);
      return profile;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfile(state) {
      state.profile = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetProfile } = profileSlice.actions;

export default profileSlice.reducer;
