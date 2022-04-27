export default function TeamCard({ photo, name, position }) {
	return (
		<div>
			<img src={photo} alt="" className="rounded-2xl w-[300px]" />
			<p className="font-semibold text-[#212121] mt-8">{name}</p>
			<p className="text-sm text-[rgba(33, 33, 33, 0.56)]">{position}</p>
		</div>
	);
}
