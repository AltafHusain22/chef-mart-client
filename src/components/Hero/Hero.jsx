import img1 from "../Hero/Assets/banner-1.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrap bg-cover bg-center md:px-20">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="hero-left max-w-md md:max-w-none">
            <h2 className="hero-heading text-4xl md:text-5xl text-white font-bold mb-4">
              Welcome to Chefs-challenge
              <span className="text-slate-100 ml-3">Recipes</span>
            </h2>
            <p className="text-white text-lg md:text-xl mb-6">
              Explore hundreds of Thai food recipes with all the information you
              need. It's your dream. Come find it. Test all your recipes from
              chefs-challenge.
            </p>
            <button className="get-start-btn px-8 py-3 rounded-lg text-lg font-bold bg-red-600 hover:bg-red-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
              See More
            </button>
          </div>
          <div className="hero-right flex justify-center mt-8 md:mt-0 md:w-3/5 lg:w-3/6">
            <img className="bg-image w-full md:w-auto" src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
