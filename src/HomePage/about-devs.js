import React from 'react';
import DevCarousel from './dev-carousel';
import devs from '../constants/about-devs';

const AboutDevs = props => {
    return (
        <section className="s-dark p-5">
            <div className="container pb-4">
                <h1 className="display-4 pb-2">About LIT devs</h1>
                <DevCarousel devs={devs}/>
            </div>
        </section>
    );
}

export default AboutDevs;