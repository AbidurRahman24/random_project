import React from 'react';

const Navbar = () => {
    return (
        <>
         <ul className="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box">
  <li><a href='/temp'>Temp</a></li>
  <li><a href='/quiz'>Quiz</a></li>
  <li><a href='/advice'>Advice</a></li>
  <li><a href='/weather'>Weather</a></li>
  <li><a href='/sidebar'>Sidebar</a></li>
  <li><a href='/filterData'>FilterData</a></li>
</ul>   
        </>
    );
};

export default Navbar;