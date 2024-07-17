import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import Protected from "./Protected";
import { Login } from "../Login/Login";
import { RouteErrorPage } from "../../Common/RouteErrorPage/RouteErrorPage";
import { OtpVerify } from "../Dashboard/OtpVerification/OtpVerify";
import { PickUpForm } from "../Dashboard/PickupMatchForm/PickUpForm";
import Sidebar from "../../Common/Sidebar/Sidebar";
import GetOtp from "../Dashboard/GetOtp/GetOtp";
import { useState } from "react";
import PageHeader from "../../Common/PageHeader/PageHeader";
import CreateProfile from "../Dashboard/CreateProfile/CretateProfile";

const isShowSidebar = () => {
  const path = window.location.pathname;
  return path === '/' || path === '/getotp' || path === '/otpverify';
}

const AppRoutes = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
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
      {!isShowSidebar() && <Sidebar open={open} toggleDrawer={toggleDrawer} />}
      {!isShowSidebar() && <PageHeader toggleDrawer={toggleDrawer} />}
      <Router>
        <Routes>
          <Route path="*" element={<RouteErrorPage />} />
          <Route path="/" Component={() => <Login />} />
          <Route path="getotp" Component={() => <GetOtp />} />
          <Route path="/otpverify" element={<OtpVerify />} />
          <Route path="/createprofile" element={<CreateProfile />} />
          <Route path="/pickupform" Component={() => <PickUpForm />} />


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
