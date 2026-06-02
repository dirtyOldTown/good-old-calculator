# Old Calculator Simulation 

## Intro 
I present a calculator simulation project, which would
should function according to the principle of some mathematical calculation
expressions in the same or similar way as calculated in the notebook, ie when 
we solve the task manually. In the sense that if, for example, we solve a simple one
task: 1 + log(100) * sin(3) + (2 * 6), in the upper part of the calculator
would stand for this expression as a whole and clicking '=' gives the result. So, no
would, like some other calculator applications, have direct calculations etc.

## Features of the calculator

### Preventing errors when entering expressions

- preventing the entry of an irregular number
  eg: 00, 04, 7.77.77, 0.&pi;, 34.e, &pi;.e, e.34
- preventing duplication of operators
  eg: /+/, -+, /*- 
- prevention of irregular operator inside the bracket and around the bracket
  eg: (+7*7*), (./7-7+), (55 * 7/), (5 + 8).7, 6.(5 + 7)
- preventing the addition of extra parentheses
  eg: (7 - 8)), ( 4 * (3 + 7)))

### Facilitating input when typing quickly

- adding a multiplication sign in certain cases
  for example if you enter 6&pi;(2 + 7)9e, you get directly 6 * &pi; * (2 + 7) * 9 * e
- adding a left parenthesis immediately after entering a complex operator
  eg:- if sin, log, cos is entered, sin(, cos(, log(
  therefore, it is understood that after entering the expression after these complex
  operator should close the opening parenthesis

PS. There is a function that ensures that there can be no extra (right) parenthesis, so it is 
for more complex expressions, it is enough to enter the right parenthesis arbitrarily and the process will stop 
if you try to enter an unnecessary parenthesis, and therefore an incorrect expression.

### Video examples
- [video-exp1](https://dirtyoldtown.github.io/good-old-calculator/video/videoexp.mp4)
- [video-exp2](https://dirtyoldtown.github.io/good-old-calculator/video/videoexp2.mp4)
