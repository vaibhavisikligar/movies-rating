import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { login } from "../redux/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { islogin } = useSelector((state) => state.login);
  function handlelogin(values) {
    console.log("hiii.....", values);
    dispatch(login({ values, navigate }));
    axios
      .post(`http://localhost:5000/user/login`, values)
      .then((response) => {
        console.log("login data", response?.data?.token);
        const token = response?.data.token;
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch((error) => {
        console.log("login failed", error);
      });
  }
  const handleloginvalidate = Yup.object().shape({
    email: Yup.string().required("email is Reduired!"),
    password: Yup.string().required("password is Reduired!"),
  });
  return (
    <div className="container py-5 ">
      <div className="row py-5">
        <div className="col-md-4 offset-md-4 shadow p-3 ">
          <h4 className="text-center mb-3">Admin Login</h4>
          <Formik
            initialValues={initialValues}
            onSubmit={handlelogin}
            validationSchema={handleloginvalidate}
          >
            {({ errors }) => {
              return (
                <Form>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="email"
                      className={`form-control ${errors.email && "error"}`}
                      placeholder="email"
                    />
                    <ErrorMessage name="email" component="span" />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="password"
                      name="password"
                      className={`form-control ${errors.password && "error"}`}
                      placeholder="password"
                    />
                    <ErrorMessage name="password" component="span" />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-dark mb-3">
                      Login
                    </button>
                  </div>
                  <p className="text-center para d-flex justify-content-center gap-2">
                    Don't have an account?
                    <Link to="/signup" className="nav-link text-info">
                      Sign up!
                    </Link>
                  </p>
                  <p className="text-center para ">
                    or
                    <Link to="" className="nav-link text-info mt-3">
                      Forgot Password?
                    </Link>
                  </p>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
