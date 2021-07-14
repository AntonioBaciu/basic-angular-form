const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 9100;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

let allFriends = [
  {
    firstName: "Garry",
    lastName: "Cottage",
    email: "garry69@gmail.com",
    phone: "0472645730",
    signatureMove: "Roll",
    language: "Javascript",
  },
  {
    firstName: "Milo",
    lastName: "Cottage",
    email: "milo.cottage@gmail.com",
    phone: "0482761103",
    language: "Phyton",
    bestFriend: true,
  },
];

//Define how your API handles a get or a post request.

app.get("/", function (request, response) {
  response.send("Hello from server");
});

app.post("/", function (request, response) {
  response.status(200).send({ message: "Data received" });
});

app.get("/allFriends", function (request, response) {
  response.send(allFriends);
});

app.post("/addFriend", function (request, response) {
  allFriends.push(request.body);
  response.status(200).send({ message: "Friend added!" });
});

app.post("/delete", function (request, response) {
  let id = allFriends.indexOf(request.body);
  allFriends.splice(id, 1);
  response.status(200).send({ message: "Friend deleted!" });
});

app.get("/bestFriends", function (request, response) {
  response.send(allFriends.filter((el) => el.bestFriend === true));
});

app.listen(PORT, function () {});
