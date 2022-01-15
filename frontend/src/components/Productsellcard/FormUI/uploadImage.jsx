
import ImageUpload from 'react-images-upload';

const UploadImage = (props) => {

	return (
		<ImageUpload
			withIcon={false}
			onChange={props.OnDrop}
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
