import { BiCategoryAlt } from "react-icons/bi";

const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick} className="flex flex-col items-center">
      <div className={`text-3xl p-4 flex  items-center w-24 h-24 justify-center rounded-full cursor-pointer ${isActive ? "bg-red-600 text-white" : "bg-main2color"}`}>
      <BiCategoryAlt />
      </div>
      <p className="text-center text-white font-medium my-1 capitalize p-2 ">{category}</p>
    </div>
  );
};

export default FilterProduct;
