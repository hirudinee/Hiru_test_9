let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {
	s3.putObject({
		"Body": "sample",
		"Bucket": "test.sample.ohio",
		"Key": "thisisatest",
		"ServerSideEncryption": "AES256",
		"Tagging": "key1==val1",
		"Metadata": {
			"meta1": "val1"
		}
	})
		.promise()
		.then(data => {
			console.log(data);           // successful response
			/*
			data = {
				ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
				VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
			}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});


	callback(null, 'Successfully executed');
}