# 📚 Конспект: Тестирование в JavaScript с Jest

> **Тема:** Порядковые числительные, тестовые фреймворки, Jest
> **Модуль:** Structuring and Testing Data — Sprint 3 (Preparation)
> **Теги:** #javascript #jest #testing #tdd #npm

---

## 1. Порядковые числительные (Ordinal Numbers)

### Что это?

**Порядковое числительное** — это число с суффиксом, которое описывает *позицию* в последовательности.

| Число | Порядковое | Суффикс |
|-------|-----------|---------|
| 1     | 1st       | -st     |
| 2     | 2nd       | -nd     |
| 3     | 3rd       | -rd     |
| 4     | 4th       | -th     |
| 5     | 5th       | -th     |
| 11    | 11th      | -th ⚠️  |
| 12    | 12th      | -th ⚠️  |
| 13    | 13th      | -th ⚠️  |
| 21    | 21st      | -st     |
| 22    | 22nd      | -nd     |

> [!WARNING] Исключения — числа 11, 12, 13
> Числа 11, 12, 13 всегда получают суффикс **-th**, даже несмотря на то, что оканчиваются на 1, 2, 3.
> - 11 → **11th** (не 11st!)
> - 12 → **12th** (не 12nd!)
> - 13 → **13th** (не 13rd!)

### Правила образования суффикса

```
Последняя цифра числа → суффикс:
  1  → "st"  (но 11 → "th")
  2  → "nd"  (но 12 → "th")
  3  → "rd"  (но 13 → "th")
  остальные → "th"
```

### Спецификация функции `getOrdinalNumber`

**Спецификация** — это набор требований к поведению программы.

```javascript
// Принимает: целое число (1, 2, 3, ...)
// Возвращает: строку с порядковым числительным

getOrdinalNumber(1);  // → "1st"
getOrdinalNumber(2);  // → "2nd"
getOrdinalNumber(3);  // → "3rd"
getOrdinalNumber(6);  // → "6th"
getOrdinalNumber(11); // → "11th"
getOrdinalNumber(21); // → "21st"
```

---

## 2. Тестовые фреймворки

### Зачем нужны?

До этого мы использовали `console.assert` для проверки кода:

```javascript
// Старый способ — console.assert
const input = 1;
const targetOutput = "1st";
const currentOutput = getOrdinalNumber(input);

console.assert(
  targetOutput === currentOutput,
  `Expected ${targetOutput} but got ${currentOutput}`
);
```

**Проблемы `console.assert`:**
- Сложно читать при большом количестве тестов
- Нет чёткого вывода о том, что именно пошло не так
- Нужно вручную писать сообщения об ошибках

### Что даёт тестовый фреймворк?

> [!INFO] Тест — это любой код, который запускает проверку (assertion) на тестируемом коде.

Хороший тест должен:
- ✅ Быть **легко написать**
- ✅ Быть **легко читать**
- ✅ Давать **чёткую обратную связь** о текущем и ожидаемом результате
- ✅ Позволять **легко писать много тест-кейсов**

---

## 3. Создание проекта

### Структура проекта

```
ordinal-testing-example/
├── node_modules/        ← код зависимостей (не трогаем!)
├── package.json         ← информация о проекте
├── package-lock.json    ← точные версии зависимостей
└── get-ordinal-number.test.js
```

### `package.json` — что это?

**`package.json`** — файл в формате JSON, который хранит информацию о проекте.

```json
{
  "name": "ordinal-testing-example",
  "description": "Пример приложения с тестами на Jest",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^29.5.0"
  }
}
```

| Поле | Описание |
|------|----------|
| `name` | Название проекта |
| `description` | Описание проекта |
| `scripts` | Команды, которые можно запускать через `npm` |
| `devDependencies` | Пакеты, нужные только для разработки |

---

## 4. Пакеты и npm

### Ключевые понятия

> [!NOTE] Пакет (Package)
> Код, сгруппированный вместе для предоставления определённой функциональности. Мы используем пакеты, чтобы не решать каждую задачу с нуля.

> [!NOTE] Зависимость (Dependency)
> Пакет, от которого зависит наш проект. Хранится в `node_modules/`.

> [!NOTE] npm (Node Package Manager)
> Инструмент для скачивания и управления пакетами из реестра npm.

### Зачем использовать чужие пакеты?

- Другие разработчики уже решили многие задачи **хорошо**
- Мы можем сосредоточиться на **уникальной части** нашей задачи
- Пакеты поддерживаются и обновляются сообществом

