const penceString = "333666p";

// 1. Отрезаем символ "p" с конца
// cut off the trailing "p" character
// Метод slice(0, -1) берет всё от начала и отсекает ровно один символ с хвоста
const cleanPence = penceString.slice(0, -1);

// 2. Механизм защиты (добиваем нулями слева до 3 символов)
// padding mechanism (pad with zeros on the left to ensure at least 3 characters)
// Для "5" станет "005". Для "333666" останется "333666".
const paddedPence = cleanPence.padStart(3, "0");

// 3. Фунты: берем всё, КРОМЕ последних двух символов
// pounds: take everything except the last two characters
const pounds = paddedPence.slice(0, -2);

// 4. Пенсы: берем СТРОГО два последних символа
// pence: take exactly the last two characters
const pence = paddedPence.slice(-2);

// 5. Финальная сборка через шаблонную строку (template literal)
// final assembly using a template literal
console.log(`£${pounds}.${pence}`);

// 1. const penceString = "333666p";
// Инициализация строковой переменной со стартовым значением.
// stok up of a string variable with an initial value.

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// Извлечение подстроки. Удаляет последний символ ("p") из исходной строки.
// cut off the trailing "p" character from the original string.

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Защитный механизм. Гарантирует, что строка состоит минимум из 3 символов, добавляя нули слева (например, "5" превратится в "005").
// padding mechanism to ensure the string has at least 3 characters by adding zeros on the left (e.g., "5" becomes "005").

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// Отсекает два последних символа (которые являются пенсами). Оставшаяся часть сохраняется как фунты.
// extract pounds by taking everything except the last two characters (which are pence)

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// Извлекает ровно два последних символа. Метод padEnd здесь присутствует как избыточная защита.
// extract pence by taking exactly the last two characters, with an additional padEnd as a safeguard (though it should not be necessary)

// 6. console.log(`£${pounds}.${pence}`);
// Вывод финального отформатированного значения в консоль с использованием шаблонной строки.
// Output the final formatted value to the console using a template literal.