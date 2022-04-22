import React, { useRef, useState, useEffect } from 'react'
import LostFoundPanel from '../AdminPanelCard/lostfoundPanel';
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
            await axios.post("http://localhost:5000/adminresponse", {
                to_approve: true,
                posted_by: cardData.posted_by,
                _id: cardData._id,
            });
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
            await axios.post("http://localhost:5000/adminresponse", {
                to_approve: false,
                posted_by: cardData.posted_by,
                _id: cardData._id,
            });
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
                    "http://localhost:5000/sendfalseitems"
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
                lfData.map((product, index) => {
                    return (
                        <LostFoundPanel
                            key={index}
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