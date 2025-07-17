import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { hideLoader, showLoader } from "../../common/components/loader/loaderSlice";
import { getProfileDetails, updateProfileDetails, changePassword } from "./userApi";
import toastService from "../../common/utills/toastr";

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

export const updateProfileThunk = createAsyncThunk<
ProfileFormValues,
  ProfileFormValues,
  { rejectValue: string }
>(
  "auth/update-profile",
  async (payload: ProfileFormValues, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const response = await updateProfileDetails(payload);
      toastService.success(response.data.message || "Updated Successfully");
      return response.data.data;
    } catch (err) {
      const errorMessage = err;
      toastService.error(errorMessage);
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const changePasswordThunk = createAsyncThunk<
  string,
  ChangePasswordFormValues,
  { rejectValue: string }
>(
  "auth/change-password",
  async (payload: ChangePasswordFormValues, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const response = await changePassword(payload);
      toastService.success(response.data.message || "Updated Successfully");
      return response.data.data;
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
