import { Arrow } from '../svg/icons';
import servicePicture from '../img/Service3.jpg';

export default function Service() {
	return (
		<div>
			<section className="flex justify-between">
				<div>
					<p className="mt-32 w-[16rem] font-semibold text-4xl mb-8 text-[#B38B59]">
						Your safety is our priority.
					</p>
					<p className="text-sm w-[25rem]">
						Using Cactus is the best decision I’ve ever made. I’ve lost my job a lot before I found a stable
						one, but before that Cactus was really there for me in those difficult times.
					</p>
					<p className="mt-8 font-semibold text-sm text-[rgba(33, 33, 33, 0.72)]">LEARN MORE</p>
					<div className="ml-[5.8rem] -mt-[1rem]">
						<Arrow />
					</div>
				</div>

				<img src={servicePicture} alt="" className="rounded-3xl w-full" />
			</section>
			<hr className="mt-[7rem]" />
		</div>
	);
}
