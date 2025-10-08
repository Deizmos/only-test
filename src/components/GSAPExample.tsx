import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/GSAPExample.scss';

const GSAPExample: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const title = titleRef.current;

    if (box && title) {
      // Анимация появления заголовка
      gsap.fromTo(
        title,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      // Анимация коробки
      gsap.fromTo(
        box,
        { scale: 0, rotation: 180 },
        { 
          scale: 1, 
          rotation: 0, 
          duration: 1.5, 
          ease: 'elastic.out(1, 0.3)',
          delay: 0.5
        }
      );

      // Анимация при наведении
      const handleMouseEnter = () => {
        gsap.to(box, { scale: 1.2, duration: 0.3, ease: 'power2.out' });
      };

      const handleMouseLeave = () => {
        gsap.to(box, { scale: 1, duration: 0.3, ease: 'power2.out' });
      };

      box.addEventListener('mouseenter', handleMouseEnter);
      box.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        box.removeEventListener('mouseenter', handleMouseEnter);
        box.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const handleClick = () => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        rotation: '+=360',
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  };

  return (
    <div className="gsap-example">
      <h3 ref={titleRef}>Пример использования GSAP</h3>
      <div className="gsap-example__container">
        <div 
          ref={boxRef} 
          className="gsap-example__box"
          onClick={handleClick}
        >
          <span>Кликни меня!</span>
        </div>
        <p className="gsap-example__description">
          Наведи курсор на коробку и кликни для анимации
        </p>
      </div>
    </div>
  );
};

export default GSAPExample;
