var connection = require("./connection.js");

var orm = {
	selectAll: function(tableInput) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableInput], function(err, result){
			if (err) {
				throw err;
			}
			console.log(result);
		});
	},
	insertOne: function(tableInput, valOfCol) {
		var queryString = "INSERT INTO ?? VALUES(?)";
		connection.query(queryString, [tableInput, valOfCol], function(err, result) {
			console.log(result);
		});
	},
	updateOne: function(tableInput, columnInput, valOfCol, condition, valOfCondition) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [tableInput, columnInput, valOfCol, condition, valOfCondition], function(err, result) {
			console.log(result);
		});
	}
};

// export this file
module.exports = orm;