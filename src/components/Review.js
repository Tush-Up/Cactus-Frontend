import { CheckedStar, Comment, LeftArrow, RightArrow, UncheckedStar } from '../svg/icons';
import ReviewCard from './ReviewCard';
import ReviewHeader from './ReviewHeader';

export default function Review() {
	return (
		<section className="relative top-[24rem]">
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
					// background="url('/src/img/Klaus Fischer.jpg')"
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
					client="Harriet Nwagwu"
					job="Banker, UBA"
					rating1={<CheckedStar />}
					rating2={<CheckedStar />}
					rating3={<CheckedStar />}
					rating4={<CheckedStar />}
					rating5={<CheckedStar />}
				/>
				<ReviewCard
					text="Trusting Cactus to secure my job
					is the best decision I’ve ever made.
					 Cactus is indeed true to her goals and objectives."
					client="Audu Umaru"
					job="Banker, UBA"
					rating1={<CheckedStar />}
					rating2={<CheckedStar />}
					rating3={<CheckedStar />}
					rating4={<CheckedStar />}
					rating5={<UncheckedStar />}
				/>
			</div>
			<div className="flex justify-between mt-8">
				<div>
					<p>buttons</p>
				</div>
				<div className="flex mr-12 hover:cursor-pointer">
					<LeftArrow />
					<RightArrow />
				</div>
			</div>
		</section>
	);
}
