export default function ContactCard() {
	return (
		<div className="rounded-2xl p-8 bg-[#f2f2f2] w-[45%] mx-auto backdrop-blur-xl relative bottom-[61.7rem]">
			<form>
				<label for="fname">Full Name</label>
				<input
					type="text"
					id="fname"
					name="fullname"
					placeholder="Akinde Adeolu"
					className="box-border w-full border rounded-xl p-[10px] mt-4 mb-4 resize-y"
				/>

				<label for="email">Email Account</label>
				<input
					type="text"
					id="email"
					name="email"
					placeholder="klausigner@gmail.com"
					className="box-border w-full border rounded-xl p-[10px] mt-4 mb-4 resize-y"
				/>

				<label for="number">Phone Number</label>
				<input
					type="text"
					id="number"
					name="number"
					placeholder="+2348132302448"
					className="box-border w-full border rounded-xl p-[10px] mt-4 mb-4 resize-y"
				/>

				<label for="reason">Reason For Contacting Us</label>
				<select
					id="reason"
					name="reason"
					className="box-border w-full border p-[10px] rounded-xl mt-4 mb-4 resize-y"
				>
					<option value="complaints">Complaints</option>
					<option value="feedback">Feedback</option>
				</select>

				<label for="message">Message</label>
				<textarea
					id="message"
					name="message"
					placeholder="Tell us what's wrong.."
					className="h-[200px] box-border w-full border p-[10px] rounded-xl mt-4 mb-4 resize-y"
				/>

				<input
					type="submit"
					value="Submit"
					className="bg-light-white p-[8px] border rounded-xl w-[27%] text-black cursor-pointer"
				/>
			</form>
		</div>
	);
}
