import React from 'react';
import ContactCard from '../components/ContactCard';
import FaQsNav from '../components/FaQsNav';
import Footer from '../components/Footer';
import ContactsHeader from '../img/ContactsHeader.jpg';
import FaQsBody from './FaQsBody';

const Contact = () => {
	return (
		<div>
			<div className="text-center">
				<img src={ContactsHeader} alt="" className="h-[55%] w-full" />
				<div className="relative bottom-[63rem]">
					<FaQsNav
						text1="Want to get in touch with us?"
						text2="You can send us a mail here at Cactus
        using the form below and we’ll get in touch"
					/>
				</div>
			</div>
			<ContactCard />
			<div className="mx-32 -mt-[32rem]">
				<FaQsBody />
			</div>
			<div className="mx-12">
				<hr className="mt-[7rem]" />
				<Footer />
			</div>
		</div>
	);
};

export default Contact;
