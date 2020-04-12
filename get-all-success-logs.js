const path = require('path');

const getFoldersInSource = require('./utils/getDirectory');
// const fileLogger = require('./utils/fileLogger');
const extractData = require('./utils/extractData');

console.log('Commencing script');

const FOLDER = 'logs';
const DATE_START = '20200311';
const DATE_END = '20200412';
const OUTPUTFOLDER = path.join('_data', '20200311-20200412');

// get all folders in the log directory
console.log(`All folders in ${FOLDER}`);
const logFolders = getFoldersInSource(FOLDER);
console.log(logFolders);

console.log(`Accessing folders between ${DATE_START} and ${DATE_END}\n`);

logFolders.map((selectedFolder) => {
	console.log(`Checking Folder :${selectedFolder}`);

	// not in specified range
	if (!(selectedFolder >= DATE_START && selectedFolder <= DATE_END)) {
		console.log(`Skipping folder :${selectedFolder}\n`);
		return;
	}

	// success file path
	const success = path.join(FOLDER, selectedFolder, 'success.log');
	console.log(`Extracting data from ${selectedFolder}`);

	// POS Creation
	console.log('\nExtracting POS Created');
	extractData(
		success,
		path.join(OUTPUTFOLDER, 'pos-creation.log'),
		'POS Creation',
		false
	);

	// FL Creation
	console.log('\nExtracting FL Created');
	extractData(
		success,
		path.join(OUTPUTFOLDER, 'fl-creation.log'),
		'FL Creation',
		false
	);

	// POS Update
	console.log('\nExtracting POS Update');
	extractData(
		success,
		path.join(OUTPUTFOLDER, 'pos-update.log'),
		'POS Update',
		false
	);

	// POA Tagging
	console.log('\nExtracting POA Tagging');
	extractData(
		success,
		path.join(OUTPUTFOLDER, 'poa-tagging.log'),
		'POA Tagging',
		false
	);

	// POA Tagging
	console.log('\nExtracting EPIN Tagging');
	extractData(
		success,
		path.join(OUTPUTFOLDER, 'epin-tagging.log'),
		'EPIN Tagging',
		false
	);

	// POA Tagging
	console.log('\nExtracting MFS Tagging');
	extractData(
		success,
		path.join(OUTPUTFOLDER, 'mfs-tagging.log'),
		'MFS Tagging',
		false
	);

	console.log('\n');
});

console.log('\nScript Complete');
