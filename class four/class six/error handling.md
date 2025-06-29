1. Explain the concept of error handling middleware in Express.js.
2. What is the purpose of the `catchAsync` wrapper function and how does it work?
3. How do you implement proper error responses in an Express.js API?


### **1. Error Handling Middleware in Express.js**

**Concept:**
Error handling middleware in Express.js is a special type of middleware used to **catch and process errors** that occur during the request-response cycle.



### **2. Purpose of the `catchAsync` Wrapper Function**

**Concept:**
`catchAsync` is a utility function used to **wrap async route handlers** so that any error they throw is automatically passed to the error handling middleware, avoiding repetitive `try/catch` blocks.

**Why it’s needed:**
Async functions that throw errors won’t be caught by Express by default. Without `catchAsync`, you'd have to manually catch and forward errors in every route.



### **3. Implementing Proper Error Responses in an Express.js API**

**Steps to do it properly:**

#### a. **Create a Custom Error Class**

```js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
```

#### b. **Use This Class in Your Routes**

```js
if (!user) {
  return next(new AppError('User not found', 404));
}
```

#### c. **Centralized Error Handling Middleware**

```js
app.use((err, req, res, next) => {
  // Set default values
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  res.status(statusCode).json({
    success: false,
    status: err.status || 'error',
    message: message,
  });
});
```

#### d. **Use `catchAsync` to Avoid Repetition**

```js
app.get('/user/:id', catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return next(new AppError('No user found', 404));
  res.status(200).json(user);
}));