---

## 5. Установка Jest

### Команда установки

```bash
npm install --save-dev jest
```

### Разбор команды по частям

| Часть | Значение |
|-------|----------|
| `npm` | Запускаем менеджер пакетов |
| `install` | Подкоманда: скачать и установить пакет |
| `jest` | Название пакета из реестра npm |
| `--save-dev` | Пакет нужен только для разработки, не для продакшена |

> [!TIP] Что происходит после установки?
> 1. Создаётся папка `node_modules/` с кодом Jest
> 2. В `package.json` добавляется секция `devDependencies`
> 3. Создаётся файл `package-lock.json` с точными версиями

---

## 6. API Jest

### Что такое API?

> [!NOTE] API (Application Programming Interface)
> Граница между программистом и приложением, позволяющая использовать функциональность приложения, не зная, как оно устроено внутри.

**API = Interface** — мы уже встречали это слово раньше.

Jest предоставляет API для написания тестов. Нам нужно изучить этот API, чтобы писать тесты.

---

## 7. Первый тест-кейс

### Синтаксис теста в Jest

```javascript
test("описание того, что мы проверяем", function () {
  // здесь пишем assertions (проверки)
});
```

### Разбор аргументов функции `test()`

| Аргумент | Тип | Описание |
|----------|-----|----------|
| 1-й | `string` | Описание поведения, которое мы тестируем |
| 2-й | `function` | Функция с проверками (assertions) |

### Assertion в Jest

```javascript
expect(текущийРезультат).toEqual(ожидаемыйРезультат);
```

- `expect()` — принимает текущий результат
- `toEqual()` — **матчер** (matcher): функция для сравнения значений

> [!NOTE] Матчер (Matcher)
> Функция в Jest, которую мы используем для сравнения значений. `toEqual` — один из матчеров.

### Полный первый тест

```javascript
// get-ordinal-number.test.js

function getOrdinalNumber() {}

test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});
```

### Как запустить тесты?

**Нельзя** запускать тест-файл через `node`:
```bash
node get-ordinal-number.test.js
# ❌ ReferenceError: test is not defined
```

Нужно добавить скрипт в `package.json`:
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

И запускать через:
```bash
npm test
```

---

## 8. Интерпретация обратной связи от Jest

### Ошибка: ReferenceError

```
ReferenceError: getOrdinalNumber is not defined
```

**Причина:** Мы пытаемся использовать переменную/функцию, которая не объявлена.

**Решение:** Объявить функцию `getOrdinalNumber`.

### Ошибка: тест не прошёл (Assertion Error)

Когда функция объявлена, но возвращает не то, что ожидается:

```
● converts 1 to an ordinal number

  expect(received).toEqual(expected)

  Expected: "1st"
  Received: undefined
```

Jest показывает нам **3 ключевые вещи:**
1. 🔴 **Название** провалившегося теста
2. 📊 **Expected** (ожидаемый результат) и **Received** (текущий результат)
3. 📍 **Номер строки**, где произошла ошибка

### Сравнение: Jest vs console.assert

```javascript
// console.assert — много кода, ручное сообщение об ошибке
const input = 1;
const targetOutput = "1st";
const currentOutput = getOrdinalNumber(input);
console.assert(
  targetOutput === currentOutput,
  `Expected ${targetOutput} but got ${currentOutput}`
);

// Jest — коротко, сообщение генерируется автоматически
expect(getOrdinalNumber(1)).toEqual("1st");
```

> [!SUCCESS] Преимущество Jest
> Jest автоматически генерирует понятное сообщение об ошибке с Expected и Received, поэтому нам не нужно писать переменные и сообщения вручную.

---

## 9. Обобщение реализации (TDD-подход)

### Шаг 1: Минимальная реализация (проходит 1 тест)

```javascript
function getOrdinalNumber() {
  return "1st"; // работает только для 1
}

test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st"); // ✅ проходит
});
```

### Шаг 2: Расширяем тест — добавляем больше случаев

```javascript
test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");   // ✅
  expect(getOrdinalNumber(11)).toEqual("11th"); // ❌ — нужно исправить!
  expect(getOrdinalNumber(21)).toEqual("21st"); // ❌ — нужно исправить!
});
```

### Шаг 3: Реализуем логику

