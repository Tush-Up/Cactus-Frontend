export default function ReviewHeader({ text1, text2, text3 }) {
	return (
		<header className="mx-[26rem]">
			<p className="text-justify font-semibold text-4xl mb-8 text-[#B38B59]">
				{text1}
				<br /> {text2}
			</p>
			<p className="text-sm mb-4">{text3}</p>
		</header>
	);
}
