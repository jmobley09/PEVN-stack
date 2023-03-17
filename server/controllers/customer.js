const { Customer, Invoice } = require("../models");

/**
 * Creates a new customer
 * @param {*} req
 * @param {*} res
 * @returns Object
 */
const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    return res.status(201).json({
      customer,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Fetches all customers
 * @param {*} req
 * @param {*} res
 * @returns Object
 */
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt']},
      order: [["createdAt", "DESC"]],
    });
    return res.status(200).json({ customers });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

/**
 * Gets a single customer by it's id
 * @param {*} req
 * @param {*} res
 * @returns boolean
 */
const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;

    const customer = await Customer.findOne({
      where: { id: id },
      order: [["createdAt", "DESC"]],
    });

    if (customer) {
      return res.status(200).json({ customer });
    }

    return res
      .status(404)
      .send("Customer with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

/**
 * Updates a single customer by it's id
 * @param {*} req
 * @param {*} res
 * @returns boolean
 */
const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Customer.update(req.body, { where: { id: id } });

    if (updated) {
      const updatedCustomer = await Customer.findOne({
        where: { id: id },
        include: [
          {
            model: Invoice,
          },
        ],
      });
      return res.status(200).json({ customer: updatedCustomer });
    }

    throw new Error("Customer not found ");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

/**
 * Deletes a single customer by it's id
 * @param {*} req
 * @param {*} res
 * @returns Boolean
 */
const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Customer.destroy({
      where: {
        id: id,
      },
    });

    if (deleted) {
      return res.status(204).send("Customer deleted");
    }

    throw new Error("Customer not found ");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
