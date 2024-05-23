import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePayment = async () => {
    if (user.email) {
      const stripePromise = await loadStripe(
        process.env.REACT_APP_STRIPE_PUBLIC_KEY
      );
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productCartItem),
        }
      );
      if (res.statusCode === 500) return;

      const data = await res.json();
      console.log(data);

      toast("Redirect to payment Gateway...!");
      stripePromise.redirectToCheckout({ sessionId: data });
    } else {
      toast("You have not Login!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };
  return (
    <>
      {productCartItem[0] ? (
        <div className="w-full flex flex-col md:flex-row space-y-16 items-center my-8 px-24 space-x-16">
          <div className="flex flex-col md:w-1/2">
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-main2color">
                Your Cart Items
              </h2>
            </div>
            <div className="max-w-2xl space-y-8">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>
          </div>

          <div className="md:w-1/4  bg-yellow-600 p-4 text-white font-semibold rounded-2xl">
              <h2 className="px-24 fon rounded-2xl text-white text-lg">
                Summary
              </h2>
              <div className="space-y-4">
              <div className="flex bg-main2color rounded-2xl p-4 items-center w-full py-2 ">
              <p>Total Qty :</p>
              <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>
            <div className="flex w-full py-2  bg-main2color rounded-2xl p-4  justify-between">
              <p>Total Price</p>
              <p className="ml-auto w-32 font-bold">
                <span className="text-white">₹</span> {totalPrice}
              </p>
            </div>
            <button
              className="bg-main2color w-full px-4 py-2 rounded-2xl"
              onClick={handlePayment}
            >
              Payment
            </button>
              </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex w-full space-y-4 justify-center items-center flex-col mt-20">
            <img src={emptyCartImage} className="w-full max-w-sm rounded-3xl" alt="imag" />
            <p className="text-main2color text-3xl font-bold">Empty Cart</p>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