```javascript
function getOrdinalNumber(num) {
  // Исключения: 11, 12, 13 всегда получают "th"
  if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) {
    return num + "th";
  }
  
  // Правила для последней цифры
  const lastDigit = num % 10;
  
  if (lastDigit === 1) return num + "st";
  if (lastDigit === 2) return num + "nd";
  if (lastDigit === 3) return num + "rd";
  return num + "th";
}
```

> [!TIP] TDD (Test-Driven Development)
> Подход, при котором сначала пишется тест, а потом реализация. Цикл: 🔴 Красный (тест падает) → 🟢 Зелёный (тест проходит) → 🔵 Рефакторинг.

---

## 10. Анонимные функции

### Именованная функция

```javascript
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}
// Имя: convertToPercentage — можно вызвать по имени
```

### Анонимная функция

```javascript
function (decimalNumber) {
  return `${decimalNumber * 100}%`;
}
// Нет имени — нельзя вызвать по имени
```

### Когда используем анонимные функции?

Когда передаём функцию как **аргумент** другой функции — нам не нужно её имя:

```javascript
test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});
```

Внутри `test()` наша функция получает имя параметра `testFunction`:

```javascript
// Как примерно устроена функция test() внутри:
function test(name, testFunction) {
  testFunction(); // вызывается по имени параметра
}
```

> [!NOTE] Анонимная функция
> Функция, которая **не привязана к имени** в области видимости, где она определена. Это не зависит от того, используется `function` или `=>`.

---

## 11. Стрелочные функции (Arrow Functions)

### 4 способа записи одной и той же функции

```javascript
// 1. Именованная функция (полная запись)
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

// 2. Анонимная функция (убрали имя)
function (decimalNumber) {
  return `${decimalNumber * 100}%`;
}

// 3. Стрелочная функция (убрали слово function, добавили =>)
(decimalNumber) => {
  return `${decimalNumber * 100}%`;
};

// 4. Стрелочная функция с неявным return (убрали {} и return)
(decimalNumber) => `${decimalNumber * 100}%`;
```

### Правила стрелочных функций

| Условие | Можно убрать |
|---------|-------------|
| Один параметр | Скобки вокруг параметра: `x => x * 2` |
| Тело — одно выражение | `{}` и `return`: `x => x * 2` |
| Несколько параметров | Скобки **обязательны**: `(a, b) => a + b` |
| Несколько строк в теле | `{}` и `return` **обязательны** |

### Применение в Jest

```javascript
// Было (с function)
test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
});

// Стало (со стрелочной функцией)
test("works for any number ending in 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
});
```

### Стрелочная функция с именем

```javascript
// Стрелочные функции тоже могут быть именованными!
const convertToPercentage = (decimalNumber) => `${decimalNumber * 100}%`;

// Анонимность — это про отсутствие имени, а не про синтаксис
```

---

## 12. Практические задания

### Упражнение 1: Наибольшее из трёх чисел

**Задача:** Создать функцию, которая принимает три числа и возвращает наибольшее.

#### Шаг 1: Пишем тест

```javascript
// largest.test.js

const getLargest = require("./largest");

test("returns the largest of three numbers", () => {
  expect(getLargest(1, 2, 3)).toEqual(3);
  expect(getLargest(10, 5, 7)).toEqual(10);
  expect(getLargest(-1, -5, -3)).toEqual(-1);
  expect(getLargest(4, 4, 4)).toEqual(4); // все равны
});
```

#### Шаг 2: Реализуем функцию

```javascript
// largest.js

function getLargest(a, b, c) {
  return Math.max(a, b, c);
}

module.exports = getLargest;
```

#### Шаг 3: Запускаем тесты

```bash
npm test
```

### Упражнение 2: Полный цикл создания проекта

```bash
# 1. Создаём папку и переходим в неё
mkdir ordinal-testing-example
cd ordinal-testing-example

# 2. Инициализируем проект (создаёт package.json автоматически)
npm init -y

# 3. Устанавливаем Jest
npm install --save-dev jest

# 4. Редактируем package.json — меняем скрипт test
# Было: "test": "echo \"Error: no test specified\" && exit 1"
# Стало: "test": "jest"

# 5. Создаём файл с тестами
touch example1.test.js

# 6. Запускаем тесты
npm test
```

### Полный пример: `getOrdinalNumber` с тестами

