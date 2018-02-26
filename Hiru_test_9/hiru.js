let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.put({
		TableName: 'Test_Hiru',
		Item: { 'ID': '001', 'Sample': 'Hiru' }
	}, function (err, data) {
		if (err) {
			console.log('error ', err);
		} else {
			console.log('success ', data);
		}
	});

	

	callback(null, 'Successfully executed');
}