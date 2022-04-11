import './services.css';
import { dataServices } from '../../data/dataServices';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {
          dataServices.map( ({ id, title, info }) => {
            return (
              <article key={ id } className="service">
                <div className="service__head">
                  <h3>{ title }</h3>
                </div>
                <ul className="service__list">
                  {
                    info.map( ({ id, icon, service }) => {
                      return (
                        <li key={ id }>
                          { icon }
                          <p>{ service }</p>
                        </li>
                      )
                    })
                  }
                </ul>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services