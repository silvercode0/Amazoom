import React, { useState, useEffect } from "react";
import {
  addProductToUserCart,
  getProducts,
  getProductsById,
  getUserCart,
  updateQuantity,
} from "../api/index.js";
import "./Products.css";
import { Link, useNavigate } from "react-router-dom";
// import Admin from "./Admin";
// import Footer from "./Footer";
// import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";

const Products = (props) => {
  const [loading, setLoading] = useState(false);
  const [guestCart, setGuestCart] = useState(localStorage.getItem("guestCart"));

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  const user = props.user;

  const successNotify = () => toast("Added to cart!");

  const products = props.products;
  const setProducts = props.setProducts;
  const userCart = props.userCart;
  const setUserCart = props.setUserCart;
  const fetchUserCart = props.fetchUserCart;
  const navigate = useNavigate();

  function handleBackToMyCart(e) {
    e.preventDefault();
    navigate("/Shopping_Cart/Cart_Items");
  }

  const addProduct = async (productId, price) => {
    if (userCart) {
      const quantity = 1;
      const addedToCart = await addProductToUserCart(
        productId,
        price,
        quantity
      );
      if (addedToCart.message) {
        const mappedForUpdate = await Promise.all(
          userCart.map(async (item) => {
            if (item.productId == productId) {
              const updated = await updateQuantity(item.id, item.quantity + 1);
              return updated;
            } else {
              return item;
            }
          })
        );
        setUserCart(mappedForUpdate);
      } else {
        setUserCart([...userCart, addedToCart]);
      }
    }
  };

  async function addToCart(productId) {
    let existingItems;
    let holder = await getProductsById(productId);
    let product = holder.products;
    const tempID = productId;
    const newCartItem = {
      tempID: tempID,
      product: {
        price: product.price,
        image_url: product.image_url,
        name: product.name,
        id: product.id,
        quantity: 1,
      },
    };

    if (localStorage.getItem("guestCart") == null) {
      existingItems = [];
      existingItems.push(newCartItem);
      localStorage.setItem("guestCart", JSON.stringify(existingItems));
    } else {
      existingItems = JSON.parse(localStorage.getItem("guestCart"));

      const filteredItem = existingItems.filter((item) => {
        return item.tempID == productId;
      });
      if (filteredItem.length) {
        filteredItem[0].product.quantity = parseInt(
          filteredItem[0].product.quantity + 1
        );
        const filteredExistingItems = existingItems.filter((item) => {
          return item.tempID != productId;
        });
        filteredExistingItems.push(filteredItem[0]);
        localStorage.setItem(
          "guestCart",
          JSON.stringify(filteredExistingItems)
        );
      } else {
        existingItems.push(newCartItem);
        localStorage.setItem("guestCart", JSON.stringify(existingItems));
      }
    }

    localStorage.setItem("guestCart", JSON.stringify(existingItems));

    let tester = localStorage.getItem("guestCart");
  }

  return (
    <div>
      {loading ? (
        <div id="theLoader">
          {/* <RingLoader
            id="ringer"
            size={150}
            color={"#d636d0"}
            loading={loading}
          />{" "} */}
        </div>
      ) : (
        <div id="wholeThing">
          <h1 className="WholeProducts"></h1>
          <div id="container">
            {products.length ? (
              products.map((product) => {
                return (
                  <div key={`product-${product.id}`} className="productBox">
                    <div className="productName">{product.name}</div>
                    <div className="productDescription">
                      {product.description}
                    </div>
                    <div className="productInStock">
                      {product.stock} In Stock
                    </div>
                    <div className="productPrice">${product.price / 100}</div>

                    <div id="frame">
                      <img id="productImage" src={`${product.image_url}`} />
                    </div>

                    <div id="buttonContainer">
                      {user ? (
                        <button
                          id="leftButton"
                          className="productButton"
                          onClick={() => {
                            addProduct(product.id, product.price);
                            successNotify();
                          }}
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <button
                          id="leftButton"
                          className="productButton"
                          onClick={() => {
                            addToCart(product.id, product.price);
                            successNotify();
                          }}
                        >
                          Add to Cart
                        </button>
                      )}

                      <Link to={`/product/${product.id}`}>
                        <button id="middleButton" className="productButton">
                          More Info
                        </button>
                      </Link>

                      <button
                        id="rightButton"
                        className="productButton"
                        onClick={handleBackToMyCart}
                      >
                        My Cart
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div id="loadingProducts">Loading your products... 
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jdpower.com%2Fcars%2Fshopping-guides%2Faverage-weight-of-a-car&psig=AOvVaw3RxNKyNlTqnrm99irygrRp&ust=1679446853297000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDu65rp6_0CFQAAAAAdAAAAABAE" alt="Car"></img>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;