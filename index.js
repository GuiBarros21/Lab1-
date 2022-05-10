import "./functions";


var r = mySum(67, 8, 90, 23);
console.log(r);

var arr = [10, 23, 30, 31, 32, 33, 34, 35, 36];

var r= mySum (...arr);

console.log(r);

var myArr = [10, 23, 30, 31, 32, 33, 34, 35];

var mySecondArray = myArr.map(x => x*2);
console.log(mySecondArray);


const myTimeout = setTimeout("Good bye", 3000);
console.log(myTimeout);



