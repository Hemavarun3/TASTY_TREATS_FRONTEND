import React, { useEffect, useState } from 'react';
import { toast } from "react-hot-toast";
import DashboardComponent from '../component/dashboardComponent.js';
import { useSelector } from 'react-redux';

const UserOrders = () => {
    const [ordersPend, setOrdersPend] = useState([]);
    const [ordersCom, setOrdersCom] = useState([]);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const fetchPendingOrders = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/orders/userpendingorders`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        userid: user._id
                    })
                });
                const curr = await res.json();
                setOrdersPend(curr.data);
            } catch (error) {
                toast(error.message || "Failed to fetch pending orders");
            }
        }

        const fetchOrderHistory = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/orders/userorderhistory`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        userid: user._id
                    })
                });
                const curr2 = await res.json();
                setOrdersCom(curr2.data);
            } catch (error) {
                toast(error.message || "Failed to fetch order history");
            }
        }

        fetchPendingOrders();
        fetchOrderHistory();

        // const intervalId = setInterval(() => {
        //     fetchPendingOrders();
        //     fetchOrderHistory();
        // }, 1000);

        // // Cleanup interval on component unmount
        // return () => clearInterval(intervalId);

    }, [user._id]);

    return (
        <div className='text-main2color flex flex-col md:p-16 p-8'>
            <div>Pending Orders</div>
            <div className='md:py-8 md:px-16 p-12 grid md:grid-cols-3 gap-8'>
                {ordersPend.length > 0 ? (
                    ordersPend.map((e) => (
                        <DashboardComponent key={e._id} name={e.name} email={e.email} address={e.address} items={e.items} _id={e._id} status={e.status} />
                    ))
                ) : (
                    <p>No pending orders</p>
                )}
            </div>
            <div>Previous Orders</div>
            <div className='md:py-8 md:px-16 p-12 grid md:grid-cols-3 gap-8'>
                {ordersCom.length > 0 ? (
                    ordersCom.map((e) => (
                        <DashboardComponent key={e._id} name={e.name} email={e.email} address={e.address} items={e.items} _id={e._id} status={e.status} />
                    ))
                ) : (
                    <p>No previous orders</p>
                )}
            </div>
        </div>
    );
}

export default UserOrders;
