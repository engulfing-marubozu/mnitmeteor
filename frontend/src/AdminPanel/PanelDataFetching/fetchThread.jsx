
import React, { useState, useRef, useEffect } from "react";
import ThreadPanel from "../AdminPanelCard/threadPanel";
import { socket } from '../../components/Navbar/navbar';
import axios from "axios";

export default function FetchThread() {

    const [threadData, setThreadData] = useState();
    const [tflag, settflag] = useState(true);
    const mountedRef = useRef(true);
    // ================================================================
    useEffect(() => {
        return () => { mountedRef.current = false };
    }, [])

    // ====================================================================================
    const ApproveRequestThread = async (cardData, handleClose, handleExpandClick) => {
        handleClose();
        try {
        const response =     await axios.post("http://localhost:5000/handle_admin_thread", {
                to_approve: true,
                posted_by: cardData.posted_by,
                _id: cardData._id,
            });
            
            if (response.data === "product approved") {
                console.log("bleh");
                socket.emit("admin approve event");
                socket.emit("admin decline/approve/interested event", cardData.posted_by);
            }
            if (mountedRef.current) {
                handleExpandClick();
                settflag(!tflag);

            }
        } catch (err) {
            console.log(err);
        }

    };
    const DeclineRequestThread = async (cardData, handleClose, handleExpandClick) => {
        handleClose();
        try {
             const response = 
            await axios.post("http://localhost:5000/handle_admin_thread", {
                to_approve: false,
                posted_by: cardData.posted_by,
                _id: cardData._id,
            });
            // console.log(response)
            console.log(response);
            if (response.data === "product Ad request declined") {
                socket.emit("admin decline/approve/interested event",  cardData.posted_by);
            }
            if (mountedRef.current) {
                handleExpandClick();
                settflag(!tflag);

            }
        }
        catch (err) {
            console.log(err);
        }
    };
    // lf get code: "http://localhost:5000/sendfalseitems"
    // post code http://localhost:5000/adminresponse

    // =======================================================================================================
    useEffect(() => {
        let isSubscribed = true;
        const admin_thread_load = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/fetch_false_threads"
                );
                if (isSubscribed) {
                    setThreadData(response.data);
                }
            }
            catch (err) {
                console.log(err);
            }
        };
        admin_thread_load();
    }, [tflag])


    // ==========================================================================================================
    return (
        <>
            {
                threadData &&
                threadData.map((product, index) => {
                    return (
                        <ThreadPanel
                            key={index}
                            data={product}
                            ApproveRequest={ApproveRequestThread}
                            DeclineRequest={DeclineRequestThread}
                        />
                    );
                })
            }
        </>
    );
}




