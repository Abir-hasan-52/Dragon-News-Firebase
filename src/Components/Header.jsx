import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center mt-12 space-y-4 '>
           <img src={logo} alt="" />
           <p className='text-accent'>Journalism Without Fear or Favour</p>
           <p className='font-semibold text-accent mb-4'>{format(new Date(),'EEEE,MMMM MM, yyyy')}</p>
        </div>
    );
};

export default Header;