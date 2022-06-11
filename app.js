import express from 'express';
import cors from 'cors';

import path from 'path';
import fs from 'fs';

import { fileURLToPath } from 'url';

import db from './server/database/db.js';
import clientRoutes from './server/routes/routes.js';

// import bodyParser from 'body-parser';

const app = express();
const port = 8000;

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use('/api/clients', clientRoutes);

app.use(express.static(path.join(__dirname, 'public')));

try {
  await db.authenticate();
  console.log('🟢 DB conection successful');
} catch (error) {
  console.log('Error authenticating client: ');
}

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`🟢 Running port: http://localhost:${port}`);
});
