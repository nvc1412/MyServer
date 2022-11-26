"use strict";
module.exports = function (app) {
  let usersCtrl = require("./controllers/UsersController");
  let productsCtrl = require("./controllers/ProductsController");
  let billsCtrl = require("./controllers/BillsController");

  app.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" });
  });

  // todoList Routes ussers
  app.route("/users").get(usersCtrl.get).post(usersCtrl.store);

  app
    .route("/users/:usersId")
    .get(usersCtrl.detail)
    .put(usersCtrl.update)
    .delete(usersCtrl.delete);

  app.route("/users/email/:userEmail").get(usersCtrl.email);

  // todoList Routes Products
  app.route("/products").get(productsCtrl.get).post(productsCtrl.store);

  app
    .route("/products/:productsId")
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);

  app.route("/products/page/:productsPage").get(productsCtrl.page);

  app.route("/products/maker/:productsMaker").get(productsCtrl.maker);
  app.route("/products/search/:productsSearch").get(productsCtrl.search);

  // todoList Routes Bills
  app.route("/bills").get(billsCtrl.get).post(billsCtrl.store);
};
