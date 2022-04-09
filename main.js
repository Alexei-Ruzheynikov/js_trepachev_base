"use strict";

// let date = new Date();
// // console.log(date.getDate());
// // console.log(date.getMonth());
// console.log(date.getFullYear());

// function addZero(num){
//     if(num >= 0 && num <= 9){
//         return '0' + num;
//     } else {
//         return num;
//     }
// }
// let date = new Date();
// console.log( addZero(date.getHours()) +':' + addZero(date.getMinutes()) +':' + addZero(date.getSeconds()) +' ' + addZero(date.getDate()) +'.' + addZero(date.getMonth() + 1) +'.' + addZero(date.getFullYear()));



// let str = '1995-05-25';
// let res = str.split('-').reverse().join('.');
// console.log(res);



// let date = new Date();
// let res = date.getDay();

// if(res == 0){
//     console.log('Уже воскресенье');
// }
// let arr = [];
// for(let i = 1,j = 6; i <= 6;i++,j--){
//         arr.push([i,j]);
// } 
// for(let i = 0; i < 6; i++){
//     for(let j = 0;j < 2;j++){
//         if(arr[i][0] == res){
//             console.log('Ждал ' + arr[i][1] + ' дн.');
//             break;
//         }
//     }
// }

// // console.log(res);
// // if(res == 0 || res == 6){
// //     console.log('Выходной');
// // } else {
// //     console.log('Рабочий день');
// // }

// // if(res == 6){
// //     console.log('1 день');
// // }
// // if(res == 5){
// //     console.log('2 дня');
// // }
// // if(res == 4){
// //     console.log('3 дня');
// // }
// // if(res == 3){
// //     console.log('4 дня');
// // }
// // if(res == 2){
// //     console.log('5 дней');
// // }
// // if(res == 1){
// //     console.log('6 дней');
// // }
// // if(res == 0){
// //     console.log('Уже воскресенье');
// // }






// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// let date = new Date();
// let month = date.getMonth();
// console.log(months[month]);



// let date = new Date(2021,6,28);
// let day  = date.getDay();
// console.log(day);
// let days = ["вс","пн","вт","ср","чт","пт","сб"];
// console.log(days[day]);


// let date = new Date(2025,0,1);
// let time = date.getTime();
// console.log(time);

// let now = new Date(1988,2,1);
// let old = new Date(2000,0,10);
// let diff = old.getTime() - now.getTime();
// diff = diff / (1000*60*60*24);
// console.log(diff);

// let now = new Date(1998,7,28);
// let old = new Date();
// let diff = old.getTime() - now.getTime();
// diff = diff / (1000*60*60*24*30);
// console.log(diff);




// let now = new Date(2010,1,15);
// let old = new Date(2000,8,1);
// let diff = now-old;
// console.log(diff);


// let now = new Date(2010,1,15);
// let old = new Date(2000,8,1);
// let diff = (now-old) / (1000*60*60*24);
// console.log(diff);


// let now = new Date(2010,1,15);
// let old = new Date(2000,8,1);
// let diff = (now-old) / (1000*60*60*24*30);
// console.log(diff);

// let now = new Date(2010,1,15);
// let old = new Date(2000,8,1);
// let diff = (now-old) / (1000*60*60*24*30*12);
// console.log(diff);


// let date = new Date(2018, 1, 35);
// console.log(date); // какая дата будет?

// let date = new Date(2018, 15, 1);
// console.log(date); // какая дата будет?


// let date = new Date(2018, 3, 31);
// console.log(date); // какая дата будет?


// let date = new Date(2018, 1, 31);
// console.log(date); // какая дата будет?


// let date = new Date(2018, 12, 33);
// console.log(date); // какая дата будет?

// let date = new Date(2018, 33, 33);
// console.log(date); // какая дата будет?


// let date = new Date(2018, 5, 0);
// console.log(date); 


// let date = new Date(2018, 0, 0);
// console.log(date);


// let date = new Date(2018, -12, -33);
// console.log(date);


// let date = new Date(2018, 0, 1, 23, 0, 60);
// console.log(date);


// let date = new Date(2018, 0, 1, 23, 60, 0);
// console.log(date);



