import React from 'react';
import logoDesktop from '../assets/shared/desktop/logo-light.png';

const Footer = () => {
    return (
        <div className='px-4 sm:px-20'>
            <div className='block lg:flex bg-dark_grey py-12 '>
                <div className='lg:w-1/3 text-center'>
                    <a href='/'><img className='h-7 w-49 m-auto' src={logoDesktop} alt='logo'/></a>
                </div><br />
                <nav className='md:flex mt-3 justify-center lg:w-1/3 text-center'>
                    <a className='text-light_grey hover:text-white' href='/'><h6>HOME</h6></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='text-light_grey hover:text-white' href='/about'><h6>ABOUT US</h6></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='text-light_grey hover:text-white' href='/subscribe'><h6>CREATE YOUR PLAN</h6></a>
                </nav><br />
                <div className='lg:pr-20 lg:w-1/3 text-center lg:text-right text-3xl text-white'>
                    <i className="fab fa-facebook-square hover:text-pale_orange cursor-pointer"></i>&nbsp;&nbsp;
                    <i className="fab fa-twitter hover:text-pale_orange cursor-pointer"></i>&nbsp;&nbsp;
                    <i className="fab fa-instagram hover:text-pale_orange cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
