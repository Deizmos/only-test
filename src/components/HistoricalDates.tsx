import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { gsap } from 'gsap';
import '../styles/HistoricalDates.scss';

// Импорт Swiper стилей
import 'swiper/css';
import 'swiper/css/navigation';

export interface TimeSegment {
  id: number;
  name: string;
  startYear: number;
  endYear: number;
  events: Event[];
}

export interface Event {
  id: number;
  year: number;
  description: string;
}

interface HistoricalDatesProps {
  segments: TimeSegment[];
  className?: string;
}

const HistoricalDates: React.FC<HistoricalDatesProps> = ({ segments, className = '' }) => {
  const [activeSegment, setActiveSegment] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const yearNumbersRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  // Анимация переключения года
  const animateYearChange = (newStartYear: number, newEndYear: number) => {
    if (yearNumbersRef.current) {
      gsap.fromTo(yearNumbersRef.current, 
        { scale: 0.8, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  };

  // Обработка клика по точке на временной шкале
  const handleDotClick = (segmentIndex: number) => {
    if (segmentIndex === activeSegment) return;
    
    setActiveSegment(segmentIndex);
    const segment = segments[segmentIndex];
    animateYearChange(segment.startYear, segment.endYear);
    
    // Сброс слайдера к первому событию
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  };

  // Создание точек на окружности
  const createDots = () => {
    const dots = [];
    const totalDots = segments.length;
    const angleStep = 360 / totalDots;
    
    for (let i = 0; i < totalDots; i++) {
      const angle = (i * angleStep) * (Math.PI / 180);
      const x = Math.cos(angle) * 120; // радиус окружности
      const y = Math.sin(angle) * 120;
      
      dots.push(
        <div
          key={i}
          ref={el => { if (el) dotsRef.current[i] = el; }}
          className={`timeline-dot ${i === activeSegment ? 'active' : ''}`}
          style={{
            position: 'absolute',
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: 'translate(-50%, -50%)'
          }}
          onClick={() => handleDotClick(i)}
        />
      );
    }
    
    return dots;
  };

  // Анимация активной точки
  useEffect(() => {
    dotsRef.current.forEach((dot, index) => {
      if (dot) {
        gsap.to(dot, {
          scale: index === activeSegment ? 1.2 : 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  }, [activeSegment]);

  const currentSegment = segments[activeSegment];
  const currentEvents = currentSegment?.events || [];

  return (
    <div className={`historical-dates ${className}`}>
      {/* Заголовок */}
      <div className="historical-dates__header">
        <div className="historical-dates__decorative-bar">
          <div className="bar-segment bar-segment--blue"></div>
          <div className="bar-segment bar-segment--pink"></div>
        </div>
        <h2 className="historical-dates__title">Исторические даты</h2>
      </div>

      {/* Основная временная шкала */}
      <div className="historical-dates__timeline" ref={timelineRef}>
        {/* Большие числа года */}
        <div className="timeline-years" ref={yearNumbersRef}>
          <span className="year-number year-number--blue">{currentSegment?.startYear}</span>
          <span className="year-number year-number--pink">{currentSegment?.endYear}</span>
        </div>

        {/* Окружность с точками */}
        <div className="timeline-circle">
          {createDots()}
        </div>

        {/* Индикатор категории */}
        <div className="timeline-category">
          <div className="category-count">{segments.length}</div>
          <span className="category-name">{currentSegment?.name}</span>
        </div>
      </div>

      {/* Слайдер событий */}
      <div className="historical-dates__events">
        <div className="events-navigation">
          <div className="events-pagination">
            <span className="current-slide">01</span>
            <span className="total-slides">/{String(currentEvents.length).padStart(2, '0')}</span>
          </div>
          <div className="events-arrows">
            <button 
              className="arrow-btn arrow-btn--prev"
              onClick={() => swiperInstance?.slidePrev()}
            >
              <span>&lt;</span>
            </button>
            <button 
              className="arrow-btn arrow-btn--next"
              onClick={() => swiperInstance?.slideNext()}
            >
              <span>&gt;</span>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          onSwiper={setSwiperInstance}
          className="events-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
        >
          {currentEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="event-card">
                <div className="event-year">{event.year}</div>
                <div className="event-description">{event.description}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HistoricalDates;
