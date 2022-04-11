import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {

  const Home = "#";
  const About = "#about";
  const Experience = "#experience";
  const Services = "#services";
  const Portfolio = "#portfolio";
  const Testimonials = "#testimonials";
  const Contact = "#contact";

  const twitter = "https://twitter.com/FabrizioDev";
  const facebook = "https://www.facebook.com/fabri.nucci/";
  const instagram = "https://www.instagram.com/fabriziodevbos/";

  return (
    <footer id='footer'>
      <a href={ Home } className='footer__logo'>BOSTIDEV</a>

      <ul className='permalinks'>
        <li><a href={ Home }>Home</a></li>
        <li><a href={ About }>About</a></li>
        <li><a href={ Experience }>Experience</a></li>
        <li><a href={ Services }>Services</a></li>
        <li><a href={ Portfolio }>Portfolio</a></li>
        <li><a href={ Testimonials }>Testimonials</a></li>
        <li><a href={ Contact }>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href={ facebook } target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href={ twitter } target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href={ instagram } target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; BOSTIDEV. All Rights Reserved </small>
      </div>
    </footer>
  )
}

export default Footer