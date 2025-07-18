import { Form, Formik } from "formik";
import { ValidationSchema } from "../schema/commonFormSchema";
import InputField from "../../../common/components/formControlls/textBox/TextBox";
import Button from "../../../common/components/formControlls/button/Button";
import CustomCheckbox from "../../../common/components/formControlls/checkbox/Checkbox";
import ToggleSwitch from "../../../common/components/formControlls/toggleSwitch/ToggleSwitch";
import DatePickerField from "../../../common/components/formControlls/datePicker/DatePicker";
import DropdownField from "../../../common/components/formControlls/dropdown/Dropdown";
import MultiSelectDropdown from "../../../common/components/formControlls/dropdown/MultiselectDropdown";
import type { CommonFormValues } from "../type";
import type { CustomCheckboxProps } from "../../../common/components/formControlls/checkbox/types";
import type { ToggleSwitchProps } from "../../../common/components/formControlls/toggleSwitch/types";
import { GetButtonConfig, GetDatePickerConfig, GetDropdownConfig, GetInputFieldConfig, GetMultiSelectDropdownConfig } from "../../../common/utills/formControllConfig";
import { cityOptions, tagOptions } from "../const/dashboardConst";

const CommonForm = () => {
  const initialValues: CommonFormValues = {
    email: "",
    password: "",
    isActive: false,
    isEnable: false,
    date: null,
    city: "",
    tags: [],
  };

  const onSubmit = async (values: CommonFormValues): Promise<void> => {
    console.log("Form Values: ", values);
  };

  const emailConfig = GetInputFieldConfig('email', 'email', "Email");
  const passwordConfig = GetInputFieldConfig('password', 'password', "password");
  const loginBtnConfig = GetButtonConfig("submit","submit-btn");
  const dateConfig = GetDatePickerConfig("date","date","Select Date",false);
  const cityDropdownConfig = GetDropdownConfig("city","Select City",cityOptions,true,"Select a city");
  const contryDropdownConfig = GetMultiSelectDropdownConfig("tags","Select Tags",tagOptions,"my-custom-class");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, values }) => {
        const checkBoxConfig: CustomCheckboxProps = {
          name: "isActive",
          label: "Is Active",
          checked: values.isActive,
          onChange: (e) => setFieldValue("isActive", e.target.checked),
        };

        const toggleSwitchConfig: ToggleSwitchProps = {
          id: "isEnable",
          name: "isEnable",
          label: "Is Enable",
          checked: values.isEnable,
          onChange: (e) => setFieldValue("isEnable", e.target.checked),
        };
        return (
          <Form>
            <div className="my-4">
              <InputField inputConfig={emailConfig} />
            </div>
            <div className="my-4">
              <InputField inputConfig={passwordConfig} />
            </div>
            <div className="my-2">
              <MultiSelectDropdown
                multiSelectDropdownConfig={contryDropdownConfig}
              />
            </div>
            <div className="my-2">
              <DropdownField dropDownConfig={cityDropdownConfig} />
            </div>
            <div className="my-2">
              <DatePickerField dateConfig={dateConfig} />
            </div>
            <div className="my-2">
              <CustomCheckbox checkBoxConfig={checkBoxConfig} />
            </div>
            <div className="my-2">
              <ToggleSwitch switchConfig={toggleSwitchConfig} />
            </div>
            <div className="my-2">
              <Button buttonConfig={loginBtnConfig}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CommonForm;
