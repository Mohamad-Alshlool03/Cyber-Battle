const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const usersFile = path.join(__dirname, '../data/users.json');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(usersFile));

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;