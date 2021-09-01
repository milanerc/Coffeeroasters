import React from 'react';
import ProgressBar from './ProgressBar';
import SubscribeHowItWorksItem from './SubscribeHowItWorksItem';

const SubscribeHowItWorks = () => {
    return (
        <div className='py-10 md:pt-24 px-4 md:px-16 lg:px-28 lg:m-20 md:pb-36 bg-dark_grey rounded-lg mb-4'>
            <ProgressBar /> 
            <div className='md:flex'>
                <SubscribeHowItWorksItem number={'01'} title={'Pick your coffee'} text={'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'} />
                <SubscribeHowItWorksItem number={'02'} title={'Choose the frequency'} text={'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'} />
                <SubscribeHowItWorksItem number={'03'} title={'Receive and enjoy!'} text={'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'} />
            </div>
        </div>
    )
}

export default SubscribeHowItWorks
