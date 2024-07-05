import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
}
