const client = require("./connection.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.listen(3300, () => {
  console.log("Sever is now listening at port 3300");
});

client.connect();

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", (req, res) => {
  client.query(`Select * from users`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

app.get("/users/:id", (req, res) => {
  client.query(
    `Select * from users where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

app.post("/users", (req, res) => {
  const user = req.body;
  let insertQuery = `insert into users( "name" , "date" , phone , address , email , "password") 
                     values $1`;

  client.query(insertQuery, [user], (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
