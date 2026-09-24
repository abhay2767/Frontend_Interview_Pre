// StartPattern.js
/*  1:- Print Pattern
 ****
 ****
 ****
 ****
  */
// let n = 4;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//         row = row + "*"
//     }
//     console.log(row)
// }

/*  2:- Print Pattern
 *
 **
 ***
 ****
  */
// let m = 4;
// for (let i = 0; i < m; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//         row = row + "*"

//     }
//     console.log(row)
// }

/*  3:- Print Pattern
 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5
  */

// let n = 5;
// for (let i = 0; i < n; i++){
//   let row = " "
//   for (let j = 0; j <= i; j++){
//     row = row + (j+1)
//   }
//   console.log(row)
// }

/*  4:- Print Pattern
 1
 2 2
 3 3 3
 4 4 4 4
 5 5 5 5 5
  */

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = " "
//   for (let j = 0; j <= i; j++) {
//     row = row + (i + 1)
//   }
//   console.log(row)
// }

/*  5:- Print Pattern
  1 1 1 1 1
  2 2 2 2
  3 3 3
  4 4
  5
  */

// let n = 5;
// for (let i = 1; i <= n; i++){
//   let row = " ";
//   for (let j = 0; j <= (n - i); j++){
//     row = row + i;
//   }
//   console.log(row)
// }

/*  6:- Print Pattern
 1 2 3 4 5
 1 2 3 4
 1 2 3
 1 2
 1
  */

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let row = " ";
//   for (let j = 1; j <= (n - i); j++) {
//     row = row + j;
//   }
//   console.log(row)
// }

/*  7:- Print Pattern
 * * * * *
 * * * *
 * * *
 **
 *
  */

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < (n - i); j++) {
//     row = row + "*";
//   }
//   console.log(row)
// }

/*  8:- Print Pattern
         *
       * *
     * * *
   * * * *
 * * * * *
  */
// UnderStand Empty Space as 0
/*
0 0 0 0 *
0 0 0 * *
0 0 * * *
0 * * * *
* * * * *
 */

// let n = 5;
// for (let i = 0; i < n; i++){
//   let row = ""
//   for (let j = 0; j < n - (i + 1); j++){
//     row  = row + " "
//   }
//   for (let k = 0; k < (i + 1); k++){
//     row = row + "*"
//   }
//   console.log(row)
// }

/*  9:- Print Pattern
 1
 1 0
 1 0 1
 1 0 1 0
 1 0 1 0 1
 1 0 1 0 1 0
  */

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "", swift = 1
//   for (let j = 0; j <= i; j++) {
//     row = row + swift
//     // switch the swift variable
//     if (swift == 1) {
//       swift = 0
//     } else {
//       swift = 1
//     }
//   }
//   console.log(row)
// }

/*  10:- Print Pattern
 1
 0 1
 0 1 0
 1 0 1 0
 1 0 1 0 1
  */
// let n = 5;
// let swift = 1;

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + swift
//     // switch the swift variable
//     if (swift == 1) {
//       swift = 0
//     } else {
//       swift = 1
//     }
//   }
//   console.log(row)
// }