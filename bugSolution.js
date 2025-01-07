const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error'); // or a more user-friendly error message
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}