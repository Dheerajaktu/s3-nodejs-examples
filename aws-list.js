/*
  LIST objects in an existing S3 bucket
  Relies upon credentials stored in ~/.aws/crendentials
*/

// vars for this operation
var params = {};
params.Bucket = 'node-sdk-sample-8a616993-e756-4f3f-8d25-2a04aa756b39';
params.MaxKeys = 100;

// Load the SDK and UUID
var AWS = require('aws-sdk');

// Create an S3 client
var s3 = new AWS.S3();

s3.listObjects(params, function(err,data) {
  if(err) {
    console.log(err,err.stack);
  }
  else {
    console.log(data);
  }
});

