import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { hideLoader, showLoader } from "../../common/components/loader/loaderSlice";
import { loginUser, forgotPassword, resetPassword, submitResetPassword } from "./authApi";
import { getAccessToken, storeAccessToken, storeIsAuthenticated, storeUserData } from "../../utils/authUtils";
import toastService from "../../common/utills/toastr";

const initialState: AuthState = {
  isAuthenticated: getAccessToken() ? true : false,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null,
  loading: false,
  error: null,
};

export const loginThunk = createAsyncThunk<
User, 
LoginPayload, 
{ rejectValue: string } 
>(
  "auth/login",
  async (payload: LoginPayload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());

      const response = await loginUser(payload);
      storeUserData(response.data.data.user);
      storeIsAuthenticated(true);
      storeAccessToken(response.data.data.token!, payload.rememberMe);
      toastService.success(response.data.message || "Login successful!");
      return response.data.data.user!;
    } catch (err) {
      const errorMessage = err;
      toastService.error(errorMessage);
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const forgotPasswordThunk = createAsyncThunk(
  "auth/forgotpassword",
  async (payload: ForgotPasswordFormValues, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const response = await forgotPassword(payload);
      toastService.success(response.data.message);
      return response.data!;
    } catch (err) {
      const errorMessage = err;
      toastService.error(errorMessage);
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const validateResetTokenThunk = createAsyncThunk(
  "auth/resetpassword/:token",
  async (payload: ForgotPasswordToken, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const response = await resetPassword(payload);
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

export const submitResetPasswordThunk = createAsyncThunk(
  "auth/reset-password",
  async (payload: ResetPasswordFormValues, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const response = await submitResetPassword(payload);
      toastService.success(response.data.message);
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;