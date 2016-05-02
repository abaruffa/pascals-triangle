# pascals-triangle

Usage:

    pascals-triangle <n> [method]

This is a simple node module demonstrating multiple solutions to a common interview question.

The first solution uses recursion to calculate the rows of pascal's triangle from 1 to n and print each row followed by the time taken by the algorithm to produce the result. This is a standard answer and can help to determine a candidate's ability to produce code and talk about how they work through solutions to problems with the interviewer. It also can be programming language agnostic.

The second solution uses memoization. It is good for a candidate to know how to improve upon performance. This judges their ability to implement memoization. The solution here prints out the rows as the first solution and the time it took to run. This shows how much of an improvement memoization is over recursion when using large numbers, while calling the function the same amount of times.
