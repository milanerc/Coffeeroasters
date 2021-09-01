import React from 'react';
import image1 from '../assets/home/desktop/image-gran-espresso.png';
import image2 from '../assets/home/desktop/image-planalto.png';
import image3 from '../assets/home/desktop/image-piccollo.png';
import image4 from '../assets/home/desktop/image-danche.png';
import HomeCollectionItem from './HomeCollectionItem';

const HomeCollection = () => {
    return (
        <div className='mx-16 mt-36 lg:flex homeCollectionStyle md:py-8 lg:py-4'>
            <HomeCollectionItem className='w-full lg:w-1/4' title={'Gran Espresso'} img={image1} text={'Light and flavorful blend with cocoa and black pepper for an intense experience'}/>
            <HomeCollectionItem className='w-full lg:w-1/4' title={'Planalto'} img={image2} text={'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'}/>
            <HomeCollectionItem className='w-full lg:w-1/4' title={'Picollo'} img={image3} text={'Mild and smooth blend featuring notes of toasted almond and dried cherry'}/>
            <HomeCollectionItem className='w-full lg:w-1/4' title={'Danche'} img={image4} text={'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'}/>
        </div>
    )
}

export default HomeCollection
