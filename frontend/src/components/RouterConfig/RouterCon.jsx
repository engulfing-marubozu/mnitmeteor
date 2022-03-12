import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserDataContext } from "../_ContextFolder/webContext";
import Home from "../HomePage/Home";
import About from "../About/About";
import Discussions from "../Discussions/discussion";
import LostFound from "../Lost&Found/lostFound";
import AproductSellCard from "../SellnowNew/AproductSellCard";
import ProductCard from "../HomePage/Product";
import DiscriptionCard from "../Cards/DiscriptionCard";
import Profile from "../Profile/Profile";
import Adminpanel from "../../AdminPanel/adminpanel";
import Favourites from "../Favourites/Favourites";
import DiscussionForm from "../Discussions/DiscussionForm/discussionForm";
import DiscussionCardArray from "../Discussions/DiscussionPage/_discussionArray";
import LostFoundCardArray from "../Lost&Found/Lost&FoundCard/_lostFoundArray";
import LostFoundForm from "../Lost&Found/lost&foundForm/l&fForm";
import DiscussionMyAnswers from "../Discussions/DiscussionCategories/disMyAnswers";
import DiscussionMyTopics from "../Discussions/DiscussionCategories/disMyTopics";
import DiscussionSavedTopics from "../Discussions/DiscussionCategories/disSavedTopics";
import LostItems from "../Lost&Found/LostFoundCategories/lostItems";
import FoundItems from "../Lost&Found/LostFoundCategories/foundItems";
import LostFoundMyItems from "../Lost&Found/LostFoundCategories/myItems";
function RouterCon() {
  const localUserData = useContext(UserDataContext);
  const isLoggedIn = localUserData?.isLogin;
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
        <Route path="CreateNewTopic" element={isLoggedIn ? <DiscussionForm /> : <Navigate to="/" />} />
        <Route path="MyAnswers" element={isLoggedIn ? <DiscussionMyAnswers /> : <Navigate to="/" />} />
        <Route path="MyTopics" element={isLoggedIn ? <DiscussionMyTopics /> : <Navigate to="/" />} />
        <Route path="SavedTopics" element={isLoggedIn ? <DiscussionSavedTopics /> : <Navigate to="/" />} />
      </Route>
      <Route path="Lost&Found" element={<LostFound />} >
        <Route index element={<LostFoundCardArray />} />
        <Route path="Lost&FoundForm" element={<LostFoundForm />} />
        <Route path="LostItems" element={<LostItems />} />
        <Route path="FoundItems" element={<FoundItems/>} />
        <Route path="MyItems" element ={<LostFoundMyItems/>}/>
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
      <Route path="Adminpanel" element={<Adminpanel />} />
      <Route path="*" element={<div>No Page found </div>} />
    </Routes>
  );
}
export default RouterCon;
