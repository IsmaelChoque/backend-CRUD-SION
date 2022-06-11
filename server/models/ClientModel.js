import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const ClientModel = db.define('clients', {
  nombre: { type: DataTypes.STRING },
  apellidos: { type: DataTypes.STRING },
  correo: { type: DataTypes.STRING },
  direccion: { type: DataTypes.STRING },
  celular: { type: DataTypes.STRING },
  telefono: { type: DataTypes.STRING },
});

export default ClientModel;
