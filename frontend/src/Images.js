import React, { useEffect, useState } from 'react';
import Product from './Product';

export default function Images() {
    const [imageData, setImageData] = useState();
    var arr = [];
    const loadImages = async () => {
        try {
            // arr = [];
            const res = await fetch('http://localhost:3002/');
            console.log(res);
            const data = await res.json();
            console.log(data);
            setImageData(data);
            
            Object.keys(data).forEach(function(k){
                arr.push(k);
            });
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
                {arr[0] && <h1> hello there {arr[0].rid} </h1>}
                {/* {arr.map((item, index) => (
                        <Product
                            key={index}
                            cloudLink={item.cloudlink}
                            rid={item.rid}
                        />
                    ))} */}
            </div>
        </div>
    );
}