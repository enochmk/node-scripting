const { readdirSync } = require('fs');

const fileLogger = require('./utils/fileLogger');

const INTEREST_LOG_FILES = [
	'454-check-performance.log',
	'check-performance.log'
];

// Access the logs folder and get all sub folders
const getDirectories = (source) => {
	const dirs = readdirSync(source, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

	return dirs;
};

// Read Interested files and write to file
const extractContent = (target_file) => {};
