const express = require("express");
const res = require("express/lib/response");
const morgan = require("morgan");

require("colors");

const server = express();

/*const logger = (req, res, next) => {
  console.log(
    "Route Received: " +
      req.protocol +
      "://" +
      req.get("host") +
      req.originalUrl
  );
  next();
};*/
//Usuando middleware Morgan
//Para que el servidor pueda recibir JSON

//Settings
server.set("appName", "Curso Express");
server.set("port", "5000");
server.set("view engine", "ejs");
//Middlewares
server.use(express.json());
server.use(morgan("dev"));

//Routing
//First Access
server.all("/user", (req, res, next) => {
  console.log("Aqui pasó");
  next();
});
//Routes
server.get("/", (req, res) => {
  const data = [{ name: "Mauri" }, { name: "Alexia" }, { name: "Julia" }];
  res.render("index.ejs", { people: data });
});
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

server.use(express.static("public"));

//Port
server.listen(server.get("port"), () => {
  console.log("Server on Port ".magenta, server.get("port"));
});
