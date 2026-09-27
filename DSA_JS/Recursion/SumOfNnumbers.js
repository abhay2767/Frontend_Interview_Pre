/* sum of first N Numbers:- 
                 CALLING DOWN
                 ↓

sumOfNumbers(5)
      ↓
5 + sumOfNumbers(4)
      ↓
5 + 4 + sumOfNumbers(3)
          ↓
5 + 4 + 3 + sumOfNumbers(2)
              ↓
5 + 4 + 3 + 2 + sumOfNumbers(1)
                  ↓
5 + 4 + 3 + 2 + 1 + sumOfNumbers(0)
                      ↓
                     0
                      ↑
                 BASE CASE


                 RETURNING UP
                      ↑

sumOfNumbers(0) = 0
sumOfNumbers(1) = 1 + 0 = 1
sumOfNumbers(2) = 2 + 1 = 3
sumOfNumbers(3) = 3 + 3 = 6
sumOfNumbers(4) = 4 + 6 = 10
sumOfNumbers(5) = 5 + 10 = 15 */

/* 
5 + sumOfNumbers(4)
       ↓
    4 + sumOfNumbers(3)
           ↓
        3 + sumOfNumbers(2)
               ↓
            2 + sumOfNumbers(1)
                   ↓
                1 + sumOfNumbers(0)
                       ↓
                       0 
                 BASE CASE

                      ↑
                      
                 RETURNING UP 
 
    sumOfNumbers(5) = 5 + sumOfNumbers(4)
                       = 5 + (4 + sumOfNumbers(3))
                       = 5 + (4 + (3 + sumOfNumbers(2)))
                       = 5 + (4 + (3 + (2 + sumOfNumbers(1))))
                       = 5 + (4 + (3 + (2 + (1 + sumOfNumbers(0)))))
                       = 5 + (4 + (3 + (2 + (1 + 0))))
                       = 5 + (4 + (3 + (2 + 1)))
                       = 5 + (4 + (3 + 3))
                       = 5 + (4 + 6)
                       = 5 + 10
                       = 15 


*/

/* 
0
↑
1 + 0 = 1
↑
2 + 1 = 3
↑
3 + 3 = 6
↑
4 + 6 = 10
↑
5 + 10 = 15 
*/

function sumOfNumbers(n) {
    if (n === 0) {
        return 0
    }

    return n + sumOfNumbers(n - 1)
}
console.log(sumOfNumbers(5))