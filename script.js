// Мінімум

const car = {
    виробник:'Nissan', 
    модель: 'Leaf', 
    'рік випуску': '2017', 
    'середня швидкість': 80, 
    'обсяг паливного баку':0 ,
    'середня витрата палива на 100 км.': 0 , 
    водій1: 'Дмитро',
    infoCar: function() {
        console.log(`Машина ${this.виробник} ${this['рік випуску']}, ередня швидкість ${this['середня швидкість']}  `) 
    },
    time: function () {
        let distance = Number(prompt('Введіть відстань, яку треба проїхати'));
        let res = ((distance / this['середня швидкість']) / 4) + (distance / this['середня швидкість']);
       console.log(`Ви витратите ${res} годин на дорогу`);
    let gas = (distance / this['середня швидкість']) * this['середня витрата палива на 100 км.'];
       console.log (`Ви витратите ${gas} л бензину на дорогу`)
    }
  };


  const driver = {
    водій2: 'Анжела'
    };

  const fullinfo = {...car,...driver};

  fullinfo.infoCar();
  console.log (fullinfo);
fullinfo.time();
  console.log ('водій1' in fullinfo);
  console.log (!!fullinfo.водій2);


// //Норма

// const time = {
//     години: 12, 
//     хвилини: 33, 
//     секунди: 12,
//     info: function() {
//         console.log(`${this.години}:${this.хвилини}:${this.секунди}`) 
//     }};

// time.info();
// time.години = 3;
// time.хвилини = 35;
// time.секунди = 55;
// console.log(time.години+":"+time.хвилини+":"+time.секунди)

