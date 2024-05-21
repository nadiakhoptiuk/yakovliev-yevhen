# щоб скористатись svg іконками:

- Імпортуйте об'єкт "ICONS" з файлу "icons.ts" у даній папці;
- Звертатися до необхідної вам іконки треба по назві об'єкта, та назві іконки
  через крапку "ICONS.ICON_NAME";
- Відображення іконки на сторінці проходить в стандартному тезі <svg>;
- Використовуйте класи щоб задати розмір і колір іконки;
- Всі необхідні вам назви іконок з їх візуалізацією, ви знайдете в файлі
  [example.jpg](./example.jpg) у даній папці;

# приклад:

```bash
import {ICONS} from './icons.ts'

<ICONS.INSTAGRAM className="stroke-blue-700 w-10 h-10 hover:stroke-green-500"/>
```