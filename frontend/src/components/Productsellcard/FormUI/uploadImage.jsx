import React, { useState } from "react";
import ImageUpload from 'react-images-upload';

const UploadImage = (props) => {
	const [pictures, setPictures] = useState([]);
	console.log(pictures);
	const onDrop = (picture) => {
		setPictures([...pictures, picture]);
	};

	return (
		<ImageUpload
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
