//Необходимые переменные
let inputText = document.getElementById('#inputText');
let outputText = document.getElementById('#outputText');

let requireNumber;
let requireArr = [];
generateNumber();
console.log(requireArr);

let bull = 0;
let cow = 0;

let amountTry = 0;
//Код срабатываемый по нажатию Enter
(function() {
  document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      let inputArr = Array.from(String(this.value), Number);
      console.log(inputArr);
      let arr_1 = new Set(inputArr);
      console.log(arr_1 + ' ' + arr_1.size);

      //Проверка на NaN всех значений
      for (let i = 0; i < inputArr.length; i++) {
        if (isNaN(inputArr[i]) === true) {
          console.log(`Ошибка: isNaN = ${isNaN(inputArr[i])} в числе (${inputArr[i]})`);
          outputText.innerHTML = `Вы ввели неверное значение!`;
          return 0;
        }
      }

      if (arr_1.size !== requireArr.length || inputArr[0] === 0) {
        outputText.innerHTML = `Вы ввели неверное значение!`;
        return 0;
      }
      //Проверка на совпадения
      for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < requireArr.length; j++) {
          if (inputArr[i] === requireArr[j] && i === j) {
            bull++;
          } 
          else if (inputArr[i] === requireArr[j] && i !== j) {
            cow++;
          }
        }
      }
      //Вывод результатов
      if (bull !== requireArr.length && amountTry !== 10) {
        outputText.innerHTML = `${cow} коров и ${bull} быков`;
        amountTry++;
      } else if (bull === requireArr.length && amountTry !== 10) {
        outputText.innerHTML = `${cow} коров и ${bull} быков <br> Поздравляю! Вы победили.`;
      } else if (amountTry === 10){
        outputText.innerHTML = `Вы проиграли!<br>Обновите чтобы начать сначала.`;
      }

      bull = 0;
      cow = 0;
    }
  });
})();

function generateNumber() {
  //Создание числа генерируемого компьютером
  let x = Math.round(Math.random() * (6 - 3) + 3);
  let randomNumber;
  console.log(`Начался подбор числа...`);
  while (requireArr.length < x) {
    if (requireArr.length === 0) {
      randomNumber = Math.round(Math.random() * (9 - 1) + 1);
    } else {
      randomNumber = Math.round(Math.random() * (9 - 0) + 0);
    }
    if (requireArr.indexOf(randomNumber) == -1) {
      requireArr.push(randomNumber);
    }
  }
  //Вывод результата из функции
  return requireArr;
}