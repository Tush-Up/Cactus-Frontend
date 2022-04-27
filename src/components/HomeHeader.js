export default function HomeHeader({ photo, text1, text2, paragraph1, paragraph2, paragraph3 }) {
	return (
		<header className="text-center text-white">
			<img src={photo} alt="" className="w-full rounded-3xl " />
			<div className="-mt-[56.5%]">
				<p className="font-bold text-6xl pt-40 mx-64 w-3/5 ">
					{text1} <br />
					{text2}
				</p>
				<p className="font-medium mx-60 pt-12 text-xl w-3/5">
					{paragraph1}
					<br />
					{paragraph2}
					<br />
					{paragraph3}
				</p>
			</div>
		</header>
	);
}
