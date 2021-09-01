import React from 'react';
import SubscribeSummaryModal from './SubscribeSummaryModal';
import SubscribeOrderSummary from './SubscribeOrderSummary';
import SubscribeCreateMainDrop from './SubscribeCreateMainDrop';

const SubscribeCreateMain = (props) => {


    return (
        <div className='w-full lg:w-2/3'>
            {/*************How do you drink your coffee? **************/}
            <SubscribeCreateMainDrop    title={'How do you drink your coffee?'}
                                        itemSetActive={props.setHowYouDrink}
                                        itemCheckActive={props.howYouDrink}

                                        item1Title={'Capsule'}
                                        item1Text={'Compatible with Nespresso systems and similar brewers'}

                                        item2Title={'Filter'}
                                        item2Text={'For pour over or drip methods like Aeropress, Chemex, and V60'}


                                        item3Title={'Espresso'}
                                        item3Text={'Dense and finely ground beans for an intense, flavorful experience'}

                                        />
            {/*************What type of coffee?**************/}
            <SubscribeCreateMainDrop    title={'What type of coffee?'}
                                        itemSetActive={props.setWhatType}
                                        itemCheckActive={props.whatType}

                                        item1Title={'Single Origin'}
                                        item1Text={'Distinct, high quality coffee from a specific family-owned farm'}

                                        item2Title={'Decaf'}
                                        item2Text={'Just like regular coffee, except the caffeine has been removed'}


                                        item3Title={'Blended'}
                                        item3Text={'Combination of two or three dark roasted beans of organic coffees'}

                                        />
            {/*************How much would you like? **************/}
            <SubscribeCreateMainDrop    title={'How much would you like?'}
                                        itemSetActive={props.setHowMuch}
                                        itemCheckActive={props.howMuch}

                                        item1Title={'250g'}
                                        item1Text={'Perfect for the solo drinker. Yields about 12 delicious cups.'}

                                        item2Title={'500g'}
                                        item2Text={'Perfect option for a couple. Yields about 40 delectable cups.'}


                                        item3Title={'1000g'}
                                        item3Text={'Perfect for offices and events. Yields about 90 delightful cups.'}

                                        />
            {/*************Want us to grind them? **************/}
            <SubscribeCreateMainDrop    title={'Want us to grind them?'}
                                        itemSetActive={props.setIsGrind}
                                        itemCheckActive={props.isGrind}

                                        disabled={props.howYouDrink === 'Capsule' ? true : false}

                                        item1Title={'Whole Bean'}
                                        item1Text={'Best choice if you cherish the full sensory experience'}

                                        item2Title={'Filter'}
                                        item2Text={'For drip or pour-over coffee methods such as V60 or Aeropress'}


                                        item3Title={'Cafetiére'}
                                        item3Text={'Course ground beans specially suited for french press coffee'}

                                        />
            {/*************How often should we deliver?**************/}
            <SubscribeCreateMainDrop    title={'How often should we deliver?'}
                                        itemSetActive={props.setHowOftenDeliver}
                                        itemCheckActive={props.howOftenDeliver}

                                        item1Title={'Every week'}
                                        item1Text={`${props.howMuch === '1000g' ? '$22.00' : props.howMuch === '500g' ? '$13.00': '$7.20'} per shipment. Includes free first-class shipping.`}

                                        item2Title={'Every 2 weeks'}
                                        item2Text={`${props.howMuch === '1000g' ? '$32.00' : props.howMuch === '500g' ? '$17.50': '$9.60'} per shipment. Includes free priority shipping.`}


                                        item3Title={'Every month'}
                                        item3Text={`${props.howMuch === '1000g' ? '$42.00' : props.howMuch === '500g' ? '$22.00': '$12.00'} per shipment. Includes free priority shipping.`}

                                        />
            <SubscribeOrderSummary  howYouDrink={props.howYouDrink}
                                    whatType={props.whatType}
                                    howMuch={props.howMuch}
                                    isGrind={props.isGrind}
                                    howOftenDeliver={props.howOftenDeliver}
                                    />
            <div className='text-center lg:text-right lg:mx-11'>
                <button disabled={props.allChecked === true ? false : true} onClick={() => {props.setIsSummaryOpen(true)}} className={`${props.allChecked === true ? 'bg-dark_cyan hover:bg-light_cyan' : 'bg-gray-200 cursor-not-allowed'} text-white rounded py-4 text-xs md:text-lg px-8`}>Create my plan!</button>
            </div>
            {props.isSummaryOpen === true   ? <SubscribeSummaryModal    setIsSummaryOpen={props.setIsSummaryOpen} 
                                                                        howYouDrink={props.howYouDrink}
                                                                        whatType={props.whatType}
                                                                        howMuch={props.howMuch}
                                                                        isGrind={props.isGrind}
                                                                        howOftenDeliver={props.howOftenDeliver}
                                                                        /> 
                                            : ''}
        </div>
    )
}

export default SubscribeCreateMain