```javascript
// get-ordinal-number.js

function getOrdinalNumber(num) {
  // Исключения: 11, 12, 13
  const lastTwoDigits = num % 100;
  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return `${num}th`;
  }
  
  // Правила по последней цифре
  const lastDigit = num % 10;
  if (lastDigit === 1) return `${num}st`;
  if (lastDigit === 2) return `${num}nd`;
  if (lastDigit === 3) return `${num}rd`;
  return `${num}th`;
}

module.exports = getOrdinalNumber;
```

```javascript
// get-ordinal-number.test.js

const getOrdinalNumber = require("./get-ordinal-number");

test("returns '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("returns '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("returns '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

test("returns 'th' for numbers 4-10", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
});

test("handles exceptions: 11, 12, 13 get 'th'", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

test("handles numbers ending in 1 (except 11)", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(31)).toEqual("31st");
  expect(getOrdinalNumber(101)).toEqual("101st");
});

test("handles numbers ending in 2 (except 12)", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

test("handles numbers ending in 3 (except 13)", () => {
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
});
```

---

## 🗂️ Карточки для повторения (Flashcards)

### Термины

---

**Q: Что такое порядковое числительное (ordinal number)?**
A: Число с суффиксом, описывающее позицию в последовательности. Например: 1st, 2nd, 3rd, 4th.

---

**Q: Какие суффиксы используются для порядковых числительных?**
A:
- `-st` → числа, оканчивающиеся на 1 (кроме 11)
- `-nd` → числа, оканчивающиеся на 2 (кроме 12)
- `-rd` → числа, оканчивающиеся на 3 (кроме 13)
- `-th` → все остальные, включая 11, 12, 13

---

**Q: Что такое спецификация (specification)?**
A: Набор требований к поведению программного обеспечения.

---

**Q: Что такое тест?**
A: Любой код, который запускает проверку (assertion) на тестируемом коде.

---

**Q: Что такое тестовый фреймворк?**
A: Набор инструментов для эффективного написания и запуска тестов.

---

**Q: Что такое пакет (package)?**
A: Код, сгруппированный вместе для предоставления определённой функциональности.

---

**Q: Что такое зависимость (dependency)?**
A: Пакет, от которого зависит наш проект.

---

**Q: Что такое npm?**
A: Node Package Manager — инструмент для скачивания и управления пакетами из реестра npm.

---

**Q: Что делает команда `npm install --save-dev jest`?**
A: Скачивает пакет Jest из реестра npm, устанавливает его в `node_modules/` и добавляет в `devDependencies` в `package.json`.

---

**Q: Что такое API?**
A: Application Programming Interface — граница между программистом и приложением, позволяющая использовать функциональность без знания внутреннего устройства.

---

**Q: Как выглядит assertion в Jest?**
A: `expect(текущийРезультат).toEqual(ожидаемыйРезультат);`

---

**Q: Что такое матчер (matcher) в Jest?**
A: Функция для сравнения значений в тесте. Например: `toEqual`, `toBe`, `toContain`.

---

**Q: Как запустить тесты в проекте с Jest?**
A: `npm test` (при условии, что в `package.json` в секции `scripts` прописано `"test": "jest"`)

---

**Q: Что такое ReferenceError?**
A: Ошибка, возникающая при попытке обратиться к переменной, которая не объявлена в коде.

---

**Q: Что такое анонимная функция?**
A: Функция, которая не привязана к имени в области видимости, где она определена.

---

**Q: Чем отличается стрелочная функция от обычной?**
A: Синтаксически короче: нет слова `function`, используется `=>`. При одном выражении в теле можно опустить `{}` и `return`. По поведению — практически одинаковы для большинства случаев.

---

**Q: Что такое TDD?**
A: Test-Driven Development — подход разработки: сначала пишется тест (🔴 красный), потом реализация (🟢 зелёный), потом рефакторинг (🔵 синий).

---

**Q: Что хранится в `node_modules/`?**
A: Код всех установленных зависимостей. Не нужно смотреть внутрь и не нужно добавлять в git.

---

**Q: Для чего нужен `package.json`?**
A: Хранит информацию о проекте: название, описание, скрипты, зависимости.

---

## 🔗 Связанные темы

- [[JavaScript Functions]] — именованные и анонимные функции
- [[Arrow Functions]] — стрелочные функции
- [[npm and Node.js]] — управление пакетами
- [[TDD]] — разработка через тестирование
- [[Jest API]] — документация Jest

---

*Создано: 2026-03-19 | Источник: HYF Module Structuring and Testing Data — Sprint 3 Preparation*
