-- Users table seeds here (Example)
INSERT INTO users (email, master_password, is_business) VALUES ('joel@joel.com', 12345, TRUE );
INSERT INTO business (busines_name, address, admin_id) VALUES ('joels business', '12th street vancouver', 1  );

INSERT INTO passwords ( user_id, business_id, user_name, password, encrypted_password) VALUES (1,1,'whatever', 12345, 54321);
