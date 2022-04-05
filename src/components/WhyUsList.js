export default function WhyUsList({ header, text }) {
	return (
		<div className="mb-12">
			<div className="bg-gray-100 rounded-full w-12 h-12 mb-4" />
			<li className="font-semibold text-2xl">
				{header}
				<p className="text-sm font-normal">{text}</p>
			</li>
		</div>
	);
}
