import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Home from "../HomePage/Home";
import Discussions from "../Discussions/discussion";
import LostFound from "../Lost&Found/lostFound";
import AproductSellCard from "../SellnowNew/AproductSellCard";
import ProductCard from "../HomePage/Product";
import RenderDiscriptionCard from "../Cards/DiscriptionCard/renderDiscriptionCard";
import Profile from "../Profile/Profile";
// import AdminPanel from "../../AdminPanel/adminpanel";
import Favourites from "../Favourites/Favourites";
import DiscussionForm from "../Discussions/DiscussionForm/discussionForm";
import DiscussionCardArray from "../Discussions/DiscussionPage/_discussionArray";
import LostFoundCardArray from "../Lost&Found/Lost&FoundCard/_lostFoundArray";
import LostFoundForm from "../Lost&Found/lost&foundForm/l&fForm";
import DiscussionMyTopics from "../Discussions/DiscussionCategories/disMyTopics";
import DiscussionSavedTopics from "../Discussions/DiscussionCategories/disSavedTopics";
import LostItems from "../Lost&Found/LostFoundCategories/lostItems";
import FoundItems from "../Lost&Found/LostFoundCategories/foundItems";
import LostFoundMyItems from "../Lost&Found/LostFoundCategories/myItems";
import SpecificThread from "../Discussions/discussionSpecificThread";
import SpecificLostFound from "../Lost&Found/specificLostFound";
import AdminPortel from "../../AdminPanel/AdminPortel/adminportel";
import AdminLogin from "../../AdminPanel/AdminPortel/adminLogin";
import AdminPanel from "../../AdminPanel/adminpanel";
// import DeveloperNotes from "../Links/developerNotes";
function RouterCon() {
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const localStorageData = JSON.parse(window.localStorage.getItem("auth"));
  const isLoggedIn = localStorageData
    ? localStorageData.isLogin
    : localUserData.isLogin;

  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ProductCard category="recommendation" />} />
          <Route path="product/:category" element={<ProductCard />} />
        </Route>
        <Route path="discussions" element={<Discussions />}>
          <Route index element={<DiscussionCardArray />} />
          <Route path=":threadId" element={<SpecificThread />} />
          <Route
            path="createnewtopic"
            element={isLoggedIn ? <DiscussionForm /> : <Navigate to="/" />}
          />
          <Route
            path="mytopics"
            element={isLoggedIn ? <DiscussionMyTopics /> : <Navigate to="/" />}
          />
          <Route
            path="savedtopics"
            element={
              isLoggedIn ? <DiscussionSavedTopics /> : <Navigate to="/" />
            }
          />
        </Route>
        <Route path="lost&found" element={<LostFound />}>
          <Route index element={<LostFoundCardArray />} />
          <Route path=":lnfCardId" element={<SpecificLostFound />} />
          <Route path="lostitems" element={<LostItems />} />
          <Route path="founditems" element={<FoundItems />} />
          <Route
            path="lost&foundform"
            element={isLoggedIn ? <LostFoundForm /> : <Navigate to="/" />}
          />
          <Route
            path="myitems"
            element={isLoggedIn ? <LostFoundMyItems /> : <Navigate to="/" />}
          />
        </Route>
        <Route
          path="sellproduct"
          element={isLoggedIn ? <AproductSellCard /> : <Navigate to="/" />}
        />
        <Route
          path="productdiscription/:productId"
          element={<RenderDiscriptionCard />}
        />
        <Route
          path="profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
        />
        <Route
          path="favourites"
          element={isLoggedIn ? <Favourites /> : <Navigate to="/" />}
        />
        {/* <Route path="developernotes" element={<DeveloperNotes />} /> */}
        <Route path="adminportel" element={<AdminPortel />}>
          <Route index element={<AdminLogin />} />
          <Route path="adminpanel" element={<AdminPanel />} />
        </Route>
        <Route path="*" element={<div>No Page found </div>} />
      </Routes>
    </AnimatePresence>
  );
}
export default RouterCon;
