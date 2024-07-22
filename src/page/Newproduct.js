import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsCloudUpload } from 'react-icons/bs';

const Newproduct = () => {
  const [data, setData] = useState({
    name: '',
    category: '',
    image: '',
    price: '',
    description: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET); // Replace with your upload preset

    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });
    const result = await res.json();

    setData((prev) => ({
      ...prev,
      image: result.secure_url,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, image, category, price, description } = data;

    if (name && image && category && price && description) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/products/uploadProduct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const fetchRes = await fetchData.json();
      toast(fetchRes.message);

      setData({
        name: '',
        category: '',
        image: '',
        price: '',
        description: '',
      });
    } else {
      toast('Enter required fields');
    }
  };

  return (
    <div className="p-4">
      <form className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-maincolor text-white" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category</label>
        <select
          className="bg-slate-200 p-1 my-1"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value="other">Select category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="South Indian">South Indian</option>
          <option value="Rice">Rice</option>
          <option value="Beverages">Beverages</option>
          <option value="Burger">Burger</option>
          <option value="Maggi">Maggi</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Cake">Cake</option>
          <option value="Evening Special">Evening Special</option>
        </select>

        <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img src={data.image} className="h-full" alt="imag" />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}
            <input
              type="file"
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>
        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type="text"
          className="bg-slate-200 p-1 my-1"
          name="price"
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={2}
          value={data.description}
          className="bg-slate-200 p-1 my-1 resize-none"
          name="description"
          onChange={handleOnChange}
        ></textarea>

        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow">
          Save
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
