import React from "react";
import activity from '../../assets/activity.png';

const Activity = () =>
{
    return (
        <div className="bg-light-white">
            <div>
                <h2> Activity </h2>
                <img src={activity} alt="activity" /> {/*Here  I added only the activity image from the figma file
                                                         for presentation sake, will gently work with tomorrow as soon as i charge my devices*/ }
            </div>

        </div>
    );
};

export default Activity;
