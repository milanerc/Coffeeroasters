import React from 'react';

const SubscribeCreateMainDropItem = (props) => {
    return (
        <div className={`md:w-1/3 ${props.active === true ? 'bg-dark_cyan text-white' : 'bg-gray-200 text-dark_grey hover:bg-pale_orange'} m-2 mx-1 px-8 py-4 md:pt-8 pb-16 xl:pb-28 rounded cursor-pointer`} onClick={ () => {props.setActive(props.title)}}>
            <h4 className='mb-4'>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default SubscribeCreateMainDropItem
