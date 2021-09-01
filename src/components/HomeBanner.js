import React from 'react';

const HomeBanner = () => {
    return (
        <div className='homeBannerStyle px-4 md:px-24 py-4 md:py-28 rounded-lg'>
            <div className='lg:w-2/3 xl:w-1/2'>
                <h1 className='text-center md:text-left text-white'>Great coffee made simple.</h1>
                <p className='text-center md:text-left md:w-3/4 text-light_grey py-12 mb-4'>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <div className='text-center md:text-left mb-4'>
                    <a href='/subscribe'><button className='text-white bg-dark_cyan hover:bg-light_cyan rounded py-4 text-xs md:text-lg px-8'>Create your plan</button></a>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
