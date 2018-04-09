# SprintHive Bureau

The purpose of this project is to provide bearu data for the SprintHive kyc bureau service.

This basic idea is that this will be an express http server providing kyc data as JSON.

## Running the server
 
 Install the dependencies and start the server
 
    yarn install
    yarn server
    
Browse to http://localhost:3701/v1/idNumber/1234567890123   
You should see the contents of the resources/data.json

## Decrypting the "real" data 

Get the private key from vault
    
    vault read -field=private secret/ops/sprinthive/dev/keys/queen-bee-gpg | base64 -D > queenbee.key
    
 Use this file to decrypt the ```sample/data.json.gpg``` file.   
 Then copy this file to the ```resources``` directory.