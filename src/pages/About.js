import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="about">
            <p>
            Hi, I’m Rasa. I seek the balance between composition, light and emotion; in search of the perfection in the imperfection. Capturing sincere moments of authentic connection and revealing the raw, intense, funny and even fragile feelings that will color your future memories; for me that is what photography is all about.
Through my work I seek to reveal your unique personality and document the essence of your life and love unfolding naturally through compelling photographs that stand the test of time.
I currently live in Kaunas, Lithuania, and travel throughout Europe and around the world for weddings, family documentary portraits, and commercial assignments.
            </p>
            <Link to="/" className="btn-primary">
                return 
            </Link>
        </div>
    )
}

export default About;

