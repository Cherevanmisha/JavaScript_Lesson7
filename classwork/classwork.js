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


class Cars {
	constructor(model, year, producer, tankVolume, horsePower, maxspeed, nameDraiver) {
		this.model = model;
		this.year = year;
		this.producer = producer;
		this.tankVolume = tankVolume;
		this.horsePower = horsePower;
		this.maxspeed = maxspeed;
		this.nameDraiver = nameDraiver;
	}

	drive() {
		console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`);
	}

	info(){
		console.log(`model: ${this.model} producer: ${this.producer} year: ${this.year} 
		nameDraiver: ${this.nameDraiver}
    tankVolume: ${this.tankVolume} horsePower: ${this.horsePower} maxspeed: ${this.maxspeed}`)
	}
	increaseMaxSpeed(newSpeed) {
		this.maxspeed += newSpeed;
	}
	changeYear(newValue) {
		this.year = newValue;
	}
	addDriver(nameDraiver) {
		this.nameDraiver = nameDraiver;
	}
}

car.info();
car.drive();
car.increaseMaxSpeed();
car.changeYear();
car.addDriver();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку