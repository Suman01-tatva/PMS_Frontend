import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  loading,
  error,
  successMessage,
  onSubmit,
}) => {
  return (
    <div >
      <div className="row mb-5">
        <div className="d-flex align-items-center justify-content-center">
          <h3 className="text-dark text-2xl font-semibold">Forgot Password</h3>
        </div>
      </div>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form id="forgotPasswordForm">
            <div className="form-input-div mt-3 relative">
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                autoComplete="username"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-10"
              />
              <span className="form-input-icon absolute right-3 top-1/2 transform -translate-y-1/2">
                <i className="fa-solid fa-user" style={{ color: 'gray' }} />
              </span>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {error && (
              <div className="text-danger fs-6 mx-2 mb-3">{error}</div>
            )}
            {successMessage && (
              <div className="text-success fs-6 mx-2 mb-3">{successMessage}</div>
            )}

            <div className="my-3">
              <button
                type="submit"
                className="w-full text-white rounded py-1.5 bg-gray-500 font-semibold hover:bg-gray-700 transition"
                disabled={loading || isSubmitting}
              >
                {loading || isSubmitting ? 'Submitting...' : 'Reset Password'}
              </button>
            </div>
            <div className="my-3">
              <Link
                to="/login"
                className="w-full text-white rounded py-1.5 bg-gray-500 font-semibold hover:bg-gray-700 transition block text-center"
              >
                Back to Login
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;