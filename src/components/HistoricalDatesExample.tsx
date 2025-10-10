import React from 'react';
import HistoricalDates, { TimeSegment } from './HistoricalDates';
import '../styles/HistoricalDatesExample.scss';

const HistoricalDatesExample: React.FC = () => {
  // Пример данных для компонента
  const sampleSegments: TimeSegment[] = [
    {
      id: 1,
      name: 'Наука',
      startYear: 2015,
      endYear: 2022,
      events: [
        {
          id: 1,
          year: 2015,
          description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
        },
        {
          id: 2,
          year: 2016,
          description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
        },
        {
          id: 3,
          year: 2017,
          description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
          id: 4,
          year: 2018,
          description: 'Запуск космического телескопа Джеймса Уэбба, который заменит Хаббл'
        },
        {
          id: 5,
          year: 2019,
          description: 'Первое изображение черной дыры получено с помощью Event Horizon Telescope'
        },
        {
          id: 6,
          year: 2020,
          description: 'Разработка вакцин против COVID-19 с использованием технологии мРНК'
        }
      ]
    },
    {
      id: 2,
      name: 'Технологии',
      startYear: 2018,
      endYear: 2024,
      events: [
        {
          id: 7,
          year: 2018,
          description: 'Запуск первого коммерческого спутника Starlink для глобального интернета'
        },
        {
          id: 8,
          year: 2019,
          description: 'Презентация первого смартфона с поддержкой 5G'
        },
        {
          id: 9,
          year: 2020,
          description: 'Массовый переход на удаленную работу из-за пандемии COVID-19'
        },
        {
          id: 10,
          year: 2021,
          description: 'Запуск метавселенной Facebook (Meta) и развитие VR/AR технологий'
        },
        {
          id: 11,
          year: 2022,
          description: 'Популяризация искусственного интеллекта с появлением ChatGPT'
        },
        {
          id: 12,
          year: 2023,
          description: 'Развитие квантовых компьютеров и их практическое применение'
        }
      ]
    },
    {
      id: 3,
      name: 'Космос',
      startYear: 2020,
      endYear: 2025,
      events: [
        {
          id: 13,
          year: 2020,
          description: 'Первый коммерческий полет SpaceX с астронавтами NASA'
        },
        {
          id: 14,
          year: 2021,
          description: 'Посадка марсохода Perseverance на Марс'
        },
        {
          id: 15,
          year: 2022,
          description: 'Запуск миссии Artemis I для возвращения на Луну'
        },
        {
          id: 16,
          year: 2023,
          description: 'Успешный полет корабля Starship SpaceX'
        },
        {
          id: 17,
          year: 2024,
          description: 'Планируемая высадка астронавтов на Луну'
        }
      ]
    },
    {
      id: 4,
      name: 'Медицина',
      startYear: 2019,
      endYear: 2023,
      events: [
        {
          id: 18,
          year: 2019,
          description: 'Первые успешные операции по пересадке искусственного сердца'
        },
        {
          id: 19,
          year: 2020,
          description: 'Разработка и тестирование вакцин против COVID-19'
        },
        {
          id: 20,
          year: 2021,
          description: 'Первый успешный случай лечения рака с помощью CAR-T терапии'
        },
        {
          id: 21,
          year: 2022,
          description: 'Разработка персонализированной медицины на основе генетики'
        },
        {
          id: 22,
          year: 2023,
          description: 'Первый успешный эксперимент по редактированию генов у человека'
        }
      ]
    },
    {
      id: 5,
      name: 'Экология',
      startYear: 2016,
      endYear: 2022,
      events: [
        {
          id: 23,
          year: 2016,
          description: 'Подписание Парижского соглашения по климату'
        },
        {
          id: 24,
          year: 2017,
          description: 'Массовый переход на возобновляемые источники энергии'
        },
        {
          id: 25,
          year: 2018,
          description: 'Запрет одноразового пластика в Европейском союзе'
        },
        {
          id: 26,
          year: 2019,
          description: 'Глобальные климатические забастовки молодежи'
        },
        {
          id: 27,
          year: 2020,
          description: 'Снижение выбросов CO2 из-за пандемии COVID-19'
        },
        {
          id: 28,
          year: 2021,
          description: 'Саммит по климату в Глазго и новые обязательства стран'
        }
      ]
    },
    {
      id: 6,
      name: 'Искусство',
      startYear: 2017,
      endYear: 2023,
      events: [
        {
          id: 29,
          year: 2017,
          description: 'Первая продажа NFT-арта за миллионы долларов'
        },
        {
          id: 30,
          year: 2018,
          description: 'Популяризация стриминговых сервисов в музыке и кино'
        },
        {
          id: 31,
          year: 2019,
          description: 'Развитие виртуальных концертов и выставок'
        },
        {
          id: 32,
          year: 2020,
          description: 'Массовый переход искусства в онлайн-формат'
        },
        {
          id: 33,
          year: 2021,
          description: 'Бум NFT-рынка и цифрового искусства'
        },
        {
          id: 34,
          year: 2022,
          description: 'Интеграция ИИ в создание произведений искусства'
        }
      ]
    }
  ];

  return (
    <div className="historical-dates-example">
      <div className="container">
        
        <div className="example-section">
          <HistoricalDates segments={sampleSegments} />
        </div>
      </div>
    </div>
  );
};

export default HistoricalDatesExample;
