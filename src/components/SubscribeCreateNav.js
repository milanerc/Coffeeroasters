import React from 'react';
import SubscribeCreateNavItem from './SubscribeCreateNavItem';

const SubscribeCreateNav = (props) => {
    return (
        <div className='w-1/3 hidden lg:block px-10'>
            <SubscribeCreateNavItem number={'01'} title={'Preferences'} checked={props.howYouDrink !== '_____' ? true : false}/><hr />
            <SubscribeCreateNavItem number={'02'} title={'Bean Type'} checked={props.whatType !== '_____' ? true : false}/><hr />
            <SubscribeCreateNavItem number={'03'} title={'Quantity'} checked={props.howMuch !== '_____' ? true : false}/><hr />
            <SubscribeCreateNavItem number={'04'} title={'Grind Option'} disabled={props.howYouDrink === 'Capsule' ? true : false} checked={props.isGrind !== '_____' ? true : false}/><hr />
            <SubscribeCreateNavItem number={'05'} title={'Deliveries'} checked={props.howOftenDeliver !== '_____' ? true : false}/>
            
        </div>
    )
}

export default SubscribeCreateNav
