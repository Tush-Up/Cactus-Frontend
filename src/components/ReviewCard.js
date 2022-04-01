export default function ReviewCard({ text, client, job, rating }) {
	return (
		<div className="border-[#000000 border-solid border rounded-3xl p-4 mx-12 -mt-16  w-[22rem] h-[17rem]">
			<div className="bg-[#212121] rounded-full w-[4rem] h-[4rem] mb-4 -mt-12" />
			<div className="mb-[2rem] text-sm">{text}</div>
			<hr className="mb-4" />
			<div className="flex justify-between items-center">
				<div>
					<p>{client}</p>
					<p className="text-sm">{job}</p>
				</div>
				<div className="">{rating}</div>
			</div>
		</div>
	);
}
