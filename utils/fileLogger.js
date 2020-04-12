const fs = require('fs');
const path = require('path');
const moment = require('moment');

const logger = (folderName, fileName, line, includeTimestamp = true) => {
	// write to the file path;
	const filePath = path.join(folderName, fileName);

	// append data to file
	const timestamp = moment().format('YYYY-MM-DD kk:mm:ss');

	// pipe the log to data
	const row = includeTimestamp ? `${timestamp}|${line}\n` : `${line}\n`;

	try {
		fs.appendFileSync(filePath, row, 'utf8');
	} catch (error) {
		console.log(error);
	}
};

module.exports = logger;
