import React, { Component } from 'react';
import Title from './Title';
import {Link} from 'react-router-dom';

export default class Touch extends Component{
    render (){
        return (
            <section className="services">
                <Title title="Hire me"/>
                <p>Everything starts with our first connection, so please reach out to me for further info.</p>
                <div className="services-center">
                <Link to='/Weddings' className="btn-primary">Weddings</Link>
                <Link to='/Family' className="btn-primary">Family</Link>
                <Link to='/Christening' className="btn-primary">Christening</Link>
                </div>
            </section>
        );
    }
}