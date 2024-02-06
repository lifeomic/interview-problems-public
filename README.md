# Welcome!

## Getting Started

`yarn install` or `npm install` to get started

`yarn test` or `npm test` to ensure you're set up correctly

Feel free to use online resources

## Tree Height (Asynchronous)

### Overview

The goal of this exercise is to test your understanding of a simple tree
data structure and methods for traversing and analyzing trees.
To make the problem a little more challenging, the provided `TreeNode`
implementation provides only an asynchronous function for fetching
children of a `TreeNode`. The `getChildrenAsync()` of `TreeNode` returns
a promise that is resolved after a random time period.

### Instructions

This exercise will require you to implement the following files:

- `src/util/treeUtils.ts`: This class is used to traverse the tree node. The function should return an
  array of paths with each path starting from the root `TreeNode` and
  ending at the leaf `TreeNode`. NOTE: It is possible for a tree to
  have multiple paths of the same length.

- `src/api/controller.ts`: This class is used to provide an API endpoint for a user to submit a request with a treeNode in the body
  and receive a response back with the array of paths produced by `treeUtils.ts`

- `test/`: Implement the stub test cases
  and add more to verify the functionality of methods that you implemented.
- The expected response for the first two tests in tree.test.ts has already been provided. 
  These should be used to help understand the requirements and confirm your solution.
  You will need to implement the expected answers for test files 3 and 4.

If you find any errors in the provided code then please fix these errors
and add test cases to help us understand the change. If the instructions
are not clear then feel free to ask for clarification or make some assumptions but provide
documentation on why you made these assumptions.

While optimizing the solution is not the main focus, please feel
free to document any optimizations that you made or thought about
during the course of this exercise.

### Submitting

Once you have completed this programming exercise, commit your changes to the branch and push them up.
