import React from "react";
import ImageUploading from "react-images-uploading";
import { CustomButton } from "./PreviewImage";
import PreviewImage from "./PreviewImage";
export default function UploadImage() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 4;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div className="upload__image-wrapper">
          <CustomButton
            style={isDragging ? { color: "red" } : undefined}
            onClick={onImageUpload}
            {...dragProps}
          >
            Choose Images
          </CustomButton>
          &nbsp;
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <PreviewImage
                imgSrc={image["data_url"]}
                onClickUpdate={onImageUpdate}
                onClickRemove={onImageRemove}
                imgIndex={index}
              />
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
}
// VAlidation====================================
// {({ imageList, onImageUpload, onImageRemoveAll, errors }) => (
//     errors && <div>
//       {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
//       {errors.acceptType && <span>Your selected file type is not allow</span>}
//       {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
//       {errors.resolution && <span>Selected file is not match your desired resolution</span>}
//     </div>
//   )}

// DRAG AND DROP/

//

//   {({ imageList, dragProps, isDragging }) => (
//     <div {...dragProps}>
//       {isDragging ? "Drop here please" : "Upload space"}
//       {imageList.map((image, index) => (
//         <img key={index} src={image.data_url} />
//       ))}
//     </div>
//   )}
