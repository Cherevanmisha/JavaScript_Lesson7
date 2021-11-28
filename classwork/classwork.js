// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car

//
// let cars=
// 	{
// 		model: 'Mazda',
// 		year: 2021,
// 		producer: 'Mazda Motor Corporation',
// 		tankVolume: '51 liters',
// 		horsePower: '187 hp',
// 		maxspeed: '240 km',
// 		nameDraiver: 'Artur',
//
// 	};
// let driver ={name: 'Artur',age:58 };
// function Car (model,year,producer,tankVolume,horsePower,maxspeed,nameDraiver){
// 	this.model = model || 'Mazda';
// 	this.year = year || 2021;
// 	this.producer = producer || 'Mazda Motor Corporation';
// 	this.tankVolume = tankVolume || '51 liters';
// 	this.horsePower = horsePower || '187 hp';
// 	this.maxspeed = maxspeed ||  '240 km';
// 	this.nameDraiver = nameDraiver || 'Artur';
//
// 	this.drive= function(){
// 		console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`);
// 	},
//
// 		this.info=function() {
// 			console.log(`model: ${this.model} producer: ${this.producer} year: ${this.year} nameDraiver: ${this.nameDraiver}
//     tankVolume: ${this.tankVolume} horsePower: ${this.horsePower} maxspeed: ${this.maxspeed}`)
// 		},
// 		this.increaseMaxSpeed= function (newSpeed){
// 			this.maxspeed += newSpeed;
// 			console.log(newSpeed)
// 		},
// 		this.changeYear=function (newValue){
// 			this.year = newValue;
// 			console.log(newValue)
// 		},
//
// 		this.addDriverthis=function (driver){
// 			this.nameDraiver = driver;
// 			console.log(driver);
//
// 		}
// };
//
//
// let car = new Car('Volvo', 2017)
//
// car.info();
// car.drive();
// car.increaseMaxSpeed(170);
// car.changeYear(2025);
// car.addDriverthis('Borus');



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


    let drivers ={name: 'Artur',age:58 };

class Car {
      constructor (model,year,producer,tankVolume,horsePower,maxspeed,nameDraiver){
            this.model = model || 'Mazda';
            this.year = year || 2021;
            this.producer = producer || 'Mazda Motor Corporation';
            this.tankVolume = tankVolume || '51 liters';
            this.horsePower = horsePower || '187 hp';
            this.maxspeed = maxspeed ||  '240 km';
            this.nameDraiver = nameDraiver || 'Artur';
}

drive(){
    console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`);
};

info() {
    console.log(`model: ${this.model} producer: ${this.producer} year: ${this.year} nameDraiver: ${this.nameDraiver}
    tankVolume: ${this.tankVolume} horsePower: ${this.horsePower} maxspeed: ${this.maxspeed}`)
};

increaseMaxSpeed(newSpeed){
		this.maxspeed += newSpeed;
	};
	changeYear(newValue){
		this.year = newValue;
	};

	addDriverthis(driver){
		this.nameDraiver = driver;
    }
	};

    let car = new Car('tesla',2017,)

car.info();
car.drive();
car.increaseMaxSpeed();
car.changeYear();
car.addDriverthis();



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// CLASS



// class Popelyushka{
//     constructor (name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;

//     }
//     info(){
//         console.log(this.name)
//     }
// };
// class Princ {
//     constructor(name, age, footSize){
//             this.name = Karl;
//             this.age = 18;
//             this.footSize = 38;
//         }
//     };

// let popelyushka1= new Popelyushka('Aza',20, 38 );
// let popelyushka2 = new Popelyushka( 'Rada', 17, 35);
// let popelyushka3 = new Popelyushka('Galina', 19, 34 );
// let popelyushka4 = new Popelyushka( 'Veronuka', 18, 41);
// let popelyushka5 = new Popelyushka( 'Albina', 17, 34);
// let popelyushka6 = new Popelyushka( 'Olga', 25, 41);
// let popelyushka7 = new Popelyushka( 'Marta', 35, 31);
// let popelyushka8 = new Popelyushka('Sofiya', 27, 39);
// let popelyushka9 = new Popelyushka('Lesy', 45, 35 );
// let popelyushka10 = new Popelyushka('Anna', 24, 41 );


// let arrayOfPopel = [popelyushka1, popelyushka2,popelyushka3,popelyushka4,popelyushka5,
//     popelyushka6,popelyushka7,popelyushka8,
//     popelyushka9,popelyushka10 ];




// for (const item of arrayOfPopel ){

//     if(item.footSize === 38 ){
//         console.log(item);
//     }

// }


// Function

// function Popelyushka (name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// };

// function Princ (name, age, footSize1){
//     this.name = name;
//     this.age = age;
//     this.footSize1 = this.footSize1;


//   this.findPopel = function(array){
//     let find = null;
//     // find = array.find(item => item.footSize === this.footSize1);

// for( const item of array){
//     if(item.footSize === this.footSize1);
//     find=item;
// }
// console.log(find);

//   }
// };

// let popelyushka1= new Popelyushka('Aza',20, 38 );
// let popelyushka2 = new Popelyushka( 'Rada', 17, 35);
// let popelyushka3 = new Popelyushka('Galina', 19, 34 );
// let popelyushka4 = new Popelyushka( 'Veronuka', 18, 41);
// let popelyushka5 = new Popelyushka( 'Albina', 17, 34);
// let popelyushka6 = new Popelyushka( 'Olga', 25, 49);
// let popelyushka7 = new Popelyushka( 'Marta', 35, 31);
// let popelyushka8 = new Popelyushka('Sofiya', 27, 39);
// let popelyushka9 = new Popelyushka('Lesy', 45, 35 );
// let popelyushka10 = new Popelyushka('Anna', 24, 45 );


// let arrayOfPopel = [popelyushka1, popelyushka2,popelyushka3,popelyushka4,popelyushka5,
//     popelyushka6,popelyushka7,popelyushka8,
//     popelyushka9,popelyushka10 ];

// let princ = new Princ('Karl', 27,45);

//     princ.findPopel(arrayOfPopel);
