import { Arrow } from '../svg/icons';

export default function Service() {
	return (
		<div>
			<section className="flex justify-between relative top-[36rem] h-[790px]">
				<div>
					<p className="mt-48 w-[16rem] font-semibold text-4xl mb-8 text-[#B38B59]">
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

				<div className="bg-no-repeat bg-servicePicture rounded-3xl w-[765px]" />
			</section>
			<hr className="mt-[45rem]" />
		</div>
	);
}
