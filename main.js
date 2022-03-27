"use strict"

// let i = 1;
// while(i<=100) {
//     console.log(i);
//     i++;
// }

// let i = 11;
// while(i<= 33) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// while(i <= 100){
//     console.log(i);
//     i += 2;
// }

// let i = 1;
// while(i<= 99) {
//     console.log(i);
//     i += 2;
// }

// let i = 30;
// while(i >= 0){
//     console.log(i);
//     i--;
// }

// let i = 10;
// while (i >= 1) {
// 	console.log(i);
//     i--;
// }

// let i = 10;
// while (i >= 1) {
// 	console.log(i);
// 	i--;
// }

// let i = 10;
// while (i > 0) {
// 	console.log(i);
// 	i--;
// }

// let i = 10;
// while (i > 0) {
// 	console.log(i);
// 	i--;
// }

// let i = 10;
// while (i >= 1) {
// 	console.log(i);
// 	i--;
// }

// for(let i = 1; i <= 100; i++){
//     console.log(i);
// }

// for(let i = 11; i <= 33; i++){
//     console.log(i);
// }

// for(let i = 0; i <=100; i+=2){
//     console.log(i);
// }

// for(let i = 1; i <= 99; i += 2){
//     console.log(i);
// }

// for(let i = 100; i >=0; i--){
//     console.log(i);
// }

// let res = 1;
// for(let i = 1; i <= 20; i++){
//     res = res * i;
// }
// console.log(res);

// let res = 0;
// for(let i = 2; i <= 100; i += 2){
//     res += i;
// }
// console.log(res);

// let res = 0;
// for(let i = 1; i <= 99; i+=2){
//     res += i;
// }
// console.log(res);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// let arr = [1,2,3,4,5];
// for( let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 != 0) {
//         console.log(arr[i]);
//     }
// }

// let arr = [1,2,3,4,5];
// let res = 1;
// for(let i = 0; i< arr.length; i++){
//     res *= arr[i];
// }
// console.log(res);

// let arr = [1,2,3,4,5];
// let res = 0;
// for(let i = 0; i < arr.length; i++){
//     res += arr[i] * arr[i];
// }
// console.log(res);

// let arr = [2,5,9,15,1,4];
// for(let i = 0; i < arr.length;i++){
//     if(arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i]);
//     }
// }

// let arr = [-4,-3,-2,1,4,6,7];
// let res = 0;
// for(let i =0; i < arr.length; i++){
//     if(arr[i]>0){
//         res +=arr[i];
//     }
// }
// console.log(res);

// let arr = [1,2,3,4,5];
// let res = 0;
// for(let i = 0; i < arr.length; i++){
//     res += arr[i];
// }
// res = res / arr.length;
// console.log(res);

// let arr = [10,20,30,50,235,3000];
// for(let i=0; i< arr.length;i++){
// let num = String(arr[i])[0];
//     if(num == 1 || num == 2 || num == 5){
//         console.log(arr[i]);
//     }
// }

// let arr = [1,2,3,4,5];
// let arr2 = [];
// for(let i = arr.length - 1; i >= 0; i--){
//     arr2 += arr[i];
// }
// console.log(arr2);

// let arr = [0,1,2,5,3,4,5];
// for(let i = 0; i < arr.length;i++){
//     if(arr[i] == i){
//         console.log(arr[i]);
//     }
// }

// let arr = [1,2,3,4,5];
// for(let i = 0; i < arr.length; i++){
//     document.write(arr[i]+'<br>');
// }

// let arr = [1,2,3,4,5];
// for(let i = 0; i < arr.length; i++){
//     document.write('<p>'+arr[i]+'</p>');
// }

// let arr = ["пн","вт","ср","чт","пт","сб","вс"];
// for(let i = 0; i < arr.length; i++){ 
//     if(!(arr[i] == "сб" || arr[i] == "вс") ){
//         document.write('<p>'+arr[i]+'</p>');
//     } else {
//         document.write('<p><i>'+arr[i]+'</i></p>');
//     }
// }

