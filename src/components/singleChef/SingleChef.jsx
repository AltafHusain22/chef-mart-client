/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SingleChef = ({ chef }) => {
  const { id, picture, name, bio,likes, num_recipes, years_experience } = chef;
  console.log(chef);
  return (
    <div className="card w-100 bg-base-100 shadow-xl ">
		
      <figure>
        <img
          src={picture}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{name}</h2>
        <p>{bio}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
