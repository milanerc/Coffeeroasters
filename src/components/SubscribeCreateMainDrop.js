import React from 'react';
import SubscribeCreateMainDropItem from './SubscribeCreateMainDropItem';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const SubscribeCreateMainDrop = (props) => {
    return (
        <div className='xl:mx-11'>
            <Accordion >
                <AccordionSummary
                    expandIcon={<i className="fas fa-angle-down text-dark_cyan" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    disabled={props.disabled === true ? true : false}
                    >
                    <h2 className='text-light_grey pb-8'>{props.title}</h2>
                </AccordionSummary>
                <AccordionDetails>
                        <div className='md:flex lg:pb-12'>
                            <SubscribeCreateMainDropItem    title={props.item1Title} 
                                                            text={props.item1Text} 
                                                            setActive={props.itemSetActive}
                                                            active={props.itemCheckActive === props.item1Title ? true : false}
                                                            />
                            <SubscribeCreateMainDropItem    title={props.item2Title} 
                                                            text={props.item2Text} 
                                                            setActive={props.itemSetActive}
                                                            active={props.itemCheckActive === props.item2Title ? true : false}
                                                            />
                            <SubscribeCreateMainDropItem    title={props.item3Title} 
                                                            text={props.item3Text} 
                                                            setActive={props.itemSetActive}
                                                            active={props.itemCheckActive === props.item3Title ? true : false}
                                                            />
                        </div>
                    </AccordionDetails>
            </Accordion>
            </div>
    )
}

export default SubscribeCreateMainDrop
