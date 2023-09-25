import React, { useState } from "react";

const SearchForItem = ({ catProducts, handleItemCategory }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categorySelect, setCategorySelect] = useState("All");

  // Pseudocode
  function onCategoryChange() {
    const categoryFiltered = catProducts.filter((item) => {
      if (categorySelect === "All") return true;
      return item.category === categorySelect;
    });
    return handleItemCategory(categoryFiltered);
  }

  const handleSearchChange = ({ target }) => {
    const value = target.value;
    setSearchTerm(value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategorySelect(value);
    onCategoryChange();
  };

  const newArrayCategories = catProducts.map((product) => {
    return product.category;
  });

  const filteredCategories = [...new Set(newArrayCategories)];

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
      <select onChange={handleCategoryChange} value={categorySelect}>
        <option value="All">Filter by Category</option>
        {searchByCategory}
      </select>
    </div>
  );
};

export default SearchForItem;
