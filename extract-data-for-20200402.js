const path = require('path');

const extractData = require('./utils/extractData');
const source = path.join('logs', '20200402', 'success.log');

// POS Creation
console.log('\nExtracting POS Created');
extractData(
	source,
	path.join('_data', 'analysis-on-day-20200402', 'pos-creation.log'),
	'POS Creation'
);
console.log('\n');

// POS Creation
console.log('\nExtracting POS Update');
extractData(
	source,
	path.join('_data', 'analysis-on-day-20200402', 'pos-update.log'),
	'POS Update'
);
console.log('\n');

// FL Creation
console.log('Extracting FL Created');
extractData(
	source,
	path.join('_data', 'analysis-on-day-20200402', 'fl-creation.log'),
	'FL Creation'
);
console.log('\n');

// Tagging POA
console.log('Extracting POA Tagging');
extractData(
	source,
	path.join('_data', 'analysis-on-day-20200402', 'poa-tagging.log'),
	'POA Tagging'
);
console.log('\n');

// Tagging EPIN
console.log('Extracting EPIN Tagging');
extractData(
	source,
	path.join('_data', 'analysis-on-day-20200402', 'epin-tagging.log'),
	'EPIN Tagging'
);
console.log('\n');

// Tagging MFS
console.log('Extracting MFS Tagging');
extractData(
	source,
	path.join('_data', 'analysis-on-day-20200402', 'mfs-tagging.log'),
	'MFS Tagging'
);
console.log('\n');

console.log('Script Complete');
