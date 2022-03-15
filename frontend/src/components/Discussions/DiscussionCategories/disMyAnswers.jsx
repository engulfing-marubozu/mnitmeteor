import React, { useRef } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function DiscussionMyAnswers() {
  // const ChangeHandler = (event) => {
  //   console.log(event.target.files);
  //   const file=event.target.files[0];
  //   const reader=new FileReader();
  //   reader.onload=(event)=>{
  //    console.log(reader.result);
  //    console.log(JSON.stringify(reader.result))
  //   }
  //   reader.readAsDataURL(file);

  //   //  console.log(event.target.value)
  // }
  useEffect(()=>{
    const call =async ()=>{
const  token =  JSON.parse(window.localStorage.getItem("auth")).token

      try {
        console.log(token);
       
         const response = await axios.post(
          "http://localhost:5000/send_commented_replied_threads",
         {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
         console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    call();

},[])
  return (
    <div>
      {/* <form onSubmit={}> */}
        {/* <input type="file" onChange={ChangeHandler}/>
          <button type='submit'>Submit</button> */}
      {/* </form> */}
      DiscussionMyAnswers
    </div>
  )
}
