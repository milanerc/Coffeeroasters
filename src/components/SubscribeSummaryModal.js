import React, {useState, useEffect} from 'react';

const SubscribeSummaryModal = (props) => {

    const [cost, setCost] = useState('');  

    useEffect(() => {
        if(props.howOftenDeliver === 'Every month'){
            let weight = props.howMuch === '1000g' ? 42 : props.howMuch === '500g' ? 22 : 12;
            
            setCost((weight * 1.00).toFixed(2));
        }
        else if(props.howOftenDeliver === 'Every 2 weeks'){
            let weight = props.howMuch === '1000g' ? 32 : props.howMuch === '500g' ? 17.5 : 9.6;
            
            setCost((weight * 2).toFixed(2));
        }
        else if(props.howOftenDeliver === 'Every week'){
            let weight = props.howMuch === '1000g' ? 22 : props.howMuch === '500g' ? 13 : 7.2;
            
            setCost((weight * 4).toFixed(2));
        }
    }, [props.howOftenDeliver, props.howMuch]);

    const closeMenu = (e) => {
        if(e.target === e.currentTarget){ 
            props.setIsSummaryOpen(false);
        }
    }

    return (
            <div className={`fixed z-20 w-full h-full inset-0 bg-black bg-opacity-80`} onClick={ (e) => { closeMenu(e)}}>
                <div className="modal sticky bg-white">
                    <h4 className='bg-dark_grey text-white p-6'>Order Summary</h4>
                    <h4 className='text-light_grey px-10 pt-2 md:pt-10 pb-4'>“I drink my coffee {props.howYouDrink === 'Capsule' ? 'using' : 'as'} <span className='text-dark_cyan'>{props.howYouDrink}</span>, with a <span className='text-dark_cyan'>{props.whatType}</span> type of bean.<span className='text-dark_cyan'>{props.howMuch}</span> {props.howYouDrink === 'Capsule' ? '' : 'ground ala ' } <span className='text-dark_cyan'>{props.howYouDrink === 'Capsule' ? '' : props.isGrind}</span>, sent to me <span className='text-dark_cyan'>{props.howOftenDeliver}</span>.”</h4>
                    <p className='px-10 mb-4 md:mb-10'>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
                    <div className='flex px-10 justify-between'>
                        <h2 className='mt-2'>${cost}/mo</h2>
                        <button className={`bg-dark_cyan hover:bg-light_cyan text-white rounded py-4 text-xs md:text-lg px-10`} onClick={ () => { props.setIsSummaryOpen(false);}}>Checkout</button>
                    </div>
                </div>                
            </div>
    )
}

export default SubscribeSummaryModal
