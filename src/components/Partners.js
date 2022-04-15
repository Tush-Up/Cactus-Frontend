import { Bolt, Konga, Kuda, Line, Nestle, Vconnect } from '../svg/icons';
import HomeHeader from './HomeHeader';

export default function Partners() {
	return (
		<section className="my-12">
			<HomeHeader
				photo="/src/img/HeaderPicture.jpg"
				text1="Cactus ensures"
				text2="your stability"
				paragraph1="Subscribe to any of our job insurance plans and"
				paragraph2="get paid when you lose your job. Get started with a"
				paragraph3="Cactus subscription today. It’s absolutely free."
			/>
			<div className="bg-[#ffffff] rounded-xl mx-12 -mt-20 h-16 p-16 flex justify-between items-center">
				<Konga />
				<Line />
				<Nestle />
				<Line />
				<Vconnect />
				<Line />
				<Bolt />
				<Line />
				<Kuda />
			</div>
		</section>
	);
}
