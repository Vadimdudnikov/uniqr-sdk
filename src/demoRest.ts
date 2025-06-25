import express from 'express';
import { generateQR, validateQR } from './index.js';

const app = express();
app.use(express.json());

// ---- POST /generate ----------------------------------
app.post('/generate', (req, res) => {
  const { merchantId, instruments, amount } = req.body;
  res.json({
    qr: generateQR({ merchantId, instruments, amount })
  });
});

// ---- POST /validate ----------------------------------
app.post('/validate', (req, res) => {
  res.json(validateQR(req.body.qr));
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log(`REST demo on :${PORT}`));

