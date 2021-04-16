/*
  16 - Pop
  -------
  by Anthony Fu (@antfu) #medium #array
  
  ### Question
  
  > TypeScript 4.0 is recommended in this challenge
  
  Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.
  
  For example
  
  ```ts
  type arr1 = ['a', 'b', 'c', 'd']
  type arr2 = [3, 2, 1]
  
  type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2> // expected to be [3, 2]
  ```
  
  **Extra**: Similarly, can you implement `Shift`, `Push` and `Unshift` as well?
  
  > View on GitHub: https://tsch.js.org/16
*/

/* _____________ Your Code Here _____________ */

type Pop<T extends any[]> = T extends [...infer U, infer L] ? U : never;

// Bonuses
type Shift<T extends any[]> = T extends [infer U, ...infer L] ? L : never;
type Push<T extends any[], V extends any[]> = [...T, ...V];
type Unshift<T extends any[], V extends any[]> = [...V, ...T];

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type popCases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>
];

// Bonuses
type shiftCases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>
];

type pushCases = [
  Expect<Equal<Push<[5, 4, 3], [2, 1]>, [5, 4, 3, 2, 1]>>,
  Expect<
    Equal<
      Push<["a", "b", "c", "d"], ["e", "f", "g"]>,
      ["a", "b", "c", "d", "e", "f", "g"]
    >
  >
];

type unshiftCases = [
  Expect<Equal<Unshift<[3, 2, 1], [5, 4]>, [5, 4, 3, 2, 1]>>,
  Expect<
    Equal<
      Unshift<["e", "f", "g"], ["a", "b", "c", "d"]>,
      ["a", "b", "c", "d", "e", "f", "g"]
    >
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/16/answer
  > View solutions: https://tsch.js.org/16/solutions
  > More Challenges: https://tsch.js.org
*/
