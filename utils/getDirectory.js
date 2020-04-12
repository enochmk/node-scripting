const fs = require('fs');

const getFoldersInSource = (source) => {
	return fs
		.readdirSync(source, { withFileTypes: true })
		.filter((item) => item.isDirectory())
		.map((item) => item.name);
};

module.exports = getFoldersInSource;
