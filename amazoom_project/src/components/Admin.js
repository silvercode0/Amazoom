import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../api-adapter";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import { getProducts, deleteProduct } from "../api";

import "./Admin.css";

const AdminPage = () => {
  return (
    <div>
      <h2 className="adminpage-header">Welcome Admin</h2>
      <span>
        <Link to="/AdminProducts" className="adminpage-link">
          Products
        </Link>
      </span>
      <span>
        <Link to="/AdminUsers" className="adminpage-link">
          User Data
        </Link>
      </span>
    </div>
  );
};

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    let placeholder = await getProducts();
    setProducts(placeholder.products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function handleDelete(productId) {
    const adminProductId = Number(productId);
    const token = localStorage.getItem("token");
    const deleted = await deleteProduct(adminProductId, token);

    if (products) {
      let allProducts = await fetchProducts();
      if (allProducts) {
        setProducts(allProducts.products);
        fetchProducts();
      }
    }
  }

  return (
    <div>
      <h2 className="adminproducts-header">Product Data</h2>
      <CreateProduct
        products={products}
        fetchProducts={fetchProducts}
        setProducts={setProducts}
      />

      <div id="container">
        {products.length ? (
          products.map((product) => {
            return (
              <div key={`product-${product.id}`} className="productBox-admin">
                <div className="productName">{product.name}</div>
                <div className="productDescription">
                  Description: {product.description}
                </div>

                <div className="productInStock">In stock: {product.stock}</div>
                <div className="productID">Price: {product.price}</div>
                <img id="productImage" src={`${product.image_url}`} />
                {/* <button>Add to cart</button> */}
                <Link to={`/product/${product.id}`} className="moreinfo">
                  <button>Display More Info</button>
                </Link>

                <EditProduct
                  product={product}
                  products={products}
                  setProducts={setProducts}
                  fetchProducts={fetchProducts}
                />
                <button
                  id={product.id ? `${product.id}` : null}
                  onClick={() => handleDelete(product.id)}
                >
                  Delete Product
                </button>
              </div>
            );
          })
        ) : (
          <div id="loadingProducts">Loading your products... </div>
        )}
      </div>
    </div>
  );
};


