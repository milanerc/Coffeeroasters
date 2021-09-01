import React from 'react';
import AboutBanner from './AboutBanner';
import AboutTextArea from './AboutTextArea';
import AboutQuality from './AboutQuality';
import AboutHQ from './AboutHQ';

const About = () => {
    return (
        <div className='px-4 sm:px-20'>
            <AboutBanner />
            <AboutTextArea />
            <AboutQuality />
            <AboutHQ />
        </div>
    )
}

export default About
