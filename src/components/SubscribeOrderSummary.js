import React from 'react'

const SubscribeOrderSummary = (props) => {
    return (
        <div className='mt-10 lg:mx-11 bg-dark_grey text-white pt-6 px-4 sm:px-20 pb-12 mb-10 rounded-lg'>
            <p className='text-light_grey mb-4'>ORDER SUMMARY</p>
            <h4>“I drink my coffee {props.howYouDrink === 'Capsule' ? 'using' : 'as'} <span className='text-dark_cyan'>{props.howYouDrink}</span>, with a <span className='text-dark_cyan'>{props.whatType}</span> type of bean. <span className='text-dark_cyan'>{props.howMuch}&nbsp;</span> {props.howYouDrink === 'Capsule' ? '' : ' ground ala' } <span className='text-dark_cyan'>{props.howYouDrink === 'Capsule' ? '' : props.isGrind}</span>, sent to me <span className='text-dark_cyan'>{props.howOftenDeliver}</span>.”</h4>
        </div>
    )
}

export default SubscribeOrderSummary
