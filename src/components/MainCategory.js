import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function MainCategoryPage() {
  const { maincategory_slug } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/${maincategory_slug}/`)
      .then((response) => response.json())
      .then((data) => setCategories(data.categories));
  }, [maincategory_slug]);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-8">
        <p className="mt-3 p-2">
          {categories.length > 0 ? categories[0].main_category_name : ""}
        </p>
        <h3 className="text-2xl font-bold text-center mb-5">
          Shop by Category
        </h3>

        <div className="grid grid-cols-1 gap-10 mb-20">
          {categories.map((category) => (
            <div key={category.slug} className="p-2">
              <Link to={`/${maincategory_slug}/${category.slug}`}>
                <h4 className="text-xl font-bold">{category.name}</h4>
              </Link>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                {category.subcategories.map((subcategory) => (
                  <div
                    key={subcategory.slug}
                    className="bg-white p-5 shadow-lg rounded-lg flex flex-col items-center"
                  >
                    <Link
                      to={`/${maincategory_slug}/${category.slug}/${subcategory.slug}`}
                    >
                      <img
                        src={`http://127.0.0.1:8000${subcategory.image}`}
                        className="w-40 h-40 mb-5"
                        alt={subcategory.name}
                      />
                      <h5 className="text-lg font-bold">{subcategory.name}</h5>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainCategoryPage;