// let arr = ["пн","вт","ср","чт","пт","сб","вс"];
// let day = arr[1];
// for(let i = 0; i < arr.length; i++){
//     if(!(arr[i] == day) ){
//         document.write('<p>'+arr[i]+'</p>');
//     } else {
//         document.write('<p><i>'+arr[i]+'</i></p>');
//     }
// }

// let arr = [1,2,3,4,5];
// for(let elem of arr){
//     console.log(elem);
// }

// let arr = ['a','b','c','d','e'];
// for(let elem of arr){
//     console.log(elem);
// }

// let arr = [1,2,3,4,5];
// let res = 0;
// for(let elem of arr){
// res += elem;
// }
// console.log(res);

//Возникает вопрос, когда же для перебора массива применять цикл for-of, а когда обычный for? Правило тут такое: если вам не нужны номера элементов массива - используйте for-of, а если нужны - используйте обычный for.

// let arr = ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"];
// for(let month of arr){
//     console.log(month);
// }

// let arr = ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let arr = ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"];
// let month = 10;
// for(let i = 0; i < arr.length;i++){
//     if(!(arr[i] == arr[month])){
//         document.write(arr[i] + '<br>');
//     } else {
//         document.write('<i>'+ arr[i]+ '</i>'+'<br>');
//     }
// }

// let arr = ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"];
// let month = 10;
// for(let num of arr){
//     if(!(num == arr[month])){
//         document.write(num + '<br>');
//     } else {
//         document.write('<i>'+ num + '</i>'+'<br>');
//     }
// }

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let res = 0;
// for(let num in obj){
//     res += obj[num];
// }
// console.log(res);

// for( let i = 0,j = 0; i <= 9; i++, j+=2){
//     console.log(i,j);
// }

// let arr = [4,3,1,0,4,5];
// for(let num of arr){
//     if(!(num == 0)){
//         console.log(num);
//     } else {
//         console.log(num);
//         break;
//     }
// }

// let arr = [4, 3, 1, -5, 5, 7];
// let res = 0;
// for( let num of arr){
// if(num >0){
//     res += num;
// } else {
//     break;
//     }
// }
// console.log(res);

// let arr = [1,3,2,4,5];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 3){
//         console.log(i);
//         break;
//     }
// }

