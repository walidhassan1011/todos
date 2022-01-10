const express = require("express");
const res = require("express/lib/response");
let todos = require("./dumyData");
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/", (res, req) => {});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`);
});
