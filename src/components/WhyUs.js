import WhyUsList from './WhyUsList';

export default function WhyUs() {
	return (
		<section className="flex items-start justify-between mt-40">
			<div>
				<h3 className="font-semibold text-4xl w-full">
					Why is cactus one of the best<br /> job insurance solutions?
				</h3>
				<div className="bg-gray-100 relative top-28 rounded-3xl h-[40rem]">
					<div className="bg-[#ffffff] p-4 rounded-2xl flex items-start relative top-[32rem] left-96 h-20 w-[16rem]">
						<div className="bg-[gray] rounded-xl w-[2rem] h-[2rem]" />
						<div className="ml-4">
							<p className="text-sm">Number of Active users</p>
							<p className="font-bold text-lg">23,449 users</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-1/2">
				<p className="font-medium text-sm">
					Cactus remains on of the most preferred solutions for job insurance by<br />
					Nigerian employees. One of the things that makes us trustworthy are our<br />
					core values, stability, resilience, safety and security.
				</p>
				<ul className="mt-28">
					<WhyUsList
						header={'Stability'}
						text="Cactus remains on of the most preferred solutions for job insurance by
					Nigerian employees. One of the things that makes us trustworthy are our
					core values, stability, resilience, safety and security."
					/>
					<WhyUsList
						header={'Resilience'}
						text="Cactus remains on of the most preferred solutions for job insurance by
					Nigerian employees. One of the things that makes us trustworthy are our
					core values, stability, resilience, safety and security."
					/>
					<WhyUsList
						header={'Safety and security'}
						text="Cactus remains on of the most preferred solutions for job insurance by
					Nigerian employees. One of the things that makes us trustworthy are our
					core values, stability, resilience, safety and security."
					/>
				</ul>
			</div>
		</section>
	);
}
