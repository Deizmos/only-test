import React from 'react';
import SwiperExample from './components/SwiperExample';
import GSAPExample from './components/GSAPExample';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Тестовое задание</h1>
        <p className="app__subtitle">
          Проект настроен с TypeScript, React, Webpack, SASS, Swiper и GSAP
        </p>
      </header>
      
      <main className="app__main">
        <section className="app__section">
          <h2>Готово к разработке!</h2>
          <p>Все необходимые библиотеки установлены и настроены:</p>
          <ul className="app__features">
            <li>✅ TypeScript</li>
            <li>✅ React.js</li>
            <li>✅ Webpack</li>
            <li>✅ SASS/SCSS</li>
            <li>✅ Swiper (для слайдеров)</li>
            <li>✅ GSAP (для анимаций)</li>
          </ul>
        </section>

        <div className="container">
          <SwiperExample />
          <GSAPExample />
        </div>
      </main>
    </div>
  );
};

export default App;
