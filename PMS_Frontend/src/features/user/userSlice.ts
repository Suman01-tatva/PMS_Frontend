import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { hideLoader, showLoader } from "../../common/loader/loaderSlice";
import { getProfileDetails } from "./userApi";
import toastService from "../../utils/toastr";

export const profileDetailsThunk = createAsyncThunk(
  "user/profile/:id",
  async (payload: GetProfileDetailsRequest, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const response = await getProfileDetails(payload.id);
      return response.data.data!;
    } catch (err) {
      const errorMessage = err;
      toastService.error(errorMessage);
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(hideLoader());
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
});

export default userSlice.reducer;