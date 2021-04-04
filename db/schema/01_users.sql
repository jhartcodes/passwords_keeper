-- Drop and recreate Users table (Example)


DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS business CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  master_password VARCHAR(255) NOT NULL,
  is_business BOOLEAN DEFAULT false,

  active BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE business (
  id SERIAL PRIMARY KEY NOT NULL,
  busines_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  admin_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE passwords (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  business_id INTEGER REFERENCES business(id) ON DELETE CASCADE,
  user_name VARCHAR(255),
  password VARCHAR(255),
  encrypted_password VARCHAR(255)
);
