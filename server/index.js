require("dotenv").config();
const express = require("express");
const app = express();
require("./DB/connection");
const cors = require("cors");
const router = require("./Routes/route");
const EmployeeModel = require("./Models/employee");

app.use(cors());
app.use(express.json());
app.use(router);

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log("server is running at port 5000");
});
