"use strict";

const util = require("util");
const { Client } = require("pg");
const db = require("../db");

module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM products";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response.rows);
    });
  },
  detail: (req, res) => {
    let sql = "SELECT * FROM products WHERE id = $1";
    db.query(sql, [req.params.productsId], (err, response) => {
      if (err) throw err;
      res.json(response.rows);
    });
  },
  page: (req, res) => {
    let sql = "SELECT * FROM products WHERE page = $1";
    db.query(sql, [req.params.productsPage], (err, response) => {
      if (err) throw err;
      res.json(response.rows);
    });
  },
  maker: (req, res) => {
    let sql = "SELECT * FROM products WHERE makers = $1 LIMIT 10";
    db.query(sql, [req.params.productsMaker], (err, response) => {
      if (err) throw err;
      res.json(response.rows);
    });
  },
  search: (req, res) => {
    let sql = "SELECT * FROM products WHERE name ILIKE $1";
    db.query(sql, ["%" + req.params.productsSearch + "%"], (err, response) => {
      if (err) throw err;
      res.json(response.rows);
    });
  },
  update: (req, res) => {
    let data = req.body;
    let productId = req.params.productId;
    let sql = "UPDATE products SET $1 WHERE id = $2";
    db.query(sql, [data, productsId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Update success!" });
    });
  },
  store: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO products SET $1";
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "Insert success!" });
    });
  },
  delete: (req, res) => {
    let sql = "DELETE FROM products WHERE id = $1";
    db.query(sql, [req.params.productsId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Delete success!" });
    });
  },
};
