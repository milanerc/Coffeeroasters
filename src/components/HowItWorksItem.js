import React from 'react';

const HomeHowItWorksItem = (props) => {
    return (
        <div className={`pt-8 md:pt-0 text-center md:text-left md:w-1/3 md:mr-8 `}>
            <h1 className={`text-pale_orange md:mb-10`}>{props.number}</h1>
            <h3 className={`${props.dark ? 'text-white' : 'text-dark_grey'} mb-4 md:mb-10 lg:w-2/3`}>{props.title}</h3>
            <p className={`text-light_grey lg:w-4/5`}>{props.text}</p>
        </div>
    )
}

export default HomeHowItWorksItem
