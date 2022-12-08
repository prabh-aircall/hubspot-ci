const express = require("express");
const app = express();
const port = 3000;
const base_url = "https://hubspot-ci.herokuapp.com";

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

app.post('/api/users', function (req, res) {
    let body = req.body;
    let params = req.params;
    console.info({ req: '/api/users', body, params, headers: JSON.stringify(req.headers) });
    console.info({ req: JSON.stringify(req)});
    return res.send('Successful post request');
});

// This displays message that the server running and listening to specified port
app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}`)
);
