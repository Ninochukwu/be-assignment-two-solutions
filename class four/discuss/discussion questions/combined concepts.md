1. How do JavaScript fundamentals (functions, objects, arrays) translate to building Express.js applications?
2. What role do modules play in organizing large Express.js applications?
3. How can you apply JavaScript's functional programming concepts when building Express.js APIs?



### **1. How JavaScript Fundamentals Translate to Express.js Applications**

#### ✅ **Functions**

* **Express routes and middleware are functions.**
* You write **route handlers**, **controllers**, and **middleware** using functions.


* You also use **callbacks** and **arrow functions** everywhere.

#### ✅ **Objects**

* Objects are used for configuration, responses, and managing data.

#### ✅ **Arrays**

* Arrays are commonly used for storing lists (e.g., users, errors, middleware stack)

### **2. Role of Modules in Organizing Large Express.js Applications**

#### ✅ **Modules = Separated JavaScript Files**

* Modules help **split the application into manageable pieces**.


#### ✅ **Why Use Modules?**

* **Separation of concerns** (routes, controllers, models, utils, etc.)
* **Reusability** (helper functions or services across files)
* **Maintainability** 

### **3. Applying Functional Programming Concepts in Express.js**

JavaScript supports **functional programming (FP)**, and you can use FP techniques to write clean, modular Express code.

#### ✅ **Examples of FP in Express.js:**

| Concept                    | How to Apply in Express.js                    |
| -------------------------- | --------------------------------------------- |
| **Higher-order functions** | Middleware and `catchAsync` wrappers          |
| **Pure functions**         | Controller logic that only depends on input   |
| **Immutability**           | Avoid mutating request data directly          |
| **Composition**            | Combine multiple middlewares for request flow |
| **Map/filter/reduce**      | Transform data before responding to requests  |

**Example – Composing Middleware:**
