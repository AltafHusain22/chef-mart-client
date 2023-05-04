/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import  { lazy, Suspense } from 'react';
import './SingleChef'

const SingleChef = ({ chef }) => {
  const navigate = useNavigate();
  const { id, picture, name, bio, likes, num_recipes, years_experience } = chef;
  const LazyImage = lazy(() => import({picture}));

  return (
    <div className="card w-full md:w-full bg-base-100 shadow-xl mx-auto md:mx-0">
      {/* <figure>
        <img className="w-full" src={picture} alt={name} />
      </figure> */}
      {/* <LazyLoad threshold={0.95} offset={300} className="h-full LazyLoad ">
        <img src={picture} />
      </LazyLoad> */}
      <Suspense fallback={<div>Loading...</div>}>
        <img src={picture} />
      </Suspense>
      <div className="text-center text-2xl font-bold">
        <h2 className="my-5">{name}</h2>
      </div>
      <div className="card-body">
        <div className="flex  md:flex-row gap-3 justify-between mb-10">
          <h2 className="card-title ">{years_experience}Yr Exp..</h2>
          <div className="flex">
            <FcLikePlaceholder className="text-2xl mr-2" />
            {likes}
          </div>
          <h2 className="card-title "> Recipes :{num_recipes}</h2>
        </div>
        <p>{bio}</p>
        <div className="card-actions justify-center mt-5">
          <Link to={`/chefDetails/${id}`}>
            <button className="btn btn-primary bg-red-500 border-0 w-full md:w-auto">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
