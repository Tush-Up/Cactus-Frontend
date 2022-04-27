import React from 'react';
import Footer from '../components/Footer';
import HomeNav from '../components/HomeNav';
import ReviewHeader from '../components/ReviewHeader';
import TeamCard from '../components/TeamCard';
import WhyUs from '../components/WhyUs';
import aboutImage from '../img/About image.jpg';
import Team1 from '../img/Team 1.jpg';
import Team2 from '../img/Team 2.jpg';
import Team3 from '../img/Team 3.jpg';

const About = () => {
	return (
		<div className="font-TT Commons">
			<div className="mx-12 w-auto mt-4">
				<HomeNav />
			</div>
			<div className="mt-20">
				<ReviewHeader
					text1="We provide job"
					text2="insurance solutions"
					text3="Fugiat mollit ex velit commodo consequat sunt Lorem."
				/>
			</div>
			<img src={aboutImage} alt="" />
			<div className="mx-12 w-auto">
				<WhyUs />
			</div>
			<div className="mt-36 mx-20">
				<ReviewHeader text1="Meet our team" />
			</div>
			<div className="flex justify-around mx-16">
				<TeamCard photo={Team1} name="Team Member 1" position="Chairman" />
				<TeamCard photo={Team2} name="Team Member 2" position="Chief Executive Officer" />
				<TeamCard photo={Team3} name="Team Member 3" position="Chief Information & Operations Officer" />
			</div>
			<div className="mx-12">
				<hr className="mt-[10rem]" />
				<Footer />
			</div>
		</div>
	);
};

export default About;
