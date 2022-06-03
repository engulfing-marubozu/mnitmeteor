const client = require('@sendgrid/client');
require('dotenv').config();
client.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);
const headers = {
  "on-behalf-of": "mnitmeteor@gmail.com",
  "Authorization": `Bearer <<${process.env.SENDGRID_API_KEY}>>`,
};

const request = {
  url: `/v3/user/credits`,
  method: 'GET',
  headers: headers
}

client.request(request)
  .then(([response, body]) => {
    console.log(response.statusCode);
 //   console.log(response.body);
  })
  .catch(error => {
    // console.log(error.body);
    console.error(error);
  });
