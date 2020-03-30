import React from 'react';
import {Link} from 'react-router-dom';
import Touch from '../components/Touch';

const Home = () => {
    return (
        <>
        <div className="home" >
            <p>Are you looking for a celebrity photographer who would capture the authenticity of your celebration but also feature artistic portraits? Then you came to the right address. You can book me in Lithuania or anywhere in the world and I will have my passport. I offer many options including engagement photo sessions and wedding albums tailored to your wishes</p>
                <p>Everything starts with our first connection, so please reach out to me for further info.</p>
           <div />
           <Link to='/About' className="btn-primary">About me</Link>
        </div>
        <Touch />
        </>
      
    )
}

export default Home;