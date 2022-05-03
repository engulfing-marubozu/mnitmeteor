import React, { useRef, useState, useEffect } from 'react'
import LostFoundPanel from '../AdminPanelCard/lostfoundPanel';
import { socket } from '../../components/Navbar/navbar';
// import { socket } from '../../components/Navbar/navbar';
import axios from "axios";

function FetchLostFound() {
    const [lfData, setlfData] = useState();
    const [lfFlag, setlfFlag] = useState(true);
    const mountedRef = useRef(true);
    // ======================================================
    useEffect(() => {
        return () => { mountedRef.current = false };
    }, [])

    //    =============================================================
    const ApproveRequestLF = async (cardData, handleClose, handleExpandClick) => {
        handleClose();
        try {
          const response =  await axios.post(`${process.env.REACT_APP_API}/adminresponse`, {
                to_approve: true,
                posted_by: cardData.posted_by,
                _id: cardData._id,
            });
            if (response.data === "product approved") {
                socket.emit("admin approve event");
                socket.emit("admin decline/approve/interested event", cardData.posted_by);
            }
            if (mountedRef.current) {
                handleExpandClick();
                setlfFlag(!lfFlag);
            }
        } catch (err) {
            console.log(err);
        }

    };
    const DeclineRequestLF = async (cardData, handleClose, handleExpandClick) => {
        handleClose();
        try {
           const response = await axios.post("process.env.REACT_APP_API/adminresponse", {
                to_approve: false,
                posted_by: cardData.posted_by,
                _id: cardData._id,
            });
            if (response.data === "product Ad request declined") {
                socket.emit("admin decline/approve/interested event",  cardData.posted_by);
            }
            if (mountedRef.current) {
                handleExpandClick();
                setlfFlag(!lfFlag);
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    //  ================================================================================================
    useEffect(() => {
        let isSubscribed = true;
        const admin_lf_load = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API}/sendfalseitems`
                );
                if (isSubscribed) {
                    setlfData(response.data);
                }
            }
            catch (err) {
                console.log(err);
            }
        };
        admin_lf_load();
        return () => { isSubscribed = false };
    }, [lfFlag])


    return (
        <>
            {
                lfData &&
                lfData.map((product) => {
                    return (
                        <LostFoundPanel
                            key={product._id}
                            data={product}
                            ApproveRequest={ApproveRequestLF}
                            DeclineRequest={DeclineRequestLF}
                        />
                    );
                })
            }
        </>

    )
}
export default FetchLostFound;