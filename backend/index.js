import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
}); 