import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import Protected from "./Protected";
import { Login } from "../Login/Login";
import { CommonButton } from "../../Common/Button/CommonButton";
import { CommonCard } from "../../Common/Cards/CommonCard";
import { RouteErrorPage } from "../../Common/RouteErrorPage/RouteErrorPage";
import Sidebar from "../../Common/Sidebar/Sidebar";
import Getotp from "../Dashboard/GetOTP/Getotp";
import CreateProfile from "../Dashboard/Create Profile/Cretateprofile";
import PageHeader from "../../Common/PageHeader/PageHeader";

const isShowSidebar = () => {
  const path = window.location.pathname;
  return path === '/' || path === '/getotp';
}

const AppRoutes = () => {
  const handleEdit = () => {
    // Handle edit action
    console.log('Edit clicked');
  };

  const handleSend = () => {
    // Handle send action
    console.log('Send clicked');
  };
  return (
    <>

      {!isShowSidebar() && <Sidebar />}
      {!isShowSidebar() && <PageHeader />}

      <Router>
        <Routes>
          <Route path="*" element={<RouteErrorPage />} />
          <Route path="/" Component={() => <Login />} />
          <Route path="getotp" Component={() => <Getotp />} />
          <Route path="creteprofile" Component={() => <CreateProfile />} />
          <Route
            path="/dashboard"
            Component={() => (
              <Protected>
                <Dashboard />
              </Protected>
            )}
          />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
