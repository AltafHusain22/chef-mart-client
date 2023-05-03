/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { GrFavorite } from 'react-icons/gr';
import Swal from 'sweetalert2'

const ChefDetails = () => {
  const singlechefDetails = useLoaderData();
  const {
    id,
    picture,
    name,
    bio,
    likes,
    num_recipes,
    years_experience,
    rating,
    bio_details,
    details_img1,
    details_img2,
    details_img3,
    cooking_method,
    ingredients,
  } = singlechefDetails;


  const handleAddToFav =()=>{
    Swal.fire(
      'Good job!',
      'Successfully Added to Favourite!',
      'success'
    )

    console.log(' cliked')
  }


  return (
    <div>
      <div className="bg-red-400 text-center py-20 mb-4">
        <h2 className="font-bold text-xl md:text-6xl "> Details of {name} </h2>
      </div>
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
              <span className="font-bold mr-5">Bio: </span>
              <span> {bio_details}</span>
            </div>
          </div>
        </div>
      </div>
      {/* top section end  */}

      {/*  bottom cards*/}
      <div className="text-center">
        <h2 className="font-bold text-xl md:text-6xl mb-10">
          Some of My Thai Recipes
        </h2>
      </div>
      {}

      {/* card -1  */}
      <div className="mb-20 mx-10 md:mx-20 md:mt-20">
        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
          <figure className="md:w-1/3">
            <img
              className="w-full md:rounded-l-md md:rounded-r-none"
              src={details_img1}
            />
          </figure>
          <div className="card-body md:w-2/3">
            <div className="text-center font-bold text-xl">
              <h2>Tom Yum Goong</h2>
            </div>
            <p>
              <h2 className="card-title">Recipie Method :</h2>
              {cooking_method}
            </p>
            <p>
              <h2 className="card-title">Ingredients :</h2>
              <ul>
                {ingredients.map((ing) => (
                  <li key={ing.id}>{ing}</li>
                ))}
              </ul>
            </p>
            <div className="flex justify-end">
            <button onClick={handleAddToFav} className="btn btn-success bg-red-300 border-0 w-32">
                  <GrFavorite className="text-2xl"></GrFavorite>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* card -2  */}
      <div className="mb-20 mx-10 md:mx-20 md:mt-20">
        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
          <figure className="md:w-1/3">
            <img
              className="w-full md:rounded-l-md md:rounded-r-none"
              src={details_img2}
            />
          </figure>
          <div className="card-body md:w-2/3">
            <div className="text-center font-bold text-xl">
              <h2>Tom Yum Goong</h2>
            </div>
            <p>
              <h2 className="card-title">Recipie Method :</h2>
              {cooking_method}
            </p>
            <p>
              <h2 className="card-title">Ingredients :</h2>
              <ul>
                {ingredients.map((ing) => (
                  <li>{ing}</li>
                ))}
              </ul>
            </p>
            <div className="flex justify-end">
              <button onClick={handleAddToFav} className="btn btn-success bg-red-300 border-0 w-32">
                  <GrFavorite className="text-2xl"></GrFavorite>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* card -3  */}
      <div className="mb-20 mx-10 md:mx-20 md:mt-20">
        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
          <figure className="md:w-1/3">
            <img
              className="w-full md:rounded-l-md md:rounded-r-none"
              src={details_img3}
            />
          </figure>
          <div className="card-body md:w-2/3">
            <div className="text-center font-bold text-xl">
              <h2>Tom Yum Goong</h2>
            </div>
            <p>
              <h2 className="card-title">Recipie Method :</h2>
              {cooking_method}
            </p>
            <p>
              <h2 className="card-title">Ingredients :</h2>
              <ul>
                {ingredients.map((ing) => (
                  <li>{ing}</li>
                ))}
              </ul>
            </p>
            <div className="flex justify-end">
             <button onClick={handleAddToFav} className="btn btn-success bg-red-300 border-0 w-32">
                  <GrFavorite className="text-2xl"></GrFavorite>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
