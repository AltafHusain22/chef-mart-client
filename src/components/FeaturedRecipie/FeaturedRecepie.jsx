import React from "react";

const FeaturedRecipes = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="flex flex-col items-center justify-center py-8 ">
        <h2 className="text-3xl font-bold mb-2">Our Featured Recipes</h2>
        <p className="text-lg text-gray-600 mb-8">
          Check out our top-rated Thai dishes that you can easily make at home.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl">
          {/* Recipe Card 1 */}
          <div className="bg-slate-100 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover object-center"
              src="https://tinyurl.com/24998vkt"
              alt="Green Curry"
            />
            <div className="p-4">
              <h3 className="text-gray-900 font-bold text-xl mb-2">
                Green Curry
              </h3>
              <p className="text-gray-600 mb-4">
                A delicious Thai curry made with coconut milk, vegetables, and
                chicken.
              </p>
            </div>
          </div>

          {/* Recipe Card 2 */}
          <div className="bg-slate-100 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover object-center"
              src="https://tinyurl.com/2s3rkknw"
              alt="Pad Thai"
            />
            <div className="p-4">
              <h3 className="text-gray-900 font-bold text-xl mb-2">Pad Thai</h3>
              <p className="text-gray-600 mb-4">
                A classic Thai dish made with stir-fried noodles, vegetables,
                and peanuts.
              </p>
            </div>
          </div>

          {/* Recipe Card 3 */}
          <div className="bg-slate-100 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover object-center"
              src="https://tinyurl.com/24998vkt"
              alt="Tom Yum Soup"
            />
            <div className="p-4">
              <h3 className="text-gray-900 font-bold text-xl mb-2">
                Tom Yum Soup
              </h3>
              <p className="text-gray-600 mb-4">
                A hot and sour soup made with shrimp, lemongrass, and chili
                paste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipes;