const AdminUsers = () => {
    const [users, setUsers] = useState([]);
  
    async function fetchUsers() {
      let allUsers = await getAllUsers();
      setUsers(allUsers.users);
    }
    useEffect(() => {
      fetchUsers();
    }, []);
  
    return (
      <div id="wholeList">
        <div className="adminusers-container">
          <h3 id="userHeader">User Data</h3>
          {users && users.length ? (
            users.map((user) => {
              return (
                <div id="contactSingle">
                  <div key={`adminuser-${user.id}`}>
                    <div className="userId">
                      User: #{`${user.id}`.padStart(4, "0")}
                    </div>
                    <div className="userName">Username: {user.username}</div>
                    <div className="email">Email: {user.email}</div>
                    <div className="address">Address: {user.address}</div>
                    <br></br>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    );
};

const CreateProduct = (props) => {
    const products = props.products;
    const setProducts = props.setProducts;
    const fetchProducts = props.fetchProducts;
  
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [detailed_description, setDetailedDescription] = useState("");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [image_URL, setImage_URL] = useState("");
  
    async function handleSubmit(e) {
      e.preventDefault();
      const newProduct = await createProduct(
        name,
        description,
        detailed_description,
        stock,
        image_URL,
        price
      );
      if (products) {
        let allProducts = await fetchProducts();
        if (allProducts) {
          setProducts(allProducts.products);
          fetchProducts();
        }
      }
    }
  
    return (
      <div className="adminproduct-container">
        <h3>Create New Product</h3>
        <div id="theForms">
          <form onSubmit={handleSubmit} className="adminproduct">
            <input
              class="myInputs"
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Product Name"
            />
            <input
              class="myInputs"
              type="text"
              name="description"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              label="Product Description"
            />
  
            <input
              class="myInputs"
              type="text"
              name="inStock"
              placeholder="quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              label="Product InStock"
            />
  
            <input
              class="myInputs"
              type="text"
              name="image"
              placeholder="image url"
              value={image_URL}
              onChange={(e) => setImage_URL(e.target.value)}
              label="Product Image"
            />
  
            <input
              class="myInputs"
              type="number"
              min="0"
              step="0.01"
              name="price"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="Product Price"
            />
            <textarea
              className="createproduct-description"
              type="text"
              name="detailed_description"
              placeholder="detailed description"
              value={detailed_description}
              onChange={(e) => setDetailedDescription(e.target.value)}
              label="Detailed Product Description"
            />
          </form>
          <button className="editproduct-button" type="submit">
            Create Product
          </button>
        </div>
      </div>
    );
};
  
const EditProduct = (props) => {
    const product = props.product;
    const products = props.products;
    const setProducts = props.setProducts;
    const fetchProducts = props.fetchProducts;
  
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newDetailedDescription, setNewDetailedDescription] = useState("");
    const [newStock, setNewStock] = useState("");
    const [newImage_URL, setNewImage_URL] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [update, setUpdate] = useState(false);
  
    useEffect(() => {
      setNewName(product.name);
      setNewDescription(product.description);
      setNewDetailedDescription(product.detailed_description);
      setNewStock(product.stock);
      setNewImage_URL(product.image_url);
      setNewPrice(product.price);
    }, [product]);
  
    async function handleSubmit(e) {
      e.preventDefault();
      const update = e.target.id;
      const updated = await updateProduct(update, {
        name: newName,
        description: newDescription,
        detailed_description: newDetailedDescription,
        stock: newStock,
        image_url: newImage_URL,
        price: newPrice,
      });
      if (products) {
        let allProducts = await fetchProducts();
        if (allProducts) {
          setProducts(allProducts.products);
          fetchProducts();
        }
      }
      setUpdate(false);
    }
  
    return (
      <>
        <div className="edit-product">
          {update ? (
            <form
              onSubmit={handleSubmit}
              id={product.id}
              className="editproduct-container"
            >
              <h3>Update your product!</h3>
              <input
                className="editproduct-name"
                name="name"
                type="text"
                value={newName}
                placeholder="name"
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              ></input>
              <input
                className="editproduct-description"
                name="description"
                type="text"
                value={newDescription}
                placeholder="description"
                onChange={(e) => {
                  setNewDescription(e.target.value);
                }}
              ></input>
  
              <input
                className="editproduct-stock"
                name="stock"
                type="number"
                value={newStock}
                placeholder="stock"
                onChange={(e) => {
                  setNewStock(e.target.value);
                }}
              ></input>
              <input
                className="editproduct-image"
                name="image"
                type="text"
                value={newImage_URL}
                placeholder="image URL"
                onChange={(e) => {
                  setNewImage_URL(e.target.value);
                }}
              ></input>
              <input
                className="editproduct-price"
                name="price"
                type="text"
                value={newPrice}
                placeholder="price"
                onChange={(e) => {
                  setNewPrice(e.target.value);
                }}
              ></input>
  
              <textarea
                className="editproduct-detailed-description"
                name="detailed description"
                type="text"
                value={newDetailedDescription}
                placeholder="detailed description"
                onChange={(e) => {
                  setNewDetailedDescription(e.target.value);
                }}
              ></textarea>
  
              <button
                type="button"
                className="myproducts-button"
                onClick={() => {
                  setUpdate(false);
                }}
              >
                Undo
              </button>
              <button type="submit" className="myproducts-button">
                Update product
              </button>
            </form>
          ) : (
            <button
              className="myproducts-button"
              type="submit"
              onClick={() => {
                setUpdate(true);
              }}
            >
              Edit Product
            </button>
          )}
        </div>
      </>
    );
};
  

export default { AdminPage, AdminProducts, AdminUsers, CreateProduct, EditProduct }
