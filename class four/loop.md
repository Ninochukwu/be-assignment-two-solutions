
# JavaScript Loop Structures

### 1. Comparison of `for`, `while`, and `do-while` Loops in JavaScript

#### **for Loop

* Used when the number of cycles is known or can be controlled with a counter.
* Includes an initializer, a condition, and an side effect in one line.
* Ideal for counting loops and iterating over arrays with known lengths.
* easier to use

#### **while Loop

* Used when the number of cycles is not known in advance.
* Only has a condition inside the parenthesis the initializer and increment are managed externally.
* Executes as long as the condition is true.
* Useful when waiting for a condition to become false.

#### **do-while Loop

* Similar to `while`, but then runs first before checking the condtions
* Best when the loop must run at least once regardless of the condition.


### 2. Purpose of break and continue Statements in Loops

#### **`break`**

* Immediately exits the current loop (or `switch` statement).
* Useful when a condition is met and continuing the loop is unnecessary or undesirable.

#### **`continue`**

* Skips the rest of the current iteration and moves to the next one.
* The loop does not exit but goes to the next cycle.
* Useful for skipping certain values or conditions without stopping the loop entirely.



### 3. Difference Between `for...in` and `for...of` Loops

#### **`for...in`**

* Iterates over the **enumerable properties (keys)** of an object.
* Primarily used for looping through **object properties**.
* Should be used with caution on arrays as it may return unexpected keys (including inherited properties).

#### **`for...of`**

* Iterates over the **values** of iterable objects like arrays, strings, maps, sets, etc.
* Does not work on plain objects unless they are made iterable.
* Ideal for working with **array elements** or other iterable data structures.