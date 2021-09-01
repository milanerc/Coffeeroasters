import React from 'react';
import iconClose from '../assets/shared/mobile/icon-close.svg';
import logoDesktop from '../assets/shared/desktop/logo.svg';

const HamburgerMenu = (props) => {

    const closeMenu = (e) => {
        if(e.target === e.currentTarget){ 
            props.setIsMenuOpen(false);
        }
    }

    return (
        <div className={`z-10 absolute inset-0 px-4 sm:px-20 py-4 w-full`} onClick={ (e) => { closeMenu(e)}}>
            <div className="relative text-center m-auto p-2 bg-white h-5/6 fadeDiv">
                <div className='flex justify-between mb-20'>
                    <img className='h-4' src={logoDesktop} alt='logo'/>
                    <img className="h-3 mt-1 cursor-pointer" src={iconClose} alt='menu close icon' onClick={ () => {props.setIsMenuOpen(false)} } />
                </div>
                <div>
                    <div className='frauncesFont text-40'>
                        <a href='/'><h4 className='text-dark_grey hover:text-light_grey'>Home</h4></a><br />
                        <a href='/about'><h4 className='text-dark_grey hover:text-light_grey'>About Us</h4></a><br />
                        <a href='/subscribe'><h4 className='text-dark_grey hover:text-light_grey'>Create Your Plan</h4></a><br />                    </div>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu
