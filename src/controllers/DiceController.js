
const { rollDice } = require("../utils/dice/diceRolling");
const router = require("express").Router();
const { bananas } = require("../utils/dice/diceRolling");

/**
 * GET /dice/{sides}/{numberOfDice}
 * @summary Roll a specified number of dice with a specified number of sides
 * @param {number} sides.path.required - Number of sides on each die
 * @param {number} numberOfDice.path.required - Number of dice to roll
 * @return {object} 200 - Dice roll results
 */
router.get("/:sides/:numberOfDice", (request, response) => {
  const sides = parseInt(request.params.sides, 10);
  const numberOfDice = parseInt(request.params.numberOfDice, 10);
  const results = rollDice(sides, numberOfDice);
  response.json({ results });
});

module.exports = router;