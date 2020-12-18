var express = require('express');
var router = express.Router();


/* Execute code */
router.post('/', function(req, res, next) {
  //res.send('respond with a resource');
        //Load uuid object
        const { v4: uuidv4 } = require('uuid');; //removed v4
        var suuid = uuidv4();
        // Load the AWS SDK for Node.js
        var AWS = require('aws-sdk');
        // Set the region 
        AWS.config.update({region: 'us-east-1'});

        // Create the DynamoDB service object
        var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
        
        // Create object to send to Amazon DynamoDB
        var params = {
        TableName: 'collect',
        Item: {
            'CRA_ID' : {S: suuid},
            'CRA_EMAIL' : {S: req.body.email},
            'CRA_NAME' : {S: req.body.name},
            'CRA_RISKSCORE' : {S: req.body.riskscore}

        }
        };
        
        //Logging the data that will be sent
        console.log('');
        console.log('---------------logging---------------------');
        console.log('Data sent to DynamoDB table');
        console.log('uuid:', suuid); 
        console.log('name:', req.body.name);
        console.log('email:',req.body.email);
        console.log('riskscore:',req.body.riskscore);
        console.log('-------------------------------------------');

async function putIt (){
    try
        {
            var result = await ddb.putItem(params).promise();
            res.send('Data Collected');
        }
    catch(err)
        {
            console.log("error from fn:",err);
        }
   
};

putIt();

}); //router.get end colon

module.exports = router;