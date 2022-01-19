import React from 'react'
import SellForm from "./SellNow/SellForm";
// import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductSellCard() {
    // const [buttonPop, setButtonPop] = useState(false);
	const alertHandler = (warning) => {
		toast.success(warning, {
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
			<ToastContainer />
			<SellForm
				// trigger={buttonPop}
				// setTrigger={setButtonPop}
				alertSent={alertHandler}
			/>
		</div>
    );
}

export default ProductSellCard;
