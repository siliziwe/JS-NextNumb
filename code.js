// const arr = [5, 10, 15, 20, 25];

// function formula(n){ return n+1; }
// var sequence = [5, 10, 15, 20, 25];
// var i=0;
// function findNextNumber() {
//     for (; i<10; i++) {
//         var x = formula(i);
//         if (sequence[i] != x) {
//             sequence.splice(i, 0, x); // insert x here
//             sequence.length = 30; // chop of rest
//             return x;
//         }
//     }
//     // else
//     return null/undefined/whatever;
// }


// function findNextNumber(numArry) {
//     var number = 1;
//     var tempArray = new Array();
//     for (i = 0; i < 10; i++) {
//         tempArray[i] = "E";
//     }
//     $.each(numArry, function () {
//         if (this != 0) {
//             tempArray[this] = "F"
//         }
//     });
//     $.each(tempArray, function (index) {
//         if (this == "E") {
//             number = index + 1;
//             return false;
//         }
//     });
//     return number;
// }



let array = [1,2,3,4,5,6];
const iterator = array.values();
let one = iterator.next().value;
let two = iterator.next().value;
let three = iterator.next().value;
let four = iterator.next().value;
let five = iterator.next().value;
document.querySelector('#array').innerHTML = array;
document.querySelector('#arr1').innerHTML = one;
document.querySelector('#arr2').innerHTML = two;
document.querySelector('#arr3').innerHTML = three;
document.querySelector('#arr4').innerHTML = four;
document.querySelector('#arr5').innerHTML = five;