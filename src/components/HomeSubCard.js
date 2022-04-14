import { Arrow } from '../svg/icons';

export default function HomeSubCard({ text, text2, text3, text4 }) {
	return (
		<div className="border-[#000000 border-solid border rounded-3xl p-4 mx-4 hover:cursor-pointer hover:border-none">
			<div className="bg-[#ffffff] p-4 rounded-2xl flex items-center mb-6">
				<div className="bg-gray-100 rounded-full w-[4rem] h-[4rem]" />
				<div className="ml-4">
					<p className="text-base font-semibold">{text}</p>
				</div>
			</div>
			<div className="ml-4 text-sm">
				<p>
					{text2}
					{text3}
					{text4}
					Cactus remains on of the most preferred solutions for job insurance by<br />
					Nigerian employees. One of the things that makes us trustworthy are our<br />
					core values, stability, resilience, safety and security.
				</p>
				<div>
					<p className="mt-4 font-semibold text-sm text-[#B38B59]">LEARN MORE</p>
					<div className="ml-[6.5rem] -mt-[1rem]">
						<Arrow />
					</div>
				</div>
			</div>
		</div>
	);
}
