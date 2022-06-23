// 01 - Nombre pairs

// let even = null
// for (i = 11; i < 47; i ++) {
//     if (i % 2 === 0) {
//         even = even + i
//     }
// }

// console.log (even)

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 02 - Nombre impairs

// let odd = null
// for (i = 109; i < 588; i ++) {
//     if (i % 2 !== 0) {
//         odd = odd + i
//     }
// }

// console.log (odd)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 03 - Puissance et racine carrée

// const numbers = [1, 2, 3, 4, 5]
// const squares = []
// const roots = []

// for (square = 0; square < numbers.length; square ++) {
//     squares.push ((numbers [square] ** 2))
// }

// for (root = 0; root < squares.length; root ++) {
//     roots.push (Math.sqrt(squares [root]))
// }
// console.log (numbers)
// console.log (squares)
// console.log (roots)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 04 - Table de multiplication

// for (i = 0; i <= 10; i ++) {
//     console.log (`3 x ${i} = ${i * 3}`)
// }


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 05 - Plusieurs tables de multiplication

// for (i = 0; i <= 10; i ++) {
//     console.log (`
//     Table de ${i}
//     `)
//     for (j = 0; j <= 10; j ++) {
//         console.log (`${i} x ${j} = ${i * j}`)
//     }
// }


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 06 - Factorielle v1

// const number = 10
// let factorial = 1

// for (i = 1; i <= number; i++) {
//     factorial *= i
// }

// console.log (`La factorielle de ${number} est ${factorial}`)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 07 - Factorielle v2

// let factorial = 1

// for (i = 0; i <= 8; i ++) {
//     for (j = 1; j < i; j ++) {
//     }

// factorial *= j
// console.log (`
// La factorielle de ${i} est ${factorial}`)
// }


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 08 - Sommes des carrés

// let sum = null
// for (i = 5; i <= 10; i ++) {
//     sum += (i * i)
// }
// console.log (sum)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 09 - Comptons

// let mutlipleof7 = []
// for (i = 100; i <= 1000; i ++) {
//     if (i % 7 === 0) {
//         mutlipleof7.push (i)
//     }    
// }
// console.log (mutlipleof7.length)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 10 - Chanceux

// let dice = null
// let sum = null
// for (i = 0; i < 20; i ++) {
//     dice = (Math.floor(Math.random()*6) + 1)
//     if (dice >= 5) {
//         sum += dice
//         // console.log (dice)
//     }
// }
// console.log(sum)


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 11 - Des boites

// hypothèse :
// box1 + box2 = 10

// box1 + box2 = 34

// box1 = 17
// box2 = 30
// i = 14


// var box1 = 12;
// var box2 = 5;

// for (var i = 12; i < 14; i++) {
//     box1 = box2;
//     console.log(box1 + box2);
//     box2 = box1 + i;
// }

// console.log(box1);
// console.log(box2);
// console.log(i);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 12 - D'autres boites

// hypothèse :
// box1 = 12
// box1 = 24
// box1 = 33
// box1 = 39

// box1 = 42
// i = 0


// var box1 = 12;

// for (var i = 12; i !== 0; i = i - 3) {
//     console.log(box1);
//     box1 = box1 + i;
// }

// console.log(box1);
// console.log(i);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 13 - Encore des boites

// // hypothèse :
// // i = 0 :
// //     box 1 + i = 0
// //     -> box 2 = 4

// // i = -1 :
// //     box 2 + i = 3
// //     -> box 1 = -1

// // i = -2 :
// //     box 1 + i = -3
// //     -> box 2 = 5

// // i = -3 :
// //     box 2 + i = 2
// //     -> box 1 = -2

// // i = -4
// //     sorti boucle

// // box 1 = -2
// // box 2 = 5
// // i = -4

// // donc : 0 3 -3 2 -2 5 -4 

// // var box1 = 0;
// // var box2 = 3;

// for (var i = 0; i > -4; i--) {
//     if (i % 2 === 0) {
//         console.log(box1 + i);
//         box2++;
//     } else {
//         console.log(box2 + i);
//         box1--;
//     }
// }

// console.log(box1);
// console.log(box2);
// console.log(i);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 14 - Amstrong Number

// let digits = null
// let digit = null
// let sum = null
// for (number = 1; number <= 1000; number ++) {
//     // console.log (number)
//     digits = number.toString().length
//     // console.log (digits)
//     for (d = 0; d < digits; d ++) {
//         digit = number.toString().charAt(d)
//         digit = parseInt (digit)
//         // console.log (digit)
//         // console.log (digits)
//         sum += (digit ** digits)
//         // console.log (sum)
//     }
    
//     if (number === sum) {
//         console.log (`${number} is an Armstrong number !`)
//     }

//     sum = null
// }


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 15 - Armstrong Number générique

let digits = null
let digit = null
let sum = null
for (number = 1; number <= 10000; number ++) {
    // console.log (number)
    digits = number.toString().length
    // console.log (digits)
    for (d = 0; d < digits; d ++) {
        digit = number.toString().charAt(d)
        digit = parseInt (digit)
        // console.log (digit)
        // console.log (digits)
        sum += (digit ** digits)
        // console.log (sum)
    }
    
    if (number === sum) {
        console.log (`${number} is an Armstrong number !`)
    }

    sum = null
}