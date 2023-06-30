import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { openMenu } from "../redux/menuSlice";
import { setlogout } from "../redux/loginSlice";

function AdminNavbar() {
  const dispatch = useDispatch();
  return (
    <Navbar className="text-white shadow" bg="dark" variant="dark">
      <h3 className="text-center ps-5 pt-2">Admin</h3>

      <Container>
        <Nav className="ms-auto ps-4">
          <button className="me-2 btn btn-light" onClick={()=> dispatch(setlogout())}>Logout</button>
          <button
            className="ms-3 me-3 d-md-none d-block"
            onClick={() => dispatch(openMenu())}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="d-flex w-100 input-serch d-none d-md-block ">
            <input
              type="text"
              name=""
              placeholder="Serach.."
              className="form-control "
            />

            <Button className=" serch-btn text-white">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
