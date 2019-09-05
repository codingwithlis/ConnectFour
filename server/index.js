const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});