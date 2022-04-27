import React from 'react';
import FaQsNav from '../components/FaQsNav';
import Footer from '../components/Footer';
import FaQsBody from './FaQsBody';
import FAQs from '../img/FAQS.jpg';

const Faqs = () => {
	return (
		<div className="font-TT Commons">
			<div className="text-center">
				<img src={FAQs} alt="" />
				<FaQsNav text1="Frequently asked questions" />
			</div>
			<div className="mx-32 mt-[10rem]">
				<FaQsBody />
			</div>
			<div className="mx-12">
				<hr className="mt-[7rem]" />
				<Footer />
			</div>
		</div>
	);
};

export default Faqs;
