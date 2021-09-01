import React from 'react';
import Australia from '../assets/about/desktop/illustration-australia.svg';
import Canada from '../assets/about/desktop/illustration-canada.svg';
import UK from '../assets/about/desktop/illustration-uk.svg';
import AboutHQItem from './AboutHQItem';

const AboutHQ = () => {
    return (
        <div className='text-center rounded-lg md:mx-10 lg:mx-20 mt-44 pb-20 mb-16'>
            <h4 className='text-center md:text-left text-light_grey mb-20'>Our headquarters</h4><br />
            <div className='m-auto md:flex'>
                <AboutHQItem img={UK} title={'United Kingdom'} address={'68 Asfordby Rd'} city={'Alcaston'} region={'SY6 1YA'} number={'+44 1241 918425'} />
                <AboutHQItem img={Canada} title={'Canada'} address={'1528 Eglinton Avenue'} city={'Toronto'} region={'Ontario M4P 1A6'} number={'+1 416 485 2997'} />
                <AboutHQItem img={Australia} title={'Australia'} address={'36 Swanston Street'} city={'Kewell'} region={'Victoria'} number={'+61 4 9928 3629'} />
            </div>
        </div>
    )
}

export default AboutHQ