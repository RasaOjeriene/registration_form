import React from 'react';
import {Link} from "react-router-dom";

const Christening = () => {
    return (
        <div className="form">

            <div className="heading-title">
                <h4>Let's get in touch</h4>
                <p>Feeling like working together, or just want to reach out?</p>
                <p>Fill in the contact form below and I will get back to you as soon as possible.</p>
            </div>

            <div className="form-content">
                <label htmlFor="choose">First name </label>
                <input type="text"/>
                <label htmlFor="choose">Telephone number </label>
                <input type="text"/>
                <label htmlFor="choose">Christening date </label>
                <input type="date"/>
            </div>

           <div className="left-side">
                <label htmlFor="choose">Last name </label>
                <input type="text"/>
                <label htmlFor="choose">E-mail </label>
                <input type="text"/>
                 <label htmlFor="choose">Location </label>
                <input type="text"/>
           </div>
               
           <div className="form_wedding">
                <label htmlFor="choose">Civil wedding on the same day? </label>
                <label htmlFor="breakfast">yes</label>
                <input type="checkbox" />
                <label htmlFor="breakfast">no</label>
                <input type="checkbox" />
               
            </div>      

            <div className="find">
                <label htmlFor="choose">How did you find me? </label>
                <input type="text"/>
            </div>  

            <div className="textarea">
                    <label htmlFor="choose">Describe your day </label>
                    <textarea name="your-message" cols="40" rows="10"></textarea>  
            </div> 
             
            <Link to="/" className="btn-primary">
                return 
            </Link>
            <Link to="/Loading" className="btn-primary">
                send
            </Link>
        
        </div>
    )
}

export default Christening;