import './header.css';
import CTA from './CTA';

import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm am</h5>
        <h1>Fabrizio Nucci</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scrool Down</a>

      </div>
    </header>
  )
}

export default Header