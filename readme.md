# Collect survey data from web form to Amazon DynamoDB 
##### Built with example in NodeJS, Express, Amazon DynamoDB-- example can be running in a few steps. 
1)	Ensure you install and configure NodeJS https://nodejs.org/en/ on your local workstation  
a)	You can check this by typing at a command window: “node --version” (without the double quotes)
######
2)	Install the AWS SDK for JavaScript https://aws.amazon.com/sdk-for-node-js/
######
3)	Create a user with programmatic access  
  a)	In browser, login to the AWS Console, to go IAM  
  b)	Click users in left navigation click “users”  
  c)	Click “Add user” button  
  d)	In Add User Windows create a new user “survey-user-pa”  
  e)	Tick the “Programmatic access” check box  
  f)	Click “Next: Permissions”  
  g)	In permissions window, select “Attach existing policies directly”
  h) In the search box type “dynamo”  
  i)	Tick the “AmazonDynamoFullDBAccess” policy 
  j)	Click “Next: Tags”  
  k)	Click “Next: Review”  
  l)	 Click “Create User”  
  m)	Copy the Access Key and Secret Access Key somewhere safe (like a text file on your workstation)
  #####
4)	Configure AWS SDK: 
    a)	Start a command window type “AWS Configure”  
    b)	Enter in the AWS Access Key ID you created earlier  
    c)	Enter in the AWS Secret Access Key you created earlier  
    d)	Enter a default region name: us-east-2  
    e)	Default output format (you can just hit enter)  
    f)	You can close this window once the process completes  
  #####
5)	Let’s create an Amazon DynamoDB Table
    a)	Head back to the web browser and in the AWS console  
    b)	In the Services menu, type “dynamo” in the search, click DynamoDB  
    c)	Ensure you have selected the us-east-2 (Ohio) region in the upper right corner  
    d)	Click Create Table  
    e)	In Table Name Type “collect”  
    f)	In Primary Key Filed type “CRA_ID”  
    g)	Click Create  
  #####
6)	Download the code from this GitHub Repo https://github.com/mattddiamond/DynamoDBSurvey/archive/master.zip and unzip to your favorite directory
  #####
7)	Open the DynamoDBSurvey directory in VSCode (File → open, select root of survey folder and click “open)
    a)	From the terminal menu, select “New Terminal”  
    b)	This starts a terminal session in the bottom right corner of your VSCode window  
  #####
8)	Type “npm install” (without the double quotes)  
  #####
9)	Type “npm start” (without the double quotes)  
#####
10)	Test it out:
    a)	In your favorite web browser, head to http://localhost:3000 you should see the survey  
    b)	After submitting sample data, you should see the data in the table in DynamoDB – Click “Table” in left Navigation, select the “Item” tab along top row to view records added to the DynamoDB table  
    c)	Also in VSCode, the data is logged to the console  

#### Disclaimer: 
The opinions expressed herein are my own personal opinions and do not represent my employer’s view in any way.  This code is not intended for production use and is provided as a sample. This code has no warranty, expressed or implied.