import ClientModel from '../models/ClientModel.js';

export const getAllClients = async (req, res) => {
  try {
    const clients = await ClientModel.findAll();
    res.json(clients);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getClient = async (req, res) => {
  try {
    const client = await ClientModel.findAll({
      where: { id: req.params.id },
    });
    res.json(client);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createClient = async (req, res) => {
  try {
    console.log(req.body);
    await ClientModel.create(req.body);
    res.json({ message: 'Cliente registrado' });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const client = await ClientModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: 'Cliente actualizado correctamente' });
    // res.json({
    //   id: client[0],
    //   ...req.body,
    // });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    await ClientModel.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: 'Cliente eliminado correctamente' });
  } catch (error) {
    res.json({ message: error.message });
  }
};
