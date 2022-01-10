const express = require("express");
const res = require("express/lib/response");
let todos = require("./dumyData");
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/", (res, req) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/todos", (res, req) => {
  res.json({ todos });
});

app.post("/todo", (res, req) => {
  const data = req.body;
  todos.push(data);
});

app.post("/delete", (res, req) => {
  const { id, message } = req.body;
  todos.filter(id);
  todos.filter(message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`);
});
