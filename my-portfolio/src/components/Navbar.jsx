// Imports for the Navbar
import {useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Template contains */}

      <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent backdrop-blur-sm shadow-sm transition-all duration-300`}>
        <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
          <Link to="/" className='flex items-center gap-2' onClick={(event) => {
            event.preventDefault();
            setActive("");
            window.scrollTo(0, 0);
          }}>
            <img src={logo} alt="logo" className="object-contain w-9 h-9" />
            <p className="text-black text-[18px] font-bold cursor-pointer flex">Hariom</p>
          </Link>

          <ul className="flex-row hidden gap-10 list-none sm:flex">
            {
              navLinks.map((items) => (
                <li
                  key={items.id}
                  // className={`${active === items.title ? "text-white" : "text-secondary"
                  //   } hover:text-white text-[18px] font-medium cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-white hover:decoration-white hover:underline-offset-8 transition duration-300`}
                  className={`text-secondary text-[18px] font-medium cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-black hover:decoration-black hover:underline-offset-8 transition duration-300`}
                >
                  <a href={`${items.id}`} >{items.title}</a>
                </li>
              ))
            }
          </ul>

          <div className="flex items-center justify-end flex-1 sm:hidden">
            <img src={toggle ? close : menu} alt="menu" className='w-[28px] object-contain cursor-pointer' onClick={() => {
              setToggle(!toggle)
            }} />

          
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black absolute top-20 right-0 w-full min-w-[140px] z-10 rounded-x1 flex-col`}>
              <ul className="flex flex-col items-start justify-end gap-4 text-center list-none">
                {
                  navLinks.map((items) => (
                    
                    <li
                      key={items.id}
                      className={`${active === items.title ? "text-white" : "text-gray-400"
                        } font-poppins text-[16px] font-medium cursor-pointer `}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(items.title)
                      }}
                    >
                      <a href={`${items.id}`} >{items.title}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;