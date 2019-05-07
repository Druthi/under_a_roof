drop database if exists mvc;
create database mvc;

use mvc;

create table users(
  name VARCHAR(50),
  profile_picture VARCHAR(255),
  id int NOT NULL AUTO_INCREMENT,
  anime_ids VARCHAR(500),
  PRIMARY KEY (id)
)



