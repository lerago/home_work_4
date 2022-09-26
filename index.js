
// 1) Какие виды областей видимости вы знаете? Написать ответ ниже
/*1. Глобальная
2. Локальная
3. Блочная
4. try {} catch () {}
5. eval ('')*/

// 2) Исправьте код так чтобы в консоль выводились числа от 0 до 10
for (var i = 0; i <= 9; i++) {
   setTimeout(() => {
      console.log(i);
   }, 0)
}


// 3) Исправьте код так чтобы в консоль выводилось "John"
var firstName = "Elena"
const obj = {
   firstName: 'John',
   sayFirstName: () => {
      console.log(obj.firstName)
   }
}
obj.sayFirstName();


// 4) Исправьте код так чтобы в консоль не выводилась ошибка (нельзя исправлять тело функции getArrowFunction)
const user = {
   age: 20
}

function getArrowFunction() {
   "use strict"
   return () => {
      console.log(this.age)
   }
}

getArrowFunction(user);
