//Exports the entity controllers in a single object

const invoiceController = require("./invoice");
const customerController = require("./customer");

module.exports = {
  invoiceController,
  customerController,
};
