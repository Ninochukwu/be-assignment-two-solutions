. What is Express.js and what role does it play in Node.js web development?
2. Explain the basic structure of an Express.js application.
3. How do you create a simple GET route in Express.js?



### 1. **What is Express.js and its role in Node.js web development?**

* **Express.js** is a popular web framework for **Node.js**.
* It makes building web servers and APIs **easier and faster**.
* It handles routing, middleware, and HTTP requests so you don’t have to write all that from scratch.

---

### 2. **Basic structure of an Express.js application**

An Express app usually looks like this:

```js
const express = require('express');  // Import Express
const app = express();               // Create an app

// Define routes here (e.g., app.get, app.post)

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

### 3. **How to create a simple GET route in Express.js**

Example: a route that sends "Hello World" when you visit `/`.

```js
app.get('/', (req, res) => {
  res.send('Hello World');
});
```

* `app.get` defines a route that listens for GET requests.
* `'/'` is the URL path.
* `req` is the request object, `res` is the response object.
* `res.send` sends a response back to the browser.

