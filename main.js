"use strict";

// REPEAT

// https://watchandcode.com/p/practical-javascript
// курс по js

// let arr = [1, 2, 3, 4, 5];
// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...arr));

// let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);

// function unite(...arrs) {
// 	return arrs;
// }

// REPEAT

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];
// // let position   = arr[3];
// // let salary     = arr[4];
// let [name,surname,departament,position,salary] = arr;




// function func() {
// 	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// }
// let arr = func();
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];

// let [name,surname,departament,position,salary] = func();
// let [name,surname,departament,position,salary] = arr;
// console.log(name);



// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// // let department = arr[2];
// // let position   = arr[3];

// let [,,departament,position] = arr;
// console.log(arr[3]);


// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let name    = arr[0];
// let surname = arr[1];
// let [,,...info] = arr;
// // let info = arr.slice(2);
// console.log(info);


// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];

// // let position;
// // if (arr[3] !== undefined) {
// // 	position = arr[3];
// // } else {
// // 	position = 'джуниор';
// // }
// let [name,surname,departament,,position = 'джуниор'] = arr;
// console.log(position);




// let arr = [];
// let [year = funcGetYear(), month = funcGetMonth(), day = funcGetDate()] = arr;
// console.log(year);

// function funcGetDate() {
// 	return (new Date).getDate();
// }
// function funcGetMonth() {
// 	return (new Date).getMonth();
// }
// function funcGetYear() {
// 	return (new Date).getYear();
// }


// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// // let color  = options.color;
// // let width  = options.width;
// // let height = options.height;

// let {color,width,height} = options;


// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// // let c = options.color;
// // let w = options.width;
// // let h = options.height;

// let {color: c, width: w, height: h} = options;




// let options = {
// 	width:  400,
// 	height: 500,
// };

// // let color;
// // if (options.color !== undefined) {
// // 	color = options.color;
// // } else {
// // 	color = 'black';
// // }

// // let width  = options.width;
// // let height = options.height;
// let {color = 'black', width, height} = options;




// let options = {
// 	width:  400,
// 	height: 500,
// };

// // let с;
// // if (options.с !== undefined) {
// // 	с = options.color;
// // } else {
// // 	с = 'black';
// // }

// // let w = options.width;
// // let h = options.height;
// let {width:w, height:h, color:c ='black'} = options;


// function func([name,surname,department,position,salary]) {
// 	console.log(name      );
// 	console.log(surname   );
// 	console.log(department);
// 	console.log(position  );
// 	console.log(salary    );
// }

// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );


// function func([name, surname, info]) {
// 	console.log(name   ); 
// 	console.log(surname); 
// 	console.log(info   ); 
// }

// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );


// function func([name, surname, department, position = 'джуниор']) {
	
// console.log(name, surname, department, position);
// }

// func( ['Иван', 'Иванов', 'отдел разработки'] );


// function func(department,[name,surname],[year,month,day]) {
// 	console.log(department);
// 	console.log(name);
// 	console.log(surname);
// 	console.log(year);
// 	console.log(month);
// 	console.log(day);
// }

// func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] );




// function func({color, width, height}) {
// 	console.log( color );
// 	console.log( width );
// 	console.log( height); 
// }

// func( {color: 'red', width: 400, height: 500} );


// function func({color = 'black', width, height}) {
// 	console.log(color, width, height);
// }
// func( {color: 'red', width: 400, height: 500} );


