const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const db = path.join(__dirname, '../data/gameState.json');

function readDB() {
  return JSON.parse(fs.readFileSync(db));
}

function writeDB(data) {
  fs.writeFileSync(db, JSON.stringify(data, null, 2));
}

/* DEFENSE */
router.post('/defense', (req, res) => {
  const { team, newPassword } = req.body;
  const data = readDB();

  data[team].network.password = newPassword;
  data[team].score.defense += 1;

  writeDB(data);
  res.json({ message: "🛡️ Password updated. Defense +1" });
});

/* ATTACK */
router.post('/attack', (req, res) => {
  const { team, password } = req.body;
  const enemy = team === "teamA" ? "teamB" : "teamA";
  const data = readDB();

  if (password === data[enemy].network.password) {
    data[team].score.attack += 1;
    writeDB(data);
    res.json({ success: true, message: "🔥 Attack Success +1" });
  } else {
    data[enemy].score.defense += 1;
    writeDB(data);
    res.json({ success: false, message: "❌ Attack Failed, Enemy Defense +1" });
  }
});

module.exports = router;
