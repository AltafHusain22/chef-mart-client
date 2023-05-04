/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../Hero/Hero';
import AllChefs from '../AllChefs/AllChefs';
import Services from '../Service/Service';
import FeaturedRecipes from '../FeaturedRecipie/FeaturedRecepie';

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<AllChefs></AllChefs>
			<Services></Services>
			<FeaturedRecipes></FeaturedRecipes>
		</div>
	);
};

export default Home;