import React from 'react';
import Footer from '../components/Footer';
import HomeNav from '../components/HomeNav';
import HomeSub from '../components/HomeSub';
import Partners from '../components/Partners';
import Review from '../components/Review';
import Service from '../components/Service';
import WhyUs from '../components/WhyUs';

const Home = () => {
	return (
		<div className="mx-12 w-auto mt-4 font-TT Commons">
			<HomeNav />
			<Partners />
			<WhyUs />
			<HomeSub />
			<Review />
			<Service />
			<Footer />
		</div>
	);
};

export default Home;
