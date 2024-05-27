import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../redux/productSlide.js";

const Cart = () => {
  let final_obj;
  const dispatch = useDispatch();
  const Submit = async () => {
    const user = useSelector((state) => state.user);
    const curr = useSelector((state) => state.product.cartItem);
    var cart = [];
    for (let i = 0; i < curr.length; i++) {
      cart.push({
        name: curr[i].name,
        _id: curr[i]._id,
        price: curr[i].price,
        qty: curr[i].qty
      })
    }
    final_obj = {
      userid : user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      status : 0,
      items: cart
    }
  };
  Submit();
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
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/payment`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(final_obj),
        }
      );
      if (res.statusCode === 500) return;
      toast("Redirect to payment Gateway...!");
      setTimeout(() => {
        navigate("/");
        const see=async()=>{
          const order_status = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/orders/order`, {
            method: "post",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(final_obj)
          })
          const val = await order_status.json();
          if (!val.alert) {
            toast(val.data);
          }
          else {
            toast(val.data);
            dispatch(emptyCart());
          }
        }
        see();
      }, 3000);
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
