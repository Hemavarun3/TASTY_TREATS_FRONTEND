import React from 'react';
import RowComponent from './RowComponent.js';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder } from '../redux/productSlide.js';
import toast from 'react-hot-toast';

const DashboardComponent = ({name,email,address,items,_id,status},index) => {
    const dispatch = useDispatch();
    const user=useSelector((state) => state.user)
    const handleOrder = () => {
        const deleteo= async () => {
            const res=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/orders/ordertatusupdate`,{
              method : "POST",
              headers : {
                "content-type" : "application/json"
              },
              body : JSON.stringify({
                _id : _id,
                name : name,
                email : email,
                status : status,
                address : address,
                items : items
              })
            })
            const result=await res.json();
            if(toast.alert)
            {
                dispatch(deleteOrder({
                    _id : _id
                }));
            }
            toast(result.data);
        }
        deleteo();
    }
    return (
        <div className='bg-yellow-600 text-white font-semibold flex flex-col items-center p-4 rounded-2xl'>
            <div className='flex space-x-4 w-full'>
                <div className='w-1/4'>
                   <h1>Name </h1>
                </div>
                <div className='w-3/4 items-start'>
                   <h1>{name}</h1>
                </div>
            </div>
            <div className='flex space-x-4 w-full'>
                <div className="w-1/4">
                   <h1>email</h1>
                </div>
                <div className='w-3/4'>
                   <h1>{email}</h1>
                </div>
            </div> 
            <div className='flex space-x-4 w-full'>
                <div className="w-1/4">
                   <h1>address</h1>
                </div>
                <div className='w-3/4'>
                   <span>{address}</span>
                </div>
            </div>
            <div className='flex space-x-4 w-full'>
                <div className="w-1/4">
                   <h1>items</h1>
                </div>
                <div className='w-3/4'>
                    {
                        items.map((e) => (
                            <RowComponent name={e.name} quantity={e.qty}/>
                        ))
                    }
                </div>
            </div>
            {user.email===process.env.REACT_APP_ADMIN_EMAIL && <div className='flex space-x-4 w-full justify-center pt-4'>
            <button className='rounded-2xl bg-main2color px-4 py-2 w-1/2' onClick={handleOrder}>Done</button>
            </div>}
        </div>
    );
}

export default DashboardComponent;
