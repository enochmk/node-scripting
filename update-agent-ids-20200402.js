const fileLogger = require('./utils/fileLogger');
const DB = require('./model/DB');
const AgentIDs = require('./_data/AgentIDs');

/**
 *  Function to update agent ID in database;
 */
const UpdateAgentID = async (agentId) => {
	// Create new agentID from OldAgentID
	const newAgentID = `65${agentId.toString().substring(2, agentId.length)}`;

	// Prepare sql statement
	const stmt =
		'CALL UPDATE_AGENT_ID(?, ?, @response);  SELECT @response as response;';

	// execute
	try {
		const result = await DB.query(stmt, [agentId, newAgentID]);

		// console.log(result);

		const response = result[1][0].response;
		// write to file
		fileLogger('runUpdateAgentId.log', `${agentId}|${newAgentID}|${response}`);

		// print result
		console.log(result[1][0].response);
	} catch (error) {
		console.log(error);
		process.exit();
	}
};

// console.log(UpdateAgentID(12345));

// Run on the IDs
AgentIDs.map((id) => UpdateAgentID(id));
