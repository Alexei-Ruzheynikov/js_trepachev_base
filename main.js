"use strict"

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// let arr = [];
// let res = [];
// for(let i = 1; i<= 100; i++){
//     arr.push(i);
//     if(isPrime(i) == true){
//         res.push(i);
//     }
// }
// console.log(arr);
// console.log(res);

// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
// 	return sum;
// }
// let res = [];
// for(let i = 1; i <= 2030; i++){
//     if(getDigitsSum(i) == 13){
//         res.push(i);
//     }
// }
// console.log(res);

// let nums = [123, 456, 789];
// function reverseDigits(num){
//     return String(num).split('').reverse().join('');
// }
// let result = [];
// for (let num of nums) {
// 	result.push(reverseDigits(num));
// }
// console.log(result);

// let num1 = 234;
// let num2 = 532;
// function digitsSumEquals(num){
//     let digits = String(num).split('');
//     let digitsSum = 0;
//         for (let digit of digits) {
//             digitsSum += Number(digit);
//         }
//         return digitsSum;
// }
// if (digitsSumEquals(num1) == digitsSumEquals(num2)) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }

// let nums = [12, 24, 35, 14, 10];
// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }
// function getDivisors(num) {
// 	let result = [];
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
// 	return result;
// }

// function getSum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
// 	return sum;
// }
// function getDigits(num) {
// 	return String(num).split('');
// }
// let num = 123465;
// console.log(getSum(getDigits(num)));

// console.log( getAvg(getDivisors(16)) );
// // Нахождение среднего арифметического:
// function getAvg(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum / arr.length;
// }
// // Нахождение массива делителей числа:
// function getDivisors(num) {
// 	let result = [];
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
//     console.log(result);
//     return result;
// }

// let arr = [10,43,55,73,80,97];
// let res = [];
// function inRange(num){
//     let sum = sumDigits(stringNum(num))
//     return sum >= 1 && sum <= 9;
// }
// function sumDigits(num){
//     let sum = 0;
//     for( let subArr of num){
//         sum += +subArr;
//     }
//     return sum;
// }
// function stringNum(num){
//     return String(num).split('');
// }

// for(let elem of arr){
//     if(inRange(elem)){
//         res.push(elem);
//     }
// }
// console.log(res);

// function isFreindly(num1, num2) {
// 	let sum1 = getSum(num1);
// 	let sum2 = getSum(num2);
// 	if (sum1 == num2 && sum2 == num1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// function getOwnDivisors(num) {
//     let arr = [];
//     for(let i = 1; i <num;i++){
//         if(num % i == 0) {
//             arr.push(i);
//         }
//     }
// 	return arr;
// }
// function getSum(num) {
// 	let arr = getOwnDivisors(num);
//     let sum = 0
//     for(let num of arr){
//         sum += num;
//     }
//     return sum;
// }
// console.log(getOwnDivisors(284));
// console.log(getOwnDivisors(220));
// console.log(getSum(284));
// console.log(getSum(220));
// console.log(isFreindly(220,284));






// /ПЛОХАЯ ПОПЫТКА
// // проверяет равна ли сумма делителей 1 числа - 2 числу и наоборот
// function getFreindly(num3){
//     let arr = arrRange(num3);
//     let res = [];
//     // console.log(arr);
//     for(let i = 0; i < arr.length; i++){
//         let sum1 = getSum(arr[i]);
//         console.log(sum1);
//         for(let j = ++i; j < arr.length; j++){
//             let sum2 = getSum(arr[j]);
//             console.log(sum2);

//             // Проверка что числа равны
//             if(sum1 == arr[j] && sum2 == arr[i]){
//                 res.push([arr[i], arr[j]]);

//             }
//         }
        
//     }
//     console.log( res);

//     // return res;
//     // let sum1 = getSum(num1);
// 	// let sum2 = getSum(num2);
//     // if (sum1 == num2 && sum2 == num1) {
// 	// 	return true;
// 	// } else {
// 	// 	return false;
// 	// }
//     // return res;
// }
// //создает массив делителей числа
// function getOwnDivisors(num) {
//     let arr = [];
//     for(let i = 1; i <num;i++){
//         if(num % i == 0) {
//             arr.push(i);
//         }
//     }
// 	return arr;
// }
// // суммирует делители одного числа
// function getSum(num) {
// 	let arr = getOwnDivisors(num);
//     let sum = 0
//     for(let num of arr){
//         sum += num;
//     }
//     return sum;
// }
// // создает массив от 1 до 3000
// function arrRange(num){
//     let res = [];
//     for (let i = 1; i <= num; i++){
//     res.push(i);
//     }
//     // console.log( res);
//     return res;
// }
// console.log(getFreindly(300));

