import React, { useEffect } from 'react';
import { toast } from "react-hot-toast";
import DashboardComponent from '../component/dashboardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../redux/productSlide';


const Dashboard = () => {
    const dispatch = useDispatch();
    const orders=useSelector((state) => (state.product.orders));
    useEffect(() => {
        const getallorders = async () =>{
            try {
                const res=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/orders/adminDashboard`);
                const curr= await res.json();
                dispatch(setOrders(curr));
    
            } catch (error) {
                toast(error.data);
            }
        }
        getallorders();
    },[orders,dispatch])
    return (
        <div className='md:py-8 md:px-16 p-12 grid md:grid-cols-3 gap-8'>
            {orders.length > 0 && (
                orders.map((e) => (
                    <DashboardComponent name={e.name} email={e.email} address={e.address} items={e.items} _id={e._id} status={e.status}/>
                ))
            )}
        </div>
    );
}

export default Dashboard;
