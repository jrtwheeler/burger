-- Drop the `burgers_db` if it exists
DROP DATABASE IF EXISTS burger_db;
-- Create the `burgers_db`
CREATE DATABASE burger_db;
-- Switch to or use the `burgers_db`
USE burger_db;

-- Create a `burgers` table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);