// // 1)Создал массив чисел от 1 до 3000
// // 2) Есть функция - которая берет число и создает массив делителей числа
// // 3) Есть функция - которая суммирует делители одного числа
// // 4)





// // let arr = [];
// // arr.push([1,2]);
// // arr.push([3,4]);
// // console.log(arr);

// /ПЛОХАЯ ПОПЫТКА





// РАЗОБРАТЬ ЕЩЕ РАЗ

// function FriendNum(num){
//     let a = ArrSum(num);
//     let b = ArrSum(a);
//     if (b == num && num != a){
//     return a;
//     }else{ return false;
//     }
// }
    
// function ArrSum(num){
//     let arr = [];
//     let sum = 0;
//     for(let i = 1; i < num; i++){
//     if(num % i == 0){
//     arr.push(i);
//     }
//     }
//     for(let elem of arr) {
//     sum += elem;
//     } return sum;
//     }
    
// function getFriendly(startNum, endNum){
// let arr = [];
// let result = [];
//     for( let i = startNum; i <= endNum; i++){
//         if (FriendNum(i)){ arr[i] = [];
//         arr[i][0] = i;
//         arr[i][1] = FriendNum(i)
//         };
//     }
//     for(let elem of arr){
//         if(elem != undefined){
//         result.push(elem);
//         }
//     }
//     return result;
// }
    
//     console.log(getFriendly(1, 3000));

// РАЗОБРАТЬ ЕЩЕ РАЗ




// function sumDivisors(num){
//     let arr = [];
//     let sum = 0;
//     for(let i =1; i < num; i++){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// function getPerfect(num1,num2){
//     let res = [];
//     for(let i = num1; i<= num2;i++){
//         if( sumDivisors(i) == i){
//             res.push(i);
//         }
//     }
//     return res;
// }
// console.log(getPerfect(1,1000));

// function getInt(arr1, arr2){
//     let res = [];
//     for(let num of arr1){
//         if(inArray(num,arr2)){
//             res.push(num);
//         }
//     }
//     return res;
// }
// function inArray(num, arr){
// return arr.indexOf(num) !== -1;
// }
// console.log(getInt([1,2,3,4,5],[3,4,5,6,7]));


// function getDiff(arr1, arr2){
//     let diff1 = getFirstDiff(arr1, arr2);
//     let diff2 = getFirstDiff(arr2, arr1);
//     return [].concat(diff1,diff2);
// }
// function getFirstDiff(arr1, arr2){
//     let res = [];
//     for(let elem of arr1){
//         if(!inArray(elem, arr2)){
//             res.push(elem);
//         }
//     }
//     return res;
// }
// function inArray(num, arr){
//     return arr.indexOf(num) !== -1;
// }
// console.log(getDiff([1,2,3,4,5],[3,4,5,6,7]));

// function getGreatestCommonDivisor(num1, num2){
// let elem1 = numberDivisors(num1); 
// let elem2 = numberDivisors(num2); 
// let res = [];
//     for(let elem of elem1){
//         if(inArray(elem, elem2)){
//             res.push(elem);
//         }
//     }
//     return res;
//     // return Math.max.apply(null, res);
// }

// function inArray(num,arr){
//     return arr.indexOf(num) != -1;
// }

// function numberDivisors(num){
//     let res = [];
//     for(let i = 1; i < num; i++){
//         if(num % i == 0){
//             res.push(i);
//         }
//     }
//     return res;
// }
// console.log(numberDivisors(44));
// console.log(numberDivisors(24));
// console.log(getGreatestCommonDivisor(44,24));




// function getGreatestCommonDivisor(num1, num2){
// let elem1 = numberDivisors(num1); 
// let elem2 = numberDivisors(num2); 
// let res = [];
//     for(let elem of elem1){
//         if(inArray(elem, elem2)){
//             res.push(elem);
//         }
        
//     }
//         return res.length == 1;
// }

// function inArray(num,arr){
//     return arr.indexOf(num) != -1;
// }

// function numberDivisors(num){
//     let res = [];
//     for(let i = 1; i < num; i++){
//         if(num % i == 0){
//             res.push(i);
//         }
//     }
//     return res;
// }
// console.log(numberDivisors(13));
// console.log(numberDivisors(16));
// console.log(getGreatestCommonDivisor(13, 16));



// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function random(arr){
//     return arr[getRandomInt(0, arr.length-1)];
// }
// console.log(random([4,5,6,7]));



