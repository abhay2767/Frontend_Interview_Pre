// Time complexity
/* It is used to measure efficiency of algorithm in terms of speed, as the input size grow
        Time Complexity !== Time Taken
  Time Complexity:- 
    Speed Efficiency => when program is grow

    Big O Notation :- Represent worst case time complexity of Alogorithm.
    Linear Search time complexity => O(n)
    Binary Search time complexity => O(log n)
    => Efficiency:- O(log n) >> O(n)

   3=> 𝒪(𝑛2) => nested loop
        for(let i = 0; i < n; i++){
        n times
         form(let j = o; j < n; j++){
         n time
         }
        }
        n*n =>  𝒪(𝑛2)

    4=>  𝒪(n logn) => Merge sort
    for(let i = 0; i< n ; i++){
    // n times
    n/2 , 1/2, 1/2 ....n
    }
    𝒪(n * logn)

    5=>   𝒪(𝑛3) => nested loop
        for(let i = 0; i < n; i++){
        n times
         form(let j = o; j < n; j++){
         n time
         for(let k = 0 ; k< n; k++){
         n times
         }
         }
        }
        n*n*n =>  𝒪(𝑛3)

    6=>  𝒪(2n) Two ki power n
    7=>  𝒪(n!)
   Most Famouse Time Complexity => 𝒪(𝑛),𝒪(log 𝑛),𝒪(𝑛 log n),𝒪(𝑛2),
    𝒪(𝑛3), 𝒪(𝑛!)
  Constant Time complexity:- 𝒪(1)
       n = 10       so      x = 1
       n = 100      so      x = 1
       n = 1000     so      x = 1
       here x will not grow =>  𝒪(1)
       Example:- a = [10,2,13,11, 18, 23, 32, 45,32, 54,34]
       Question:- find the value at index of 5
       Answer:- a[5] => 23
       so here n can increase but solution will come in single step x =1


       1. Complexity Ranking from Best to WorstThe order of efficiency for these complexities, as the input size \(n\) scales toward infinity, is as follows:\(\mathcal{O}(1)<\mathcal{O}(\log n)<\mathcal{O}(n)<\mathcal{O}(n\log n)<\mathcal{O}(n^{2})<\mathcal{O}(n^{3})<\mathcal{O}(2^{n})<\mathcal{O}(n!)\)



      //  Space Complexity
      Example:- Find value at Given index arr = [10,23,14,32,34,21], a[5] = ?

      a[5] = 21
      Time Complexity = O(1)
      Space Complexity = O(1) because their is not extra Space

      Example:- Find Bigest Number in Arr = [12,32,45,22,45,65,32] 
      let max = Arr[0] This Variable is an Extra Space Complexity O(1)
      for(let i = 0; i < n; i ++){
      if(Arr[i] > max) ? max = Arr[i]
      }
      return max;

      Time Complexity = O(n)
 */

// Return Double of Value Array from Given Array

function makeDoubleOfArray(oldArr) {
    let newArr = [oldArr.length] /* Space Complexity => O(n) */
    for (let i = 0; i < oldArr.length; i++) {
        newArr[i] = oldArr[i] * 2
    }
    return newArr
    /* SO here Time Complexity => O(n) */
}

console.log("newArr:-", makeDoubleOfArray([10, 20, 30, 40, 50]))
