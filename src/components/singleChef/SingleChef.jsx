/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const SingleChef = ({ chef }) => {
  const navigate = useNavigate();
  const { id, picture, name, bio, likes, num_recipes, years_experience } = chef;
  console.log(chef);
  return (
    <div className="card md:w-full lg:w-full w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={picture} />
      </figure>
      <div className="text-center text-2xl font-bold">
        <h2 className="my-5">{name}</h2>
      </div>
      <div className="card-body">
        <div className="flex gap-3 justify-between mb-10">
          <h2 className="card-title ">{years_experience}</h2>
          <div className="flex">
            <FcLikePlaceholder className="text-2xl mr-2"></FcLikePlaceholder>{" "}
            {likes}
          </div>
          <h2 className="card-title "> Recipes :{num_recipes}</h2>
        </div>
        <p>{bio}</p>
        <div className="card-actions justify-center mt-5 w-96">
          <Link to={`/chefDetails/${id}`}>
            <button className="btn btn-primary ">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
