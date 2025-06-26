1. Explain the concept of middleware in Express.js and how it works in the request-response cycle.
2. What is the purpose of using `cors`, `helmet`, and `compression` middleware?
3. How does Express.js handle different HTTP methods (GET, POST, PUT, DELETE)?


### **1. Concept of Middleware in Express.js and How It Works**

#### ✅ **What is Middleware?**

Middleware in Express.js is a **function that has access to the request (`req`), response (`res`), and the next middleware function (`next`)** in the application’s request-response cycle.



**Types of Middleware:**

* **Built-in** (e.g., `express.json()`)
* **Third-party** (e.g., `cors`, `helmet`)
* **Custom** (defined by you)

####  **How It Works in the Request-Response Cycle:**

Middleware functions are executed **in the order they are defined**. Each one can:

* Modify `req` or `res`
* End the request-response cycle
* Call `next()` to move to the next function



### **2. Purpose of `cors`, `helmet`, and `compression` Middleware**

#### ✅ `cors`

* **Purpose:** Enables **Cross-Origin Resource Sharing**.
* **Use Case:** Allows your API to be called from another domain (e.g., frontend at `example.com` accessing backend at `api.example.com`).
`

---

#### ✅ `helmet`

* **Purpose:** Sets **secure HTTP headers** to protect against well-known web vulnerabilities (like XSS, clickjacking, etc.).
* **Use Case:** Improves security by setting headers like `Content-Security-Policy`, `X-Content-Type-Options`, etc.

---

#### ✅ `compression`

* **Purpose:** Compresses response bodies using **Gzip** or **Brotli**.
* **Use Case:** Reduces the size of the response body to improve speed and bandwidth usage.


---

### **3. How Express.js Handles Different HTTP Methods**

Express provides methods for each HTTP verb:

| HTTP Method | Express Function | Purpose               |
| ----------- | ---------------- | --------------------- |
| GET         | `app.get()`      | Retrieve data         |
| POST        | `app.post()`     | Submit or create data |
| PUT         | `app.put()`      | Update existing data  |
| DELETE      | `app.delete()`   | Remove data           |


