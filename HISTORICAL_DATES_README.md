# Компонент "Исторические даты"

Интерактивный компонент для отображения временных отрезков с событиями, созданный в соответствии с макетом Figma.

## Особенности

- ✅ **Интерактивная временная шкала** с точками на окружности
- ✅ **Адаптивный слайдер событий** с навигацией
- ✅ **GSAP анимации** для плавных переходов
- ✅ **TypeScript** для типобезопасности
- ✅ **SCSS стили** в соответствии с макетом
- ✅ **Независимость** - можно использовать несколько блоков на странице
- ✅ **Поддержка 2-6 временных отрезков**

## Установка зависимостей

```bash
npm install swiper gsap
```

## Использование

### Базовое использование

```tsx
import HistoricalDates, { TimeSegment } from './components/HistoricalDates';

const segments: TimeSegment[] = [
  {
    id: 1,
    name: 'Наука',
    startYear: 2015,
    endYear: 2022,
    events: [
      {
        id: 1,
        year: 2015,
        description: 'Описание события 2015 года'
      },
      // ... другие события
    ]
  },
  // ... другие временные отрезки
];

function App() {
  return <HistoricalDates segments={segments} />;
}
```

### С дополнительными классами

```tsx
<HistoricalDates 
  segments={segments} 
  className="custom-historical-dates" 
/>
```

## Интерфейсы TypeScript

### TimeSegment

```typescript
interface TimeSegment {
  id: number;           // Уникальный идентификатор
  name: string;         // Название категории (например, "Наука")
  startYear: number;    // Начальный год отрезка
  endYear: number;      // Конечный год отрезка
  events: Event[];      // Массив событий
}
```

### Event

```typescript
interface Event {
  id: number;           // Уникальный идентификатор события
  year: number;         // Год события
  description: string;  // Описание события
}
```

## Структура компонента

### Основные элементы

1. **Заголовок** - с декоративной полосой
2. **Временная шкала** - большие числа года и интерактивные точки
3. **Слайдер событий** - с навигацией и пагинацией

### Интерактивность

- **Точки на окружности** - переключение между временными отрезками
- **Стрелки навигации** - перемещение по событиям в слайдере
- **Адаптивность** - автоматическая настройка количества слайдов

## Стилизация

Компонент использует SCSS с переменными для легкой кастомизации:

```scss
// Основные цвета
$primary-blue: #4A70FF;
$primary-pink: #FF6B9B;
$background: #F8F9FB;
$text-dark: #1A1A1A;
$text-gray: #666;

// Размеры
$timeline-radius: 120px;
$dot-size: 12px;
$year-font-size: 120px;
```

## Анимации

Используется GSAP для:
- Плавного переключения между временными отрезками
- Анимации активных точек на временной шкале
- Эффектов при наведении на элементы

## Адаптивность

- **Desktop** (1024px+): 3 слайда в ряд
- **Tablet** (768px-1023px): 2 слайда в ряд
- **Mobile** (до 767px): 1 слайд в ряд

## Примеры использования

### Несколько независимых блоков

```tsx
function App() {
  return (
    <div>
      <HistoricalDates segments={scienceSegments} />
      <HistoricalDates segments={techSegments} />
      <HistoricalDates segments={spaceSegments} />
    </div>
  );
}
```

### Кастомизация стилей

```scss
.custom-historical-dates {
  .timeline-dot.active {
    background: #custom-color;
  }
  
  .year-number--blue {
    color: #custom-color;
  }
}
```

## Требования

- React 18+
- TypeScript 4.9+
- Swiper 12+
- GSAP 3.13+

## Браузерная поддержка

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Лицензия

ISC
