const mongoose = require("mongoose");

function connectToDb() {
	mongoose.connect(process.env.DB_CONNECT)
		.then(() => {
			console.log("✅ Successfully connected to the database!");
		})
		.catch((err) => {
			console.log("❌ Database connection failed:", err);
		});
}

module.exports = connectToDb;
