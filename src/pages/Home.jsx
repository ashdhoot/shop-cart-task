import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProducts } from "../store/actions/productsAction";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  let dispatch = useDispatch();

  let products = useSelector((state) => state.product.products); //get Products from store

  let addItem = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      window.alert("product added  successfullly..!!");
    }
    console.log(cartItems);
  }; //Selected Items are added to the Cart and if item is already added then if you click add to cart it will increase ite quantity.

  let updateQuantity = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
      window.alert("product quantity updated successfullly..!!");
    }
  }; // this wiil increase your number of quantity of item.

  let reduceQuantity = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      window.alert("product removed successfullly..!!");
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
      window.alert("product quantity updated successfullly..!!");
    }
  }; //this will reduce your number of quantity of item or if it is going less than 1 then it will remove your item from the cart.

  let getQuantity = () => {
    let qty = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return qty;
  }; //get total quantity of item.

  let getTotal = () => {
    let sum = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    return sum;
  }; //get total price of item

  useEffect(() => {
    dispatch(getProducts());
  }, []); //componentDidMount

  return (
    <div className="container">
      <div className="row">
        <h2 align="center">Welcome To Shop-Cart</h2>
        <div className="col">
          <div className="row">
            {products.map((product) => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={product.id}>
                <div
                  className="card pro__card mt-3"
                  style={{ height: "500px" }}
                >
                  <img
                    src={product.url}
                    alt=""
                    className="card-img-top img-fluid pro__image"
                    style={{ height: "250px" }}
                  />
                  <div className="card-body">
                    <h4>{product.title}</h4>
                    <p className="fs-5 text-muted mb-2">
                      Category:{product.category}
                    </p>
                    <p className="fs-4 mb-2">₹ {product.price}</p>
                    <div>
                      <button
                        className="btn btn-primary mb-2"
                        onClick={() => addItem(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-sm-12">
        {!cartItems.length && (
          <h3 align="center">Your Cart is Empty ...Please Browse Products</h3>
        )}
        <h3>Browse Products</h3>
        <table className="table table-light table-hover">
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.url} style={{ height: "6rem" }} />
                </td>
                <td>
                  Product-Name:
                  <p>
                    <strong>{item.title}</strong>
                  </p>
                </td>
                <td className="me-2">
                  Price:
                  <div>
                    <strong className="fs-4">₹{item.price}</strong>
                  </div>
                </td>

                <td>
                  <p>Quantity:</p>
                  <div className="d-flex">
                    <strong
                      style={{ cursor: "pointer" }}
                      onClick={() => updateQuantity(item)}
                      className="fs-4 me-1"
                    >
                      +
                    </strong>
                    <strong className="fs-3">{item.quantity}</strong>
                    <strong
                      style={{ cursor: "pointer" }}
                      onClick={() => reduceQuantity(item)}
                      className="fs-4 ms-1"
                    >
                      -
                    </strong>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card mb-2">
          <div className="card-body">
            <div className="d-flex justify-content-between ">
              <div>
                <p>Sub Total</p>
                <p>Quantity</p>
                <hr />
                <h5>Total</h5>
              </div>
              <div>
                <p>₹{getTotal()}</p>
                <p>{getQuantity()}</p>
                <hr />
                <h5>₹{getTotal()}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
