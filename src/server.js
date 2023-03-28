const express = require('express');
const app = express();
const path = require('path');

// Serve static files in the "pdfs" folder
app.use('/pdfs', express.static(path.join(__dirname, 'pdfs')));

// Serve PDF files with the correct content type
app.get('/pdfs/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, 'pdfs', filename);
  res.type('application/pdf');
  res.sendFile(filepath);
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
