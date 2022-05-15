import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../HomePage/Home";
import Discussions from "../Discussions/discussion";
import LostFound from "../Lost&Found/lostFound";
import AproductSellCard from "../SellnowNew/AproductSellCard";
import BooksCard from "../HomePage/productCategory/books";
import CycleCard from "../HomePage/productCategory/cycle";
import ElectronicsCard from "../HomePage/productCategory/electronics";
import UniformCard from "../HomePage/productCategory/uniform";
import OthersCard from "../HomePage/productCategory/others";
import RenderDiscriptionCard from "../Cards/DiscriptionCard/renderDiscriptionCard";
import Profile from "../Profile/Profile";
import Favourites from "../Favourites/Favourites";
import DiscussionForm from "../Discussions/DiscussionForm/discussionForm";
import DiscussionCardArray from "../Discussions/DiscussionPage/_discussionArray";
import LostFoundCardArray from "../Lost&Found/Lost&FoundCard/_lostFoundArray";
import LostFoundForm from "../Lost&Found/lost&foundForm/l&fForm";
import DiscussionMyTopics from "../Discussions/DiscussionCategories/disMyTopics";
import DiscussionSavedTopics from "../Discussions/DiscussionCategories/disSavedTopics";
import LostCardArray from "../Lost&Found/LostFoundCategories/lostItems";
import FoundCardArray from "../Lost&Found/LostFoundCategories/foundItems";
import LostFoundMyItems from "../Lost&Found/LostFoundCategories/myItems";
import SpecificThread from "../Discussions/discussionSpecificThread";
import SpecificLostFound from "../Lost&Found/specificLostFound";
import AdminPortel from "../../AdminPanel/AdminPortel/adminportel";
import AdminLogin from "../../AdminPanel/AdminPortel/adminLogin";
import AdminPanel from "../../AdminPanel/adminpanel";
import ProductNew from "../HomePage/productnew";
import DevelopersNote from "../Links/developersnote";
import AdminProtected from "./adminRoute/adminProtected";
import AdminLoginCheck from "./adminRoute/adminloginCheck";
import ProtectedRoute from "./protectedRoute";
import PageNotFound from "./pageNotFound";
function RouterCon() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ProductNew />} />
          <Route path="product/books" element={<BooksCard />} />
          <Route path="product/cycle" element={<CycleCard />} />
          <Route path="product/electronics" element={<ElectronicsCard />} />
          <Route path="product/uniform" element={<UniformCard />} />
          <Route path="product/others" element={<OthersCard />} />
        </Route>
        <Route path="discussions" element={<Discussions />}>
          <Route index element={<DiscussionCardArray />} />
          <Route path=":threadId" element={<SpecificThread />} />
          <Route
            path="createnewtopic"
            element={<ProtectedRoute Component={DiscussionForm} />}
          />
          <Route
            path="mytopics"
            element={<ProtectedRoute Component={DiscussionMyTopics} />}
          />
          <Route
            path="savedtopics"
            element={<ProtectedRoute Component={DiscussionSavedTopics} />}
          />
        </Route>
        <Route path="lost&found" element={<LostFound />}>
          <Route index element={<LostFoundCardArray />} />
          <Route path=":lnfCardId" element={<SpecificLostFound />} />
          <Route path="lostitems" element={<LostCardArray />} />
          <Route path="founditems" element={<FoundCardArray />} />
          <Route
            path="lost&foundform"
            element={<ProtectedRoute Component={LostFoundForm} />}
          />
          <Route
            path="myitems"
            element={<ProtectedRoute Component={LostFoundMyItems} />}
          />
        </Route>
        <Route
          path="sellproduct"
          element={<ProtectedRoute Component={AproductSellCard} />}
        />
        <Route
          path="productdescription/:productId"
          element={<RenderDiscriptionCard />}
        />
        <Route
          path="profile"
          element={<ProtectedRoute Component={Profile} />}
        />
        <Route
          path="favourites"
          element={<ProtectedRoute Component={Favourites} />}
        />
        <Route path="developernotes" element={<DevelopersNote />} />
        <Route
          path="adminportel"
          element={<ProtectedRoute Component={AdminPortel} />}
        >
          <Route index element={<AdminProtected Component={AdminPanel} />} />
          <Route
            path="adminlogin"
            element={<AdminLoginCheck Component={AdminLogin} />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
export default RouterCon;
