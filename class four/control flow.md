# 1. Explain the difference between `if-else` statements and `switch` statements in JavaScript. When would you use each?

# 2. What is the ternary operator and how does it differ from traditional if-else statements?

### 1. Difference Between `if-else` and `switch` Statements in JavaScript

#### **if-else Statements:**

* Used for evaluating multiple conditions that may involve comparisons, ranges, or logical operations.
* More flexible, as it allows for complex condition expressions.
* Can handle various data types and logical operators.
* Genarally better in my opinion

#### **switch Statements:**

* Used for checking a single variable or expression against several possible  values.
* More readable than multiple `if-else if` chains when comparing against fixed values.
* Only supports strict equality checks (`===`) for each case.

#### **When to Use:**

* Use `if-else` when the logic is complex, involves ranges, or multiple conditions.
* Use `switch` when you're evaluating a single value against multiple known, discrete options.

---

### 2. What is the Ternary Operator?

* The ternary operator is a way to write simple conditional expressions.
* It evaluates a condition and returns one of two values based on whether the condition is true or false.
* It differs from `if-else` by being shorter and used mainly for assigning values or simple expressions.
* Best for simple, quick decisions; not suitable for complex logic or multiple conditions.