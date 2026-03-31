import express from 'express';
import cors from 'cors';
import path from 'path';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const port = process.env.PORT || 4000;

app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running perfectly fine!' });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
