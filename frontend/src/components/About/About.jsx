// import React from "react";
// import SellFormNew from "../SellnowNew/sellnowform";
// function About() {
//   return (
//     <>
//       <SellFormNew />
//     </>
//   );
// }

// export default About;
import React ,{useRef,useState} from "react";

// import TextareaAutosize from "@mui/material/TextareaAutosize";
import {Button, Typography} from "@mui/material"
export default function About() {
  const [text ,setText]=useState();
  const inputRef=useRef();
 const clickHandler =()=>{
   console.log(inputRef);
   setText(inputRef.current.value);
 }
  return (
    <>
      {/* <TextareaAutosize
        placeholder="Empty"
        style={{ width: 200 }}
        ref={inputRef} 
      /> */}
      <Typography>{text}</Typography>
      <textarea  row='8' ref ={inputRef}></textarea>
      <Button onClick={clickHandler}>click</Button>
    </>
  );
}
