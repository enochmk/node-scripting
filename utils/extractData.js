const fs = require('fs');
const path = require('path');

const fileLogger = require('./fileLogger');

const extractData = (filePath, outputPath, lookUpString, unlink = true) => {
	try {
		if (!fs.existsSync(filePath)) {
			console.log(`${filePath} does not exists... `);
			return false;
		}

		// if output path exists, remove
		if (fs.existsSync(outputPath) && unlink) {
			console.log(`Output file already exists.. \nunlinking: ${outputPath}`);
			fs.unlinkSync(outputPath);
		}
	} catch (err) {
		console.error(err);
		return false;
	}

	// read file
	const file = fs.readFileSync(filePath, 'utf-8');

	let count = 0;

	// split the files, line by line
	file.split(/\r?\n/).forEach((line) => {
		// Check if a line contains lookupstring

		if (line.includes(lookUpString)) {
			count++;

			// write to file
			fileLogger(
				path.dirname(outputPath),
				path.basename(outputPath),
				line,
				false
			);
		}
	});

	// Print
	console.log(`Number of lines found: ${count}`);
};

module.exports = extractData;
