
// const mile = 0.621371192;
// const km = prompt ('km');

// alert (km * mile);
// console.log


// const selory = 250;
// const percent= 0.1;
// const prodazhy = prompt ('введіть суму продажів');
// const fullSelory = (Number(prodazhy) * percent) + selory;
// alert(`ваша зп - ${fullSelory} $`);


// const name = prompt("введіть ваше ім'я");
// alert(`Привіт, ${name}!`);

// const yearBirthday = prompt(`${name}, ведіть рік вашого народження`);
// const pyer = 2023;
// const age = pyer - Number(yearBirthday);
// alert(`${name}, Вам ${age} років`);

// const storonaKvadratu = prompt('Введіть сторону квадрату в см')
// const perumetr = Number(storonaKvadratu) * 4;
// alert(`Периметр квадрату = ${perumetr} см`);


// калькулятор
// const x = Number(prompt ('введіть перше число')) ; 
// const operator = prompt ('введіть оператор'); 
// const y = Number( prompt ('введіть друге число')); 
// let res;

// switch (operator) {
// case "+" : res = x + y; break;
// case "*" : res = x * y; break;
// case "-" : res = x - y; break;
// case "/" : res = x / y; break;
// default: alert("щось ти не те ввів, спробуй ще раз");
//         break;
// }
// alert(res) ;



// дисконт
// let syma = Number(prompt ('введіть суму покупки')) ; 
// let res;

// if (syma >= 200 && syma < 300 ) {
//     res = syma - (syma * 0.03);}

// else if (syma  >= 300 && syma < 500 ) {
//     res = syma - (syma * 0.05);}

// else if (syma >= 500  ) {
//     res = syma - (syma * 0.07);}
 
//     else if (syma <= 299  ) {
//         res = syma;}    

// alert(res) ;


// тест
// let qw1 = prompt("Якій сьогодні рік?  1990  2000  2023");
// let qw2 = prompt("Якій номер йде наступний після 1?  1  2  0");
// let qw3 = prompt("Як звати ментора? Діма  Данил  Деамін");
// let res = 0;
// let b = 2;

// if (qw1 === '2023') {res += b; }
// if (qw2 === '2') {res += b; }
// if (qw3 === 'Діма') {res += b; }

// alert (`Ваш бал за тест - ${res}`);
   
    // HW

// const x = 0.1;
// const y = 0.2;
// let res;
// res = (x + y).toFixed(2);
// alert(res) ;



// const x = "1";
// const y = 2;
// let res;
// res = (+x + y);
// alert(res) ;



// let rozmir = Number(prompt("Який розмір вашої флешки?")) ;
// const file = 820;
// let res;

// res = Math.floor(rozmir / file);
// alert(`На вашу флешку поміститься ${res} файл(и)`) ;



// let sum = Number(prompt("Ясу суму грошей ви маєте в грн?"));
// let price = Number(prompt("Ціна за одну шололадку в грн?"));
// let number;
// let res;

// if (price > sum) { alert(`Нажаль, у вас недостатньо коштів навіть на 1 шоколадку :(`) ;}
// number = Math.floor(sum / price);
// res = sum - (number * price);
// alert(`Ви можете придбати ${number} шоколадки \nВаш залишок сладатиме ${res} грн`) ;


// не працює
// let x = Number(prompt('Введіть тризначне число'));
// let res = 0;

// res = 100 + x % 10;
// res = x % 10;
// x = x/10;
// alert(res); 



// let sum = Number(prompt('Введітьсуму вкладу в банк в грн \nHа 2 місяці під 5% річних'));
// const x = 2;
// const dep = 5;
// let res;
// res = (sum * (((dep / 12) * x) / 100)).toFixed(2);
// alert(`Ваша сума нарахованих відсотків ${res} грн`) ;

// масив
// let array = [4, "some", true, 4, 6, 7, false, [1,8, "hello"], 70, 1];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//     if(Array.isArray(element)) {
     
//         for (let i =0; i <  element.length; i++) {
//             console.log(element[i]);
//         }   
//     }
//     else{
//         console.log(element);
//     }
// }



// let count = Number(prompt("введіть цифру"));
// while(count>0) {
// console.log(count);
// count--;
// }



