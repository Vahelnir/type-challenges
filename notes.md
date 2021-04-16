296-medium-permutation:
I had issues understanding how to create an Tuple out of an Union, but once i figured how to do it, it was straightforward.

527-medium-append-to-object:
I did not think we could use Unions with the `in` keyword.
At first I tried to check that K was U `K extends U ? V : T[K]` but Typescript does not understand that K can not be U anymore in the else part, so I had to change the condition into `K extends keyof T ? T[K] : V`.
