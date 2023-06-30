import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  description: "",
  poster: "",
  genre: [],
  totalRating: "",
  votes: "",
  rating: "",
  director: "",
  year: "",
};
const options = [
  { label: "Action", value: "Action" },
  { label: "Drama", value: "Drama" },
  { label: "Horror", value: "Horror" },
  { label: "Thriller", value: "Thriller" },
  { label: "Romance", value: "Romance" },
  { label: "Comedy", value: "Comedy" },
  { label: "Documentary", value: "Documentary" },
  { label: "Animation", value: "Animation" },
  { label: "Fiction", value: "Fiction" },
];

function Addmovies() {
  function handlesubite(values) {
    console.log("hiii.....", values);
  }
  const handlevalidate = Yup.object().shape({
    name: Yup.string().required("Movie Name is Reduired!"),
    description: Yup.string().required("Description is Reduired!"),
    poster: Yup.string().required("Poster is Required!"),
    totalRating: Yup.number().required("TotalRating is Required!"),
    votes: Yup.number().required("Votes is Required!"),
    rating: Yup.number().required("Rating is Required!"),
    director: Yup.string().required("Director is Required!"),
    year: Yup.string().required("Year is Required!"),
    genre: Yup.array().min(1, "Select at least one option"),
  });
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6  offset-md-3 shadow ">
          <h5 className="text-center">Add New Movie</h5>
          <Formik
            initialValues={initialValues}
            onSubmit={handlesubite}
            validationSchema={handlevalidate}
          >
            {({ errors }) => {
              return (
                <Form>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="name"
                      className={`form-control ${errors.name && "error"}`}
                      placeholder="Movie Name"
                    />
                    <ErrorMessage name="name" component="span" />
                  </div>
                  <div className="mb-3">
                    <Field
                      as="textarea"
                      name="description"
                      className={`form-control ${
                        errors.description && "error"
                      }`}
                      placeholder="Description"
                    />
                    <ErrorMessage name="description" component="span" />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="file"
                      name="poster"
                      className={`form-control ${errors.poster && "error"}`}
                      accept="image/*"
                    />
                    <ErrorMessage name="poster" component="span" />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="number"
                      name="totalRating"
                      className={`form-control ${
                        errors.totalRating && "error"
                      }`}
                      placeholder="TotalRating"
                    />
                    <ErrorMessage name="totalRating" component="span" />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="number"
                      name="votes"
                      className={`form-control ${errors.votes && "error"}`}
                      placeholder="Votes"
                    />
                    <ErrorMessage name="votes" component="span" />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="number"
                      name="rating"
                      className={`form-control ${errors.rating && "error"}`}
                      placeholder="Rating"
                    />
                    <ErrorMessage name="rating" component="span" />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="director"
                      className={`form-control ${errors.director && "error"}`}
                      placeholder="Director"
                    />
                    <ErrorMessage name="director" component="span" />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="year"
                      className={`form-control ${errors.year && "error"}`}
                      placeholder="Year"
                    />
                    <ErrorMessage name="year" component="span" />
                  </div>
                  <div className="mb-3">
                    {options.map((option) => (
                      <div key={option.value}>
                        <label>
                          <Field
                            type="checkbox"
                            name="genre"
                            value={option.value}
                            className={`form-check-input ${
                              errors.genre && "error"
                            }`}
                          />
                          {option.label}
                        </label>
                      </div>
                    ))}

                    <ErrorMessage name="genre" component="span" />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-dark mb-3">
                      Add
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

export default Addmovies;
