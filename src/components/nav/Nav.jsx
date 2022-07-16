import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        className={activeNav === '#' ? 'active' : ''}
        href='#'
        onClick={() => setActiveNav('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        className={activeNav === '#about' ? 'active' : ''}
        href='#about'
        onClick={() => setActiveNav('#about')}
      >
        <AiOutlineUser />
      </a>
      <a
        className={activeNav === '#experience' ? 'active' : ''}
        href='#experience'
        onClick={() => setActiveNav('#experience')}
      >
        <BiBook />
      </a>
      <a
        className={activeNav === '#services' ? 'active' : ''}
        href='#services'
        onClick={() => setActiveNav('#services')}
      >
        <RiServiceLine />
      </a>
      <a
        className={activeNav === '#contact' ? 'active' : ''}
        href='#contact'
        onClick={() => setActiveNav('#contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
