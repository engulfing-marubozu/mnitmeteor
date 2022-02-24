import React from "react";
import ImageUploading from "react-images-uploading";
import { CustomButton } from "./PreviewImage";
import PreviewImage from "./PreviewImage";
export default function UploadImage(props) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 4;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    props.onDrop(imageList);
  };

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
      acceptType={['jpg', 'png', 'jpeg', 'webp',"jfif"]	}
      maxFileSize={5*1024*1024}
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
          {errors && (
            <div>
              {errors.maxNumber && (
                <span style={{ color: "	#FF0000" }}>
                  Number of selected images exceed maxNumber
                </span>
              )}
              {errors.acceptType && (
                <span>Your selected file type is not allowed</span>
              )}
              {errors.maxFileSize && (
                <span>Selected file size exceed maxFileSize</span>
              )}
              {errors.resolution && (
                <span>Selected file is not match your desired resolution</span>
              )}
            </div>
          )}
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
          &nbsp;
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
        </div>
      )}
    </ImageUploading>
  );
}
