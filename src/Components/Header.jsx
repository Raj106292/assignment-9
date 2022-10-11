import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './Header.css'

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='flex justify-between px-8 py-3 bg-sky-400 '>
            <div className='font-bold text-3xl'>
                <h3>Motion Quiz</h3>
            </div>
            <div>
                <div className="h-6 w-6 md:hidden" onClick={() => setOpen(!open)}>
                    {
                        open ? <XMarkIcon> </XMarkIcon> : <Bars3Icon></Bars3Icon>
                    }
                </div>
                <div className={`bg-sky-400 md:flex w-full justify-end absolute md:static ${open ? 'top-12 right-0 py-2' : 'top-[-120px] right-0'}`}>
                    <div className='px-3 font-bold mb-2'>
                        <NavLink to='/home' className={({isActive}) => isActive ? 'active' : undefined} >Home</NavLink>
                    </div>
                    <div className='px-3 font-bold mb-2'>
                        <NavLink to='/statistics' className={({isActive}) => isActive ? 'active' : undefined}>Statistics</NavLink>
                    </div>
                    <div className='px-3 font-bold'>
                        <NavLink to='/blog' className={({isActive}) => isActive ? 'active' : undefined}>Blog</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;