import React from 'react';
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";
// =======================================================Discription======================================================================================================
export function TextfieldWrapper({ name, ...otherProps }) {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    const handleChange = (event) => {
        if (event.target.value.split("\n").length > 20) {
            event.target.value = " ";
            return;
        };
        // console.log(event.target.value);
        setFieldValue(name, event.target.value);
    };
    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: "outlined",
        onChange: handleChange,
    };
    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <TextField {...configTextfield} sx={{ my: '0.6rem' }} />);
}
// ========================================================================select-Items ============================================================================================
export function SelectWrapper({ name, categories, ...otherProps }) {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    // console.log(meta);
    const handleChange = (event) => {
        setFieldValue(name, event.target.value);
    };

    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant: "outlined",
        fullWidth: true,
        onChange: handleChange,
    };

    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }
    return (
        <TextField
            {...configSelect}
            sx={{ my: '0.6rem' }}
        >
            {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}
// export function TextfieldWrapper({ name, ...otherProps }) {
//     const [field, meta] = useField(name);

//     const configTextfield = {
//         ...field,
//         ...otherProps,
//         fullWidth: true,
//         variant: "outlined",
//     };
//     if (meta && meta.touched && meta.error) {
//         configTextfield.error = true;
//         configTextfield.helperText = meta.error;
//     }

//     return (
//         <TextField {...configTextfield} sx={{ my: '0.6rem' }} />);
// }