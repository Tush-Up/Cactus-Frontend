import React from 'react';
import Footer from '../components/Footer';
import HomeHeader from '../components/HomeHeader';
import HomeNav from '../components/HomeNav';
import HomeSubCard from '../components/HomeSubCard';
import ReviewHeader from '../components/ReviewHeader';
import Service from '../components/Service';
import productsPhoto from '../img/Mask group.png';

const Products = () => {
	return (
		<div className="mx-12 mt-4 font-TT Commons">
			<HomeNav />
			<HomeHeader
				photo={productsPhoto}
				text1="Subscription"
				text2="plan one."
				paragraph1="Subscribe to any of our job insurance plans and"
				paragraph2="get paid when you lose your job. Get started with a"
				paragraph3="Cactus subscription today. It’s absolutely free."
			/>
			<ReviewHeader text1="Benefits of this Plan" />
			<div className="flex">
				<HomeSubCard text="Benefit 1" />
				<HomeSubCard text="Benefit 2" />
			</div>
			<div>
				<Service />
			</div>
			<Footer />
		</div>
	);
};

export default Products;
