DROP TABLE IF EXISTS passwords CASCADE;

CREATE TABLE passwords (
  id SERIAL PRIMARY KEY,
  password VARCHAR(255),
  encrypted_password VARCHAR(255),
  url VARCHAR(255),
  type VARCHAR(50),
  current_user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE
);


