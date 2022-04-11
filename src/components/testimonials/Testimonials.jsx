import './testimonials.css';
import { dataTestimonials } from '../../data/dataTestimonials';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className='container testimonials__container'
      >
        {
          dataTestimonials.map( ({ id, avatar, name, review }) => {
            return (
              <SwiperSlide key={ id } className='testimonial'>
                <div className='client__avatar'>
                  <img src={ avatar } alt={ name } />
                </div>
                <h5 className='client__name'>{ name }</h5>
                <small className='client__review'>{ review }</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials