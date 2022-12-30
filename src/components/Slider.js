import React, { useState } from 'react';
import { Card } from '@material-tailwind/react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    const goToSlide = (index) => {
      setCurrent(index);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
        <section className='slider' style={{ position: 'relative' }}>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <>
                    <img src={slide.image} alt='travel image' className='image' />
                  </>
                )}
          <footer className='text-center flex justify-center'>
            <div className="dots absolute bottom-[10px] dot_bar">
              {slides.map((_, index) => (
                <button
                  className={index === current ? 'dot active' : 'dot'}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </footer>
              </div>
            );
          })}
        </section>
      );
    };
  
  export default ImageSlider;