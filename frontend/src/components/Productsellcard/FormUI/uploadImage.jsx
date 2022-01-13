import React, { useState } from "react";
import ImageUploading from 'react-images-uploading';

const UploadImage = (props) => {
	const [pictures, setPictures] = useState([]);
	console.log(pictures);
	const onDrop = (picture) => {
		setPictures([...pictures, picture]);
	};

	return (
		<ImageUploading
			{...props}
			withIcon={false}
			onChange={onDrop}
			imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
			maxFileSize={5242880}
			withPreview={true}
			label=""
			singleImage={true}
			fileContainerStyle={{ uploadIcon: { display: "none" } }}
		/>
	);
};

export default UploadImage;
