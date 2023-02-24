const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// create application/json parser
const jsonParser = bodyParser.json();
 

const base_url = "https://hubspot-ci.herokuapp.com";

app.post('/api/users', jsonParser, (req, res) => {
    console.info({ req: '/api/users', body: req.body, params: req.params, headers: JSON.stringify(req.headers) });
    return res.send('Successful post request');
});

app.get("/recordings/:externalId", (req, res) => {
  const { appId, externalAccountId } = req.query;
  const { externalId } = req.params;
  console.info({ appId, externalAccountId, externalId });
  console.info({ req: '/recordings/:externalId', headers: JSON.stringify(req.headers) });
  res.send({
    authenticatedUrl: `${base_url}/audio/${externalId}`,
  });
});

app.use("/audio/:externalId", express.static("sample1.mp3"));

app.post('/api/workflow-ext', jsonParser, (req, res) => {
    console.info({ req: '/api/workflow-ext', body: req.body, params: req.params, headers: JSON.stringify(req.headers) });
    return res.send('Successful post request');
});



// This displays message that the server running and listening to specified port
app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}`)
);
