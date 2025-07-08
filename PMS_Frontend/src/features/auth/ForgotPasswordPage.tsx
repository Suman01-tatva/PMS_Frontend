import React, { useState } from 'react';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import "./auth.css"

const ForgotPasswordPage: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    values: { email: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessMessage('Password reset link sent to your email.');
      resetForm();
    } catch (err) {
        console.error('Error sending reset link:', err);
      setError('Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ForgotPasswordForm
        loading={loading}
        error={error}
        successMessage={successMessage}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ForgotPasswordPage;