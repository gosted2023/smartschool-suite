const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load .env variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('✅ SmartSchool Backend Online');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
