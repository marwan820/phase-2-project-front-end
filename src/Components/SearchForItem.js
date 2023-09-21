import React, { useState } from "react";

const SearchForItem = ({ catProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
 const [categorySelect,setCategorySelect] = useState("")

  //const searchFilter = catProducts.filter((product) => {
  //  if (searchTerm = "") return true
  //  return product.name.toLowerCase().includes(searchTerm.toLowerCase())
  //})
  //console.log(searchFilter)
  const handleSearchChange = ({ target }) => {
    const value = target.value
    setSearchTerm(value);
  };

  const handleCategoryChange = (e) =>{
    const value = e.target.value
    setCategorySelect((value))
  }
  console.log(categorySelect)
  
  const newArray = catProducts.map((product) => product.category);

  const filteredCategories = [...new Set(newArray)];


  const searchByCategory = filteredCategories.map((product) => {
    return (
      <option key={crypto.randomUUID()} value={product}>
        {product}
      </option>
    );
  });

  return (
    <div>
      <input
        id="search"
        value={searchTerm}
        type="text"
        placeholder="Search for product"
        onChange={handleSearchChange}
      />
      <select onChange={handleCategoryChange}>
        <option  value={categorySelect}>Filter by Category</option>
        {searchByCategory}
      </select>
    </div>
  );
};

export default SearchForItem;
