export default function ReviewCard({
	photo,
	text,
	client,
	job,
	rating1,
	rating2,
	rating3,
	rating4,
	rating5,
	background
}) {
	return (
		<div className="border-gray-100 bg-light-white border-solid border rounded-3xl p-4 mx-12 -mt-16 w-[22rem] h-[17rem] hover:cursor-pointer hover:border-none hover:shadow-2xl">
			<img src={photo} alt="" className="rounded-full w-[4rem] h-[4rem] mb-4 -mt-12" />

			<div className="mb-[2rem] text-sm">{text}</div>
			<hr className="mb-4" />
			<div className="flex justify-between items-center">
				<div>
					<p className="text-[#B38B59] font-DemiBold">{client}</p>
					<p className="text-[12px] text-gray-500">{job}</p>
				</div>
				<ul className="flex items-center">
					<li>{rating1}</li>
					<li>{rating2}</li>
					<li>{rating3}</li>
					<li>{rating4}</li>
					<li>{rating5}</li>
				</ul>
			</div>
		</div>
	);
}
