const router = require("express").Router();

// Controller imports
const { customerController, invoiceController } = require("../controllers");

// Customer routes
router.get("/customers", customerController.getAllCustomers);
router.post("/customers", customerController.createCustomer);
router.get("/customers/:id", customerController.getCustomerById);
router.put("/customers/:id", customerController.updateCustomer);
router.delete("/customers/:id", customerController.deleteCustomer);

// Invoice routes
router.get("/invoices", invoiceController.getAllInvoices);
router.post("/invoices", invoiceController.createInvoice);
router.get("/invoices/:id", invoiceController.getInvoiceById);
router.put("/invoices/:id", invoiceController.updateInvoiceById);
router.delete("/invoices/:id", invoiceController.deleteInvoiceById);

module.exports = router;
