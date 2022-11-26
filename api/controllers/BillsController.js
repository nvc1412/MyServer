"use strict";

const util = require("util");
const { Client } = require("pg");
const db = require("../db");

module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM bills";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  store: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO bills SET $1";
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "Insert success!" });
    });
  },
};
