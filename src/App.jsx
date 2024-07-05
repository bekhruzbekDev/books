import { Route, Routes } from "react-router-dom";
import "./style/main.css";
import "./style/reset.css";
import { Login } from "./page/Login/Login";
import { Home } from "./page/Home/Home";
import { Layout } from "./components/Layouts";
import { Private } from "./components/Route/Private";
import { NotFound } from "./components/404";
export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Private>
            <Layout />
          </Private>
        }
      >
        <Route index element={<Private>{<Home />}</Private>} />
        <Route
          path="home"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