// let count = Number(prompt("скількі овець"));
// let x= " ";
// for (let index = 1; index < count; index++) {
//     x += `${index} вівця... ` ;
// }
// console.log(x);


// // числа навпаки
// let count = Number(prompt("введіть число"));
// for (let index = count; index > 0; index--) {
//     console.log(index);
// }


// let text='Прівіт, ';
// let name = prompt('Введіть ваше імя');

// function Message(name, text) { 
//     alert(text + name + "!");
//   }
//   Message(name, text);


// let n1 =  Number(prompt('Введіть 1ше число'));
// let n2 =  Number(prompt('Введіть 2ге число'));
// let n3 =  Number(prompt('Введіть 3те число'));

// function numb(n1,n2,n3) { 
//     // return Number(`${n1}${n2}${n3}`);
//     console.log (Number(`${n1}${n2}${n3}`));
//   }
//   numb(n1,n2,n3);



// function getRandom (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min+1)) + min;
// }
// console.log(getRandom(1,100)); 
  

// //  факторіал
// function factorial(n){ 
//     let result = 1; 
//         while(n){ 
//             result *= n--; 
//         } 
// return result; 
// }
// console.log(factorial(5)); 



// let suma = ( n1 = 0; n2 = 0; n3 =0; n4 = 0; n5 = 0) => {
// return n1 + n2 + n3 + n4 + n5
// }
// console.log (suma(5,3,5));



// const obj = {
//     goods: "чашка",
//     color: "жовта",
//     volume : "500мл",
//     info : function() {
//         return this.goods + " " + this.color + " об'ємом на " + this.volume ;
//     }
//   };

//   const infoObj = {
//     manufacturer: "BergHOFF",
//     contry: "Германія",
//     city : "Гамбугр",
//     info1 : function() {
//         return this.manufacturer + " " + this.contry ;
//     }
//     };

//   const fullinfo = {...obj,...infoObj};

//   console.log (obj.info());
//   fullinfo.info()

//   console.log (fullinfo);

// const date = new Date('April 1, 2023 15:00:00');
// const utc = date.toUTCString();
// const monthNames = ["Січеня", "Лютого", "Березеня", "Квітеня", "Травеня", "Червеня",
//   "Ліпеня", "Серпеня", "Вересеня", "Жовтеня", "Лістопада", "Груденя"];

// const m = new Date();

// const dayNames = ["Понедіок", "Вівторок", "Середа", "Четвер", "Пятниця", "Субота",
//   "Неділя"];

// const d = new Date();

// console.log (`${(date.getDate()<10?'0' + date.getDate():'')} ${monthNames[m.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes() } (${dayNames[d.getDay()]})`)



// let array = [12, 'sgg', 'hhhhh', true, 23, 56];
// function arrayX () {
//     array.forEach(element => console.log(element));   
// }
// arrayX();


// let n = [12, 1, 23, 56];
// let sum = (array) => n.reduce((total, value) => total + value,0);
// console.log(sum(n));

// // ввіводіть мах число
// let n = [12, 1, 23, 56];
// const res = (n) => n.reduce((max, item) => max < item ? item : max);
// console.log (res(n));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = (array, index, ...element) => array.splice(index, 0, ...element);
// res(fruits,0,"Lemon", "Kiwi");
// console.log (fruits);

// // додавання елементів до масіву
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = (array, index) => array.splice(index,1);
// res(fruits,1);
// console.log (fruits);


// const m1 = ["Banana", "Orange", "Apple", "Mango"];
// const m2 = ["Banana", "Lemon", "Kiwi"];
// const m = m1.concat(m2);
// uniq = a.filter( (item, pos, arr) => !pos || item !== arr[pos - 1] );

// // const uniq = Array.from(new Set(m));

// console.log (uniq)



// ІВЕНТИ

const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// child.addEventListener('click', (event) => {
// console.log ('child')
// event.stopPropagation()
// });

// parent.addEventListener('click', (event) => {
// event.stopPropagation()
// console.log ('parent')
// });

// grandparent.addEventListener('click', (event) => {
// event.stopPropagation()
// console.log ('grandparent')
// });
    


