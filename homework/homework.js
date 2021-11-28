// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//         this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }
//
// let  arr = [
//     new User(0,"Vova","Ivanov","v@iva.com.ua", 30951471235),
//     new User(1,"Andrey","Petrov","a@pet.com.ua", 30951471235),
//     new User(2,"Artem","Sidorov","a@sid.com.ua", 30935425843),
//     new User(3,"Vadim","Brovka","v@bro.com.ua", 30935425843),
//     new User(4,"Olya","Bozhenko","o@bozh.com.ua", 30935425843),
//     new User(5,"Lada","Gromova","l@gro.com.ua", 30935425843),
//     new User(6,"Galina","Adamova","g@ada.com.ua", 30935425843),
//     new User(7,"Pavel","Apanasov","p@apa.com.ua", 30935425843),
//     new User(8,"Misha","Gromov","m@gro.com.ua", 30935425843),
//     new User(9,"Anastasiya","Gvozdeva","a@gvo.com.ua", 30935425843),
//     new User(10,"Alina","Egorova","a@ego.com.ua", 30935425843),
// ] ;
// console.log(arr);




// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
//
// function User(id, name, surname, email, phone) {
//         this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
//
// }
//
//
//
//
// let arr = [new User(0, "Vova", "Ivanov", "v@iva.com.ua", 30951471235),
//             new User(1, "Andrey", "Petrov", "a@pet.com.ua", 30951471235),
//     new User(2, "Artem", "Sidorov", "a@sid.com.ua", 30935425843),
//     new User(3, "Vadim", "Brovka", "v@bro.com.ua", 30935425843),
//     new User(4, "Olya", "Bozhenko", "o@bozh.com.ua", 30935425843),
//     new User(5, "Lada", "Gromova", "l@gro.com.ua", 30935425843),
//     new User(6, "Galina", "Adamova", "g@ada.com.ua", 30935425843),
//     new User(7, "Pavel", "Apanasov", "p@apa.com.ua", 30935425843),
//     new User(8, "Misha", "Gromov", "m@gro.com.ua", 30935425843),
//     new User(9, "Anastasiya", "Gvozdeva", "a@gvo.com.ua", 30935425843),
//     new User(10, "Alina", "Egorova", "a@ego.com.ua", 30935425843),
//
// ];
//
// let res = arr.filter((value) => {
//     if (value.id % 2 === 0){
//         return value
//     }});
// console.log(res);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


// function User(id, name, surname, email, phone) {
//         this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
//
// }
//
// let arr = [
//     new User(0, "Vova", "Ivanov", "v@iva.com.ua", 30951471235),
//     new User(1, "Andrey", "Petrov", "a@pet.com.ua", 30951471235),
//     new User(7, "Pavel", "Apanasov", "p@apa.com.ua", 30935425843),
//     new User(2, "Artem", "Sidorov", "a@sid.com.ua", 30935425843),
//     new User(3, "Vadim", "Brovka", "v@bro.com.ua", 30935425843),
//     new User(10, "Alina", "Egorova", "a@ego.com.ua", 30935425843),
//     new User(5, "Lada", "Gromova", "l@gro.com.ua", 30935425843),
//     new User(6, "Galina", "Adamova", "g@ada.com.ua", 30935425843),
//     new User(8, "Misha", "Gromov", "m@gro.com.ua", 30935425843),
//     new User(4, "Olya", "Bozhenko", "o@bozh.com.ua", 30935425843),
//     new User(9, "Anastasiya", "Gvozdeva", "a@gvo.com.ua", 30935425843),
//
//
// ];
// let res = arr.sort((a, b) => a.id-b.id)
// console.log(res);




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arr = [
//     new Client(0, "Vova", "Ivanov", "v@iva.com.ua", 30951471235, ["tap water", 'drill', 'pump']),
//     new Client(1, "Andrey", "Petrov", "a@pet.com.ua", 30951471235, ['sneakers', 'shirt', 'socks']),
//     new Client(2, "Artem", "Sidorov", "a@sid.com.ua", 30935425843, ['fishing rod', 'fisha', 'armchair']),
//     new Client(3, "Vadim", "Brovka", "v@bro.com.ua", 30935425843, ['guitar', 'piano', 'accordion']),
//     new Client(4, "Olya", "Bozhenko", "o@bozh.com.ua", 30935425843, ['telephone', 'camera', 'television']),
//     new Client(5, "Lada", "Gromova", "l@gro.com.ua", 30935425843, ["tap water", 'drill', 'pump']),
//     new Client(6, "Galina", "Adamova", "g@ada.com.ua", 30935425843, ['sneakers', 'shirt', 'socks']),
//     new Client(7, "Pavel", "Apanasov", "p@apa.com.ua", 30935425843, ['fishing rod', 'fisha', 'armchair']),
//     new Client(8, "Misha", "Gromov", "m@gro.com.ua", 30935425843, ['guitar', 'piano', 'accordion']),
//     new Client(9, "Anastasiya", "Gvozdeva", "a@gvo.com.ua", 30935425843, ['telephone', 'camera', 'television']),
//     new Client(10, "Alina", "Egorova", "a@ego.com.ua", 30935425843, ['guitar', 'piano', 'accordion']),
// ];
// console.log(arr);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів
// в полі order по зростанню. (sort)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let arr = [
//     new Client(0, "Vova", "Ivanov", "v@iva.com.ua", 30951471235, ["tap water",]),
//     new Client(1, "Andrey", "Petrov", "a@pet.com.ua", 30951471235, ['sneakers', 'shirt', 'socks']),
//     new Client(2, "Artem", "Sidorov", "a@sid.com.ua", 30935425843, ['fishing rod', 'fisha', 'armchair']),
//     new Client(3, "Vadim", "Brovka", "v@bro.com.ua", 30935425843, ['guitar',  'accordion']),
//     new Client(4, "Olya", "Bozhenko", "o@bozh.com.ua", 30935425843, ['telephone',  'television']),
//     new Client(5, "Lada", "Gromova", "l@gro.com.ua", 30935425843, ["tap water", 'drill', 'pump']),
//     new Client(6, "Galina", "Adamova", "g@ada.com.ua", 30935425843, ['sneakers',  'socks']),
//     new Client(7, "Pavel", "Apanasov", "p@apa.com.ua", 30935425843, ['fishing rod', 'fisha', 'armchair']),
//     new Client(8, "Misha", "Gromov", "m@gro.com.ua", 30935425843, ['guitar', 'piano', 'accordion']),
//     new Client(9, "Anastasiya", "Gvozdeva", "a@gvo.com.ua", 30935425843, ['camera', 'television']),
//     new Client(10, "Alina", "Egorova", "a@ego.com.ua", 30935425843, ['guitar', ]),
// ];
// let res = arr.sort((a, b) => a.order.length-b.order.length)
// console.log(res);
