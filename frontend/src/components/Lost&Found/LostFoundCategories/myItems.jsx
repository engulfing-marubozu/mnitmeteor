import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import LostFoundSkeleton from "../lostfoundSkeleton";
import LostFoundCard from "../Lost&FoundCard/L&FCard";
import POPUPElement from "../../ModelPopUP/POPUPElement";
import SuccessfulSubmission from "../../ModelPopUP/onFormSubmission";
import { useSelector, useDispatch } from "react-redux";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { lostFoundEmpty } from "../../_EmptySpaces/EmptySvg";
import { lnfPopUp } from "../../../AStatemanagement/Actions/userActions";


function LostFoundMyItems() {
  const [myItems, setMyItems] = useState();
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));
  const token = localUserData.token;
  const dispatch = useDispatch();
  const submitPopUp = useSelector((state) => state.ModelPopUpReducer.lnfPopUp);
  const isLoggedIn = localUserData.isLogin;
  const SubmitPopUpHandler = () => {
    dispatch(lnfPopUp(false));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const axiosPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/lnfmyitems", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        if (isSubscribed) {
          setMyItems(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    axiosPosts();
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(myItems);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {typeof myItems === "undefined" ? (
        Array.from(new Array(3)).map((data, index) => {
          return <LostFoundSkeleton key={index} />;
        })
      ) : myItems.length ? (
        myItems.map((data, index) => {
          if (data) {
            return (
              <LostFoundCard
                key={index}
                data={data}
                setLostFound={setMyItems}
                flag={4}
              />
            );
          } else {
            return null;
          }
        })
      ) : (
        <EmptySpace source={lostFoundEmpty.myItems} />
      )}
      {submitPopUp && isLoggedIn && (
        <POPUPElement
          open={submitPopUp}
          onClose={SubmitPopUpHandler}
          portelId={"portal"}
        >
          <SuccessfulSubmission onClose={SubmitPopUpHandler}>
            what is your name my name is deeepak
          </SuccessfulSubmission>
        </POPUPElement>
      )}
    </motion.div>
  );
}

export default LostFoundMyItems;