// let date = new Date(2018, 0, 1, 100, 100, 100);
// console.log(date);



// function getLastDay(month, year) { // функция должна принимать и год
// 	let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// 	if (month != 1) {
// 		return lastDays[month]; // если не февраль
// 	} else {
// 		for(let i = 1764; i < 2500;i+= 4){
//             if(year == i){
//                  lastDays[1] = 29;
//                  break;
//             }
//         }
//         return lastDays[month];
// 	}
// }
// console.log(getLastDay(1,1764));


// function func(month,year){
//     let date = new Date(year, month, 0);
//     console.log(date.getDate());
//     console.log(date);
// }
// func(5,2025);




// function isLeap(year){
//     let date = new Date(year, 2, 0);
//     return date.getDate() == 29;
// }
// console.log(isLeap(2024));



//   function checkDate(year, month, day){
//     let date = new Date(year, month, day);

//     return date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
//   }

//   console.log(checkDate(2025,0,31));
//   console.log(checkDate(2025,0,32));


// let now = new Date();
// let date = new Date(now.getFullYear(), 11,31);
// console.log(date.getDay());

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(),1);
// console.log(date.getDay());


// let now = new Date();
// let date = new Date(now.getFullYear() + 1,11,31);
// console.log(date.getDay());

// let now = new Date();
// let date = new Date(now.getFullYear() + 1,now.getMonth(), now.getDate());
// console.log(date.getDay());
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear() - 1,now.getMonth(), now.getDate());
// console.log(date.getDay());
// console.log(date);


// let now = new Date();

// let date = new Date(now.getFullYear(), 0 - 1, 1);
// console.log(date.getDay());

// let now = new Date();
// let date = new Date(now.getFullYear(),now.getMonth() -1, now.getDate());
// console.log(date.getDay());
// console.log(date);


// let date = new Date();
// let date1 = new Date(date.getFullYear(),8, 10);
// let date2 = new Date(date.getFullYear(),0, 1);
// console.log(date1 - date2);



// let date = new Date();
// let date1 = new Date(date.getFullYear(),date.getMonth()+1, 10);
// let date2 = new Date(date.getFullYear(),date.getMonth(), 20);
// let res = date1 - date2;
// res = res / (1000*60*60*24);
// console.log(res);



// let date = new Date();
// let date1 = new Date();
// let date2 = new Date(date.getFullYear(),date.getMonth(),date.getDate()-1,12);
// let res = date1- date2;
// res = res / (1000*60*60);
// console.log(res);


// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// let res = now -date;
// res = res /(1000*60*60);
// console.log(res);



// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate()+ 1);
// let res = date -now;
// res = res /(1000*60*60);
// console.log(res);


// let now  = new Date();
// let year = now.getFullYear();

// for (let month = 0; month <= 11; month++) {
// 	let date = new Date(year, month, 1);
	
// 	if (date.getDay() == 0) {
// 		console.log(year + '-' + month + '-1');
// 	}
// }


// let now  = new Date();
// let year = now.getFullYear();
// let yearOld = 2000;
// for(let years = yearOld; years <= year; years++){
//         let date = new Date(years, 0, 1);
//     if (date.getDay() == 0 || date.getDay() == 6) {
//         console.log(years);
//     }
// }

// let date = new Date();
// let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(),0,0,0);
// let date2 = new Date();
// let res = date2 - date1;
// res = res / 1000;
// console.log(res);



// let date = new Date();
// let date1 = new Date();
// let date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1,);

// let res = date2 - date1;
// res = res / 1000;
// console.log(res);


// let date = new Date();
// let date1 = new Date();
// let date2 = new Date(date.getFullYear(), 11, 32,);

// let res = date2 - date1;
// res = res / (1000*60*60*24);
// console.log(res);


// let date = new Date();
// let day = 1;
// for(let i = day;i <=365;i++){
//     let date1 = new Date(date.getFullYear(), 0, i);
//     if(date1.getDay() == 5 && date1.getDate() == 13){
//         console.log(1);
//     }
// }


// let date = new Date();
// let date1 = new Date(date.getFullYear(), date.getMonth()-3,date.getDate());
// console.log(date1.getFullYear());




