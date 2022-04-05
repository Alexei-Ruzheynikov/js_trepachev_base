"use strict";

// let num = 1;
// function func() {
// 	alert(num);
// }
// func();


// let num = 1;
// function func() {
// 	alert(num);
// }
// num = 2;
// func();

// function func() {
// 	alert(num);
// }
// let num;
// num = 1;
// func();
// num = 2;
// func();

// function func() {
// 	let num = 5;
// 	return num;
// }
// alert(num);

// function func() {
// 	let num = 5;
// 	return num;
// }
// alert(func());

// let num = 1;
// function func() {
// 	num = 2;
// }
// func();
// alert(num);

// let num = 1;
// function func() {
// 	let num = 2;
// }
// func();
// alert(num);

// let num = 1;
// function func() {
// 	num = 2;
// }
// func();
// alert(num);

// let num = 1;
// function func() {
// 	num = 2;
// }
// alert(num);

// let num = 1;
// function func() {
// 	let num = 2;
// }
// func();
// alert(num);

// let num = 1;
// function func() {
// 	let num = 2;
// }
// alert(num);
// func();

// let num = 1;
// function func() {
// 	num = 2;
// }
// alert(num);
// func();

// let num = 1;
// function func() {
// 	num++;
// }
// func();
// func();
// func();
// alert(num);

// function func() {
// 	num = 2;
// }
// let num = 1;
// alert(num);
// func();

// function func() {
// 	num = 2;
// }
// let num = 1;
// func();
// alert(num);

// function func(localNum) {
// 	alert(localNum);
// }
// func(1);

// function func(localNum) {
// 	alert(localNum);
// }
// let num = 1;
// func(num);

// function func(localNum) {
// 	alert(localNum);
// }
// let num = 1;
// func(num);
// num = 2;

// let num = 1;
// function func(localNum) {
// 	alert(localNum);
// }
// num = 2;
// func(num);

// function func(localNum) {
// 	localNum = 2;
// }
// let num = 1;
// func(num);
// alert(num);

// function func(localNum) {
// 	num = 2;
// }
// let num = 1;
// func(num);
// alert(num);

// function func(localNum) {
// 	let num = 2;
// }
// let num = 1;
// func(num);
// alert(num);

// function func(num) {
// 	num = 2;
// }
// let num = 1;
// func(num);
// alert(num);

// function func() {
// 	num = 2;
// }
// let num = 1;
// func();
// alert(num);

// function func() {
// 	let num = 2;
// }
// let num = 1;
// func();
// alert(num);

// function func() {
// 	return '!';
// }
// alert(func);

// function func(){
//     // return alert('abc');
//     return alert(func);
// }
// func();
// func = 123;
// alert(func);

// function func1(){
//     return 3;
// }
// let func2 = func1;
// console.log(func1() + func2());

// let func1 = function(){
//     return 1;
// }
// let func2 = function(){
//     return 2;
// }
// alert(func1() + func2());

// Чтобы такого не происходило, следует придерживаться правила, общего для всех языков программирования: функции должны быть глаголами, а переменные - существительными.

// func1();
// function func1(){
//     return alert(5);
// }

// func2();
// let func2 = function(){
//     return alert(4);
// };

// let func1 = function() {alert('!')};
// let func2 = function() {
// 	alert('!');
// };
// function func3() {
// 	alert('!');
// }

// 1 + function func() {
// 	alert('!');
// }

// alert(
// 	function() {
// 		alert('!');
// 	}
// );

// test();
// let test = function func() {
// 	alert('!');
// }

// func();
// alert(
// 	function func() {
// 		alert('!');
// 	}
// );

// func();
// +function func() {
// 	alert('!');
// }

// func();
// function func() {
// 	alert('!');
// }

// func();
// -
// function func() {
// 	alert('!');
// }

// func();
// -1;
// function func() {
// 	alert('!');
// }

// func();
// -1
// function func() {
// 	alert('!');
// }

// func();
// 1
// function func() {
// 	alert('!');
// }

// func();
// -1-
// function func() {
// 	alert('!');
// }

// func();
// function func() {
// 	alert('!');
// }
// +1;

// func();
// function func() {
// 	alert('!');
// } + 1;

// func();
// +function func() {
// 	alert('!');
// } + 1;

// func();
// +
// function func() {
// 	alert('!');
// } + 1;

// func();
// + 1
// function func() {
// 	alert('!');
// } + 1;

// func();
// function func() {
// 	alert('!');
// } + alert('!');

// let arr = [
//     function(){return 1;},
//     function(){return 2;},
//     function(){return 3;}
// ]
// // arr[2]();
// // let sum = arr[0]() + arr[1]() + arr[2]();
// // console.log(sum);
// for(let elem of arr){
//     console.log(elem());
// }

