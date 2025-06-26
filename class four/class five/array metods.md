1. Explain the difference between `forEach`, `map`, and `filter` array methods. Provide examples of when to use each.
2. What does the `reduce` method do and how would you use it to calculate the sum of an array?
3. Compare `some()` and `every()` methods. What do they return and when would you use each?


### 1. **`forEach` vs `map` vs `filter`**

* **`forEach`**: Runs a function for each item, but **doesn't return anything**. Use it to do things like print or update.

```js
[1, 2, 3].forEach(n => console.log(n)); // just prints 1, 2, 3
```

* **`map`**: Changes each item and **returns a new array**.

```js
const doubled = [1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

* **`filter`**: Keeps only items that pass a test, and **returns a new array**.

```js
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]
```

---

### 2. **`reduce`**

* Combines all items into one value.
* Example: sum all numbers.

```js
const sum = [1, 2, 3, 4].reduce((total, n) => total + n, 0); // 10
```

---

### 3. **`some` vs `every`**

* **`some`**: Returns `true` if **any** item passes the test.

```js
[1, 2, 3].some(n => n > 2); // true (3 is > 2)
```

* **`every`**: Returns `true` if **all** items pass the test.

```js
[2, 4, 6].every(n => n % 2 === 0); // true (all even)

