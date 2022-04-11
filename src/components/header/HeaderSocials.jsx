import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';

const HeaderSocials = () => {

  const linkedin = "https://www.linkedin.com/in/fabrizio-nucci-1061271b9/";
  const github = "https://github.com/fabrinucci";
  const dribbble = "https://dribbble.com/fabrinucci";

  return (
    <div className='header__socials'>
      <a href={ linkedin } target="_blank" rel="noopener noreferrer" ><BsLinkedin /></a>
      <a href={ github } target="_blank" rel="noopener noreferrer" ><BsGithub /></a>
      <a href={ dribbble } target="_blank" rel="noopener noreferrer" ><BsDribbble /></a>
    </div>
  )
}

export default HeaderSocials