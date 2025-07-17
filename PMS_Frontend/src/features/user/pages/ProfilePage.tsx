import { useEffect, useState } from "react";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ProfileForm from "../components/ProfileForm";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import {
  changePasswordThunk,
  profileDetailsThunk,
  updateProfileThunk,
} from "../userSlice";
import { PRIVATE_ROUTES } from "../../../consts/routes";
import { useNavigate } from "react-router";

interface GetProfileDetailsRequest {
  id: string;
}

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  const [initialValues, setInitialValues] = useState<ProfileFormValues | null>(
    null
  );

  const changePasswordInitialValues = {
    userId: user?.id || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const handleUpdateProfile = async (values: ProfileFormValues) => {
    try {
      const response = await dispatch(updateProfileThunk(values));
      if (updateProfileThunk.fulfilled.match(response)) getProfileDetails();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangePassword = async (
    values: typeof changePasswordInitialValues,
    // formikHelpers: { resetForm: () => void; setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const response = await dispatch(changePasswordThunk(values));
      if (changePasswordThunk.fulfilled.match(response)) {
        getProfileDetails();
        // formikHelpers.resetForm();
      }
    } catch (err) {
      console.log(err);
      // formikHelpers.setSubmitting(false);
    }
  };

  const getProfileDetails = async () => {
    try {
      const result = await dispatch(
        profileDetailsThunk({ id: user.id } as GetProfileDetailsRequest)
      ).unwrap();

      setInitialValues(result as ProfileFormValues);
    } catch (error) {
      console.log(error);
      navigate(PRIVATE_ROUTES.DASHBOARD);
    }
  };

  useEffect(() => {
    console.log(user.id);
    if (user?.id) {
      getProfileDetails();
    } else {
      navigate(PRIVATE_ROUTES.DASHBOARD);
    }
  }, [user, navigate]);

  if (!initialValues) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4 p-4">
        <h3 className="mb-4">My Profile</h3>
        <ProfileForm
          initialValues={initialValues}
          onSubmit={handleUpdateProfile}
        />
        <ChangePasswordForm
          initialValues={changePasswordInitialValues}
          onSubmit={handleChangePassword}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
