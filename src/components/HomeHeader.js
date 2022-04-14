export default function HomeHeader({ photo, text1, text2, paragraph1, paragraph2, paragraph3 }) {
	return (
		<header className="text-center text-white">
			<img src={photo} alt="" className="max-w-[50%] rounded-3xl h-screen" />
			<p className="font-bold text-5xl pt-40 mx-60 w-3/5 ">
				{text1} <br />
				{text2}
			</p>
			<p className="font-bold mx-48 pt-20">
				{paragraph1}
				<br />
				{paragraph2}
				<br />
				{paragraph3}
			</p>
		</header>
	);
}
