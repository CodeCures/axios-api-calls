var axios = require('axios');
var data = JSON.stringify({
  "disco": "IKEDC",
  "account_type": "prepaid",
  "meter_number": "54150131982"
});

var config = {
  method: 'post',
  url: 'https://vas-vendors.myfela.ng/staging/electricity/v2/validateMeterNo',
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTY2ZTU2NzIyYWU2NTA2NGZiNGJlOCIsImlhdCI6MTYwNzEwNTk5OCwiZXhwIjozMTcxNTE1NDgzOTh9.-1ZVCt99jk6a4KTOch4dH3mZaIDSu79ojO0P6QPf_Go'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

/* 
    1. create a folder
    2. create a javascript file (api.js)
    3. open the folder you created in step 1 in a terminal. the best way to do this is to open the foler in vscode and run the terminal from there
    4. run (npm init --yes)
    5. copy the code from postman into api.js file
    6. install the required module using (npm i module_name) e.g axios, request, node-fetch
    7. run (node api) or (node api.js)


    Note ===> after cloning from git using (git clone https://github.com/CodeCures/axios-api-calls.git) . run (npm install)
*/