// let obj = {
//     func1: function(){return 1;},
//     func2: function(){return 2;},
//     func3: function(){return 3;}
// };
// // let sum = obj.func1() + obj.func2() + obj.func3();
// // console.log(sum);
// for(let elem in obj){
//     console.log(obj[elem](elem));
// }

// let math = {
//     sum: function(arr) {
//         let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
//     },
//     sumSquare: function(arr) {
//         let square = 1;
//         let res = [];
//         let sumSquare = 0;
//         for(let i = 0; i < arr.length; i++){
//             arr[i] = arr[i] * arr[i];
//             res.push(i);
//         }
//         for(let i = 0; i < res.length; i++){
//             sumSquare += arr[i];
//         }
//         return sumSquare;
//     },
//     sumCube: function(arr) {
//         let cube = 1;
//         let res = [];
//         let sumCube = 0;
//         for(let i = 0; i < arr.length; i++){
//             arr[i] = arr[i] * arr[i] * arr[i];
//             res.push(i);
//         }
//         for(let i = 0; i < res.length; i++){
//             sumCube += arr[i];
//         }
//         return sumCube;
//     }
// }
// alert(math.sumCube([3,3]));

// test(
//     function(){return 1;},
//     function(){return 2;},
//     function(){return 3;}
// );
// function test(func1, func2, func3){
//     alert( func1() + func2() + func3() );
// }


//     function get1(){return 1;};
//     function get2(){return 2;};
//     function get3(){return 3;};
// test(get1, get2, get3);
// function test(get1, get2, get3){
//     alert( get1() + get2() + get3() );
// }

// let get1 = function (){return 1;};
// let get2 = function (){return 2;};
// let get3 = function (){return 3;};
// test(get1, get2, get3);
// function test(get1, get2, get3){
// alert( get1() + get2() + get3() );
// }

// test(function(num){
//     return num * num;
// })
// function test(func) {
// 	alert(func(3));
// }

// test(function func(num){
//     return num * num;
// })
// function test(func){
//     alert(func(3));
// }

// test(function(num){
//     return num * num * num;
// });
// function test(func) {
// 	alert(func(3));
// }


// function func(num){
//     return num*num*num;
// }
// test(func);
// function test(func) {
// 	alert(func(3));
// }

// let func = function (num){
//     return num*num*num;
// }
// test(func);
// function test(func) {
// 	alert(func(3));
// }

// let func = function (num1, num2){
//     return num1+num2;
// }
// test(func);
// function test(func) {
// 	alert(func(2,3));
// }

// function test(num, func1, func2) {
// 	alert(func1(num) + func2(num));
// }
// test(3,
// function(num){
//     return num * num;
// },
// function(num){
//     return num * num * num;
// }
// )

// function test(arr, func){
//     for(let i = 0; i< arr.length;i++){
//         arr[i] = func(arr[i]);
//     }
//     return arr;
// }
// let res = test([1,2,3], function(num){
//     return num * num;
// });
// console.log(res);

// function test(arr, func){
//     for(let i = 0; i< arr.length;i++){
//         arr[i] = func(arr[i]);
//     }
//     return arr;
// }
// let res = test([1,2,3], function(num){
//     return num * num * num;
// });
// console.log(res);

// function func(num1, num2){
//     function square(num1){
//         return num1 * num1;
//     }
//     function cube(num2){
//         return num2 * num2 * num2;
//     }

//     return square(num1) + cube(num2);
// }
// alert(func(2,3));

// function test() {
// 	let num = 1;
// 	function func() {
// 		alert(num);
// 	}
// 	func();
// }
// test();

// function test() {
// 	let num = 1;
// 	function func() {
// 		alert(num);
// 	}
// }
// test();

// function test() {
// 	let num = 1;
// 	function func() {
// 		alert(num);
// 	}
// 	func();
// }

// function test() {
// 	let num;
	
// 	function func() {
// 		alert(num);
// 	}
	
// 	num = 1
// 	func();
	
// 	num = 2
// 	func();
// }

// test();



// function test(num1, num2) {
// 	function func() {
// 		alert(num1 + num2);
// 	}
// 	func();
// }
// test(1, 2);

// function test(num1, num2) {
// 	function func() {
// 		alert(num1 + num2);
// 	}
	
// 	num1 = 2;
// 	func();
// }

// test(1, 2);


// function test(num) {
// 	function func(localNum) {
// 		alert(localNum);
// 	}
	
// 	func(num);
// }

// test(1);



// function test(num) {
// 	function func(localNum) {
// 		alert(localNum);
// 	}
	
// 	func(num + 1);
// }

