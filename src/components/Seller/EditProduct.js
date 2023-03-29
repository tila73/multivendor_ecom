import React, { useState, useEffect } from "react";
import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";
import SellerSidebar from "./SellerSidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditProduct() {
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
  const { product_id } = useParams();

  const [productData, setProductData] = useState({
    main_category: "",
    category: "",
    subcategory: "",
    brand: "",
    title: "",
    slug: "",
    detail: "",
    price: "",
    quantity: "",
    prev_image: "",
    image: "",
    prev_product_images: "",
    product_images: [],
  });

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

  // Fetch current product data and set it to the form fields
  useEffect(() => {
    try {
      axios.get(baseUrl + "vendor-product-detail/" + product_id).then((res) => {
        console.log(res.data);
        setSelectedMainCategory(res.data.main_category);
        setProductData({
          main_category: res.data.main_category,
          category: res.data.category,
          subcategory: res.data.subcategory,
          brand: res.data.brand,
          title: res.data.title,
          slug: res.data.slug,
          detail: res.data.detail,
          price: res.data.price,
          quantity: res.data.quantity,
          prev_image: res.data.image,
          image: "",
          prev_product_images: res.data.product_images,
          product_images: [],
        });

        const selectedMainCategoryObject = mainCategories.find(
          (category) => category.id === parseInt(res.data.main_category)
        );
        if (selectedMainCategoryObject) {
          setCategories(selectedMainCategoryObject.categories);
          setSelectedCategory(res.data.category);
          const selectedCategoryObject =
            selectedMainCategoryObject.categories.find(
              (category) => category.id === parseInt(res.data.category)
            );
          if (selectedCategoryObject) {
            setSubcategories(selectedCategoryObject.subcategories);
            setSelectedSubcategory(res.data.subcategory);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [product_id, mainCategories]);

  const handleChangeMainCategory = (event) => {
    const selectedMainCategoryId = event.target.value;
    setProductData({
      ...productData,
      [event.target.name]: selectedMainCategoryId,
    });
    setSelectedMainCategory(selectedMainCategoryId);
    const selectedMainCategoryObject = mainCategories.find(
      (category) => category.id === parseInt(selectedMainCategoryId)
    );
    if (selectedMainCategoryObject) {
      setCategories(selectedMainCategoryObject.categories);
      setSelectedCategory("");
      setSubcategories([]);
      setSelectedSubcategory("");
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategoryId = e.target.value;
    setProductData({
      ...productData,
      [e.target.name]: selectedCategoryId,
    });
    setSelectedCategory(selectedCategoryId);

    const selectedCategoryObject = categories.find(
      (category) => category.id === parseInt(selectedCategoryId)
    );
    if (selectedCategoryObject) {
      setSubcategories(selectedCategoryObject.subcategories);
      setSelectedSubcategory("");
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "subcategory") {
      setSelectedSubcategory(event.target.value);
      setProductData({
        ...productData,
        [event.target.name]: event.target.value,
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

  // const handleMultipleFileChange = (event) => {
  //   setProductData({
  //     ...productData,
  //     product_images: event.target.files,
  //   });
  // };

  const handleMultipleFileChange = (event) => {
    const files = event.target.files;
    const images = Array.from(files);
    const newProductImages = images.map((image) => ({
      name: image.name,
      content: image,
      type: image.type,
    }));
    setProductData({
      ...productData,
      product_images: newProductImages,
    });
  };

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
      detail: "",
    });
  };

  const formSubmit = async (event) => {
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
    _formData.append("quantity", productData.quantity);
    if (productData.image !== "") {
      _formData.append("image", productData.image, productData.image.name);
    }

    if (productData.product_images.length > 0) {
      productData.product_images.forEach((image) => {
        _formData.append("product_images", image.content, image.name);
      });
    }

    try {
      const response = await axios.put(
        baseUrl + "vendor-product-detail/" + product_id,
        _formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      resetForm();
      event.target.reset();
      setFormSubmitted(true);
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
          <h2 className="text-xl font-bold mb-4">Edit Product Information</h2>
          <form onSubmit={formSubmit}>
            <div className="mb-4">
              <select
                className="border border-gray-400 p-2 w-full"
                name="main_category"
                id="main_category"
                value={selectedMainCategory}
                onChange={handleChangeMainCategory}
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
                onChange={handleCategoryChange}
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
                onChange={handleChange}
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
                value={productData.brand}
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
                value={productData.title}
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
                value={productData.slug}
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
                value={productData.detail}
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
                value={productData.price}
                onChange={handleChange}
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
                value={productData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="image"
              >
                Featured Image
              </label>
              <input
                className="w-full"
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
              />
              <p className="font-medium my-4">Previous Image:</p>
              {productData.prev_image && (
                <img
                  src={productData.prev_image}
                  className="w-32"
                  alt="Product"
                />
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mt-6 mb-2"
                htmlFor="product_images"
              >
                Product Images (Multiple)
              </label>
              <input
                className="w-full"
                type="file"
                id="product_images"
                name="product_images"
                onChange={handleMultipleFileChange}
                multiple
              />
              <p className="font-medium mt-2">Previous Images:</p>
              <div className="flex">
                {productData.prev_product_images &&
                  productData.prev_product_images.map((image) => (
                    <img
                      src={image.image}
                      key={image.id}
                      className="mt-4 w-32 mr-4"
                      alt="Product"
                    />
                  ))}
              </div>
            </div>
            {formSubmitted && (
              <p className="text-green-600 text-lg pb-2 font-semibold">
                Product updated successfully!
              </p>
            )}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              type="submit"
            >
              Update Product
            </button>
          </form>
        </div>
      </div>
      <SellerFooter />
    </div>
  );
}

export default EditProduct;
