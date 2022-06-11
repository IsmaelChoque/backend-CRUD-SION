import express from 'express';

import multer from 'multer';
import path from 'path';
import fs from 'fs';

import { fileURLToPath } from 'url';

import {
  createClient,
  deleteClient,
  getAllClients,
  getClient,
  updateClient,
} from '../controllers/ClientController.js';

const clientRoutes = express.Router();

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const diskstorage = multer.diskStorage({
  destination: path.join(__dirname, '../../public'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

// clientRoutes.get('/', (req, res) => {
//   res.render('index');
// });

clientRoutes.get('/', getAllClients);
clientRoutes.get('/:id', getClient);
clientRoutes.post('/', createClient);
clientRoutes.put('/:id', updateClient);
clientRoutes.delete('/:id', deleteClient);

const uploadImage = multer({
  storage: diskstorage,
}).single('image');

clientRoutes.post('/images/upload', (req, res) => {
  uploadImage(req, res, (err) => {
    if (err) {
      return res.send(err);
    }
    console.log(req.file);
    res.send('Guardado en el servidor');
  });
});

export default clientRoutes;
