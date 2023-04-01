import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./vidosAPI";

const initialState = {
  videos: [],
  loading: false,
  error: "",
  isError: false,
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const videos = await getVideos();
  return videos;
});

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state, action) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.videos = [];
      });
  },
});

export default videosSlice.reducer;