// let date = new Date();
// let date2 = new Date(date.getFullYear(), date.getMonth()+1,0);
// console.log(date2.getDay());


// let date = new Date();
// let date2 = new Date(date.getFullYear(), 2,0);
// if(date2.getDate() == 29){
//     console.log('Високосный');
// } else{
//     console.log('Не високосный');
// }


// let date = new Date();
// for(let i = 1; i < 5; i++){
//     let date2 = new Date(date.getFullYear() - i, 2,0);
//     if(date2.getDate() == 29){
//         console.log(date2.getFullYear() + ' Год Високосный');
//         break;
//     } 
// }



// let date = new Date();
// for(let i = 1; i < 5; i++){
//     let date2 = new Date(date.getFullYear() + i, 2,0);
//     if(date2.getDate() == 29){
//         console.log(date2.getFullYear() + ' Год Високосный');
//         break;
//     } 
// }


// let date1 = '2020-11-31';
// let date2 = '2020-12-01';
// if(date1 > date2){
//     console.log('date1 больше');
// } else {
//     console.log('date2 больше');
// }



// let date1 = '09-21';
// let date2 = '09-23';
// if(date1 > date2){
//     console.log('date1 больше');
// } else {
//     console.log('date2 больше');
// }


// let date = '08-20';
// if (date >= '02-21' && date <= '03-20') {
// 	console.log('Овен');
// }
// if (date >= '03-21' && date <= '04-21') {
// 	console.log('Телец');
// }
// if (date >= '04-22' && date <= '05-21') {
// 	console.log('Близнецы');
// }
// if (date >= '05-22' && date <= '06-22') {
// 	console.log('Рак');
// }
// if (date >= '06-23' && date <= '07-23') {
// 	console.log('Лев');
// }
// if (date >= '07-24' && date <= '08-23') {
// 	console.log('Дева');
// }
// if (date >= '08-24' && date <= '09-23') {
// 	console.log('Весы');
// }
// if (date >= '09-24' && date <= '10-22') {
// 	console.log('Скорпион');
// }
// if (date >= '10-23' && date <= '11-22') {
// 	console.log('Стрелец');
// }
// if (date >= '11-23' && date <= '00-20') {
// 	console.log('Козерог');
// }
// if (date >= '00-21' && date <= '01-19') {
// 	console.log('Водолей');
// }
// if (date >= '01-20' && date <= '02-20') {
// 	console.log('Рыбы');
// }



// let date1 = new Date();
// let date2 = new Date(date1.getFullYear(),date1.getMonth(),date1.getDate(),12);
// console.log(date1>date2);


// let date1 = new Date();
// let date2 = new Date(date1.getFullYear(),date1.getMonth(), 15);
// console.log(date1>date2);


// let now  = new Date();
// let date = new Date(now.getFullYear(), 2, 8); // текущий год

// let diff = date - now; // разница

// if (diff > 0) {
// 	diff = diff / (1000 *60*60*24);
// } else if (diff == 0) {
// 	diff = 'Праздник сегодня';
// } else {
// 	diff = 'Праздник в следующем году';
// }
// console.log(diff);


// let now  = new Date();
// let date = new Date(now.getFullYear(), 2, 1); // текущий год
// let diff = date - now; // разница
// if(diff < 0){
//     date = new Date(now.getFullYear()+1, 2, 1);
//     diff = date - now;
// }
// diff = diff / (1000 *60*60*24);
// if(diff == 0){
//     diff = 'День Рождение сегодня';
// }
// console.log(diff);




// let month = 1;
// let day = 29;
// let now  = new Date();
// let date = new Date(now.getFullYear(), month, day); // текущий год
// let diff = date - now; // разница

// if(diff < 0){
//     date = new Date(now.getFullYear()+1, month, day);
//     diff = date - now;
// }

// if(diff == 0){
//     diff = 'День Рождение сегодня';
// }
// if(day == 29){
//     for(let i = 1; i < 5;i++){
//         date = new Date(now.getFullYear()+i, month, day);
//         if(day == date.getDate()){
//             diff = date - now;
//         }
//     }
// }
// diff = diff / (1000 *60*60*24);
// console.log(diff);