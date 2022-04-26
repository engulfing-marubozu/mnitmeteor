import React from "react";
import ImageUploading from "react-images-uploading";
import { useStyles } from "../FormUI/stylingComponent";
import { CustomButton } from "./PreviewImage";
import PreviewImage from "./PreviewImage";
import { useField, useFormikContext } from "formik";
import { Box, Typography } from "@mui/material";


export default function UploadImage(props) {
  const { setFieldValue } = useFormikContext();
  const [, meta] = useField(props.name);
  const [images, setImages] = React.useState([]);
  const maxNumber = 4;

  const onChange = (imageList, addUpdateIndex) => {
    setFieldValue(props.name, imageList);
    setImages(imageList);
    props.onDrop(imageList);
  };
  const classes = useStyles(meta);
  return (
    <ImageUploading
      inputProps={{ name: 'images' }}
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
      acceptType={['jpg', 'png', 'jpeg', 'webp', "jfif"]}
      maxFileSize={5 * 1024 * 1024}
    >
      {({
        imageList,
        onImageUpload,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
        errors,
      }) => (
        <div>
          <Box className={classes.imageUploadBox}>
            <div style={{ margin: "0px auto " }}>
              <CustomButton
                type="button"
                style={
                  (isDragging ? { color: "red" } : undefined, { margin: "10px" })
                }
                onClick={onImageUpload}
                {...dragProps}
              >
                Choose Images
              </CustomButton>
            </div>
            {/* &nbsp; */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {imageList.map((image, index) => (
                <div key={index}>
                  <PreviewImage
                    imgSrc={image["data_url"]}
                    onClickUpdate={onImageUpdate}
                    onClickRemove={onImageRemove}
                    imgIndex={index}
                  />
                </div>
              ))}
            </div>
          </Box>
          {errors ? (
            <div>
              {errors && errors.maxNumber && (
                <Typography className={classes.warningText} >Number of selected images exceed maxNumber</Typography>)
              }
              {errors && errors.acceptType && (
                <Typography className={classes.warningText} > Your selected file type is not allowed</Typography>
              )}
              {errors && errors.maxFileSize && (
                <Typography className={classes.warningText} > Selected file size exceed maxFileSize</Typography>
              )}
            </div>
          ) : (meta.error && meta.touched) ? (
            <Typography className={classes.warningText} >{meta.error}</Typography>
          ) : <Typography className={classes.helperText}>Upload Image (less than 5mb, accepted: .jpg, .png, jpeg,webp,jfif , max 4 images)</Typography>
          }
        </div>
      )
      }
    </ImageUploading >
  );
}
