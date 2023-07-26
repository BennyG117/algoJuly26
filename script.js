/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
  //declare variable for tracking longest substring
  let longest = 0;
  //declare variable for current element/index/letter
  let current = 0;
  //declare variable map for a new object (mapping results into the object)
  let map = {};
  //for loop iterating through the string, starting at 0
  for (let i = 0; i < str.length; i++) {
    //if the current string element is undefined (checking if the current chartacter has been encountered before), then...
    if (map[str[i]] === undefined) {
      //map the string i element then..
      map[str[i]] = i;
      //continue iterating through loop
      current++;
      //else
    } else {
      //if current > longest the the longest becomes current
      if (current > longest) {
        longest = current;
      }
      // current becomes i - current map string
      current = i - map[str[i]];
      // resets the current substring without repeating the character
      map[str[i]] = i;
    }
    //if current > longest the the longest becomes current
    if (current > longest) {
      longest = current;
    }
  }
  //returning longest as the final resut
  return longest;
}
console.log(lengthOfLongestSubString(str1));
console.log("=========================\n");
console.log(lengthOfLongestSubString(str2));
console.log("=========================\n");
console.log(lengthOfLongestSubString(str3));
console.log("=========================\n");
console.log(lengthOfLongestSubString(str4));
console.log("=========================\n");

/***************************** ALT SOLUTION ********************************/
function lengthOfLongestSubString2(str) {
    
}

/*****************************************************************************/

/*****************************************************************************/
