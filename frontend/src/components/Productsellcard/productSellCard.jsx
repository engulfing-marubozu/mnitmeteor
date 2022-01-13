import React from 'react'
import SellForm from "./SellNow/SellForm";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const DUMMY_PRODUCTS = [
// 	{
// 		id: "p1",
// 		title: "ATLAS Cycle",
// 		price: "$200",
// 		imgUri: "https://images.unsplash.com/photo-1572202651953-e9be244dcdc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
// 		isLiked: false,
// 	},
// 	{
// 		id: "p2",
// 		title: "Bleh Bleh",
// 		price: "$200",
// 		imgUri: "https://images.unsplash.com/photo-1509210227342-83cc9fb0e8c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80",
// 		isLiked: false,
// 	},
// 	{
// 		id: "p3",
// 		title: "Bleh Bleh 123",
// 		price: "$200",
// 		imgUri: "https://images.unsplash.com/photo-1541700513212-79f419c0221d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
// 		isLiked: false,
// 	},
// 	{
// 		id: "p4",
// 		title: "Bleh Bleh 6656",
// 		price: "$200",
// 		imgUri: "https://images.unsplash.com/photo-1615102630551-20448282f42a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
// 		isLiked: true,
// 	},
// 	{
// 		id: "p5",
// 		title: "Nvedia RTX 2090 Premium",
// 		price: "$200000",
// 		imgUri: "https://images.unsplash.com/photo-1541261759512-c8295bae066e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
// 		isLiked: false,
// 	},
// ];
function ProductSellCard() {
    const [buttonPop, setButtonPop] = useState(false);
	const alertHandler = () => {
		toast.success("Ad Request Sent", {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<div className="App">
			<ToastContainer />;
			<button onClick={() => setButtonPop(true)}>Sell Now</button>
			<SellForm
				trigger={buttonPop}
				setTrigger={setButtonPop}
				alertSent={alertHandler}
			/>
		</div>
    );
}

export default ProductSellCard;
