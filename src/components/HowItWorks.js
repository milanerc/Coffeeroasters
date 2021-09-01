import React from 'react';
import HowItWorksItem from './HowItWorksItem';
import ProgressBar from './ProgressBar';

const HomeHowItWorks = (props) => {
    return (
        <div className={`${props.dark ? 'bg-dark_grey pb-12 lg:px-20 lg:m-20 pt-24' : 'py-10 md:pt-52 md:pb-36 lg:px-6 lg:m-16'}  px-4 md:px-16  rounded-lg mb-4`}>
            <div>
                {props.dark === true ? '' : <h4 className='text-center md:text-left text-light_grey mb-10 md:mb-20'>How it works</h4>}
                <ProgressBar />
                <div className={`${props.dark ? '' : ''} md:flex mb-20 mt-4`}>
                    <HowItWorksItem dark={props.dark} number={'01'} title={'Pick your coffee'} text={'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'} />
                    <HowItWorksItem dark={props.dark} number={'02'} title={'Choose the frequency'} text={'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'} />
                    <HowItWorksItem dark={props.dark} number={'03'} title={'Receive and enjoy!'} text={'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'} />
                </div>
                {props.dark === true ? '' : <div className='text-center md:text-left'>
                    <a href='/subscribe'><button className='text-white bg-dark_cyan hover:bg-light_cyan rounded py-4 text-xs md:text-lg px-10'>Create your plan</button></a>
                </div>}
            </div>
        </div>
    )
}

export default HomeHowItWorks
