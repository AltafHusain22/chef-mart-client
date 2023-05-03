/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SingleChef from "../singleChef/SingleChef";

const AllChefs = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefsRecips")
      .then((res) => res.json())
      .then((data) => setChefsData(data));
  }, []);

  return (
    <div>
      <h2 className="hero-heading text-center my-7 text-3xl font-bold">Featured Chefs</h2>
      <div className="grid md:grid-cols-3 mx-10 gap-10">
        {chefsData.map((chef) => (
          <SingleChef key={chef.id} chef={chef}>
          </SingleChef>
        ))}
      </div>
    </div>
  );
};

export default AllChefs;
