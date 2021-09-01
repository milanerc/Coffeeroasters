import React from 'react'

const AboutHQItem = (props) => {
    return (
        <div className='rounded-lg text-center md:text-left md:w-1/3 mb-10'>
            <div className='text-center sm:text-left mb-10'>
                <img className='m-auto md:m-0 w-1/4 md:h-12 md:w-12' src={props.img} alt='Why Us Item' />
            </div>
            <div className='w-full md:w-3/4  lg:w-full mt-4'>
                <h3 className='text-dark_grey'>{props.title}</h3><br />
                <p className='text-dark_grey'>{props.address}</p>
                <p className='text-dark_grey'>{props.city}</p>
                <p className='text-dark_grey'>{props.region}</p>
                <p className='text-dark_grey'>{props.number}</p>
            </div>
        </div>
    )
}

export default AboutHQItem
