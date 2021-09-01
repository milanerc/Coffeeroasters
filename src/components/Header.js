import React from 'react';
import logoDesktop from '../assets/shared/desktop/logo.svg';
import iconHamburger from '../assets/shared/mobile/icon-hamburger.svg';
import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='flex justify-between py-12 px-8 sm:px-20'>
            <a href='/'><img src={logoDesktop} className='h-full w-64' alt='logo'/></a>
            <nav className='hidden md:flex mt-2'>
                <a className='text-light_grey hover:text-dark_grey' href='/'>HOME</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className='text-light_grey hover:text-dark_grey' href='/about'>ABOUT US</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className='text-light_grey hover:text-dark_grey' href='/subscribe'>CREATE YOUR PLAN</a>
            </nav>
            <img className='md:hidden h-5 mt-2 cursor-pointer' alt='menu bars' src={iconHamburger} onClick={ () => {setIsMenuOpen(!isMenuOpen)}}/>
            {isMenuOpen === true ? <HamburgerMenu setIsMenuOpen={setIsMenuOpen} /> : ''}

        </div>
    )
}

export default Header
