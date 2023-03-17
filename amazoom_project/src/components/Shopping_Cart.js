import React from 'react';
import './Shopping_Cart.css';

const Shopping_Cart = (props) => {
  const cartItems =(
    <ul className={classes['cart-items']}>
      {[{id:'c1', name:'car', amount:1, price:'23,998'}].map((item) => (
         <li>{item.name}</li>
      ))}
    </ul>
  );


  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>23,998</span>
      </div>
      <div className={classes.actions}> 
      <button className={classes['button--alt']}>Close</button>
      <button className={classes.button}>Order</button>
      </div>
    </div>
  );

};

export default Shopping_Cart;

















