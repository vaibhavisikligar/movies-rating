import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallmovies } from "../redux/moviesSlice";

function Allmovies() {
  const { movieslist, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallmovies());
  },[dispatch]);
  if (!movieslist || movieslist.length === 0) {
    return <p>No movies available.</p>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <table className="table  table-striped">
            <thead className="table-dark">
              <tr>
                <th>Sr No.</th>
                <th>Movies Name</th>
                <th>Description</th>
                <th>Film Genres</th>
                <th>Director</th>
                <th>Year</th>
                <th>TotalRating</th>
                <th>Votes</th>
                <th>Rating</th>
                <th>Poster</th>
              </tr>
            </thead>
            <tbody>
              {movieslist.map((item, index) => {
                const {
                  name,
                  description,
                  poster,
                  genre,
                  totalRating,
                  votes,
                  rating,
                  director,
                  year,
                } = item;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{genre}</td>
                    <td>{director}</td>
                    <td>{totalRating}</td>
                    <td>{votes}</td>
                    <td>{rating}</td>
                    <td>{year}</td>
                    <td>{poster}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Allmovies;
