import { Bolt, Konga, Kuda, Line, Nestle, Vconnect } from '../svg/icons';

export default function Partners() {
	return (
		<section className="my-12">
			<div className="bg-gray-100 rounded-3xl h-screen text-center text-white">
				<p className="font-bold text-5xl pt-40 mx-60 w-3/5 ">
					Cactus ensures <br />your stability
				</p>
				<p className="font-bold mx-48 pt-20">
					Subscribe to any of our job insurance plans and<br />
					get paid when you lose your job. Get started with a<br />
					Cactus subscription today. It’s absolutely free.
				</p>
			</div>
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
