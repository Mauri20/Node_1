const express = require("express");
require("colors");

const server = express();
//Para que el servidor pueda recibir JSON
server.use(express.json());
//Routing
//First Access
server.all("/user", (req, res, next) => {
  console.log("Aqui pasó");
  next();
});
//Routes
server.get("/user", (req, res) => {
  res.json({
    name: "Mauricio",
    lastname: "Rosa",
  });
});
server.post("/user/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("POST REQUEST");
});
server.put("/put/:id", (req, res) => {
  console.log(req.body);
  res.send("User " + req.params.id + " actualizado");
});
server.delete("/delete/:id", (req, res) => {
  res.send("El Usuario " + req.params.id + " ha sido eliminado");
});

//Port
server.listen(5000, () => {
  console.log("Server on Port 5000".magenta);
});
