const fs = require('fs');
const path = require('path');

const networkFile = path.join(__dirname, '../data/gameState.json');

function getState() {
  return JSON.parse(fs.readFileSync(networkFile));
}

function saveState(data) {
  fs.writeFileSync(networkFile, JSON.stringify(data, null, 2));
}

module.exports = {
  getState,
  saveState
};
