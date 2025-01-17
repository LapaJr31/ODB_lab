# Реалізація інформаційного та програмного забезпечення

## SQL Script

```SQL

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema open_data_management_system
-- -----------------------------------------------------

DROP SCHEMA IF EXISTS `open_data_management_system`;

CREATE SCHEMA IF NOT EXISTS `open_data_management_system` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `open_data_management_system`;

-- -----------------------------------------------------
-- Table `open_data_management_system`.`Group`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `open_data_management_system`.`Group`;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Group` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idGroup_UNIQUE` (`id` ASC) VISIBLE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `open_data_management_system`.`User`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `open_data_management_system`.`User`;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `id_group` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  INDEX `fk_User_Group1_idx` (`id_group` ASC) VISIBLE,
  CONSTRAINT `fk_User_Group1`
    FOREIGN KEY (`id_group`)
    REFERENCES `open_data_management_system`.`Group` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `open_data_management_system`.`Permission`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `open_data_management_system`.`Permission`;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Permission` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `open_data_management_system`.`Data`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `open_data_management_system`.`Data`;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Data` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `date_create` DATE NOT NULL,
  `id_creator` INT NOT NULL,
  `file_csv` VARCHAR(45) NOT NULL,
  `vis_exist` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `open_data_management_system`.`Access`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `open_data_management_system`.`Access`;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Access` (
  `id_group` INT NOT NULL,
  `id_permission` INT NOT NULL,
  INDEX `fk_Access_Group1_idx` (`id_group` ASC) VISIBLE,
  INDEX `fk_Access_Permission1_idx` (`id_permission` ASC) VISIBLE,
  CONSTRAINT `fk_Access_Group1`
    FOREIGN KEY (`id_group`)
    REFERENCES `open_data_management_system`.`Group` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_Permission1`
    FOREIGN KEY (`id_permission`)
    REFERENCES `open_data_management_system`.`Permission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

## RESTful service

```Python
from fastapi import FastAPI
from pydantic import BaseModel
import pymysql
import uvicorn

app = FastAPI()

# MySQL Configuration
cnx = pymysql.connect(
    host='localhost',
    user='root',
    password='311004',
    database='open_data_management_system'
)


# Models
class Group(BaseModel):
    id: int
    name: str



class User(BaseModel):
    id: int
    username: str
    email: str
    password: str
    avatar: str
    first_name: str
    last_name: str
    id_group: int


class Permission(BaseModel):
    id: int
    name: str


class Data(BaseModel):
    id: int
    name: str
    description: str
    date_create: str
    id_creator: int
    file_csv: str
    vis_exist: str




class Access(BaseModel):
    id_group: int
    id_permission: int


# Create a group
@app.post("/groups")
def create_group(group: Group):
    cursor = cnx.cursor()
    query = "INSERT INTO `Group` (id, name) VALUES (%s, %s)"
    values = (group.id, group.name)
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    return {"message": "Group created successfully"}




# Create a user
@app.post("/users")
def create_user(user: User):
    cursor = cnx.cursor()
    query = "INSERT INTO `User` (id, username, email, password, avatar, first_name, last_name, id_group) " \
            "VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
    values = (user.id, user.username, user.email, user.password, user.avatar, user.first_name, user.last_name,
              user.id_group)
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    return {"message": "User created successfully"}


# Create a permission
@app.post("/permissions")
def create_permission(permission: Permission):
    cursor = cnx.cursor()
    query = "INSERT INTO `Permission` (id, name) VALUES (%s, %s)"
    values = (permission.id, permission.name)
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    return {"message": "Permission created successfully"}


# Create a data
@app.post("/data")
def create_data(data: Data):
    cursor = cnx.cursor()
    query = "INSERT INTO `Data` (id, name, description, date_create, id_creator, file_csv, vis_exist) " \
            "VALUES (%s, %s, %s, %s, %s, %s, %s)"
    values = (data.id, data.name, data.description, data.date_create, data.id_creator, data.file_csv, data.vis_exist)
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    return {"message": "Data created successfully"}




# Create an access
@app.post("/access")
def create_access(access: Access):
    cursor = cnx.cursor()
    query = "INSERT INTO `Access` (id_group, id_permission) VALUES (%s, %s)"
    values = (access.id_group, access.id_permission)
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    return {"message": "Access created successfully"}


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
```
