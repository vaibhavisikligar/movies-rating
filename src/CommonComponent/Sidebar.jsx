import React from "react";
import { navlinks } from "../utilis/Navlinks";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closemenu } from "../redux/menuSlice";
function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div
      className="bg-black text-white p-4"
      style={{ height: "100%", minHeight: "100vh" }}
    >
      <button
        className="ms-3 me-3 d-md-none d-block"
        onClick={() => dispatch(closemenu())}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <ListGroup className="py-3">
        {navlinks.map((item) => {
          const { id, title, link } = item;
          return (
            <ListGroup.Item
              className="bg-black text-white"
              style={{ border: "none" }}
              key={id}
            >
              <NavLink className="nav-link w-100" to={link}>
                {title}
              </NavLink>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default Sidebar;