// function sumThreeRandomNumbers(arr){
//     let sum = 0;
//     for(let i =0; i <3;i++){
//         sum+=random(arr);
//     }
//     return sum;
// }
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function random(arr){
//     return arr[getRandomInt(0, arr.length-1)];
// }
// console.log(sumThreeRandomNumbers([4,5,6,7,8,9]));


// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function shuffle(arr){
//     let res = [];
//     while(arr.length > 0){
//         let random = getRandomInt(0, arr.length - 1);
//         let elem = arr.splice(random, 1)[0];
//         res.push(elem);
//     }
//     return res;
// }
// console.log(shuffle([1,2,3,4,5]));


// function range(num1, num2){
//     let res = [];
//     for(let i = num1; i <= num2; i++){
//         res.push(i);
//     }
//     return res;
// }
// console.log(range(4,8));



// function rangeRand(num1, num2){
//     let res = [];
//     for(let i = num1; i <= num2; i++){
//         if(getRandomInt(0,1) == 1){
//             res.push(i);
//         }
        
//     }
//     return res;
// }
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(rangeRand(1,10));


// function randoms(arr,length){
//     return first(shuffle(arr), length);
// }
// function first(arr, length){
//     return arr.slice(0,length);
// }
// function shuffle(arr) {
// 	let result = [];
	
// 	while (arr.length > 0) {
// 		let random = getRandomInt(0, arr.length - 1);
// 		let elem = arr.splice(random, 1)[0];
// 		result.push(elem);
// 	}
	
// 	return result;
// }

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log( randoms([1, 2, 3, 4, 5], 3) );

// console.log(isPrime(24)); // должен вывести true
// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
//             return false;
// 		}
// 	}
//     return true;
// }

// let res = isFriendly(220, 284);
// console.log(res); // должен вывести true
// function isFriendly(num1, num2) {
// 	let sum1 = getSum(getOwnDivisors(num1));
// 	let sum2 = getSum(getOwnDivisors(num2));
// 	if (sum1 == num2 && sum2 == num1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// function getOwnDivisors(num) {
// 	let res = [];
	
// 	for (let i = 1; i < num; i++) {
// 		if (num % i === 0) {
// 			res.push(i);
// 		}
// 	}
//     return res;
// }
// function getSum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }







// function normulizeNum(num){

//     let str = String(num);
//     if(str.length == 5){
//         str = '0' + str;
//     }
//     if(str.length == 4){
//         str = '00' + str;
//     }
//     return str;
// }

// function isLucky(num){
// let str = normulizeNum(num);

// let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

// return sum1 == sum2;
// }
// function getLuckyTickets(){
//     let res = [];
//     for(let i = 1001; i <=999999; i++){
//         if(isLucky(i)){
//             res.push(i);
//         }
//     }
//     return res;
// }
// console.log(getLuckyTickets());








// function normulizeNum(num){
//     let str = String(num);
//     if(str.length == 5){
//         str = '0' + str;
//     }
//     if(str.length == 4){
//         str = '00' + str;
//     }
//     return str;
// }

// function isLucky(num){
//     let str = normulizeNum(num);
//     let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
//     let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
//     return sum1 == sum2;
// }
// function getLuckyNum(){
//     let res = [];
//     for(let i = 1001; i <=999999; i++){
//         if(isLucky(i)){
//             res.push(i);
//         }
//     }
//     return res;
// }
// console.log(getLuckyNum());



// СЛОЖНАЯ ЗАДАЧА 127
// function formStr(data, length){
//     let res = '';
//     for(let i = 0; i< length;i++){
//         res += data;
//     }
//     return res;
// }
// function normalizeNum(num, digitsAmount) {
// 	let str = String(num);
// 	return formStr('0', digitsAmount - str.length) + str;
// }
// function isLucky(num) {
// 	let str = normalizeNum(num);
	
// 	let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// 	let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
	
// 	return sum1 == sum2;
// }

// function getLast(data, length){
//     let res = '';
//     for(let i = 0; i< length;i++){
//         res += data;
//     }
//     return res;
// }
// function getFirst(digitsAmount){
//     let res = 0;
//     if(digitsAmount == 4){
//         res = 101;
//     }
//     if(digitsAmount == 6){
//         res = 1001;
//     }
//     if(digitsAmount == 8){
//         res = 10001;
//     }
//     if(digitsAmount == 10){
//         res = 100001;
//     }
//     return res;
// }

// function getLuckyTickets(digitsAmount) {
// 	let result = [];
// 	let last = Number(getLast(9, digitsAmount));
// 	let first = Number(getFirst(digitsAmount));
// 	for (let i = first; i <= last; i++) {
// 		let ticket = normalizeNum(i, digitsAmount);
	
//         if (isLucky(ticket)) {
//             result.push(ticket); 
//         }
// 	}
// 	return result;
// }
// console.log(getLuckyTickets(6));

// /СЛОЖНАЯ ЗАДАЧА 127