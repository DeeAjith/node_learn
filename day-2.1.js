import express from 'express';
import cors from 'cors';
import { logInfo, logError } from  './log.js';
import pool from './db/db.js';
import dotenvx from '@dotenvx/dotenvx';

// Load environment variables with encrypted variables
dotenvx.config();

// Middleware
const app = express();
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Simple Route
app.get('/', (_req, res) => {
  res.json({ message: "Welcome to day-2.1 of Node.js learning"})
})

app.post('/users', async (req, res) => {
  try {
    const {name, email} = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    logError(err.message, 500);
    res.status(500).json({ error: err.message });
  }
})

// Get all users
app.get('/users', async(_req, res) => {
  try{
    const allUsers = await pool.query("SELECT * FROM users");
    logInfo(allUsers.rows)
    res.json(allUsers.rows);
  } catch (err) {
    logError(err.message, 500);
    res.status(500).json({ error: err.message });
  }
})

// PORT
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, ()=> {
  logInfo(`Server running on port ${PORT}`)
})