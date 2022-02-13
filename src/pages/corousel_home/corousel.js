import React, { useState } from 'react';
import { CorouselData } from './corousel_data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './corousel.css'

const Corousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log('next')
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log('orec')
  };

  const slideshow = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log('slode')
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {CorouselData.map((slide, index) => {
        if (slide.length === 0) {
          console.log('error')
        }
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.img} alt='travel image' className='image' />
            )
            }
            <div className="timeout">
              {
                setTimeout(slideshow, 5000)
              }
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Corousel;