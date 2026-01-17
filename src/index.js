const { app } = require("./server");

const PORT = process.env.PORT || 3000;

console.log("JWT SECRET KEY is: " + process.env.JWT_SECRET_KEY);

app.listen(PORT, () => {
	console.log(`Express Dice API is running on http://localhost:${PORT}`);
});

