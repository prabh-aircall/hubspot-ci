const express = require("express");
const app = express();
const port = 3000;
const base_url = "https://hubspot-ci.herokuapp.com";

app.get("/recordings/:externalId", (req, res) => {
  const { appId, externalAccountId } = req.query;
  const { externalId } = req.params;
  console.info({ appId, externalAccountId, externalId });
  res.send({
    authenticatedUrl: `${base_url}/audio/${externalId}`,
  });
});

app.use("/audio/:externalId", express.static("sample.mp3"));

// This displays message that the server running and listening to specified port
app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}`)
);
