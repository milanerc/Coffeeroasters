import React from 'react'
import SubscribeBanner from './SubscribeBanner'
import SubscribeCreate from './SubscribeCreate'
import HowItWorks from './HowItWorks'

const Subscribe = () => {
    return (
        <div className=''>
            <SubscribeBanner />
            <HowItWorks dark/>
            <SubscribeCreate />
        </div>
    )
}

export default Subscribe
