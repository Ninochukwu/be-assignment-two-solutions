1. Create a function that uses rest parameters to calculate the average of any number of values.
2. Write an array method chain that filters even numbers, doubles them, and then sums the result.
3. Create a simple Express.js server with two routes: one that returns "Hello World" and another that returns the current date.





### ** 1. Function Using Rest Parameters to Calculate Average **

    ```js
function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Example usage:
console.log(calculateAverage(4, 8, 15, 16, 23, 42)); // Output: 18
```

✅ ** Rest parameters ** (`...numbers`) allow you to pass any number of arguments into the function as an array.

---

### ** 2. Array Method Chain: Filter Even Numbers → Double → Sum **

    ```js
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(num => num % 2 === 0)       // Filter even numbers: [2, 4, 6]
  .map(num => num * 2)                // Double them: [4, 8, 12]
  .reduce((sum, num) => sum + num, 0); // Sum: 24

console.log(result); // Output: 24
```

✅ This showcases ** functional programming ** using method chaining.

---

### ** 3. Simple Express.js Server with Two Routes **

    ```js
const express = require('express');
const app = express();
const PORT = 3000;

// Route 1: Hello World
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route 2: Current Date
app.get('/date', (req, res) => {
  const currentDate = new Date().toISOString();
  res.send(`Current Date & Time: ${ currentDate } `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

✅ To run this:

1. Make sure you have **Node.js** installed.
2. Save the code to `server.js`.
3. Run it with:

   ```bash
   node server.js
    ```
4. Visit `http://localhost:3000/` and `http://localhost:3000/date`.

---

    Let me know if you'd like to:

        * Add query parameters
            * Return JSON instead of text
                * Use these examples in a project structure!
