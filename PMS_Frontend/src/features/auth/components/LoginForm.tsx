import React from "react";
import { Formik, Form } from "formik";
import Checkbox from "../../../common/components/formControlls/checkbox/Checkbox";
import "../../../common/style/formControl.css";
import Button from "../../../common/components/formControlls/button/Button";
import { loginValidationSchema } from "../schema/loginSechema";
import { PUBLIC_ROUTES } from "../../../consts/routes";
import InputField from "../../../common/components/formControlls/textBox/TextBox";
import { buttonConfigs, inputFieldConfigs } from "../const/loginConst";

const LoginForm: React.FC<LoginFormProps> = ({ loading, onSubmit }) => {
  // test(){}
  // passwordConfig = GetTextboxCongig('password', test)

  // GetTextboxConfig(label, onChnage){
  //   return {
  //     lable: label,
  //     Onchange:
  //   }
  // }

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={loginValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <h2 className="text-2xl font-semibold my-3 text-center text-gray-800">
            Login
          </h2>

          <div className="mb-4">
            <InputField inputConfig={inputFieldConfigs.loginEmail} />
          </div>

          <div className="mb-4">
            <InputField inputConfig={inputFieldConfigs.loginPassword} />
          </div>

          <div className="flex items-center justify-between mb-6">
            <Checkbox
              checkBoxConfig={{
                name: "rememberMe",
                label: "Remember Me",
                checked: values.rememberMe,
                onChange: (e) => setFieldValue("rememberMe", e.target.checked),
              }}
            />
            <a
              href={PUBLIC_ROUTES.FORGOTPASSWORD}
              className="text-blue-600 hover:underline text-sm"
            >
              Forgot password?
            </a>
          </div>
          <Button buttonConfig={buttonConfigs.loginBtn}>
            {loading || isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
