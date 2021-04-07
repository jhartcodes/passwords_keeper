DROP TABLE IF EXISTS employees CASCADE;
CREATE TABLE employees(
  id SERIAL PRIMARY KEY,
  first VARCHAR(50),
  last VARCHAR(50),
  department TEXT,
  start_date DATE,
  last_activity DATE,
  email VARCHAR(50),
  password VARCHAR(100),
  secure_pass VARCHAR(255),
  active BOOLEAN NOT NULL DEFAULT true
);
