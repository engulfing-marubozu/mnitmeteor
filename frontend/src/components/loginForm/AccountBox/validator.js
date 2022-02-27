function Validatorfunc(values) {
  const errors = {};
  const regex = new RegExp("[a-z0-9]+@mnit.ac.in");
  if (typeof values.email !== "undefined" && !values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email";
  }

  else if (typeof values.password !== "undefined" && !values.password) {
    errors.password = "Password is required ";
  } else if (
    typeof values.password !== "undefined" &&
    values.password.length < 8
  ) {
    errors.password = "Must contain atleast 8 characters";
  }
  return errors;
}

export default Validatorfunc;

export function OtpValidator(values) {
  // console.log([values.inputOtp, values.realOtp]);
  const errors = {};
  if (!values.inputOtp) {
    errors.otp = "OTP is required ";
  } else if (values.inputOtp.length !== 4) {
    errors.otp = "Must contain 4 characters ";
  } else if (Number(values.inputOtp) !== values.realOtp) {
    errors.otp = "Invalid OTP";
  }
  return errors;
}
export function PasswordValidator(values) {
  const error = {};
  if (!values.newpassword && !values.confirmpassword) {
    error.Password = "Password is required ";
    error.highLighter = false;
  } else if (values.newpassword.length < 8) {
    error.highLighter = true;
  } else if (values.newpassword.length >= 8 && !values.confirmpassword) {
    error.highLighter = false;
    error.confirmPassword = "Confirm Password";
  }

  if (
    values.confirmpassword &&
    values.newpassword !== values.confirmpassword &&
    values.newpassword.length >= 8
  ) {
    error.highLighter = false;
    error.confirmPassword = " Both password must be same";
  }

  return error;
}

export function PhoneNumberValidator(value) {
  const errors = {};
  if (!value) {
    errors.phoneNo = "Phone number is required";
  } else if (value.length !== 10) {
    errors.phoneNo = "Please enter valid phone number.";
  }
  return errors;
}
