/* eslint-disable no-unused-vars */
import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
  const singlechefDetails = useLoaderData();
  const { id, picture, name, bio, likes, num_recipes, years_experience ,rating ,bio_details} =
    singlechefDetails;
  return (
    <div className="mb-20  mx-10 md:mx-20 md:mt-20 md:flex md:gap-10 ">
      {/* chef details area */}
      <div className="w-full  md:w-1/2 mb-5">
        {/* Left area */}
        <div className="card w-100 bg-base-100 shadow-xl ">
          <figure>
            <img src={picture} />
          </figure>
          <div className="card-body">
            <div className="flex gap-3 justify-between mb-10">
              <h2 className="card-title ">{years_experience}</h2>
              <div className="flex">
                <FcLikePlaceholder className="text-2xl mr-2"></FcLikePlaceholder>{" "}
                {likes}
              </div>
              <h2 className="card-title "> Recipes :{num_recipes}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Right area */}
      <div className="card w-full  md:w-1/2 common-bg shadow ">
        <div className="card-body">
          <h2 className="card-title font-bold">Chef Name : {name}</h2>

          <div className="flex md:flex gap-2">
            <span className="font-bold">Recipes : </span> {num_recipes} items
          </div>
          <div className="flex md:flex gap-2">
            <span className="font-bold">Experience : </span>
            {years_experience} Years
          </div>
          <div className="flex md:flex gap-2">
            <span className="font-bold">Rating : </span>
            {rating} 
          </div>
          <div className="flex md:flex gap-2">
            <span className="font-bold">People Liked : </span>
            {likes} 
          </div>

          {/* bio */}
          <div className="flex md:flex gap-2">
            <span className="font-bold">Bio Details </span>
            <span> {bio_details}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
