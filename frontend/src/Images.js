import { set } from 'mongoose';
import React, { useEffect, useState } from 'react';
import Product from './Product';

export default function Images() {
    const [imageData, setImageData] = useState();
    const [imgData,setImgData] = useState();
    const [query,setQuery] = useState();
    const [count,setCount] = useState();
    const [dbData,setDbData] = useState([]);
    // const [dataa,setDataa] = useState();
    var arr = [];
    const loadImages = async () => {
        try {
            arr = [];
            const res = await fetch('http://localhost:3002/');
            console.log(res);
            const data = await res.json();
            console.log(data);
            //now we got json in data!
            // Object.keys(data).map((id,i)=>{
            //     arr.push(id);
            // });
            setDbData(data);
            setQuery(arr);
            setCount(Object.keys(data).length);
            setImageData(data);
            console.log("imags loaded");
        } catch (err) {
            console.error(err);
        }
    };
    // loadImages();
    useEffect(() => {
        loadImages();
    }, []);
    // var arr = [];

    // console.log(arr[0]);
    // console.log();
    return (
        <div>
            <h1 className="title">Gallery</h1>
            <div className="gallery">
               {dbData.map(x =>{
                   return(
                       <Product 
                       rid = {x.rid}
                       cloudlink = {x.cloudlink}
                       sid = {x.id}
                       />
                   )
               })}

               
                
            </div>
        </div>
    );
}