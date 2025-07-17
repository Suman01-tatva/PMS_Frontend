import { Form, Formik } from "formik";
import { ValidationSchema } from "../schema/commonFormSchema";
import InputField from "../../../common/components/formControlls/textBox/TextBox";
import Button from "../../../common/components/formControlls/button/Button";
import type { ButtonProps } from "@mui/material";
import type { InputFieldProps } from "../../../common/components/formControlls/textBox/types";
import CustomCheckbox from "../../../common/components/formControlls/checkbox/Checkbox";
import ToggleSwitch from "../../../common/components/formControlls/toggleSwitch/ToggleSwitch";
import DatePickerField from "../../../common/components/formControlls/datePicker/DatePicker";
import SearchBar from "../../../common/components/formControlls/searchBar/SearchBar";
import DropdownField from "../../../common/components/formControlls/dropdown/Dropdown";
import MultiSelectDropdown from "../../../common/components/formControlls/dropdown/MultiselectDropdown";

const CommonForm = () => {
  const onSubmit = (value) => {
    console.log(value);
  };
  const emailInputConfig: InputFieldProps = {
    id: "email",
    name: "email",
    type: "email",
    label: "Email",
  };

  interface CustomButtonProps extends ButtonProps {
    className?: string;
    style?: React.CSSProperties;
    to?: string;
  }

  const loginBtnConfig: Omit<CustomButtonProps, "children"> = {
    type: "submit",
    className: "submit-btn",
  };

  const passwordInputConfig: InputFieldProps = {
    id: "password",
    name: "password",
    type: "password",
    label: "Password",
    autoComplete: "current-password",
  };

  const cityOptions = [
    { value: "nyc", label: "New York City" },
    { value: "buf", label: "Buffalo" },
    { value: "roc", label: "Rochester" },
  ];

  const tagOptions = [
    { value: "react", label: "React" },
    { value: "mui", label: "Material-UI" },
    { value: "formik", label: "Formik" },
    { value: "typescript", label: "TypeScript" },
  ];

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        isActive: false,
        isEnable: false,
        date: null,
        search: "",
        city: "",
        tags: [],
      }}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          <div className="my-2">
            <InputField inputConfig={emailInputConfig} />
          </div>
          <div className="my-2">
            <InputField inputConfig={passwordInputConfig} />
          </div>
          <div className="my-2">
            <CustomCheckbox
              checkBoxConfig={{
                name: "isActive",
                label: "Is Active",
                checked: values.isActive,
                onChange: (e) => setFieldValue("isActive", e.target.checked),
              }}
            />
          </div>
          <div className="my-2">
            <ToggleSwitch
              switchConfig={{
                id: "1",
                name: "isEnable",
                label: "IsEnable",
                onChange: (e) => setFieldValue("isEnable", e.target.value),
              }}
            />
          </div>
          <div className="my-2">
            <DatePickerField
              dateConfig={{
                id: "date",
                name: "date",
                label: "Select Date",
                disabled: false,
              }}
            />
          </div>
          <div className="my-2">
            <MultiSelectDropdown
              name="tags"
              label="Select Tags"
              options={tagOptions}
              className="my-custom-class"
            />
          </div>
          <div className="my-2">
            <DropdownField
              name="city"
              label="Select City"
              options={cityOptions}
              defaultValue="Select a city"
            />
          </div>
          <div className="my-2">
            <SearchBar
              searchBarConfig={{
                id: "search",
                name: "search",
                value: values.search || "",
                onChange: (value) => setFieldValue("search", value),
                placeholder: "Search here...",
              }}
            />
          </div>
          <div className="my-2">
            <Button buttonConfig={loginBtnConfig}>
              {isSubmitting ? "Submiting..." : "Submit"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CommonForm;
