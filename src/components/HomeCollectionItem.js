import React from 'react'

const HomeCollectionItem = (props) => {
    return (
        <div className='lg:w-1/4 text-center px-2 md:px-10 py-10 md:py-16 lg:px-3 lg:py-32 block md:flex lg:block'>
            <img className='text-center w-full md:w-1/2 lg:w-full lg:h-1/2 lg:mb-20' src={props.img} alt='Collection Item' />
            <div className='w-full md:w-1/2 lg:w-full mt-4'>
                <h4 className='text=dark_grey'>{props.title}</h4><br />
                <p className='text-light_grey'>{props.text}</p>
            </div>
        </div>
    )
}

export default HomeCollectionItem
