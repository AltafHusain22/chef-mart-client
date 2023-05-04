
import React from "react";

const Services = () => {
  return (
    <div className="bg-red-400 mt-12 py-6">
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="text-3xl text-slate-100 font-bold mb-2">
          What We Offer You
        </h2>
        <p className="text-lg text-slate-300 mb-8">
          Explore the Delightful World of Thai Cuisine with our Recipes, Tips,
          and Techniques.
        </p>
      </div>

      <div className=" px-5 py-5 grid sm:grid-cols-2 md:grid-cols-3  w-5/6 mx-auto text-center gap-5 rounded  ">
  
        <div className="bg-red-500 rounded-lg py-5">
          <img
            src="https://cdn4.iconfinder.com/data/icons/111-seo-services-pack/128/new_seo2-35-512.png"
            alt="Item 2 Image"
            className="h-50 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Order Online
            </h3>
            <p className="text-slate-100">
              Discover the convenience of online ordering with our Thai kitchen.
            </p>
          </div>
        </div>
        <div className="bg-red-500 rounded-lg py-5">
          <img
            src="https://th.bing.com/th/id/R.6dc27245078f20636472bd5aacec19a2?rik=KALl%2fd64ZaRFlQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f8%2fRestaurant-PNG-Picture.png&ehk=URvG8xc6TrTAIGf%2bMkCA6zzYQFe%2bYBpyGakg8M%2fmK6w%3d&risl=&pid=ImgRaw&r=0"
            alt="Item 3 Image"
            className="h-50 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Private Dining
            </h3>
            <p className="text-slate-100">
              A personalized Thai dining experience for you and your guests.
            </p>
          </div>
        </div>
        <div className="bg-red-500 rounded-lg py-5">
          <img
            src="https://th.bing.com/th/id/R.187a0a9241f93c404b426a5726dafb3f?rik=Qc9G%2b01pNW8RyQ&pid=ImgRaw&r=0"
            alt="Item 4 Image"
            className="h-50 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Gift Cards
            </h3>
            <p className="text-slate-100">
              Show your appreciation with a Thai kitchen gift card.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
