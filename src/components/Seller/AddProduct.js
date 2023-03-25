import React, { useState, useEffect } from "react";
import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";
import SellerSidebar from "./SellerSidebar";
import axios from "axios";

function AddProduct() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sellerId = localStorage.getItem("seller_id");
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [brands, setBrands] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const [productData, setProductData] = useState({
    main_category: "",
    category: "",
    subcategory: "",
    brand: "",
    title: "",
    slug: "",
    detail: "",
    price: "",
    productImage: "",
    quantity: "",
  });

  const handleChange = (event) => {
    if (event.target.name === "category") {
      setSelectedCategory(event.target.value);
      setProductData({
        ...productData,
        [event.target.name]: event.target.value,
        subcategory: "", // reset subcategory value
      });
    } else if (event.target.name === "subcategory") {
      setSelectedSubcategory(event.target.value);
      setProductData({
        ...productData,
        [event.target.name]: event.target.value,
      });
    } else if (event.target.name === "maincategory") {
      setSelectedMainCategory(event.target.value);
      setProductData({
        ...productData,
        [event.target.name]: event.target.value,
        category: "", // reset category and subcategory values
        subcategory: "",
      });
    } else {
      setProductData({
        ...productData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleFileChange = (event) => {
    setProductData({
      ...productData,
      [event.target.name]: event.target.files[0],
    });
  };

  // Fetch brands
  useEffect(() => {
    try {
      axios.get(baseUrl + "brands/").then((res) => {
        setBrands(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Fetch main categories
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
      (category) => category.id === parseInt(selectedMainCategory)
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
      (category) => category.id === parseInt(selectedCategory)
    );
    if (selectedCategoryObject) {
      setSubcategories(selectedCategoryObject.subcategories);
      setSelectedSubcategory("");
    }
  }, [categories, selectedCategory]);

  // Clear form after submission
  const resetForm = () => {
    setSelectedMainCategory("");
    setCategories([]);
    setSelectedCategory("");
    setSubcategories([]);
    setSelectedSubcategory("");
    setProductData({
      main_category: "",
      category: "",
      subcategory: "",
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const _formData = new FormData();
    _formData.append("main_category", productData.main_category);
    _formData.append("category", productData.category);
    _formData.append("subcategory", productData.subcategory);
    _formData.append("brand", productData.brand);
    _formData.append("vendor", sellerId);
    _formData.append("title", productData.title);
    _formData.append("slug", productData.slug);
    _formData.append("detail", productData.detail);
    _formData.append("price", productData.price);
    _formData.append(
      "image",
      productData.productImage,
      productData.productImage.name
    );
    _formData.append("quantity", productData.quantity);

    try {
      axios
        .post(baseUrl + "product-create/", _formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          resetForm(); // call the resetForm function
          event.target.reset();
          setFormSubmitted(true);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <SellerHeader />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <SellerSidebar />
        <div className="p-6 bg-white rounded-lg shadow-xl lg:ml-6 lg:w-full">
          <h2 className="text-xl font-bold mb-4">Add Product</h2>
          <form onSubmit={formSubmit}>
            <div className="mb-4">
              <select
                className="border border-gray-400 p-2 w-full"
                name="main_category"
                id="main_category"
                value={selectedMainCategory}
                onChange={(event) => {
                  setSelectedMainCategory(event.target.value);
                  handleChange(event);
                }}
              >
                <option value="">Add Product For</option>
                {mainCategories.map((category) => (
                  <option key={category.id} value={category.id}>
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
                onChange={(event) => {
                  setSelectedCategory(event.target.value);
                  handleChange(event);
                }}
                disabled={!selectedMainCategory}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
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
                onChange={(event) => {
                  setSelectedSubcategory(event.target.value);
                  handleChange(event);
                }}
                disabled={!selectedCategory}
              >
                <option value="">Select Subcategory</option>
                {subcategories.map((subcategory) => (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="brand"
              >
                Brand
              </label>
              <select
                className="border border-gray-400 p-2 w-full"
                name="brand"
                onChange={handleChange}
              >
                <option value="">Select Product Brand</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand.id}>
                    {brand.name}
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
                name="title"
                onChange={handleChange}
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
                name="slug"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="detail"
              >
                Description
              </label>
              <textarea
                className="w-full border border-gray-400 p-2"
                rows={6}
                id="detail"
                name="detail"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="number"
                className="border border-gray-400 p-2 w-full"
                id="price"
                name="price"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="productImage"
              >
                Product Images
              </label>
              <input
                className="w-full"
                type="file"
                id="productImage"
                name="productImage"
                onChange={handleFileChange}
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
                type="number"
                className="border border-gray-400 p-2 w-full"
                id="quantity"
                name="quantity"
                onChange={handleChange}
              />
            </div>
            {formSubmitted && (
              <p className="text-green-600 text-lg pb-2 font-semibold">
                Product added successfully!
              </p>
            )}
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
