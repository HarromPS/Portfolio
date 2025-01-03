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
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className='flex items-center gap-2' onClick={(event) => {
            event.preventDefault();
            setActive("");
            window.scrollTo(0, 0);
          }}>
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">Hariom</p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {
              navLinks.map((items) => (
                <li
                  key={items.id}
                  className={`${active === items.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-white hover:decoration-white hover:underline-offset-8 transition duration-300`}
                >
                  <a href={`${items.id}`} >{items.title}</a>
                </li>
              ))
            }
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu} alt="menu" className='w-[28px] object-contain cursor-pointer' onClick={() => {
              setToggle(!toggle)
            }} />

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}>
              <ul className="list-none flex-col gap-4 flex justify-end items-start">
                {
                  navLinks.map((items) => (
                    
                    <li
                      key={items.id}
                      className={`${active === items.title ? "text-white" : "text-secondary"
                        } font-poppins text-[16px] font-medium cursor-pointer`}
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