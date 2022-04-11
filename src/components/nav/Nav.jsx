import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine, RiMessageLine } from 'react-icons/ri';
import './nav.css';

const Nav = () => {

  const [isActive, setIsActive] = useState('');

  const Home = "#";
  const About = "#about";
  const Experience = "#experience";
  const Services = "#services";
  const Contact = "#contact";

  return (
    <nav>
      <a 
        onClick={ () => { setIsActive(`${ Home }`) } } 
        className={ isActive === `${ Home }` ? 'active' : ''} 
        href={ Home } 
        rel="noopener noreferrer"
      >
        <AiOutlineHome />
      </a>

      <a 
        onClick={ () => { setIsActive(`${ About }`) } } 
        className={ isActive === `${ About }` ? 'active' : ''} 
        href={ About } rel="noopener noreferrer"
      >
        <AiOutlineUser />
      </a>

      <a 
        onClick={ () => { setIsActive(`${ Experience }`) } } 
        className={ isActive === `${ Experience }` ? 'active' : ''} 
        href={ Experience } 
        rel="noopener noreferrer"
      >
        <BiBook />
      </a>

      <a 
        onClick={ () => { setIsActive(`${ Services }`) } } 
        className={ isActive === `${ Services }` ? 'active' : ''} 
        href={ Services } 
        rel="noopener noreferrer"
      >
        <RiServiceLine />
      </a>

      <a 
        onClick={ () => { setIsActive(`${ Contact }`) } } 
        className={ isActive === `${ Contact }` ? 'active' : ''} 
        href={ Contact } 
        rel="noopener noreferrer"
      >
        <RiMessageLine />
      </a>

    </nav>
  )
}

export default Nav