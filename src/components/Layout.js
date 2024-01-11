import React from 'react';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div>
    <div className='bg-sky-300'>sidebar</div>
      <div className='bg-pink-400'>header</div>
      <div><Outlet/> </div>
     
    </div>
  );
}

export default Layout