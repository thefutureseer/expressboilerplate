const express = require('express');
const router = express.Router();

// GET request to retrieve data
router.get('/users', (req, res) => {
  // Logic to retrieve data from MongoDB
  // ...find()
  // Assuming you have retrieved the data from the database
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];

  res.json(users);
});

// POST request to create a new user
router.post('/users', (req, res) => {
  // Logic to create a new user in MongoDB
  // ...create()
  // Assuming you have created a new user and obtained the user object
  const newUser = { id: 4, name: 'Alice' };

  res.status(201).json(newUser);
});

// PUT request to update an existing user
router.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Logic to update the user with the given ID in MongoDB
  // ...findByIdAndUpdate()
  // Assuming you have updated the user and obtained the updated user object
  const updatedUser = { id: userId, name: 'Updated User' };

  res.json(updatedUser);
});

// DELETE request to delete a user
router.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Logic to delete the user with the given ID from MongoDB
  // ...findByIdAndUpdate()
  // Assuming you have deleted the user
  res.sendStatus(204);
});

module.exports = router;
