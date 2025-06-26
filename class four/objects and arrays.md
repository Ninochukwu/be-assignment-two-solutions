1. How do you access object properties in JavaScript? Explain both dot notation and bracket notation.
2. What are the key differences between objects and arrays in JavaScript?
3. Explain how to iterate over object properties using different methods.



### **1. How do you access object properties in JavaScript?**

You can access object properties using **dot notation** or **bracket notation**.

#### **Dot Notation**:

* Syntax: `object.property`
* Used when the property name is a valid identifier (i.e., no spaces, special characters, or starting with a number).

```javascript
const person = { name: "Alice", age: 30 };
console.log(person.name); // Output: "Alice"
```

#### **Bracket Notation**:

* Syntax: `object["property"]`
* Required when:

  * The property name is stored in a variable.
  * The property name includes spaces or special characters.
  * The property name is not a valid identifier.

```javascript
const person = { name: "Alice", "home address": "123 Main St" };
console.log(person["home address"]); // Output: "123 Main St"

let key = "age";
console.log(person[key]); // Output: 30
```

---

### **2. What are the key differences between objects and arrays in JavaScript?**

| Feature           | **Objects**                                                      | **Arrays**                      |
| ----------------- | ---------------------------------------------------------------- | ------------------------------- |
| **Purpose**       | Store key-value pairs                                            | Store ordered list of elements  |
| **Indexing**      | Keys (usually strings or symbols)                                | Numeric indices (starting at 0) |
| **Order**         | Not guaranteed (although ES6+ keeps insertion order for strings) | Ordered by index                |
| **Syntax**        | `{ key: value }`                                                 | `[value1, value2, ...]`         |
| **Iteration**     | `for...in`, `Object.keys`, etc.                                  | `for`, `forEach`, `map`, etc.   |
| **Usage Example** | `let user = {name: "John", age: 25}`                             | `let numbers = [1, 2, 3, 4]`    |

---

### **3. Explain how to iterate over object properties using different methods.**

There are several ways to iterate over object properties:

#### **1. `for...in` loop**

Iterates over **enumerable** properties (including inherited ones).

```javascript
const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key, obj[key]);
}
```

#### **2. `Object.keys()`**

Returns an array of the object's **own** enumerable property names.

```javascript
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});
```

#### **3. `Object.values()`**

Returns an array of the object’s own enumerable **values**.

```javascript
Object.values(obj).forEach(value => {
  console.log(value);
});
```

#### **4. `Object.entries()`**

Returns an array of `[key, value]` pairs.

```javascript
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});
```

#### **5. `for...of` with `Object.entries()`**

Useful for more readable syntax with destructuring.

```javascript
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

