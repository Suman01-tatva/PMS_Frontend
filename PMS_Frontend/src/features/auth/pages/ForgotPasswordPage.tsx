import React, { useState } from 'react';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import { forgotPasswordThunk } from '../authSlice';
import { useAppDispatch } from '../../../app/hook';

const ForgotPasswordPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: { email: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    const response = await dispatch(forgotPasswordThunk(values));
    if(forgotPasswordThunk.fulfilled.match(response)) {
      setError(null);
      setLoading(false);
      resetForm();
    }
  };

  return (
    <>
      <ForgotPasswordForm
        loading={loading}
        error={error}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ForgotPasswordPage;