import './about.css';

import { FaAward } from 'react-icons/fa';
import { BsFileEarmarkCodeFill } from 'react-icons/bs';
import { IoPeopleSharp } from 'react-icons/io5';

import ME from '../../assets/me-about.jpg' 

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <IoPeopleSharp className='about__icon' />
              <h5>Clients</h5>
              <small>1500+ Wolkride</small>
            </article>
            <article className="about__card last-one">
              <BsFileEarmarkCodeFill className='about__icon' />
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quisquam dolorum excepturi blanditiis vitae. Autem reprehenderit corrupti alias? Aut deleniti cupiditate voluptatum suscipit tenetur temporibus mollitia itaque sunt vero magni.</p>

          <a className='btn btn-primary' href="#contact" rel="noopener noreferrer">Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About