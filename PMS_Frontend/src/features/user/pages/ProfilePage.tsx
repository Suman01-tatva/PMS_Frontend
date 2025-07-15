import React, { useEffect, useState } from "react";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ProfileForm from "../components/ProfileForm";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { profileDetailsThunk } from "../userSlice";
import { PRIVATE_ROUTES } from "../../../consts/routes";
import { useNavigate } from "react-router";

interface GetProfileDetailsRequest {
  id: string;
}

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  const [initialValues, setInitialValues] = useState<ProfileFormValues | null>(null);

  const changePasswordInitialValues = {
    userId: user?.id || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: ProfileFormValues) => {
    console.log("Profile submitted:", values);
  };

  const handleChangePassword = async (values: typeof changePasswordInitialValues) => {
    console.log("Change password submitted", values);
  };

  useEffect(() => {
    let isMounted = true;

    const getProfileDetails = async () => {
      try {
        const result = await dispatch(
          profileDetailsThunk({ id: user.id } as GetProfileDetailsRequest)
        );

        if (isMounted) {
          setInitialValues(result.payload as ProfileFormValues);
        }
      } catch (error) {
        console.log(error);
        if (isMounted) navigate(PRIVATE_ROUTES.DASHBOARD);
      }
    };

    if (user?.id) {
      getProfileDetails();
    } else {
      navigate(PRIVATE_ROUTES.DASHBOARD);
    }

    return () => {
      isMounted = false;
    };
  }, [user, navigate, dispatch]);

  if (!initialValues) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4 p-4">
        <h3 className="mb-4">My Profile</h3>
        <ProfileForm initialValues={initialValues} onSubmit={handleSubmit} />
        <ChangePasswordForm
          initialValues={changePasswordInitialValues}
          onSubmit={handleChangePassword}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
