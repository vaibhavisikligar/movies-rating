import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../redux/signupSlice";
const initialValues = {
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  password: "",
  gender: "",
  userType: "",
};

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { issignup } = useSelector((state) => state.signup);
  function handlesignup(values) {
    console.log("hiii.....", values);
    dispatch(signup({ values, navigate }));
  }
  const handlesignupvalidate = Yup.object().shape({
    firstName: Yup.string().required("Firstname is Reduired!"),
    lastName: Yup.string().required("Lastname is Reduired! "),
    address: Yup.string().required("Address is Reduired!"),
    email: Yup.string().required("Email is Reduired!"),
    password: Yup.string().required("Password is Reduired!"),
    gender: Yup.string().required("Gender is Reduired!"),
    userType: Yup.string().required("Please select an option"),
  });
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow ">
          <h3 className="text-center mb-3">Admin SignUp</h3>
          <Formik
            initialValues={initialValues}
            onSubmit={handlesignup}
            validationSchema={handlesignupvalidate}
          >
            {({ errors }) => {
              return (
                <Form>
                  <div className="mb-2">
                    <Field
                      type="text"
                      name="firstName"
                      className={`form-control ${errors.firstName && "error"}`}
                      placeholder="FirstName"
                    />
                    <ErrorMessage name="firstName" component="span" />
                  </div>
                  <div className="mb-2">
                    <Field
                      type="text"
                      name="lastName"
                      className={`form-control ${errors.lastName && "error"}`}
                      placeholder="LastName"
                    />
                    <ErrorMessage name="lastName" component="span" />
                  </div>
                  <div className="mb-2">
                    <Field
                      as="textarea"
                      name="address"
                      className={`form-control ${errors.address && "error"}`}
                      placeholder="address"
                    />
                    <ErrorMessage name="address" component="span" />
                  </div>
                  <div className="mb-2">
                    <Field
                      type="email"
                      name="email"
                      className={`form-control ${errors.email && "error"}`}
                      placeholder="email"
                    />
                    <ErrorMessage name="email" component="span" />
                  </div>
                  <div className="mb-2">
                    <Field
                      type="password"
                      name="password"
                      className={`form-control ${errors.password && "error"}`}
                      placeholder="password"
                    />
                    <ErrorMessage name="password" component="span" />
                  </div>
                  <div className="mb-2">
                    <div className="div">
                      <label className="me-3">
                        <Field
                          type="radio"
                          name="gender"
                          value="male"
                          className={`form-check-input me-2  ${
                            errors.gender && "error"
                          }`}
                        />
                        Male
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="gender"
                          value="female"
                          className={`form-check-input me-2 ${
                            errors.gender && "error"
                          }`}
                        />
                        Female
                      </label>
                    </div>

                    <ErrorMessage name="gender" component="span" />
                  </div>
                  <div className="mb-2">
                    <Field as="select" name="userType" className="form-select">
                      <option value="">Select an option</option>
                      <option value="user">User</option>
                      <option value="Admin">Admin</option>
                    </Field>
                    <ErrorMessage name="userType" component="span" />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-dark mb-3">
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Signup;
