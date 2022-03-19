
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../HomePage/Home";
import About from "../About/About";
import Discussions from "../Discussions/discussion";
import LostFound from "../Lost&Found/lostFound";
import AproductSellCard from "../SellnowNew/AproductSellCard";
import ProductCard from "../HomePage/Product";
import DiscriptionCard from "../Cards/DiscriptionCard";
import Profile from "../Profile/Profile";
import AdminPanel from "../../AdminPanel/AdminPanelCard/adminpanel";
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
import { useSelector } from "react-redux"
import SpecificThread from "../Discussions/discussionSpecificThread";
import SpecificLostFound from "../Lost&Found/specificLostFound";
function RouterCon() {

  const localUserData = useSelector((state) => state.loginlogoutReducer);
  // console.log(localUserData);
  const localStorageData = JSON.parse(window.localStorage.getItem('auth'));
  // console.log(localStorageData);
  const isLoggedIn = localStorageData ? localStorageData.isLogin : localUserData.isLogin;

  return (
    <Routes>
      {/* <Route path="/home" element ={<Home/>}/> */}
      <Route path="/" element={<Home />}>
        <Route index element={<ProductCard Category="recommendation" />} />
        <Route path="Product/:category" element={<ProductCard />} />
      </Route>
      <Route path="About" element={<About />} />
      <Route path="Discussions" element={<Discussions />}>
        <Route index element={<DiscussionCardArray />} />
        <Route path=":id" element={<SpecificThread />} />
        <Route path="CreateNewTopic" element={isLoggedIn ? <DiscussionForm /> : <Navigate to="/" />} />
        <Route path="MyTopics" element={isLoggedIn ? <DiscussionMyTopics /> : <Navigate to="/" />} />
        <Route path="SavedTopics" element={isLoggedIn ? <DiscussionSavedTopics /> : <Navigate to="/" />} />
      </Route>
      <Route path="Lost&Found" element={<LostFound />} >
        <Route index element={<LostFoundCardArray />} />
        <Route path=":id" element={<SpecificLostFound />} />
        <Route path="Lost&FoundForm" element={isLoggedIn ? <LostFoundForm /> : <Navigate to="/" />} />
        <Route path="LostItems" element={isLoggedIn ? <LostItems /> : <Navigate to="/" />} />
        <Route path="FoundItems" element={isLoggedIn ? <FoundItems /> : <Navigate to="/" />} />
        <Route path="MyItems" element={isLoggedIn ? <LostFoundMyItems /> : <Navigate to="/" />} />
      </Route>
      <Route
        path="Sellproduct"
        element={isLoggedIn ? <AproductSellCard /> : <Navigate to="/" />}
      />
      <Route
        path="ProductDiscription/:productId"
        element={<DiscriptionCard />}
      />
      <Route
        path="Profile"
        element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
      />
      <Route
        path="Favourites"
        element={isLoggedIn ? <Favourites /> : <Navigate to="/" />}
      />
      <Route path="Adminpanel" element={<AdminPanel />} />
      <Route path="*" element={<div>No Page found </div>} />
    </Routes>
  );
}
export default RouterCon;
