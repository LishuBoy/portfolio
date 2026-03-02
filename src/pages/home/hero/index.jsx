import { Autoplay } from 'swiper/modules'; // Certifique-se de importar o Autoplay corretamente
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function MySwiper() {
  const images = [
    'images/icone1.png',
    'images/icone2.png',
    'images/icone3.png',
    'images/icone4.png',
    'images/icone5.png',
    'images/icone6.png',
    'images/icone7.png',
    'images/icone8.png',
  ];

  return (
    <div className='my-carousel'>
      <SwiperReact
      className="carousel1"
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={7}
      loop={true}
      autoplay={{
        delay: 0, // Remove o atraso entre os slides
        disableOnInteraction: false, // Continua o autoplay mesmo após interação
        waitForTransition: true, // Espera a transição terminar para iniciar a próxima
      }}
      speed={10000}
      breakpoints={{
        1024: {
          slidesPerView: 7,  
          spaceBetween: 20, 
        },
        768: {
          slidesPerView: 2,  
          spaceBetween: 15,  
        },
        0: {
          slidesPerView: 4, 
          spaceBetween: 10, 
        },
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
      ))}
    </SwiperReact>
    </div>
    
  );
}

export default MySwiper;
