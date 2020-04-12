const connection = require('../database/DMS');

let db = {};

db.query = (stmt, bindParams = [], conn = connection) => {
	return new Promise((resolve, reject) => {
		conn.query(stmt, bindParams, (error, results) => {
			if (error) return reject(error);

			return resolve(results);
		});
	});
};

module.exports = db;
