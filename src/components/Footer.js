import { Link } from 'react-router-dom';
import { Cactus, Logo } from '../svg/icons';
import List from './HomeNavList';

export default function Footer(props) {
	return (
		<nav className="flex justify-between items-center text-sm relative top-[3rem]">
			<div className="flex w-24 space-x-1 items-center">
				<Logo />
				<Cactus />
			</div>
			<ul className="flex p-0 text-[#212121] font-medium text-sm">
				<Link to="/about">
					<List title="About" />
				</Link>
				<Link to="contact">
					<List title="Contact" />
				</Link>
				<List title="Terms and Conditions" />
				<List title="Privacy Policy " />
				<Link to="/login">
					<List title="Get Started" />
				</Link>
			</ul>
		</nav>
	);
}
