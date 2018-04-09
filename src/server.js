const express = require("express");
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const port = process.env.PORT || 3701;

app.use(cors());
app.use(express.json());

const fakeDb = require('./fakeDb');

app.get("/v1/idNumber/:idNumber", (req, res) => {
  const {idNumber} = req.params;
  const ans = fakeDb.findByIdNumber(idNumber);
  if (!ans) {
    res.status(404).send({message: "Could not find anything, sorry for you..."});
  } else {
    res.send(ans);
  }
});
const server = http.listen(port, () => {
  const port = server.address().port;
console.log(`Http server listening at http://localhost:${port}`);
});
