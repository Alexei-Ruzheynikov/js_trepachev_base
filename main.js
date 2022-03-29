"use strict"

// function func(){
//     alert('Alex');
// }
// func();

// function func(){
//     for(let i = 1; i <=100;i++){
//         console.log(i);
//     }
// }
// func();

// function func(num){
//     console.log(num*num*num);
// }
// func(3);

// function func(num){
//     let flag = '---';
//     if(num > 0){
//         flag = '+++';
//     }
//     console.log(flag);
// }
// func(4);

// function func(num1, num2, num3){
//     console.log(num1+num2+num3);
// }
// func(1,4,6);

// function func(num1, num2, num3){
//     console.log(num1+num2+num3);
// }
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// func(param1,param2,param3);

// function func(num = 5) {
// 	alert(num * num);
// }
// func(2);
// func(3);
// func();

// function func(num1 = 0, num2 = 0) {
// 	alert(num1 + num2);
// }
// func(2, 3);
// func(3);
// func();

// function func(num){
//     return num*num*num;
// }
// let res = func(3);
// console.log(res);

// function func(num){
//     return Math.sqrt(num);
// }
// let res = func(3) + func(4);
// console.log(res);

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// let res = round(sqrt(2));
// console.log(res);

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// let res = sum(sqrt(2),sqrt(3),sqrt(4));
// console.log(res);

// function round(num) {
// 	return num.toFixed(3);
// }
// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// let res = round(sum(sqrt(2),sqrt(3),sqrt(4)));
// console.log(res);

// function func(num) {
// 	return num;
// 	let result = num * num;
// 	return result;
// }
// alert( func(3) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num * num;
// 	}
// }
// alert( func(10) );
// alert( func(-5) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
// 	return num * num;
// }
// alert( func(10) );
// alert( func(-5) );

// function func(num) {
// 	let sum = 0;
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;	
// 	}
//     return sum;
// }
// alert( func(5) );

// function func(num){
//     let i = 0;
//     while(num > 10){
//         num = num / 2;
//         i++;
//     }
//     return i;
// }
// let res = func(112);
// console.log(res);

// function func(num1, num2) {
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
// }
// alert(func(3, 4));

// function func(arr){
//     let sum = 0;
// for(let num of arr){
//     sum += +num * +num;
// }
// return sum;
// }
// let arr = [1,2,3,4,5];
// let res = func(arr);
// console.log(res);

// function getDigitsSum(num){
//     let num1 = String(num);
//     return +num1[0] + +num1[1];
// }
// console.log(getDigitsSum(15));

// function getDivisors(num){
// let arr = [];
//     for(let i = 1; i <= num;i++ ){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(getDivisors(24));

// function reverseStr(str){
// let res = str.split('').reverse().join('');
// return res;
// }
// console.log(reverseStr('abcdef'));

// function delElem(num, arr){
// for(let sub of arr){
//     if(sub == num){
//         arr.splice(num,1);
//     }
// }
// return arr;
// }
// let arr = [1,2,3,4,5];
// console.log(delElem(2, arr));

// function func(num){
// let arr = [];
//     for(let i = 1; i <= num; i++){
//         arr.push(i);   
//     }
//     return arr;
// }
// console.log(func(5));

// function func(num1, num2){
// let arr = [];
// for(let i = num1; i <= num2; i++){
//     arr.push(i);
// }
// return arr;
// }
// console.log(func(3, 7));

// function func(arr){
// for(let num of arr){
//     if(!(num % 2 == 0)){
//         return false;
//     }
// }
// return true;
// }
// let arr = [2,4,6,8];
// let arr1 = [2,5,3,6];
// console.log(func(arr));

// function func(num){
// let str = String(num);
// let arr = str.split('');
// console.log(arr);
// for(let num of arr){
//     if(!(num % 2 != 0)){
//         return false;
//     }
// }
// return true;
// }
// console.log(func(13));

// function func(arr){
// for(let i = 0; i < arr.length;i++){
//     if(arr[i] == arr[i + 1]){
//         return true;
//     }
// }
// return false
// }
// let arr = [1,1,2,3,4,5];
// console.log(func(arr));

// function func(a, b) {
//     return a == b;
// }
// console.log(func(12,12));

// function func(a, b) {
// 		return a != b;
// }
// console.log(func(12,112));

// function func(a, b) {
// 		return a + b >= 10;
// }
// console.log(func(1,2));

// function func(num) {
// 		return num >= 0;
// }
// console.log(func(2));

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }
// console.log( func1() + func2() );

// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
		
// 	}
//     return res;
// }
// alert(sum([1, 2, 3, 4, 5]));

// let arr = [1, 2, 3, 4, 5];
// function func(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	alert(res);
// }
// console.log(func(arr));

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }
// console.log( func1() + func2() );

// function sumTo(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}	
// 	return sum;
// }
// let sumOn = sumTo([1, 2, 3, 4, 5]);
// alert(sumOn);

// let res = sum([1, 2, 3, 4, 5]);
// alert(res);
// function sum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
//     return sum;
// }

// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	} else {
//         return num;
//     }
// }
// console.log(add(23));

// let arr = [1, 2, 3, 4, 5];
// let sumOn = sumTw(arr);
// console.log(sumOn);
// function sumTw(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res;
// }

// let num = '12345';
// let res = getDigitsSum(num);
// console.log(res);
// function getDigitsSum(num) {
// 	let arr = num.split('');
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}
// 	return sum;
// }