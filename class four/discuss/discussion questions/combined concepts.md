1. How do JavaScript fundamentals (functions, objects, arrays) translate to building Express.js applications?
2. What role do modules play in organizing large Express.js applications?
3. How can you apply JavaScript's functional programming concepts when building Express.js APIs?



### **1. How JavaScript Fundamentals Translate to Express.js Applications**

#### ✅ **Functions**

* **Express routes and middleware are functions.**
* You write **route handlers**, **controllers**, and **middleware** using functions.

**Example:**

```js
function logRequest(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
app.use(logRequest);
```

* You also use **callbacks** and **arrow functions** everywhere.

#### ✅ **Objects**

* Objects are used for configuration, responses, and managing data.

**Example:**

```js
const user = {
  id: 1,
  name: 'Alice',
};

res.json(user); // Send object as JSON
```

* Request and response in Express (`req`, `res`) are objects, and you interact with their properties/methods all the time (`req.body`, `res.status()`).

#### ✅ **Arrays**

* Arrays are commonly used for storing lists (e.g., users, errors, middleware stack).

**Example:**

```js
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

res.json(users);
```

---

### **2. Role of Modules in Organizing Large Express.js Applications**

#### ✅ **Modules = Separated JavaScript Files**

* Modules help **split the application into manageable pieces**.
* Use `require` (CommonJS) or `import` (ES6) to load logic from other files.

#### ✅ **Why Use Modules?**

* **Separation of concerns** (routes, controllers, models, utils, etc.)
* **Reusability** (helper functions or services across files)
* **Maintainability** (easier debugging and scaling)

**Example:**

**`controllers/userController.js`**

```js
exports.getUsers = (req, res) => {
  res.send('Get users');
};
```

**`routes/userRoutes.js`**

```js
const express = require('express');
const { getUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers);

module.exports = router;
```

**`app.js`**

```js
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
```

---

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

```js
const authenticate = (req, res, next) => { /* check token */ next(); };
const authorize = (req, res, next) => { /* check role */ next(); };

router.get('/admin', authenticate, authorize, (req, res) => {
  res.send('Welcome admin');
});
```

**Example – Using `map` for Transformation:**

```js
const users = db.getUsers();
const userNames = users.map(user => user.name);
res.json(userNames);
```

---

### ✅ Summary

| Concept                    | Role in Express.js                                                   |
| -------------------------- | -------------------------------------------------------------------- |
| **Functions**              | Core of routes, controllers, and middleware                          |
| **Objects**                | Handle data and express-specific structures (`req`, `res`)           |
| **Arrays**                 | Manage data, iterate with `.map`, `.filter`, etc.                    |
| **Modules**                | Organize app logic by responsibility (routes, controllers, services) |
| **Functional Programming** | Encourages clean, composable, reusable code in routes and logic      |


