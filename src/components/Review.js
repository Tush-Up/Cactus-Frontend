import { Comment } from '../svg/icons';
import ReviewCard from './ReviewCard';

export default function Review() {
	return (
		<section className="relative top-[24rem]">
			<div className="mx-[26rem]">
				<p className="text-justify font-semibold text-4xl mb-8">
					What are our clients<br /> saying about us?
				</p>
				<p className="text-sm mb-4">Check out testimonials from our previous clients</p>
			</div>
			<div className="mx-[30rem]">
				<Comment />
			</div>
			<div className="flex justify-between">
				<ReviewCard
					text="Using Cactus is the best decision I’ve ever made. 
        I’ve lost my job a lot before I found a stable one, but before that
         Cactus was really there for me in those difficult times. 
         I will always recommend Cactus to my collegues."
					client="Klaus Fischer"
					job="Lawyer Lami and Sons"
					rating="5 star"
				/>
				<ReviewCard
					text="Using Cactus is the best decision I’ve ever made. 
        I’ve lost my job a lot before I found a stable one, but before that
         Cactus was really there for me in those difficult times. 
         I will always recommend Cactus to my collegues."
					client="Klaus Fischer"
					job="Lawyer Lami and Sons"
					rating="5 star"
				/>
				<ReviewCard
					text="Using Cactus is the best decision I’ve ever made. 
        I’ve lost my job a lot before I found a stable one, but before that
         Cactus was really there for me in those difficult times. 
         I will always recommend Cactus to my collegues."
					client="Klaus Fischer"
					job="Lawyer Lami and Sons"
					rating="5 star"
				/>
			</div>
			<div className="flex justify-between mt-8">
				<div>
					<p>buttons</p>
				</div>
				<div>
					<p>Arrows</p>
				</div>
			</div>
		</section>
	);
}
