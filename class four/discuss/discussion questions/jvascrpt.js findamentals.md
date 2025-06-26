1. How do JavaScript's control flow structures contribute to writing clean and maintainable code?
2. What are the advantages and disadvantages of using arrow functions versus traditional function declarations?
3. How do array methods like `map`, `filter`, and `reduce` promote functional programming principles?

### **1. How JavaScript's Control Flow Structures Contribute to Clean and Maintainable Code**

#### ✅ **Control Flow Structures Include:**

* `if / else`
* `switch`
* `for`, `while`, `do...while` loops
* `try / catch`
* `return`, `break`, `continue`

#### ✅ **How They Help:**

| Benefit                     | Description                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| **Clarity**                 | Helps define logical paths based on conditions (e.g., branching logic) clearly.                    |
| **Error Handling**          | `try/catch` structures make error recovery predictable and centralized.                            |
| **Avoids Code Duplication** | Smart control structures reduce redundant logic.                                                   |
| **Improves Readability**    | Consistent use of clear conditionals and loop logic helps other developers (and your future self). |

### **2. Arrow Functions vs Traditional Function Declarations**

#### ✅ **Arrow Functions** (`=>`)

**Advantages:**

* **Shorter syntax** – great for small, anonymous functions.
* **Lexical `this` binding** – doesn't change the `this` context.
* Ideal for callbacks and array methods.

**Disadvantages:**

* No `this`, `arguments`, `super`, or `new.target`.
* **Not suited for object methods or constructors.**

---

#### ✅ **Traditional Function Declarations**

**Advantages:**

* Has its own `this`, useful in objects, classes, and constructors.
* More flexible in complex logic and hoisting.
* Better for readability in larger applications.

**Disadvantages:**

* Longer syntax.
* Can confuse `this` context when used improperly.

---

#### ✅ When to Use What?

| Use Case                   | Preferred Function Type |
| -------------------------- | ----------------------- |
| Simple logic/callbacks     | Arrow functions         |
| Object/class methods       | Traditional functions   |
| Needing `this`/`arguments` | Traditional functions   |

---

### **3. How `map`, `filter`, and `reduce` Promote Functional Programming Principles**

#### ✅ **Functional Programming (FP) Core Ideas:**

* Pure functions (no side effects)
* Immutability
* Function chaining and composition
* Declarative over imperative code

