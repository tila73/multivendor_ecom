import React from "react";
import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";
import SellerSidebar from "./SellerSidebar";

function AddProduct() {
  return (
    <div>
      <SellerHeader />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <SellerSidebar />
        <div className="p-6 bg-white rounded-lg shadow-xl lg:ml-6 lg:w-full">
          <h2 className="text-xl font-bold mb-4">Add Product</h2>
          <form>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="category"
              >
                Category
              </label>
              <select
                className="border border-gray-400 p-2 w-full"
                name=""
                id="category"
              >
                <option value="">Dry Food</option>
                <option value="">Wet Food</option>
                <option value="">Treats</option>
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
