import img1 from "../Hero/Assets/banner-1.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className=" bg-red-400 ">
      <div className="md:px-20 px-3">
        <div className="hero-wrap justify-between items-center">
          <div className="hero-left ">
            <h2 className="hero-heading">
              Welcome to Chefs-challenge 
              <span className="text-slate-100 ml-3">Recipies</span>
            </h2>
            <p>
              Explore Hundred of Thai Food with all the information
              you need. Its your Dream. Come find it. Test all your receipies
              from chefs-challeng.
            </p>
            <button className="get-start-btn">See More</button>
          </div>
          <div className="md:w-3/5 lg:3/6 ">
            <img
              className=" mt-10 bg-image w-full md:w-4/3 md:ml-20 "
              src={img1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
