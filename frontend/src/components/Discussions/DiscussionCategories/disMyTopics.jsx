import React, { useEffect, useState } from "react";
import axios from "axios";
import DiscussionSkeleton from "../discussionSkeleton";
import DiscussionCard from "../DiscussionPage/discussionCard";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { DiscussionEmpty } from "../../_EmptySpaces/EmptySvg";
import { useSelector, useDispatch } from "react-redux";
import { forumPopUp } from "../../../AStatemanagement/Actions/userActions";
import SuccessfulSubmission from "../../ModelPopUP/onFormSubmission";
import POPUPElement from "../../ModelPopUP/POPUPElement";
export default function DiscussionMyTopics() {
  const [myTopics, setMyTopics] = useState();
  const dispatch = useDispatch();
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));
  const submitPopUp = useSelector((state) => state.ModelPopUpReducer.forumPopUp);
  const isLoggedIn = localUserData.isLogin;
  const SubmitPopUpHandler = () => {
    dispatch(forumPopUp(false));
  };
  // =================================================================================
  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    async function call() {
      console.log("deepak");
      const response = await axios.get(
        "http://localhost:5000/fetch_own_threads",
        {
          headers: {
            authorization: `Bearer ${localUserData?.token}`,
          },
        }
      );
      if (isSubscribed) {
        console.log(response.data);
        setMyTopics(response.data.user_specific_threads);
      }
    }
    call();
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(myTopics)

  // ====================================================================================
  return (
    <>
      {typeof myTopics === "undefined" ? (
        Array.from(new Array(4)).map((data, index) => {
          return <DiscussionSkeleton key={index} />;
        })
      ) : myTopics.length > 0 ? (
        myTopics.map((data, index) => {
          if (data) {
            return (
              <DiscussionCard
                key={index}
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
    </>
  );
}
