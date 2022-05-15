import React, { useRef, useState, useEffect } from 'react'
import SellingPanel from '../AdminPanelCard/sellingPanel';
import { socket } from '../../components/Navbar/navbar';
import axios from "axios";

function FetchSellProd() {

    const [sellData, setSellData] = useState();
    const [sellFlag, setSellFlag] = useState(true);
    const mountedRef = useRef(true);

    useEffect(() => {
        return () => { mountedRef.current = false };
    }, [])
    // =========================================================================================
    const ApproveRequest = async (cardData, handleClose, handleExpandClick) => {
        handleClose();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/admin_response`, {
                id: cardData._id,
                response: true,
            });
            
            if (response.data === "product approved") {
                socket.emit("admin approve event");
                socket.emit("admin decline/approve/interested event", cardData.posted_by);
            }
            if (mountedRef.current) {
                handleExpandClick();
                setSellFlag(!sellFlag);

            }
        } catch (err) {
            console.log(err);
        }

    };
    const DeclineRequest = async (cardData, handleClose, handleExpandClick) => {
        handleClose();
        const user_id = cardData.posted_by;
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/admin_response`, {
                id: cardData._id,
                response: false,
            });
            if (response.data === "product Ad request declined") {
                socket.emit("admin decline/approve/interested event", user_id);
            }
            if (mountedRef.current) {
                handleExpandClick();
                setSellFlag(!sellFlag);
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    // ================================================================================================
    useEffect(() => {
        let isSubscribed = true;
        const admin_post_load = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API}/admin_postLoad`
                );
                if (isSubscribed) {
                    setSellData(response.data.data);
                }

            } catch (err) {
                console.log(err);
            }
        };
        admin_post_load();
        return () => { isSubscribed = false }
    }, [sellFlag])
    // =======================================================================================================
    return (
        <>
            {
                sellData &&
                sellData.map((product) => {
                    return (
                        <SellingPanel
                            key={product._id}
                            data={product}
                            ApproveRequest={ApproveRequest}
                            DeclineRequest={DeclineRequest}
                        />
                    );
                })
            }
        </>
    )
}

export default FetchSellProd;