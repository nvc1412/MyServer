"use strict";

const { Client } = require("pg");

const db = new Client({
  connectionString:
    "postgres://uyjhmdujgyjlpr:bb28e3bf738a168294bc272d6e6c69721ad5cc03e46db096e2d2e28f208aebd9@ec2-18-214-134-226.compute-1.amazonaws.com:5432/d98ba9vbl8i1t",
  ssl: {
    rejectUnauthorized: false,
  },
  // host: "ec2-18-214-134-226.compute-1.amazonaws.com",
  // user: "uyjhmdujgyjlpr",
  // password: "bb28e3bf738a168294bc272d6e6c69721ad5cc03e46db096e2d2e28f208aebd9",
  // database: "d98ba9vbl8i1t",
  // port: 5432,
});

module.exports = db;
