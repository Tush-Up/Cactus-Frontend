import HomeSubCard from './HomeSubCard';

export default function HomeSub() {
	return (
		<section className="relative top-[16rem]">
			<div className="mx-[24rem] text-justify mb-16">
				<p className="font-semibold text-4xl mb-8 text-[#B38B59]">
					Learn more about<br />our subscription plans.
				</p>
				<p className="font-medium text-sm">
					Cactus remains on of the most preferred solutions for job insurance by Nigerian employees. One of
					the things that makes us trustworthy are our core values, stability, resilience, safety and
					security.
				</p>
			</div>
			<div className="flex">
				<HomeSubCard text="Subscription Plan 1" />
				<HomeSubCard text="Subscription Plan 2" />
				<HomeSubCard text="Subscription Plan 3" />
			</div>
		</section>
	);
}
