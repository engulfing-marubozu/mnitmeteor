import React, { useState } from 'react'
import { useFormikContext, useField } from 'formik';
import { useStyles } from '../FormUI/stylingComponent';
import { Box, Typography, Stack } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ClearIcon from '@mui/icons-material/Clear';
function UploadDoc({ name, ...otherProps }) {
    const [showUpload, setShowUpload] = useState({ status: true, fileName: ' ' });
    const { setFieldValue } = useFormikContext();
    const [, meta] = useField(name);
    console.log(meta);

    const ChangeHandler = (event) => {
        const file = event.target.files[0];
            setFieldValue(name, file);
            setShowUpload({ status: false, fileName: file.name });
    }
    const ClearHandler = () => {
        setFieldValue(name, null);
        setShowUpload({ status: true, fileName: ' ' });
    }
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.imageUploadBox}>
                {showUpload.status && (
                    <Stack className={classes.container}>
                        <input type="file" accept="application/pdf" className={classes.container__input} onChange={ChangeHandler} />
                        Upload File
                    </Stack>
                )
                }{!showUpload.status && (
                    <Stack className={classes.pdfContainer}>
                        <PictureAsPdfIcon color="error" fontSize="small" />
                        <Typography noWrap className={classes.fileName}>{showUpload.fileName}</Typography>
                        <ClearIcon fontSize="small" onClick={ClearHandler} />
                    </Stack>
                )
                }
            </Box>
            {
                (meta.error) ? (
                    <Typography className={classes.warningText} >{meta.error}</Typography>
                ) : <Typography className={classes.helperText}>Upload pdf (less than 5mb, max one pdf  file  is allowed )</Typography>
            }
        </Box>

    )
}

export default UploadDoc;