import React, { useState } from 'react';
// import Alert from '../components/Alert';

export default function Uploadd() {
    // const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [selectedFileText, setSelectedFileText] = useState('');
    // const [successMsg, setSuccessMsg] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        setSelectedFileText(e.target.value);
        const file = e.target.files[0];
        setSelectedFile(file);
        previewFile(file);
        // setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();

        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            // setErrMsg('something went wrong!');
        };
        setSelectedFileText('');
        setSelectedFile();
        setPreviewSource('');
    };
    const uploadImage = async (base64EncodedImage) => {
        console.log("Here is your image: \n");
        console.log(base64EncodedImage);
        const sessionID = Math.floor((Math.random() * 1000) + 1000);
        const rndID = Math.floor((Math.random() * 1000) + 1000);
        var url = 'http://localhost:3001/api/upload';
        try{ await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({data: base64EncodedImage,id: sessionID,rndID: rndID }) // body data type must match "Content-Type" header
          });
        }catch{
            console.log("Some error uploading Items images, bhagwan jane \n");
        }
        //i got my image ab backend pe bhejna hai 
    }
    
    return (
        <div>
            <h1 className="title">Upload an Image</h1>
            {/* <Alert msg={errMsg} type="danger" /> */}
            {/* <Alert msg={successMsg} type="success" /> */}
            <form onSubmit={handleSubmitFile} className="form">
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={selectedFileText}
                    className="form-input"
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
    );
}