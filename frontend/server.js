const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const msg = req.query.msg || 'Welcome to vulnerable banking frontend';
  // INTENTIONALLY BAD: reflected XSS
  res.send(`
    <html>
      <body>
        <h1>Vulnerable Banking Frontend</h1>
        <p>Message from query: ${msg}</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: 'negative-frontend' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Negative frontend listening on port ' + PORT);
});
