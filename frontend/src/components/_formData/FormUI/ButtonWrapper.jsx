import React from "react";
import Button from "@mui/material/Button";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
	const { submitForm } = useFormikContext();
	const handleSubmit = () => {
		// console.log('first');
		submitForm();
	};
	const configButton = {
		variant: "contained",
		color: "primary",
		fullWidth: true,
		onClick: handleSubmit,
	};

	return <Button   sx={{ mt: '1.5rem' }} {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
