import React from 'react';

const HomeWhyUsItem = (props) => {
    return (
        <div className='max-h-80 lg:max-h-full w-5/6 m-auto lg:w-1/3 lg:min-h-1/2 rounded-lg md:flex bg-dark_cyan text-center px-6 py-12 my-4 lg:mx-2 xl:mx-4 md:py-4 md:px-2 lg:py-16 lg:px-8 block md:flex lg:block'>
            <img className='m-auto h-16 w-16 mt-0 md:mt-8 lg:mt-0 mb-4 xs:mb-16 md:mb-20' src={props.img} alt='Why Us Item' />
            <div className='w-full md:w-3/4 md:text-left lg:text-center lg:w-full mt-4'>
                <h4 className='text-white'>{props.title}</h4><br />
                <p className='text-white'>{props.text}</p>
            </div>
        </div>
    )
}

export default HomeWhyUsItem
