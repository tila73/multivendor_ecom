import React, { useState, useEffect } from "react";
import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";
import SellerSidebar from "./SellerSidebar";

function AddProduct() {
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  useEffect(() => {
    const fetchMainCategories = async () => {
      const response = await fetch(
        "http://127.0.0.1:8000/api/main_categories/"
      );
      const data = await response.json();
      setMainCategories(data);
    };
    fetchMainCategories();
  }, []);

  useEffect(() => {
    const selectedMainCategoryObject = mainCategories.find(
      (category) => category.slug === selectedMainCategory
    );
    if (selectedMainCategoryObject) {
      setCategories(selectedMainCategoryObject.categories);
      setSelectedCategory("");
      setSubcategories([]);
      setSelectedSubcategory("");
    }
  }, [mainCategories, selectedMainCategory]);

  useEffect(() => {
    const selectedCategoryObject = categories.find(
      (category) => category.slug === selectedCategory
    );
    if (selectedCategoryObject) {
      setSubcategories(selectedCategoryObject.subcategories);
      setSelectedSubcategory("");
    }
  }, [categories, selectedCategory]);

  return (
    <div>
      <SellerHeader />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <SellerSidebar />
        <div className="p-6 bg-white rounded-lg shadow-xl lg:ml-6 lg:w-full">
          <h2 className="text-xl font-bold mb-4">Add Product</h2>
          <form>
            <div className="mb-4">
              <select
                className="border border-gray-400 p-2 w-full"
                name="maincategory"
                id="maincategory"
                value={selectedMainCategory}
                onChange={(event) =>
                  setSelectedMainCategory(event.target.value)
                }
              >
                <option value="">Add Product For</option>
                {mainCategories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>

              <label
                className="block font-medium mt-2 text-gray-700"
                htmlFor="category"
              >
                Select Category
              </label>
              <select
                className="border border-gray-400 p-2 w-full mt-2"
                name="category"
                id="category"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                disabled={!selectedMainCategory}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>

              <label
                className="block font-medium mt-2 text-gray-700"
                htmlFor="subcategory"
              >
                Select Subcategory
              </label>
              <select
                className="border border-gray-400 p-2 w-full mt-2"
                name="subcategory"
                id="subcategory"
                value={selectedSubcategory}
                onChange={(event) => setSelectedSubcategory(event.target.value)}
                disabled={!selectedCategory}
              >
                <option value="">Select Subcategory</option>
                {subcategories.map((subcategory) => (
                  <option key={subcategory.id} value={subcategory.slug}>
                    {subcategory.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="title"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="slug"
              >
                Slug
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="slug"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="price"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="w-full border border-gray-400 p-2"
                rows={6}
                id="description"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="brand"
              >
                Brand
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="brand"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="quantity"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="productImage"
              >
                Product Images
              </label>
              <input className="w-full" type="file" id="productImage" />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              type="submit"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
      <SellerFooter />
    </div>
  );
}

export default AddProduct;
