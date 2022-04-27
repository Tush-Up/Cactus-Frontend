import { Link } from 'react-router-dom';
import { WhiteCactus, WhiteLogo } from '../svg/icons';
import List from './HomeNavList';

export default function FaQsNav({ text1, text2 }) {
	return (
		<header>
			<nav className="flex justify-between text-white-400/64 items-center text-sm relative mx-12 bottom-[35.8rem]">
				<div className="flex w-24 space-x-1 items-center">
					<WhiteLogo />
					<WhiteCactus />
				</div>
				<ul className="flex p-0">
					<Link to="/">
						<List title="Home" className={`${window.location.pathname === '/' ? 'bgg' : ''}`} />
					</Link>
					<Link to="/products">
						<List title="Our Products" />
					</Link>
					<Link to="/faqs">
						<List title="FaQs" />
					</Link>
					<Link to="/about">
						<List title="About Us " />
					</Link>
					<Link to="/contact">
						<List title="Contact Us" />
					</Link>
					<Link to="/login">
						<List title="Log In" />
					</Link>
				</ul>
				<Link to="/register">
					<button className="w-48 h-10 border-solid bg-gray-100 backdrop-blur-xl rounded-lg p-2">
						Register
					</button>
				</Link>
			</nav>
			<main className="-mt-[40%] text-white mx-[29rem]">
				<p className="font-bold text-5xl leading-snug pt-40 w-[23rem]">{text1}</p>
				<p className="w-[73%] pt-8 mx-[2rem]">{text2}</p>
			</main>
		</header>
	);
}
