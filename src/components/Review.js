import { CheckedStar, Comment, UncheckedStar } from '../svg/icons';
import ReviewCard from './ReviewCard';
import ReviewHeader from './ReviewHeader';
import Klaus from '../img/Klaus Fischer.jpg';
import Harriet from '../img/Harriet Nwagwu.jpg';
import Audu from '../img/Audu Umaru.jpg';

export default function Review() {
	return (
		<section className="relative top-[24rem] mb-[36rem]">
			<ReviewHeader
				text1="What are our clients"
				text2="saying about us?"
				text3="Check out testimonials from our previous clients"
			/>
			<div className="mx-[30rem]">
				<Comment />
			</div>
			<div className="flex justify-between">
				<ReviewCard
					text="Using Cactus is the best decision I’ve ever made. 
        I’ve lost my job a lot before I found a stable one, but before that
         Cactus was really there for me in those difficult times. 
         I will always recommend Cactus to my collegues."
					photo={Klaus}
					client="Klaus Fischer"
					job="Lawyer Lami and Sons"
					rating1={<CheckedStar />}
					rating2={<CheckedStar />}
					rating3={<CheckedStar />}
					rating4={<UncheckedStar />}
					rating5={<UncheckedStar />}
				/>
				<ReviewCard
					text="I could remember last year a friend recommended cactus to me,
					 then I suddenly lost my job. I was so broke. Thank God for Cactus, 
					 I was able to stay on my feet and pay my bills while looking for a new job."
					photo={Harriet}
					client="Harriet Nwagwu"
					job="Banker, UBA"
					rating1={<CheckedStar />}
					rating2={<CheckedStar />}
					rating3={<CheckedStar />}
					rating4={<CheckedStar />}
					rating5={<CheckedStar />}
				/>
				<ReviewCard
					text="Subscribing to Cactus Job Insurance company to
					secure my stability during job hunting
					is the best decision I made. The transactions are done seamlessly.
					 Cactus is indeed true to her goals and objectives."
					photo={Audu}
					client="Audu Umaru"
					job="Banker, UBA"
					rating1={<CheckedStar />}
					rating2={<CheckedStar />}
					rating3={<CheckedStar />}
					rating4={<CheckedStar />}
					rating5={<UncheckedStar />}
				/>
			</div>
		</section>
	);
}
