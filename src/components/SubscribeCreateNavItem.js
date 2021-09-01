import React from 'react'

const SubscribeCreateNavItem = (props) => {
    return (
        <div className={`flex p-6`}>
            <h4 className={`${props.checked === true ? 'text-dark_cyan' : props.disabled === true ? 'text-gray-100' :'text-light_grey'}`}>{props.number}</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h4 className={`${props.checked === true ? 'text-dark_grey' : props.disabled === true ? 'text-gray-100' :'text-light_grey'}`}>{props.title}</h4>
        </div>
    )
}

export default SubscribeCreateNavItem
