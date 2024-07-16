import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import Protected from "./Protected";
import { Login } from "../Login/Login";
import { CommonButton } from "../../Common/Button/CommonButton";
import { CommonCard } from "../../Common/Cards/CommonCard";
import { RouteErrorPage } from "../../Common/RouteErrorPage/RouteErrorPage";
import { OtpVerify } from "../Dashboard/OtpVerification/OtpVerify";
import { PickUpForm } from "../../Common/PickupMatchForm/PickUpForm";
import Sidebar from "../../Common/Sidebar/Sidebar";
import Getotp from "../Dashboard/GetOTP/Getotp";

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
    <Router>
      <Routes>
        <Route path="*" element={<RouteErrorPage />} />
        <Route path="/" Component={() => <Login />} />
        <Route path="/commoncard"  element={
            <CommonCard
              sport=" Pickleball"
              format=" 1v1"
              location=" http://example.com"
              datetime=" 23/8/2024 | 08.00pm"
              skillLevel=" Beginner"
              onEdit={handleEdit}
              onSend={handleSend}
            />
          }  />
          <Route path="/otpverify" element={<OtpVerify />} />
          <Route path="sidebar" Component={() => <Sidebar />} />
          <Route path="getotp" Component={() => <Getotp />} />
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
  );
};

export default AppRoutes;
