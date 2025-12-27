-- Database setup script
-- Run this with: psql -U postgres -d local_db -f db/setup.sql

-- Drop table if exists (be careful - this deletes all data!)
DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Grant permissions to your database user
-- Replace 'your_db_user' with the actual DB_USER from your .env file
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE users TO your_db_user;
GRANT USAGE, SELECT ON SEQUENCE users_id_seq TO your_db_user;

-- Verify permissions
\dt users
\dp users
