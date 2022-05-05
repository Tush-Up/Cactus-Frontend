import { Link } from 'react-router-dom';

export default function Productmenu() {
	return (
		<ul className="shadow py-5 rounded-xl bg-white w-64 z-10 absolute top-[5rem] left-[20rem] font-TT Commons">
			<Link to="/products/LitePlan">
				<li className="pl-5 mb-3 mt-[14px] flex items-center space-x-4">
					<div className="bg-cactus-brown rounded-full w-[1rem] p-3" />
					<p className="text-cactus-brown font-semibold text-base">Lite Plan</p>
				</li>
			</Link>
			<Link to="/products/BasicPlan">
				<li className="pl-5 mb-3 flex items-center space-x-4">
					<div className="bg-[#f7f3ee] rounded-full w-[1rem] p-3" />
					<p className="text-[#bfbfbf] font-semibold text-base">Basic Plan</p>
				</li>
			</Link>
			<Link to="/products/PlusPlan">
				<li className="pl-5 flex items-center space-x-4">
					<div className="bg-[#f7f3ee] rounded-full w-[1rem] p-3" />
					<p className="text-[#bfbfbf] font-semibold text-base">Plus Plan</p>
				</li>
			</Link>
		</ul>
	);
}
