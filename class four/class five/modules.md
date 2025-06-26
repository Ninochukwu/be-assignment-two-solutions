1. Explain the difference between ES6 modules and CommonJS modules.
2. What are the different ways to export functions and variables from a module?


### 1. **Difference between ES6 modules and CommonJS modules**


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

