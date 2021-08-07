const express = require("express");
const { v4: uuidv4 } = require("uuid");
let taxis = require("./data/taxis");
const cors = require('cors')

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/taxis", function (req, res, next) {
  res.send(taxis);
});

app.get("/taxis/:taxiId", function (req, res, next) {
  const byId = [...taxis.filter((taxi) => taxi._id === req.params.taxiId)];
  res.send(byId[0]);
});

app.post("/taxis", function (req, res, next) {
  const _id = uuidv4();
  taxis.push({ _id, ...req.body });
  res.status(200).send({ _id, ...req.body });
});

app.delete("/taxis/:taxiId", function (req, res, next) {
  taxis = [...taxis.filter((taxi) => taxi._id !== req.params.taxiId)];
  res.status(200).send(taxis);
});

app.patch("/taxis", function (req, res, next) {
  const id = req.body._id;
  let updated = taxis.map((taxi) => {
    if (taxi._id === id)
      return {
        ...req.body,
      };
    else return { ...taxi };
  });
  taxis = [...updated];
  res.status(200).send({ ...req.body });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
