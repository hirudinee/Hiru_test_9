let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.sendMessage({
		MessageBody: 'This is a test message',
		QueueUrl: 'https://sqs.us-east-2.amazonaws.com/263248768798/Hiru_SQS',
		DelaySeconds: '0',
		MessageAttributes: {
			"001": {
				"DataType": "String",
				"StringValue": "test"
			},
			"002": {
				"DataType": "Number",
				"StringValue": "123"
			},
			"003": {
				"DataType": "Binary",
				"BinaryValue": "11"
			}
		}
	}, function (data) {
		console.log('Data ', data);
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
		console.log('error ', error);
	});

	//test
	callback(null, 'Successfully executed');


}