// test(1);


// function test(num) {
// 	function func(localNum) {
// 		alert(num);
// 	}
	
// 	func(num + 1);
// }

// test(1);


// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
	
// 	func(num);
// 	alert(num);
// }

// test(1);


// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
	
// 	func(num);
// 	alert(localNum);
// }

// test(1);


// function test(num) {
// 	function func(localNum) {
// 		num = 2;
// 	}
	
// 	func(num);
// 	alert(num);
// }

// test(1);


// function test(num) {
// 	function func(num) {
// 		alert(num);
// 	}
	
// 	func(num);
// }

// test(1);



// function test(num) {
// 	function func(num) {
// 		num = 2;
// 	}
	
// 	func(num);
// 	alert(num);
// }

// test(1);


// function test(num) {
// 	function func(num) {
// 		alert(num);
// 	}
	
// 	num = 2;
// 	func(num);
// }

// test(1);


// function test(num) {
// 	function func(num) {
// 		alert(num);
// 	}
	
// 	func(num);
// 	num = 2;
//     func(num);
// }

// test(1);


// function func1(){
// return function(){
//     return 1;
// }
// }
// function func2(){
// return function(){
//     return 2;
// }
// }

// alert(func1()() + func2()());



// function func() {
// 	return function() {
// 		return function() {
// 			return function() {
//                 return function() {
//                         return '!';
//                 };
//             };
// 		};
// 	};
// }

// alert( func()()()()() ); // выведет '!'

// function func(num1){
//     return function (num2){
//         return function (num3){
//             return num1 + num2 + num3;
//         }
//     }
// }
// alert(func(2)(3)(4));


// function func(num1){
    
//     return function (num2){
//         return function (num3){
//             return function (num4){
//                 return function(){
//                     let arr = [num1,num2,num3,num4];
//                     return arr;
//                 }
                
//             }
//         }
//     }
// }
// alert(func(2)(3)(4)(5)());

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let func = test();
// alert(func());


// function test() {
// 	let num1 = 1;
//	let num2 = 2;	
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// alert(test()());

// function test() {
// 	let num1 = 1;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let num2 = 2;
// let func = test();
// alert(func());


// function test() {
// 	let num = 1;
// 	return function() {
// 		return num;
// 	}
// }
// let num = 2;
// let func = test();
// alert(func());

// function test(){
//     let num = 1;
//     return function(){
//         console.log(num);
//         num++;
//     }
// }
// let func = test();
// func();
// func();

// function test(){
//     let num = 10;
//     return function(){
//         console.log(num);
//         num--;
//     }
// }
// let func = test();
// func();
// func();
// func();

// function test(){
//     let num = 10;
//     return function(){
//         if(num < 0){
//             return console.log('Отсчет окончен');
//         }
//         console.log(num);
//         num--;   
//     }
// }
// let func = test();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();

// function func() {
// 	let num = 0;
	
// 	return function() {
// 		alert(num);
// 		num++;
// 	};
// };

// func()();
// func()();
// func()()



// function func() {
// 	let num = 0;
	
// 	return function() {
// 		alert(num);
// 		num++;
// 	};
// };

// let test = func;

// test()();
// test()();
// test()();


// let counter = 0;
		
// function test() {
// 	return function() {
// 		alert(counter);
// 		counter++;
// 	};
// };

// let func = test;

// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();



// function test() {
// 	let counter = 0;
	
// 	return function() {
// 		return function() {
// 			alert(counter);
// 			counter++;
// 		};
// 	};
// };

// let func = test()();

// let func1 = func;
// let func2 = func;
// func1();
// func2();
// func1();
// func2();



// function test() {
// 	let counter = 0;
	
// 	return function() {
// 		return function() {
// 			alert(counter);
// 			counter++;
// 		};
// 	};
// };

// let func = test();

// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();


// !function() {
// 	alert('!');
// }();


// function() {
// 	alert('!');
// }();

// let result = function() {
// 	return '!';
// }();
		
// alert(result);


// let result = function() {
// 	return '!';
// };
		
// alert(result);



// let result = function() {
// 	return '!';
// };
		
// alert(result());


// let result = function() {return 1;}() + function() {return 2;}();
// alert(result);


// let result = (function() {
// 	return '!';
// }());

// alert(result);


// let result = (function() {
// 	return '!';
// })();

// alert(result);


// let result = (function() {
// 	return '!';
// });

// alert(result);


// let result = (function() {
// 	return '!';
// });

// alert(result());



// (function(num1, num2) {
// 	alert(num1 + num2);
// })(1, 2);


// (function() {
// 	return function(){
//         return function (num){
//             alert(num);
//         }
//     }
// })()()('!');


