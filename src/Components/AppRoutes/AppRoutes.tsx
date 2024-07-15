import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import Protected from "./Protected";
import { Login } from "../Login/Login";
import { RouteErrorPage } from "../../Common/RouteErrorPage/RouteErrorPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<RouteErrorPage />} />
        <Route path="/" Component={() => <Login />} />
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
