/*
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7] 
*/

function sumPairs(ints, s) {
    //Make a empty array for the results
    let result = []
    //Make a array for all the correct answers
    let allAnswers = []
    //Make a loop to look for all the two number that are correct
    for(let i = 0; i < ints.length; i++){
        for(let g = 1; g < ints.length && g > i; g++){
            //if stagment for all check the add
            if(ints[i] + ints[g] === s){
                allAnswers.push(ints[i])
                allAnswers.push(ints[g])
            }
        }
    }
    //make a if stagment for get the awswers for with the smallest index.


    console.log(allAnswers)

  }

  sumPairs([1, 4, 8, 7, 3, 15], 8)
  sumPairs([1, -2, 3, 0, -6, 1], -6)
  sumPairs([20, -13, 40], -7)
  sumPairs([1, 2, 3, 4, 1, 0], 2)
  sumPairs([10, 5, 2, 3, 7, 5], 10)
  sumPairs([4, -2, 3, 3, 4], 8)
  sumPairs([0, 2, 0], 0)
  sumPairs([5, 9, 13, -3], 10)