"use strict";

const util = require("util");
const { Client } = require("pg");
const db = require("../db");

module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM bills";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response.rows);
    });
  },
  store: (req, res) => {
    let data = req.body;
    let sql =
      "INSERT INTO bills(idsp, idus, tenkh, tensp, soluong) VALUES ($1, $2, $3, $4, $5)";
    db.query(
      sql,
      [data.idSP, data.idUS, data.tenKH, data.tenSP, data.soluong],
      (err, response) => {
        if (err) throw err;
        res.json({ message: "Insert success!" });
      }
    );
  },
};
