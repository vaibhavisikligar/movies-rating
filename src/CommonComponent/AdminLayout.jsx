import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function AdminLayout({ children }) {
  const { menuopen } = useSelector((state) => state.menu);
  const [loginpage, setloginpage] = useState(false);
  const [signup, setsinguppage] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setloginpage(true);
      setsinguppage(true);
    } else {
      setloginpage(false);
      setsinguppage(false);
    }
  }, [location]);

  return (
    <div
      className={` container-fluid row m-0 p-0 ${
        loginpage ? "main-backgroun" : null
      } `}
    >
      {loginpage ? null : (
        <>
          <div className="col-md-12 p-0">
            <AdminNavbar />
          </div>
          <div className="col-md-2 d-none d-md-block  p-0">
            <Sidebar />
          </div>
        </>
      )}

      <div
        className={`col-md-2 col-6 mobile-menu d-block d-md-none  p-0 ${
          menuopen ? "show-menu" : ""
        }`}
      >
        <Sidebar />
      </div>
      <div className={`col-md-${loginpage ? "12" : "10"} `}>{children}</div>
    </div>
  );
}

export default AdminLayout;
