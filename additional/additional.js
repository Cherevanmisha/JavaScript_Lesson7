// - Створити клас або функцію конструктор, за допомоги
// якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості,
// в т.ч і для властивостей внутрішніх об'єктів


// function con (id, name, username,email,street,suite,city,zipcode,lat,lng,phone,website,name1,catchPhrase,bs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {street: street, suite: suite, city: city, zipcode: zipcode};
//     this.geo = {lat: lat, lng: lng};
//     this.phone = phone;
//     this.website = website;
//     this.company ={name1:name1,catchPhrase:catchPhrase,bs:bs}
//
//
//
//
// }
// let con1 = new con(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light',
//     'Apt. 556','Gwenborough','92998-3874','-37.3159','81.1496','1-770-736-8031 x56442',
//     'hildegard.org','Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
// console.log(con1);


// {
//     id: 1,
//      name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }










// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// // }


// Function

// -a
//
// function Tag (nameAttr, description, atribute) {
// 	this.nameAttr = nameAttr;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// let nameAttr = "<a>";
// let description = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь";
// let atribute = [
// 	{nameAttr: 'accesskey', descriptionAttr: 'Активация ссылки с помощью комбинации клавиш.'},
// 	{nameAttr: "coords", descriptionAttr: 'Устанавливает координаты активной области.'},
// 	{nameAttr: 'download', descriptionAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let con = new Tag (nameAttr,description,atribute);
// console.log(con);
//
// -div
// function Tag (nameAttr, description, atribute) {
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// let nameA = "<div>";
// let description = "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей.";
// let atribute = [
// 	{nameAttr: 'align', descriptionAttr: 'Задает выравнивание содержимого тега <div>.'},
// 	{nameAttr: "title", descriptionAttr: 'Добавляет всплывающую подсказку к содержимому.'},
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
// -h1
// function Tag (nameAttr, description, atribute) {
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// let nameA = "h1";
// let description = "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.";
// let atribute = [
// 	{nameAttr: 'align', descriptionAttr: 'Определяет выравнивание заголовка.'},
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
//
//
// -span
//
// function Tag (nameAttr, description, atribute) {
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// let nameA = "span";
// let description = "Тег <span> предназначен для определения строчных элементов документа.";
// let atribute = [
// 	{nameAttr: 'contenteditable', descriptionAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'},
// 	{nameAttr: 'style', descriptionAttr: 'Применяется для определения стиля элемента с помощью правил CSS.'},
// 	{nameAttr: 'title', descriptionAttr: 'Описывает содержимое элемента в виде всплывающей подсказки.'},
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
//
// input
// function Tag (nameAttr, description, atribute) {
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// let nameA = "input";
// let description = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.";
// let atribute = [
// 	{nameAttr: 'accept', descriptionAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
// 	{nameAttr: 'alt', descriptionAttr: 'Альтернативный текст для кнопки с изображением.'},
// 	{nameAttr: 'border', descriptionAttr: 'Толщина рамки вокруг изображения.'},
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
//
//
// form
// function Tag (nameAttr, description, atribute) {
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// let nameA = "form";
// let description = "Тег <form> устанавливает форму на веб-странице.";
// let atribute = [
// 	{nameAttr: 'name', descriptionAttr: 'Имя формы.'},
// 	{nameAttr: 'method', descriptionAttr: 'Метод протокола HTTP.'},
// 	{nameAttr: 'target', descriptionAttr: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'},
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
//  -option
// function Tag (nameAttr, description, atribute) {
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// let nameA = "option";
// let description = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.";
// let atribute = [
// 	{nameAttr: 'disabled', descriptionAttr: 'Заблокировать для доступа элемент списка.'},
// 	{nameAttr: 'value', descriptionAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
//
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
//
//
//  -select
// function Tag (nameAttr, description, atribute) {
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// let nameA = "select";
// let description = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.";
// let atribute = [
// 	{nameAttr: 'accesskey', descriptionAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
// 	{nameAttr: 'size', descriptionAttr: 'Количество отображаемых строк списка.'},
//
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//


// CLASS
// a
// class Tag  {
// 	constructor(nameAttr, description, atribute){
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// }
// let nameA = "<a>";
// let description = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь";
// let atribute = [
// 	{nameAttr: 'accesskey', descriptionAttr: 'Активация ссылки с помощью комбинации клавиш.'},
// 	{nameAttr: "coords", descriptionAttr: 'Устанавливает координаты активной области.'},
// 	{nameAttr: 'download', descriptionAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let con = new Tag (nameA,description,atribute);
// console.log(con);

//
//
// -div
// class Tag  {
// 	constructor(nameAttr, description, atribute){
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// }
// let nameA = "<div>";
// let description = "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей.";
// let atribute = [
// 	{nameAttr: 'align', descriptionAttr: 'Задает выравнивание содержимого тега <div>.'},
// 	{nameAttr: "title", descriptionAttr: 'Добавляет всплывающую подсказку к содержимому.'},
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
// -h1
// class Tag  {
// 	constructor(nameAttr, description, atribute){
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// }
// let nameA = "h1";
// let description = "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.";
// let atribute = [
// 	{nameAttr: 'align', descriptionAttr: 'Определяет выравнивание заголовка.'},
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
//
//
// -span
//
// class Tag  {
// 	constructor(nameAttr, description, atribute){
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// }
// let nameA = "span";
// let description = "Тег <span> предназначен для определения строчных элементов документа.";
// let atribute = [
// 	{nameAttr: 'contenteditable', descriptionAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'},
// 	{nameAttr: 'style', descriptionAttr: 'Применяется для определения стиля элемента с помощью правил CSS.'},
// 	{nameAttr: 'title', descriptionAttr: 'Описывает содержимое элемента в виде всплывающей подсказки.'},
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
//
// input
// class Tag  {
// 	constructor(nameAttr, description, atribute){
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// }
// let nameA = "input";
// let description = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.";
// let atribute = [
// 	{nameAttr: 'accept', descriptionAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
// 	{nameAttr: 'alt', descriptionAttr: 'Альтернативный текст для кнопки с изображением.'},
// 	{nameAttr: 'border', descriptionAttr: 'Толщина рамки вокруг изображения.'},
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
//
//
// form
// class Tag  {
// 	constructor(nameAttr, description, atribute){
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// }
// let nameA = "form";
// let description = "Тег <form> устанавливает форму на веб-странице.";
// let atribute = [
// 	{nameAttr: 'name', descriptionAttr: 'Имя формы.'},
// 	{nameAttr: 'method', descriptionAttr: 'Метод протокола HTTP.'},
// 	{nameAttr: 'target', descriptionAttr: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'},
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
//  -option
// class Tag  {
// 	constructor(nameAttr, description, atribute){
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// }
// let nameA = "option";
// let description = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.";
// let atribute = [
// 	{nameAttr: 'disabled', descriptionAttr: 'Заблокировать для доступа элемент списка.'},
// 	{nameAttr: 'value', descriptionAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
//
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
//
//
//  -select
// class Tag  {
// 	constructor(nameAttr, description, atribute){
// 	this.nameAttr = nameA;
// 	this.description = description;
// 	this.atribute = atribute;
// }
// }
// let nameA = "select";
// let description = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.";
// let atribute = [
// 	{nameAttr: 'accesskey', descriptionAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
// 	{nameAttr: 'size', descriptionAttr: 'Количество отображаемых строк списка.'},
//
// ];
//
// let constr = new Tag (nameA,description,atribute);
// console.log(constr);
//
