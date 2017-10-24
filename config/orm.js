var connection = require("./connection.js");

var orm = {
	// "cb" helps with asynchronous issues. It forces JS to wait for
	// the data to return from the database before moving on to the 
	// next part of the method
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableInput], function(err, result){
			if (err) {
				throw err;
			}
			console.log(result);
			cb(result);
		});
	},
	insertOne: function(tableInput, valOfCol, cb) {
		var queryString = "INSERT INTO ?? VALUES(?)";
		connection.query(queryString, [tableInput, valOfCol], function(err, result) {
			if (err) {
				throw err;
			}
			console.log(result);
			cb(result);
		});
	},
	updateOne: function(tableInput, columnInput, valOfCol, condition, valOfCondition, cb) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [tableInput, columnInput, valOfCol, condition, valOfCondition], function(err, result) {
			if (err) {
				throw err;
			}
			console.log(result);
			cb(result);
		});
	}
};

// export this file
module.exports = orm;