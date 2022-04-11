
import { dataContact } from '../../data/dataContact';
import './contact.css';


const Contact = () => {

  const form = "https://formspree.io/f/xnqwgner"

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {
            dataContact.map( ({ id, icon, title, contact, href }) => {
              return (
                <article key={ id } className="contact__option">
                  { icon }
                  <h4>{ title }</h4>
                  <h5>{ contact }</h5>
                  <a href={ href } target="_blank" rel="noopener noreferrer">Send A Message</a>
                </article>
              )
            })
          }
        </div>
        <form action={ form } method="POST">
          <input type="text" name="name" placeholder="Your Full Name" required autoComplete='off' />
          <input type="email" name="email" placeholder="Your Email" required autoComplete='off' />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact