const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const db = path.join(__dirname, '../data/gameState.json');

router.get('/score', (req, res) => {
  const data = JSON.parse(fs.readFileSync(db));
  res.json(data);
});

module.exports = router;