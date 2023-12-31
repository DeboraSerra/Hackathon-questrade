export const createDbQuery = `CREATE DATABASE IF NOT EXISTS 'UserDb';
USE 'UserDb';

CREATE TABLE users (
  cpf varchar(11) NOT NULL UNIQUE PRIMARY,
  name varchar(100) NOT NULL,
  email varchar(100) NOT NULL UNIQUE,
  password varchar(100) NOT NULL,
  proofOfIncome varchar(255) NOT NULL,
  phone varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;`

export const createDB = "CREATE DATABASE IF NOT EXISTS UserDb;"

export const createTable = `CREATE TABLE IF NOT EXISTS UserDb.users (
  cpf varchar(11) NOT NULL UNIQUE PRIMARY KEY,
  name varchar(100) NOT NULL,
  email varchar(100) NOT NULL UNIQUE,
  password varchar(100) NOT NULL,
  proofOfIncome varchar(255) NOT NULL,
  phone varchar(13) NOT NULL
) ENGINE=InnoDB;`
