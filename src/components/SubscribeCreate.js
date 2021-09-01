import React, { useState, useEffect } from 'react';
import SubscribeCreateMain from './SubscribeCreateMain';
import SubscribeCreateNav from './SubscribeCreateNav';



const SubscribeCreate = () => {

    const [ howYouDrink, setHowYouDrink] = useState('_____');
    const [ whatType, setWhatType] = useState('_____');
    const [ howMuch, setHowMuch] = useState('_____');
    const [ isGrind, setIsGrind] = useState('_____');
    const [ howOftenDeliver, setHowOftenDeliver] = useState('_____');

    const [ allChecked, setAllChecked] = useState(false);

    const [isSummaryOpen, setIsSummaryOpen] = useState(false);

    useEffect(() => {
        if(howYouDrink === 'Capsule'){
            setIsGrind('_____');
        }
    }, [howYouDrink]);

    useEffect(() => {
        if((howYouDrink === 'Capsule' || isGrind !== '_____') && howYouDrink !== '_____' && whatType !== '_____' && howMuch !== '_____' && howOftenDeliver !== '_____'){
            setAllChecked(true);
        }
        else{
            setAllChecked(false);
        }
    }, [howYouDrink, whatType, howMuch, isGrind, howOftenDeliver]);

    return (
        <div className='lg:flex pt-16 mx-4 sm:mx-28 mb-32 md:mb-40'>
            <SubscribeCreateNav howYouDrink={howYouDrink}
                                whatType={whatType}
                                howMuch={howMuch}
                                isGrind={isGrind}
                                howOftenDeliver={howOftenDeliver}
                                />
            <SubscribeCreateMain    setHowYouDrink={setHowYouDrink}
                                    setWhatType={setWhatType}
                                    setHowMuch={setHowMuch}
                                    setIsGrind={setIsGrind}
                                    setHowOftenDeliver={setHowOftenDeliver}
                                    howYouDrink={howYouDrink}
                                    whatType={whatType}
                                    howMuch={howMuch}
                                    isGrind={isGrind}
                                    howOftenDeliver={howOftenDeliver}
                                    allChecked={allChecked}
                                    setIsSummaryOpen={setIsSummaryOpen}
                                    isSummaryOpen={isSummaryOpen}
                                    />
        </div>
    )
}

export default SubscribeCreate
