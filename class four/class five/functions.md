1. Explain the three different ways to declare functions in JavaScript: function declarations, function expressions, and arrow functions.
2. What are default parameters in functions and how do they work?
3. Explain the concept of rest parameters and provide an example of their use.



### 1. **Three ways to declare functions in JavaScript**

#### a) **Function Declaration**

* Traditional way.
* Function is **hoisted** (can be called before it’s defined).

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

#### b) **Function Expression**

* Function is stored in a variable.
* Not hoisted, so you can’t call it before the line it’s defined.

```js
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

#### c) **Arrow Function**

* Shorter syntax introduced in ES6.
* Does **not** have its own `this`.
* Often used for simple or anonymous functions.

```js
const greet = (name) => `Hello, ${name}!`;
```

---

### 2. **Default Parameters**

* Allow you to set default values for function parameters.
* If no argument is passed or `undefined` is passed, the default is used.

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

greet();       // "Hello, Guest!"
greet("Alice"); // "Hello, Alice!"
```

---

### 3. **Rest Parameters**

* Collects **all remaining arguments** into an array.
* Useful when you don’t know how many arguments will be passed.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3);       // 6
sum(4, 5, 6, 7, 8); // 30
```

* Here, `...numbers` gathers all arguments into an array called `numbers`.

