const express = require("express");
const res = require("express/lib/response");
let todos = require("./dumyData");
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todo", (req, res) => {
  const data = req.body;
  const message = data.message;
  let newtodo = { id: todos.length + 1, message };
  todos.push(newtodo);
});

app.post("/delete", (req, res) => {
  const data = req.body;
  console.log(data.id);
  todos = todos.filter((todo) => todo.id != data.id);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`);
});
