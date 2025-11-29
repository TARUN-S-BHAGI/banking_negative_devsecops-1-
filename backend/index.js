const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// INTENTIONALLY BAD: hardcoded secret key
const JWT_SECRET = "123456";

app.use(express.json());

// INTENTIONALLY BAD: SQL via string concatenation (simulated)
app.get('/api/user', (req, res) => {
  const email = req.query.email || 'test@example.com';
  const sql = "SELECT * FROM users WHERE email = '" + email + "';";
  res.json({ message: 'Vulnerable endpoint', simulatedQuery: sql });
});

// Health endpoint (for DAST + compose)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', version: 'negative-backend' });
});

// INTENTIONALLY BAD: weak JWT token generation
app.post('/api/login', (req, res) => {
  const token = jwt.sign({ user: 'demo' }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Negative backend listening on port ' + PORT);
});
