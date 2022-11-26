const { Client } = require("pg");

const client = new Client({
  //   host: "ec2-18-214-134-226.compute-1.amazonaws.com",
  //   user: "uyjhmdujgyjlpr",
  //   port: 5432,
  //   password: "bb28e3bf738a168294bc272d6e6c69721ad5cc03e46db096e2d2e28f208aebd9",
  //   database: "d98ba9vbl8i1t",
  connectionString:
    "postgres://uyjhmdujgyjlpr:bb28e3bf738a168294bc272d6e6c69721ad5cc03e46db096e2d2e28f208aebd9@ec2-18-214-134-226.compute-1.amazonaws.com:5432/d98ba9vbl8i1t",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = client;