// let sum = 0;
// for(let i = 1; sum < 200;i++){
//     sum += i;
//     if(sum > 100){
//         console.log(i);
//         break;
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let elem of arr) {
// 	let result;
// 	if (elem % 2 == 0) {
// 		result = elem * elem;
// 	} else if (elem % 3 == 0) {
// 		result = elem * elem * elem;
// 	} else {
// 		continue; // перейдем на новую итерацию цикла
// 	}
// 	console.log(result); 
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;
// for(let num of arr){
//     if(num == 'c'){
//         flag = true;
//         break;
//     }
// }
// if(flag == true){
//     console.log('Есть');
// } else {
//     console.log('Нет');
// }

// let num = 31
// let flag = true;
// for(let i = 2; i < num;i++){
//     if(num % i == 0) {
//         flag = false;
//         break
//     }
// }
// console.log(flag);

// let num = 23;
// let i = 0;
// while (num < 1000){
//     num *= 3;
//     i++;
// }
// console.log(num, i);

// for(var num = 23, i = 0; num < 1000; i++, num*=3)
// console.log(num, i);

// let str = '';
// for(let i = 0; i < 5; i++){
//     str += '0';
// }
// console.log(str);

// let str = '';
// for(let i = 1; i <= 9; i++){
//     str += i;
// }
// console.log(str);

// let str = '';
// for(let i = 9; i >0; i--){
//     str += i;
// }
// console.log(str);

// let str = '-';
// for(let i = 1; i < 10; i++){
//     str += i+'-';
// }
// console.log(str);

// for(let i = 10; i <=1000;i++){
//     let str = String(i);
//     if(+str[0]+ +str[1] == 5){
//         console.log(i);
//     }
// }

// let res = '';
// for(let i = 1; i <= 30; i++){
//     res += i;
// }
// console.log(res);

// for (let i = 1; i <=9; i++){
//     for(let j = 1; j <= 3; j++){
//         document.write(i);
//     }
// }

// for(let i = 1; i <= 9; i++){
//     for(let j = 1; j<=2; j++){
//         document.write(i);
//     }
//     document.write(' ');
// }

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// arr[5] = 6;
// arr[6] = 7;
// arr[7] = 8;
// arr[8] = 9;
// arr[9] = 10;
// console.log(arr);

// let arr = [];
// arr[0] = 'x';
// arr[1] = 'x';
// arr[2] = 'x';
// arr[3] = 'x';
// arr[4] = 'x';
// console.log(arr);

// let arr = [];
// for(let i = 0; i < 100; i++){
//     arr[i] = i + 1;
// }
// console.log(arr);

// let arr = [];
// for(let i = 1, j = 0; i <= 99;i+= 2, j++){
//     arr[j] = i;
// }
// console.log(arr);

// let arr = [1,2,3,4,5];
// for(let i = 0; i < arr.length;i++){
//     arr[i] = arr[i] * arr[i];
// }
// console.log(arr);

// let arr = [1,2,3,4,5];
// for(let i = 0; i < arr.length; i++){
//     arr[i]--;
// }
// console.log(arr);

// let arr = [1,2,3,4,5];
// for(let i = 0; i < arr.length; i++){
//     arr[i]+= 10;
// }
// console.log(arr);

// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// arr.push(6);
// arr.push(7);
// arr.push(8);
// arr.push(9);
// arr.push(10);
// console.log(arr);

// let arr = [];
// for(let i = 1; i <=10; i++){
//     arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for(let i = 0; i <= 10; i++){
//     arr.push('x');
// }
// console.log(arr);

// let arr = [1,2,3,4,5, -4, -2, 7];
// let res = [];
// for(let num of arr){
//     if(num > 0){
//         res.push(num);
//     }
// }
// console.log(res);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = [];
// for(let i = arr.length - 1; i >= 0; i--){
//     res.push(arr[i]);
// }
// console.log(res);

// let arr = [];
// arr.push('a');
// arr.push('b');
// arr.push('c');
// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = [];
// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		result.push(elem);
// 	}
// }
// console.log(result);

// let obj = {};
// obj['пн'] = 1;
// obj['вт'] = 2;
// obj['ср'] = 3;
// obj['чт'] = 4;
// obj['пт'] = 5;
// obj['сб'] = 6;
// obj['вс'] = 7;
// console.log(obj);

// let arr1 = ['пн', 'вт', 'ср', 'чт', 
// 	'пт', 'сб', 'вс']; 
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for(let i = 0; i < arr1.length; i++){
//     obj[arr1[i]] = arr2[i];
// }
// console.log(obj);

// let arr1 = ['пн', 'вт', 'ср', 'чт', 
// 	'пт', 'сб', 'вс']; 
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for(let i = 0; i < arr1.length; i++){
//     obj[arr2[i]] = arr1[i];
// }
// console.log(obj);

// let obj = {'a': 12, 'b': 21, 'c': 
// 	13, 'd': 23, 'e': 17}; 
// let res = {};
// for(let num in obj){
//     if(obj[num] > 10 && obj[num] < 20){
//         res[num] = obj[num];
//     }
// }
// console.log(res);

// let obj = {1: 'пн', 2: 'вт', 3: 
// 	'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'}; 
// let res = {};
// for(let num in obj){
//     if(num % 2 != 0){
//         res[num] = obj[num];
//     }
// }
// console.log(res);

// let obj = {'a': 1, 'b': 2, 'c': 3, 
// 	'd': 4, 'e': 5}; 
// for(let num in obj){
//     obj[num] = obj[num] * obj[num];
// }
// console.log(obj);

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let res = {};
// for(let num in obj){
//     res[obj[num]] = num;
// }
// console.log(res);

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for(let num in obj){
//     obj[num] *= 1.1;
// }
// console.log(obj);

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for(let num in obj){
//     if(obj[num] <= 400){
//         obj[num] *= 1.1;
//     } 
// }
// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let res = {};
// for(let i = 0; i < arr1.length;i++){
//     res[arr1[i]] = arr2[i];
// }
// console.log(res);

// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let res1 = 0;
// let res2 = 0;
// let res;
// for(let num in obj){
//     res1 += +num;
//     res2 += +obj[num];
// }
// res = res1 / res2;
// console.log(res);

// let obj = {'a': 1, 'b': 2, 'c': 3, 
// 	'd': 4, 'e': 5}; 
// let arr1 = [];
// let arr2 = [];
// for(let num in obj){
//     arr1 += num + ' ';
//     arr2 += obj[num] + ' ';
// }
// console.log(arr1);
// console.log(arr2);

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let arr = [];
// for(let num in obj){
//     if(String(obj[num])[0] == 1 || String(obj[num])[0] == 2 ){
//         arr += obj[num] + ' ';
//     } 
// }
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for(let i = 1, j=0; i <= arr.length; i++, j++){
//     obj[i] = arr[j];
// }
// console.log(obj);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for(let i = 1, j = 0; j < arr.length; i++,j++){
//    obj[arr[j]] = i; 
// }
// console.log(obj);

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let res = 0;
// for(let num of arr){
//     if( num == 3){
//         res++;
//     }
// }
// console.log(res);

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let res1 = 0;
// let res2 = 0;
// for(let num of arr){
//     if( num == 3){
//         res1++;
//     }
//     if( num == 2){
//         res2++;
//     }
// }
// console.log(res1);
// console.log(res2);

// let str = 'qweqwerwrqtqqq';
// let arr = [];
// let obj = {};
// for(let i = 0; i < str.length;i++){
//     arr.push(str[i]);
// }
// for(let num of arr){
//     if( obj[num] === undefined){
//         obj[num] = 1;
//     } else {
//         obj[num]++;
//     }
// }
// console.log(obj);

// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i < arr.length; i++) {
// 	console.log(arr[i - 1] + arr[i]);
// }

// let arr = [3,5,7,9];
// for(let i = 0;i <arr.length; i++){
//     if(i == arr.length-1){
//         break;
//     }
//     console.log(arr[i + 1]);
// }

// let arr = [3,5,7,9];
// for(let i = 0;i <arr.length; i++){
//     if(i == arr.length-1){
//         break;
//     }
//     console.log(arr[i] + arr[i + 1]);
// }

// let arr = [1,2,3,4,5,6];
// for(let i = 2;i <arr.length; i++){
//     console.log(arr[i - 2], arr[i - 1]);
// }

// let arr = [1,2,3,4,5,6];
// for(let i = 2;i <arr.length; i++){
//     console.log(arr[i - 2] + arr[i - 1] + arr[i]);
// }

// let arr = [1,2,3,4,5,6];
// for(let i = 1;i <arr.length; i++){
//         if(i == arr.length-1){
//         break;
//     }
//     console.log(arr[i - 1] + arr[i + 1] + arr[i]);
// }

// let one = 0;
// let two = 1;
// let res;
// for(let i = 0; i < 10;i++){
//     res = one + two;
//     one = two;
//     two = res;
//     console.log(res);
// }
// console.log(res);

// let one = 0;
// let two = 1;
// let three = 2;
// let res;
// for(let i = 0; i< 10; i++){
//     res = one + two + three;
//     one = two;
//     two = three;
//     three = res;
// console.log(res);
// }
// console.log(res);

// let str = '';
// for(let i = 0; i < 5; i++ ){
//     str +='xx';
//     document.write(str+ '<br>');
// }

// for(let i = 1; i<10; i+=2){
//     for(let j = 1; j<=i; j++){
//         document.write(i);
//     }
//     document.write('<br>');
// }

// for(let i = 10; i >=1; i-= 2){
//     let str ='';
//     for(let j = 0; j < i;j++){
//         str+= 'x';
//     }
//     document.write(str + '<br>');
// }

// for(let i = 9; i >=1; i--){
//     let num = '';
//     for(let j = 0; j < i; j++){
//         num+= i;
//     }
//     document.write(num + '<br>');
// }

// let str = '';
// let arr = [];
// for(let i = 0; i <5; i++){
//     str+='xx';
//     arr.push(str);
// }
// console.log(arr);

// let arr = [];
// for(let i = 1; i <= 5;i++){
//     let str = '';
//     for(let j = 0; j < 5;j++){
//         str += i;
//     }
//     arr.push(str);
// }
// console.log(arr);

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let res = 0;
// for(let num of arr){
//     if(String(num)[0] == 1 || String(num)[0] == 2){
//         res +=num
//     }
// }
// console.log(res);

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;
// for (let elem in obj) {
//     let num = String(obj[elem])[0];
// 	if (num == '1' || num == '2') {
// 		sum += obj[elem];
// 	}
// }
// console.log(sum);

// for (let i = 0; i <= 10; i++) {
// 	console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }

// let i = 0;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// let res = 0;
// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }
// console.log(res);

// let res = 1;
// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }
// console.log(res);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum); // должно вывести 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum); // должно вывести 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum); // должно вывести 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i];
// }
// console.log(sum); // почему-то выводит NaN

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i];
// }
// console.log(sum); // почему-то выводит не 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i];
// }
// console.log(sum); // почему-то выводит не 15

// let arr = [1, 2, 3, 4, 5];
// let arr2 =[];
// for (let elem of arr) {
// 	elem = elem * elem;
//     arr2.push(elem);
// }
// console.log(arr2);

// let arr = [];
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let elem in obj) {
// 	sum += obj[elem];
// }
// console.log(sum);

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let key in obj) {
// 	sum += +obj[key];
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// let res = '';
// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = '+++';
//         break;
// 	} else {
// 		res = '---';
// 	}
// }
// console.log(res);

// let arr = [1, 2, 3, 4, 5];
// let res = false;
// for (let elem of arr) {
// 	if (elem === 3) {
// 		 res = true;
// 		break;
// 	}
// }
// console.log(res);

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	if (elem % 2 == 0) {
// 		console.log(elem);
// 	}
// }

// for(let i = 1; i <= 100; i++){
//     console.log(i);
// }

// for(let i = 100; i >= 1; i -=2){
//     console.log(i);
// }

// for( let i = 2; i <= 100; i +=2){
//     console.log(i);
// }

// let arr = [];
// let str = 'x';
// for(let i = 0; i < 10; i++){
//     arr.push(str);
// }
// console.log(arr);

// let arr = [];
// for(let i = 1; i <= 10; i++){
//     arr.push(i);
// }
// console.log(arr);

// let arr = [1,2,3,33,5,77];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0 && arr[i] < 10){
//         console.log(arr[i]);
//     }
// }

// let arr = [1,2,3,33,5,77];
// let flag = false;
// for(let i = 0; i < arr.length; i++){
//     if (arr[i] == 5){
//         flag = true;
//     }
// }
// console.log(flag);

// let arr = [1,2,3,33,5,77];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

// let arr = [1,2,3];
// let sum = 0;
// for(let num of arr){
// sum += num *num;
// }
// console.log(sum);

// let arr = [1,2,3,4,5];
// let sum = 0;
// for(var i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// sum /= i;
// console.log(sum);

// let fact = 4;
// let res = 1;
// for(let i = 1; i <= fact; i++){
//     res *= i;
// }
// console.log(res);