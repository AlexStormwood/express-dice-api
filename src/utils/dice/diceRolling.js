

function rollDice(sides, numberOfDice) {
  const results = [];
  for (let i = 0; i < numberOfDice; i++) {
	const roll = Math.floor(Math.random() * sides) + 1;
	results.push(roll);
  }
  return results;
}

var bananas = "bananas";

module.exports = {
	  rollDice,
    bananas
}