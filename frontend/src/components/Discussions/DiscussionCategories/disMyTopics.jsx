import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import DiscussionSkeleton from "../discussionSkeleton";
import DiscussionCard from "../DiscussionPage/discussionCard";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { DiscussionEmpty } from "../../_EmptySpaces/EmptySvg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forumPopUp } from "../../../AStatemanagement/Actions/userActions";
import FormSubmission from "../../ModelPopUP/onFormSubmission";
import POPUPElement from "../../ModelPopUP/POPUPElement";
import { LogoutUser } from "../../../AStatemanagement/Actions/userActions";
import stsvg from "./box.svg"

export default function DiscussionMyTopics() {
  const [myTopics, setMyTopics] = useState();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;
  const isLogin = userAuthData?.oamp;
  const submitPopUp = useSelector(
    (state) => state.ModelPopUpReducer.forumPopUp
  );
  const SubmitPopUpHandler = () => {
    dispatch(forumPopUp(false));
  };
  // =================================================================================
  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    async function call() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/fetch_own_threads`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (isSubscribed) {
          setMyTopics(response.data.user_specific_threads);
        }
      } catch (err) {
        console.log(err);
        if (err?.response?.status === 403) {
          dispatch(LogoutUser());
          Navigate(`/`);
        }
      }
    }
    call();
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // ====================================================================================
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {typeof myTopics === "undefined" ? (
        Array.from(new Array(4)).map((data, index) => {
          return <DiscussionSkeleton key={index} />;
        })
      ) : myTopics.length > 0 ? (
        myTopics.map((data) => {
          if (data) {
            return (
              <DiscussionCard
                showDelete={true}
                key={data._id}
                data={data}
                setThread={setMyTopics}
                flag={3}
              />
            );
          } else {
            return null;
          }
        })
      ) : (
        <EmptySpace source={DiscussionEmpty.myTopics} />
      )}
      {submitPopUp && isLogin && (
        <POPUPElement
          open={submitPopUp}
          onClose={SubmitPopUpHandler}
          portelId={"portal"}
        >
          <FormSubmission
            onClose={SubmitPopUpHandler}
            source={
              "https://res.cloudinary.com/mnitmarket/image/upload/v1652280474/toadmin_ehiskp.svg"
            }
          >
            Hola! Thanks for creating new topic! To ensure that our community
            remains a safe place, it will be verified before showing it to
            community.
          </FormSubmission>
        </POPUPElement>
      )}
    </motion.div>
  );
}
