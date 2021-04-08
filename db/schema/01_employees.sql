DROP TABLE IF EXISTS employees CASCADE;

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  first VARCHAR(50),
  last VARCHAR(50),
  department TEXT,
  start_date DATE,
  password VARCHAR(255),
  secure_pass VARCHAR(255) NOT NULL,
  business_id INTEGER REFERENCES business(id) ON DELETE CASCADE,
  active BOOLEAN NOT NULL DEFAULT true

);
<<<<<<< HEAD

=======
>>>>>>> scarlet
