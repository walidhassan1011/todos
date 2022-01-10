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
  res.json({ todos });
});

app.post("/todo", (req, res) => {
  const data = res.body;
  todos.push(data);
});

app.post("/delete", (req, res) => {
  const { id, message } = req.body;
  todos.filter(id);
  todos.filter(message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`);
});
