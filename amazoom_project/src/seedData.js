// Const Variables go here that will be used in this file

// const {
//   createUser,
//   createProduct,
//   createShoppingCart,
//   getShoppingCart,
//   getAllProducts,
//   addSupplierToProduct
// } = require('./');

<<<<<<< HEAD
const { createUser } = require( "./users");
const{createProduct}=require("./Products")
const{createReviews}=require('./reviews')
const client = require("./client");
const { createShoppingCart } = require("./Shopping_Cart");
const{addItemsToCart}=require("./shopping_cartitems")
=======
const { createUser } = require( "./Users");
const{createProduct}=require("./Products")
const{createReviews}=require('./Reviews')
const client = require("./client");
const { createShoppingCart } = require("./Shopping_Cart");
const{addItemsToCart}=require("./Shopping_CartItems")
>>>>>>> 1d54af54c3f92775aa6ea8dc703c46ab48ca8cba
async function dropTables() {
  try {
    console.log('Dropping All Tables...');
    await  client.query(`
      DROP TABLE IF EXISTS cart_items;
      DROP TABLE IF EXISTS cart;
      DROP TABLE IF EXISTS ratings;
      DROP TABLE IF EXISTS cars;
      DROP TABLE IF EXISTS users;
      `)
    console.log('finished dropping tables')
  } catch(error) {
    console.log("error dropping tables")
  }
};

async function createTables() {
  console.log('Starting to build tables')
  try {
    await  client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        email varchar(255) UNIQUE NOT NULL,
        firstname varchar(255) NOT NULL,
        lastname varchar(255) NOT NULL,
        street varchar(255) NOT NULL,
        city varchar(255) NOT NULL,
        state varchar(255) NOT NULL,
        zip varchar(255) UNIQUE NOT NULL,
        phone varchar(255) UNIQUE NOT NULL,
        isadmin BOOLEAN DEFAULT FALSE
      );
    `)
    await client.query(`
      CREATE TABLE cars (
        id SERIAL PRIMARY KEY,
        make varchar(255) NOT NULL,
        model varchar(255) NOT NULL,
        year integer,
        price DECIMAL(10, 2) NOT NULL,
        inventory integer,
        condition varchar(255) NOT NULL,
        engine varchar(255) NOT NULL,
        transmission varchar(255) NOT NULL,
        drivetrain varchar(255) NOT NULL,
        fuel varchar(255) NOT NULL,
        exteriorcolor varchar(255) NOT NULL,
        interiorcolor varchar(255) NOT NULL,
        description varchar(255) NOT NULL
      );
    `)
    await client.query(`
      CREATE TABLE ratings (
        id SERIAL PRIMARY KEY,
        userid integer REFERENCES users(id),
        vehicleid integer REFERENCES cars(id),
        review varchar(255) NOT NULL,
        stars integer
      );
    `),
    await client.query(`
      CREATE TABLE cart (
        id SERIAL PRIMARY KEY,
        user_id integer REFERENCES users(id),
        total_price varchar(255),
        date_purchased varchar(255),
        transactioncomplete BOOLEAN DEFAULT FALSE
      );
    `),
    await client.query(`
      CREATE TABLE cart_items (
        id SERIAL PRIMARY KEY,
        cart_id integer REFERENCES cart(id),
        vehicle_id integer REFERENCES cars(id),
        quantity integer DEFAULT 0
      );
    `),
    console.log('finished creating tables')
  } catch (error) {
    console.log(error)
  }
};