// (function(num1) {
// 	return function(num2){
//         alert(num1 + num2);
//     }
// })(1)(2);


// (function(num1) {
// 	return function(num2){
//         return function(num3){
//             alert(num1 + num2 + num3);
//         }
//     }
// })(1)(2)(3);

// let str = 'str';

// (function() {
// 	alert(1);
// })();

// let str = 'str'

// (function() {
// 	alert(1);
// })();


// let func = (function (){
//     let num = 0;
//     return function(){
//         if(num > 5){
//             num = 0;
//         }
//         console.log(num);
//         num++;
//     }
// })();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();



// function each(arr, callback) {
// 	let result = [];
	
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
	
// 	return result;
// }
// let res = each([1,2,3,4,5], function(num){
//     return num * num;
// });
// console.log(res);



// function each(arr, callback) {
// 	let result = [];
	
// 	for (let elem of arr) {
// 		result.unshift( callback(elem) ); // вызываем функцию-коллбэк
// 	}
	
// 	return result;
// }

// let res = each(['1','2','3','4'], function(num){
//     return num;
// });
// console.log(res);


// function each(arr, callback) {
// 	let result = [];
	
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
	
// 	return result;
// }

// let res = each(['aaa','bbb','vvv','fff'], function(str){
//     return str.slice(0,1).toUpperCase() + str.slice(1);
// });
// console.log(res);


// function each(arr, callback) {
// 	let result = [];
	
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
	
// 	return result;
// }
// function cube(num) {
// 	return num ** 3;
// }



// function each(arr, callback) {
// 	let result = [];
	
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
	
// 	return result;
// }
// let result = each([1, 2, 3, 4, 5], elem => elem > 0);
// console.log(result);




// function each(arr, callback) {
// 	let result = [];
	
// 	for (let i = 0; i < arr.length; i++) {
// 		result.push( callback( arr[i], i) ); // вызываем функцию-коллбэк
// 	}
// 	return result;
// }

// let result = each([1, 2, 3, 4, 5], (elem,index) => elem * index > 10);
// console.log(result);



// function each(arr, callback) {
// 	let result = [];
	
// 	for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             result.push( callback( arr[i][j], j) );
//         }

// 	}
	
// 	return result;
// }
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = each(arr, (elem,index) => elem * index > 10);
// console.log(result);




// let arr = [1, 2, 3, 4, 5];
// function func(arr){
//     console.log(arr.shift());
//     if(arr.length != 0){
//         func(arr);
//     }
// }
// func(arr);

// let arr = [1, 2, 3, 4, 5];
// function getSquare(arr){
//     let num = arr.shift();
//     let res = num * num;
//     if(arr.length !== 0){
//         res += getSquare(arr);
//     }
//     return res;
// }
// console.log(getSquare(arr));


// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			console.log(elem);
// 		}
// 	}
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);


// function func(obj){
//     for(let elem in obj){
//         if (typeof elem == 'object') {
//             func(elem);
//         } else {
//             console.log(elem);
//         }
//     }
// }
// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});



// let res = [];
// function func(arr) {
//     for(let i = 0;i <arr.length;i++){
//         if (typeof arr[i] == 'object') {
//             func(arr[i]);
            
//         } else {
//             console.log(arr[i]);
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

// function func(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			sum += func(elem);
// 		} else {
// 			sum += elem;
// 		}
// 	}
	
// 	return sum;
// }

// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));


// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
// function sumOfElemOfObj(obj) {
// 	let sum = 0;
// 	for (let elem in obj) {
// 		if (typeof obj[elem] == 'object') {
// 			sum += sumOfElemOfObj(obj[elem]);
// 		} else {
// 			sum += obj[elem];
// 		}
// 	}
// 	return sum;
// }
// console.log(sumOfElemOfObj(obj));


// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
// function sumOfElemOfObj(obj){
// let sum = 0;
// for (let key in obj){
// if (typeof obj[key] == 'object'){
// sum += sumOfElemOfObj(obj[key]);
// } else { 
//     sum += obj[key];
// }
// }
// return sum;
// }
// console.log(sumOfElemOfObj(obj));


// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// function sumOfElemOfArr(arr) {
// 	let sum = '';
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			sum += sumOfElemOfArr(elem);
// 		} else {
// 			sum += elem;
// 		}
// 	}
// 	return sum;
// }
// console.log(sumOfElemOfArr(arr));


// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
// function sqrtOfElem(arr){
// for(let i = 0; i < arr.length; i++){
// if(typeof arr[i] == 'object'){
// sqrtOfElem(arr[i]);
// }else{arr[i] = arr[i] ** 2;}
// }return arr;
// }

// console.log(sqrtOfElem(arr));