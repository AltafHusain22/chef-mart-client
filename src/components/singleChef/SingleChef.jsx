/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const SingleChef = ({ chef }) => {
  const navigate = useNavigate();
  const { id, picture, name, bio, likes, num_recipes, years_experience } = chef;

  return (
    <div className="card w-full md:w-full bg-base-100 shadow-xl mx-auto md:mx-0">
      <figure>
        <img className="w-full" src={picture} alt={name} />
      </figure>
      <div className="text-center text-2xl font-bold">
        <h2 className="my-5">{name}</h2>
      </div>
      <div className="card-body">
        <div className="flex  md:flex-row gap-3 justify-between mb-10">
          <h2 className="card-title ">{years_experience}</h2>
          <div className="flex">
            <FcLikePlaceholder className="text-2xl mr-2" />
            {likes}
          </div>
          <h2 className="card-title "> Recipes :{num_recipes}</h2>
        </div>
        <p>{bio}</p>
        <div className="card-actions justify-center mt-5">
          <Link to={`/chefDetails/${id}`}>
            <button className="btn btn-primary w-full md:w-auto">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
