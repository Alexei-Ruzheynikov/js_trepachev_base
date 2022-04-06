"use strict";

// Repeat

// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
// function sqrtOfElem(arr){
// for(let i = 0; i < arr.length; i++){
// if(typeof arr[i] == 'object'){
// sqrtOfElem(arr[i]);
// }else{arr[i] = arr[i] ** 2;}
// }return arr;
// }

// console.log(sqrtOfElem(arr));

// let arr = [1, 2, 3, 4, 5];
// function func(arr){
//     console.log(arr.shift());
//     if(arr.length != 0 ){
//         func(arr);
//     }
// }
// func(arr);

// let arr = [1, 2, 3, 4, 5];
// function getSum(arr){
//     let square = arr.shift() ** 2;
//     if(arr.length != 0){
//         square += getSum(arr);
//     }
//     return square;
// }
// console.log(getSum(arr));


// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

// function func(obj){
//     for(let elem in obj){
//         if(typeof obj[elem] == 'object'){
//             func(obj[elem]);
//         } else{
//             console.log(obj[elem]);
//         }
//     }
// }

// func(obj);




// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// let res = [];
// function func(arr){
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] == 'object'){
//         func(arr[i]);
//     } else{
//         res.push(arr[i]);
//     }
// }
// return res;
// }

// console.log(func(arr));


// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

// function func(obj){
//     let sum = 0;
//     for(let elem in obj){
        
//         if(typeof obj[elem] == 'object'){
//             sum += func(obj[elem]);
//         } else {
//             sum += obj[elem];
//         }
//     }
//     return sum;
// }

// console.log(func(obj));


// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

// function func(arr){
//     let res ='';
//     for(let i =0; i < arr.length; i++){
//         if(typeof arr[i] == 'object'){
//             res += func(arr[i]);
//         } else {
//             res += arr[i];
//         }
//     }
//     return res;
// }

// console.log(func(arr));

// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

// function func(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] == 'object'){
//             func(arr[i]);
//         } else{
//             arr[i] = arr[i]**2;
//         }
//     }
//     return arr;
// }

// console.log(func(arr));

// /Repeat


// let arr = [1,2,3,4,5,6,7,8,9];
// let res = arr.map(function(elem){
//     return Math.sqrt(elem);
// });
// console.log(res);

// let arr = ['a','b','c','d'];
// let res = arr.map(function(elem){
//     return elem + '!';
// })
// console.log(res);


// let arr = ['andry','bobs','calls','deethy'];
// let res = arr.map(function(elem){
//     return elem.split('').reverse().join('');
// })
// console.log(res);

// let arr = ['123', '456', '789'];
// let res = arr.map(function(elem){
//     return elem.split('');
// });
// console.log(res);

// let arr = [1,2,3,4,5,6];
// let res = arr.map(function(elem,index){
//     return elem * index;
// });
// console.log(res);


// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = arr.map(function(elem) {
// 	return elem;
// });
// console.log(result);

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = arr.map(function(elem) {
// 	return elem.map(function(num) {
// 		return num * num;
// 	});
// });

// console.log(result);


// let arr = ['a', 'b', 'c', 'd', 'e'];

// arr.forEach(function(elem, index) {
// 	document.write(index + '. ' + elem + '<br>');
// });

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// arr.forEach(function(elem) {
// 	sum += elem;
// });

// console.log(sum);

// let arr = [1,2,3,4,5];
// let sum = 0;
// arr.forEach(function(elem){
//     return sum +=elem **2;
// })
// console.log(sum);

// let arr = [-5,-6,1,4,9];
// console.log(arr.filter(function(elem){
//     return elem >= 0;
// }));


// let arr = [-5,-6,1,4,9];
// console.log(arr.filter(function(elem){
//     return elem <= 0;
// }));

// let arr = [-5,-6,1,4,9, 14];
// console.log(arr.filter(function(elem){
//     return elem > 0 && elem < 10;
// }));


// let arr = ['asd','zxcvbxcv','qweqweqw','fsd'];
// console.log(arr.filter(function(elem){
//     return elem.length > 5;
// }));

// let arr = [5,10,4,17,12,21];
// console.log(arr.filter(function(elem, index){
// return elem*index < 30;
// }));

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// console.log(arr.filter(function(elem){
//     return typeof elem !== 'object';
// }));

// let arr = [1,2,3,4,5,-4,-7];
// let res = arr.filter(function(elem){
//     return elem < 0;
// });
// console.log(res.length);

// let arr = [1,2,-3];
// let res = arr.every(function(elem){
//     return elem>0;
// })
// console.log(res);

// let arr = [1,2,3,4,5];
// let res = arr.every(function(elem, index){
//     return elem * index < 30;
// })
// console.log(res);

// let arr = [-1,-2,-3,-4];
// let res = arr.some(function(elem){
//     return elem > 0;
// })
// console.log(res);

// let arr = [1,2,3,4,5,6,7];
// let res = arr.some(function(elem, index){
//     return elem * index > 30;
// })
// console.log(res);