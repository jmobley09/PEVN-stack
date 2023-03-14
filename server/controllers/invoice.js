const { Invoice } = require("../models");

/**
 * Creates a new invoice
 * @param {*} req
 * @param {*} res
 * @returns Object
 */
const createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);

    return res.status(201).json({
      invoice,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Fetches all invoices
 * @param {*} req
 * @param {*} res
 * @returns Object
 */
const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.findAll({ order: [["createdAt", "DESC"]] });

    return res.status(200).json({ invoices });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

/**
 * Gets a single invoice by it's id
 * @param {*} req
 * @param {*} res
 * @returns boolean
 */
const getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findOne({
      where: { id: id },
    });

    if (invoice) {
      return res.status(200).json({ invoice });
    }

    return res.status(404).send("Invoice with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
/**
 * Updates a single invoice by it's id
 * @param {*} req
 * @param {*} res
 * @returns boolean
 */
const updateInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.update(req.body, {
      where: { id: id },
    });

    if (invoice) {
      const updatedInvoice = await Invoice.findOne({ where: { id: id } });
      return res.status(200).json({ invoice: updatedInvoice });
    }
    throw new Error("invoice not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

/**
 * Deletes a single invoice by it's id
 * @param {*} req
 * @param {*} res
 * @returns boolean
 */
const deleteInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedInvoice = await Invoice.destroy({
      where: { id: id },
    });

    if (deletedInvoice) {
      return res.status(204).send("Invoice deleted successfully ");
    }

    throw new Error("Invoice not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  deleteInvoiceById,
  updateInvoiceById,
};
