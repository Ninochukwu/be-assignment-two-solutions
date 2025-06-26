1. Explain the difference between ES6 modules and CommonJS modules.
2. What are the different ways to export functions and variables from a module?


### 1. **Difference between ES6 modules and CommonJS modules**

| Feature            | **ES6 Modules**                                     | **CommonJS Modules**                            |
| ------------------ | --------------------------------------------------- | ----------------------------------------------- |
| **Syntax**         | `import` / `export`                                 | `require()` / `module.exports`                  |
| **Loading**        | Static — imports are resolved at compile time       | Dynamic — modules loaded at runtime             |
| **Usage**          | Standard in modern JavaScript (browser & Node)      | Mainly used in Node.js                          |
| **Example import** | `import { foo } from './module.js';`                | `const foo = require('./module.js');`           |
| **Example export** | `export function foo() {}` or `export default foo;` | `module.exports = foo;` or `exports.foo = foo;` |

---

### 2. **Ways to export functions and variables**

#### In **ES6 Modules:**

* **Named exports**

```js
export function greet() {
  return "Hi!";
}

export const name = "Alice";
```

* **Default export** (only one per module)

```js
export default function greet() {
  return "Hi!";
}
```

---

#### In **CommonJS Modules:**

* **Export one item**

```js
module.exports = function greet() {
  return "Hi!";
};
```

* **Export multiple items**

```js
exports.greet = function() {
  return "Hi!";
};

exports.name = "Alice";

