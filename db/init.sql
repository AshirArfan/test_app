CREATE TABLE my_table (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

INSERT INTO my_table (name) VALUES ('Alice'), ('Bob');
