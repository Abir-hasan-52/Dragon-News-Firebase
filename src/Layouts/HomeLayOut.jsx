import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../HomeLayouts/LeftAside';
import RightAside from '../HomeLayouts/RightAside';
import Loading from '../Components/Loading';

const HomeLayOut = () => {
    const {state}=useNavigate();
    return (
        <div>
             
            <header>
                <Header></Header>
                {import.meta.env.Vite_name}
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>

                <nav className='w-11/12 mx-auto'>
                    <Navbar></Navbar>

                </nav>
            </header>

            
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5 '>
                <aside className='col-span-3 h-fit sticky top-0'>
                    <LeftAside>
                        
                    </LeftAside>
                </aside>
                <section className='Main col-span-6'>
                   {state == "loading"?<Loading></Loading>:<Outlet></Outlet>} 
                </section>
                
                <aside className='col-span-3 h-fit sticky top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayOut;