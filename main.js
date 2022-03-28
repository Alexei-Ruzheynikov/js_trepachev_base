"use strict"



// function factorial(x) {
//     console.log(x);
//     if (x < 0) return;
//     if (x === 0) {console.log("x="+x+ " => return 1"); return 1}

//     let f = factorial(x - 1);
//     let t= x * f;
//     console.log("x="+x+" => return "+ x+" * "+f +" = >" +" return "+t );
//     console.log("fact("+x+"-1)" + "=> fact("+(x-1)+")");
//     console.log("")

//     return t;
    
//   }
// //  console.log(factorial(3)); 

//  console.log(factorial(4)); 


// console.log(Math.pow(2, 10));

// console.log(Math.sqrt(245));

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let res = 0;
// for(let i = 0; i < arr.length; i++){
//     res+= +arr[i] * +arr[i] * +arr[i];

// }
// console.log(Math.sqrt(res));

// let a = 379;
// let b = Math.sqrt(a)
// console.log(b);
// console.log(Math.round(b));
// console.log(b.toFixed(1));
// console.log(b.toFixed(2));

// let a = 587;
// let b = Math.sqrt(a);
// console.log(b);
// let obj = {
//     floor: 0,
//     ceil: 0
// }
// obj.floor = Math.floor(b);
// obj.ceil = Math.ceil(b);
// console.log(obj);

// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(1, 100));

// let arr = [];
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for(let i = 0; i < 10; i++) {
//     arr.push(getRandomInt(1, 100));
// }
// console.log(arr);

// let a = 3;
// let b = 5;
// let res = a -b;
// console.log(Math.abs(res));

// let str = 'js';
// console.log(str.toUpperCase());

// let str = 'JS';
// console.log(str.toLowerCase());

// let str = 'я учу javascript!';
// console.log(str.substr(2,3));
// console.log(str.substr(6,10));
// console.log(str.substring(2,5));
// console.log(str.substring(6,16));
// console.log(str.slice(2,5));
// console.log(str.slice(6,16));

// let str = 'abcdehttp://';
// console.log(str.indexOf('c'));
// console.log(str.indexOf('a'));
// console.log(str.indexOf('a',0));
// console.log(str.lastIndexOf('a'));
// console.log(str.indexOf('a', str.length-1));
// console.log(str.indexOf('http://', 0));
// console.log(str.lastIndexOf('http://', str.length-1));

// let str = 'http://sdag';
// console.log(str.startsWith('http://'));
// console.log(str.endsWith('http://'));

// let str = '1-2-3-4-5';
// let arr = str.split('-');
// console.log(arr);

// let str = '12345';
// let arr = str.split('');
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let str = arr.join('-');
// console.log(str);

// let arr = [1, 2, 3];
// arr.push(4,5,6);
// arr.unshift(7,8,9);
// console.log(arr);

// let arr = [1, 2, 3];
// console.log(arr.shift());
// console.log(arr.pop());

// let arr =[1, 2, 3, 4, 5];
// let sub = arr.slice(0,3);
// let subTwo = arr.slice(2);
// console.log(sub);
// console.log(subTwo);

// let arr =[1, 2, 3, 4, 5];
// let sub = arr.splice(1,2);
// console.log(arr);

// let arr =[1, 2, 3, 4, 5];
// arr.splice(2,0,'a','b','c')
// console.log(arr);

// let arr =[1, 2, 3, 4, 5];
// arr.splice(1,0,'a','b');
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
// console.log(arr);

// let arr =[1, 2, 3, 4, 5];
// console.log(arr.indexOf(3));

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(4));

// let str = 'london';
// let result = str.slice(0, 5) + str.slice(5, 6).toUpperCase() ;
// console.log(result);

// let str = 'london';
// let result = str.slice(0, 2).toUpperCase() + str.slice(1);
// console.log(result);

// let str = 'London';
// let res = str.slice(0,1).toLowerCase() + str.slice(1);
// console.log(res);

// let str = 'word1 word2 word3';
// let arr = str.split(' ');
// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
// }
// let res = arr.join(' ');
// console.log(res);

// let str = 'var_test_text';
// let arr = str.split('_');
// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
// }
// let res = arr.join('_');
// console.log(res);

// let str = 'Var_Test_Text';
// let arr = str.split('_');
// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].slice(0,1).toLowerCase() + arr[i].slice(1);
// }
// let res = arr.join('_');
// console.log(res);

// let str = 'red grey green';
// let res = str.split(' ').reverse().join(' ');
// console.log(res);

// let num = '12345';
// let arr = num.split('');
// let sum = 0;
// for (let digit of arr) {
// 	sum += +digit;
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
// 	sum += +digit;
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let prod = 1;
// for (let digit of arr) {
// 	prod *= digit;
// }
// console.log(prod);