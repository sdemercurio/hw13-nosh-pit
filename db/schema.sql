DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgs
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
	noshed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);