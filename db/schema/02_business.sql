11 lines (8 sloc)  243 Bytes

DROP TABLE IF EXISTS business CASCADE;

CREATE TABLE business (
  id SERIAL PRIMARY KEY,
  business_name VARCHAR(255) NOT NULL,
  email VARCHAR(50) NOT NULL,
  master_password VARCHAR(100) NOT NULL,
  active BOOLEAN NOT NULL DEFAULT true

);

