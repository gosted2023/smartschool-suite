const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load .env variables
require('dotenv').config();
const port = process.env.PORT || 10000;

app.get('/db-test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({ time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});


// Test route
app.get('/', (req, res) => {
  res.send('✅ SmartSchool Backend Online');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
