import React from "react";
import "./FriendCart.css";

const FriendsCart = (props) => {
  const cart = props.cart;
  const totalsalary = cart.reduce((previceValue, currentValue) => previceValue + currentValue.salary, 0);
  console.log(cart);
  return (
    <div>
      <h4 className="text-center">Friends Salary: {cart.length}</h4>
      {/* {cart.map((cartitem) => ( */}
      <div className="show-salary">
        {cart.map((cartitem) => (
          <div className="row">
            <p className="text-left">
              {cartitem.name.first} {cartitem.name.last}
            </p>
            <p>$ {cartitem.salary}</p>
          </div>
        ))}
      </div>
      {/* ))} */}
      <h3 className="text-center">Total Salary:$ {totalsalary}</h3>
    </div>
  );
};

export default FriendsCart;
