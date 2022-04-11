import './portfolio.css';
import { dataPortfolio } from '../../data/dataPortfolio';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recents Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          dataPortfolio.map( ({ id, image, title, github, demo }) => {
            return (
              <article key={ id } className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={ image } alt="img" />
                </div>
                <h3>{ title }</h3>
                <div className='portfolio__item-cta'>
                  <a className='btn' href={ github } target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a className='btn btn-primary' href={ demo } target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio