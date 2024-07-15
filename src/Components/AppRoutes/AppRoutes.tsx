import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import Protected from "./Protected";
import { Login } from "../Login/Login";
import { RouteErrorPage } from "../../Common/RouteErrorPage/RouteErrorPage";
import Sidebar from "../../Common/Sidebar/Sidebar";
import Getotp from "../Dashboard/GetOTP/Getotp";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<RouteErrorPage />} />
        <Route path="/" Component={() => <Login />} />
        <Route path="sidebar" Component={() => <Sidebar />} />
        <Route path="getotp" Component={() => <Getotp />} />
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
