import React from 'react';
import Container from './Container';
import Button from '../buttons/Button';
import { AliwangwangFilled } from '@ant-design/icons';

const Navbar = () => {
    const menuItems =[
        {name:"Home"},
        {name:"Solution"},
        {name:"Sustainablity"},
        {name:"How It Works"},
    ]
    return (
       <Container>
        <nav className='bg-black text-white font-semibold flex justify-between items-center px-4 rounded-full py-4 fixed top-5 w-11/12'>
            <div className='flex items-center gap-1'>
                <AliwangwangFilled className='text-4xl'/>
                <span className='text-3xl'>Agrova</span>
                </div>
            <div>
                <ul className='flex gap-8'>
                    {menuItems.map((item, i) => {
                        return <li key={i}>{item.name}</li>;
                    })}
                </ul>
            </div>
            <div className='flex gap-4 items-center'>
                <button>Sign Up</button>
                <Button className={`bg-white px-5 hover:bg-primary transition-all duration-300 cursor-pointer`}>Log In</Button>
            </div>
        </nav>
       </Container>
    );
};

export default Navbar;