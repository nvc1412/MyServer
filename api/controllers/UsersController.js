"use strict";

const util = require("util");
const { Client } = require("pg");
const db = require("../db");
db.connect();
module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM users";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response.rows);
    });
    db.end;
  },
  detail: (req, res) => {
    let sql = "SELECT * FROM users WHERE id = $1";
    db.query(sql, [req.params.usersId], (err, response) => {
      if (err) throw err;
      res.json(response.rows[0]);
    });
    db.end;
  },
  email: (req, res) => {
    let sql = "SELECT * FROM users WHERE email = $1";
    db.query(sql, [req.params.userEmail], (err, response) => {
      if (err) throw err;
      res.json(response.rows[0]);
    });
  },
  update: (req, res) => {
    let data = req.body;
    let usersId = req.params.usersId;
    let sql =
      "UPDATE users SET name=$1, date=$2, phone=$3, address=$4, email=$5 WHERE id = $6";
    db.query(
      sql,
      [data.name, data.date, data.phone, data.address, data.email, usersId],
      (err, response) => {
        if (err) throw err;
        res.json({ message: "Update success!" });
      }
    );
  },
  store: (req, res) => {
    let data = req.body;
    console.log(data.name);
    let sql =
      "INSERT INTO users( name , date , phone , address , email , password) VALUES ($1, $2, $3, $4, $5, $6)";
    db.query(
      sql,
      [
        data.name,
        data.date,
        data.phone,
        data.address,
        data.email,
        data.password,
      ],
      (err, response) => {
        if (err) throw err;
        res.json({ message: "Insert success!" });
      }
    );
  },
  delete: (req, res) => {
    let sql = "DELETE FROM users WHERE id = $1";
    db.query(sql, [req.params.usersId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Delete success!" });
    });
  },
};
