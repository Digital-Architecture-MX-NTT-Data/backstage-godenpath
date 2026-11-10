const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: '${{ values.name }}' });
});

app.listen(PORT, () => {
  console.log('${{ values.name }} running on port', PORT);
});

module.exports = app;
