import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>Home 
        <ul>
            Navbar
            {/* "/add" is a child component url */}
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/id">Id</Link></li>
        </ul>

        {/* define an outlet component here so when these urls hits, it returns the respective child here from outlet  */}
        <Outlet/>
    </div>
  )
}

export default Home