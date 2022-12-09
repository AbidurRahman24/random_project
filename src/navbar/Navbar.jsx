import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
         <ul className="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box">
  <li><Link to={'/temp'}>Temp</Link></li>
  <li><Link to={'/quiz'}>Quiz</Link></li>
  <li><Link to={'/advice'}>Advice</Link></li>
  <li><Link to={'/weather'}>Weather</Link></li>
  <li><Link to={'/sidebar'}>Sidebar</Link></li>
  <li><Link to={'/filterData'}>FilterData</Link></li>
  <li><Link to={'/form'}>Form</Link></li>
</ul>   
        </>
    );
};

export default Navbar;