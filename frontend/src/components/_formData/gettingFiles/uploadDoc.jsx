
import { useFormikContext,useField } from 'formik';
import React from 'react'

function UploadDoc({ name,...otherProps }) {
    const {setFieldValue }=useFormikContext();
    const [field,meta]=useField(name);

    const ChangeHandler = (event) => {
        console.log(event.target.files);
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            console.log(reader.result);
            setFieldValue(name,reader.result)
        }
        reader.readAsDataURL(file);
        //  console.log(event.target.value)
    }
    

    return (
        <div>
            {/* <form onSubmit={ }> */}
            <input type="file" onChange={ChangeHandler} />
            {/* <button type='submit'>Submit</button> */}
            {/* </form> */}
        </div>
    )
}

export default UploadDoc;