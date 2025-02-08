// function cheakAge(age) {
//   if (age < 18) {
//     return "Access denied. You are too young.";
//   } else if (age >= 18 && age < 65) {
//     return "Access granted. Welcome!";
//   } else {
//     return "Access granted. Enjoy your senior benefits!";
//   }
// }
// console.log(cheakAge(64));

// Напиши функцію findMax(numbers), яка приймає масив чисел
// і повертає найбільше число.
// function findMax(numbers) {
//   return Math.max(...numbers);
// }
// function findMax(numbers) {
//   let max = numbers[0]; // Припускаємо, що перший елемент - найбільший

//   for (let num of numbers) {
//     if (num > max) {
//       max = num;
//     }
//   }

//   return max;
// }
// console.log(findMax([10, 5, 8, 3, 12])); // 12
// console.log(findMax([-2, -5, -1, -8])); // -1
// console.log(findMax([100, 50, 200, 150])); // 200
// Math.max(numbers);

// Задача 5: Калькулятор з розгалуженням (два рішення може бути в рамках теми розгалуження)
// Напиши функцію calculate(a, b, operator), яка:
//     Приймає два числа a та b, а також оператор operator ("+", "-", "*", "/").
//     Виконує відповідну операцію між числами:
//         "+" додає числа.
//         "-" віднімає друге число з першого.
//         "*" множить числа.
//         "/" ділить перше число на друге (перевіряй, щоб не було ділення на нуль).
//     Повертає результат операції або повідомлення "Invalid operator" для невідомого оператора.

function calculate(a, b, operator) {
  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;

    case '-':
      result = a - b;
      break;

    case '*':
      result = a * b;
      break;

    case '/':
      result = a / b;
      break;

    default:
      'Invalid operator';
  }
  return result;
}
console.log(calculate(5, 3, '+'));
console.log(calculate(5, 3, '-'));
console.log(calculate(5, 3, '*'));
console.log(calculate(5, 3, '/'));

// Задача 6: Класифікація оцінок
// Напиши функцію getGradeMessage(score), яка:
//     Приймає оцінку (число від 0 до 100).
//     Повертає повідомлення на основі значення:
//         "Excellent" для 90-100.
//         "Good" для 75-89.
//         "Satisfactory" для 50-74.
//         "Fail" для 0-49.
//     Якщо оцінка виходить за межі 0 - 100, повертає "Invalid score!".

function getGradeMessage(score) {
    let rating;
    if (score <= 49) {
        return 'Fail'
    } else if {
        
    }
}