import React from 'react'

const SubscribeHowItWorksItem = (props) => {
    return (
        <div className='pt-8 md:pt-0 text-center md:text-left md:w-1/3 md:mr-8'>
            <h1 className='text-pale_orange md:mb-10'>{props.number}</h1>
            <h3 className='mb-4 md:mb-10 lg:w-2/3 text-white'>{props.title}</h3>
            <p className='lg:w-4/5 text-light_grey'>{props.text}</p>
        </div>
    )
}

export default SubscribeHowItWorksItem
