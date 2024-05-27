import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "./CardFeature";
import FilterProduct from "./FilterProduct";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);

  const [filterBy, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    if (productData.length > 0) {
      setDataFilter(productData);
    }
  }, [productData]);

  const categoryList = [...new Set(productData.map((el) => el.category))];

  const handleFilterProduct = (category) => {
    setFilterBy(category);
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(filter);
  };

  const loadingArrayFeature = new Array(1).fill(null);

  return (
    <div className="my-5 flex flex-col items-center">
      <h2 className="font-bold text-main2color text-2xl  mb-4">{heading}</h2>

      <div className="flex space-x-5 justify-center overflow-scroll scrollbar-none">
        {categoryList.length > 0 ? (
          categoryList.map((el) => (
            <FilterProduct
              category={el}
              key={el}
              isActive={el.toLowerCase() === filterBy.toLowerCase()}
              onClick={() => handleFilterProduct(el)}
            />
          ))
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
      </div>

      <div className="gap-16 my-4 flex md:flex-row md:flex-wrap flex-col justify-center">
        {dataFilter.length > 0 ? (
          dataFilter.map((el) => (
            <CardFeature
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              category={el.category}
              price={el.price}
            />
          ))
        ) : (
          loadingArrayFeature.map((el, index) => (
            <CardFeature loading="Loading..." key={index + "allProduct"} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllProduct;
