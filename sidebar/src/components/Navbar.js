import React from "react";
import {BsBook} from 'react-icons/bs'


const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className='bg-black h-20 w-full flex items-center pl-10 space-x-4'>
            <div>
            <BsBook className='text-white text-4xl'/>
            </div>

            <div>
            <p className='text-white text-3xl'>My Coding Book</p>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
