import './experience.css';
import { dataExperience } from '../../data/dataExperience';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        {
          dataExperience.map( ({ title, info, id }) => {
            return (
              <div key={ id }>
                <h3>{ title }</h3>
                <div className='experience__content'>
                  {
                    info.map( ({ id, icon, name, level }) => {
                      return (
                        <article key={ id } className='experience__details'>
                          { icon }
                          <div>
                            <h4>{ name }</h4>
                            <small className='text-light'>{ level }</small>
                          </div>
                        </article>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Experience