import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import Protected from "./Protected";
import { Login } from "../Login/Login";
import { RouteErrorPage } from "../../Common/RouteErrorPage/RouteErrorPage";
import Sidebar from "../../Common/Sidebar/Sidebar";
import CreateProfile from "../Dashboard/CreateProfile/CretateProfile";
import PageHeader from "../../Common/PageHeader/PageHeader";
import { useState } from "react";
import GetOtp from "../Dashboard/GetOtp/GetOtp";

const isShowSidebar = () => {
  const path = window.location.pathname;
  return path === '/' || path === '/getotp';
}

const AppRoutes = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleEdit = () => {
  };

  const handleSend = () => {
  };
  return (
    <>
      {/* {!isShowSidebar() && <Sidebar open={open} toggleDrawer={toggleDrawer} />} */}
      {!isShowSidebar() && <Sidebar open={open} toggleDrawer={toggleDrawer} />}
      {!isShowSidebar() && <PageHeader />}

      <Router>
        <Routes>
          <Route path="*" element={<RouteErrorPage />} />
          <Route path="/" Component={() => <Login />} />
          <Route path="getotp" Component={() => <GetOtp />} />
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
