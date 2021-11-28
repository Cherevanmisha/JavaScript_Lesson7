// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car


// let car=
//     {
// model: 'Mazda',
// year: 2021,
// producer: 'Mazda Motor Corporation',
// tankVolume: '51 liters',
// horsePower: '187 hp',
// maxspeed: '240 km',
// nameDraiver: 'Artur',


//   drive: function(){
//     console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`);
// },

//  info: function() {
//     console.log(`model: ${this.model} producer: ${this.producer} year: ${this.year} nameDraiver: ${this.nameDraiver}
//     tankVolume: ${this.tankVolume} horsePower: ${this.horsePower} maxspeed: ${this.maxspeed}`)
// },

// increaseMaxSpeed: function  (newSpeed){
// 		this.maxspeed += newSpeed;
// 	},
// 	changeYear: function (newValue){
// 		this.year = newValue;
// 	},

// 	addDriver: function (driver){
// 		this.nameDraiver = carDriver;
// 	}
// };
//  let carDriver = {
//     	name:'Borus',
//     };


// car.info();
// car.drive();
// car.increaseMaxSpeed();
// car.changeYear();
// car.addDriver();






// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car





// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку