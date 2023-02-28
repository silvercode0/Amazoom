// Const Variables go here that will be used in this file

const client = require("./client")

async function dropTables() {
    try {
      console.log("Dropping All Tables...")
  
      await client.query(`
      DROP TABLE IF EXISTS supplier;
      DROP TABLE IF EXISTS shopping_cart;
      DROP TABLE IF EXISTS product;
      DROP TABLE IF EXISTS users;
      `)
  
      console.log("Done Droping Tables")
    } catch (error) {
      throw error;
    }
    // drop all tables, in the correct order '
}

async function createTables() {

    try {
      console.log("Starting to build tables...")
    // create all tables, in the correct order
      await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL
        );
        CREATE TABLE product (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) UNIQUE NOT NULL,
          description TEXT NOT NULL
        );
        CREATE TABLE shopping_cart (
          id SERIAL PRIMARY KEY,
          "shopping_cartId" INTEGER REFERENCES users(id),
          "isPublic" BOOLEAN DEFAULT false,
          name VARCHAR(255) UNIQUE NOT NULL,
          goal TEXT NOT NULL
        );
        CREATE TABLE supplier (
          id SERIAL PRIMARY KEY,
          "supplierId" INTEGER REFERENCES supplier (id),
          "productId" INTEGER REFERENCES product (id),
          duration INTEGER, 
          count INTEGER,
          UNIQUE ("supplierId","productId")
        );
      `)
      console.log("Done Creating Tables")
    } catch (error) {
      throw error;
    }
  }


