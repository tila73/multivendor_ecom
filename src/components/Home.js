import { useState, useEffect } from "react";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
// import pets from "../assets/pets.jpg";
import banner from "../assets/2.png";
import Footer from "./Footer";
import Header from "./Header";
import SingleMainCategory from "./SingleMainCategory";
import PopularCategories from "./PopularCategories";

function Home() {
  const [main_categories, setMainCategory] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("http://127.0.0.1:8000/api/main_categories/");
  }, []);

  useEffect(() => {
    document.title = "Home";
  });

  function fetchData(baseurl) {
    setLoading(true);
    setError(null);

    fetch(baseurl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setMainCategory(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/latest-products/")
      .then((response) => response.json())
      .then((data) => setLatestProducts(data.data))
      .catch((error) => console.error(error));
  }, []);

  // const slideLeft = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };

  // const slideRight = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };

  return (
    <div>
      <Header />
      <Link to="/shop">
        <img className="w-full" src={banner} alt="pets" />
      </Link>
      {/* <div><Link to="/dog" href="#">Dog</Link></div> */}
      <div className="my-8 mx-20">
        <h1 className="text-2xl font-bold">Latest Products</h1>
        {/* <div className="flex justify-center gap-x-10 pt-6"> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center gap-x-10">
          {latestProducts.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="h-44 w-40 pt-4 mt-3"
              />
              {/* <h1 className="mt-3 text-md font-medium">{product.title}</h1> */}
              <h1 className="mt-3 text-md font-medium">{product.title.slice(0, 40)}{product.title.length > 20 ? "..." : ""}</h1>
              <h3 className="text-md text-blue-500 font-medium	">Rs. {product.price}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Shop Products By Pet */}
      <div className="my-10">
        <h1 className="text-2xl font-bold ml-20" id="products-by-pet">
          Shop Products By Pet
        </h1>
        <div className="relative flex items-center mx-16">
          {/* <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          /> */}
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {/* {main_categories.map((main_category) => (
              <SingleMainCategory
                key={main_category.id}
                main_category={main_category}
              /> 
            ))} */}
            {error ? (
              <div>Error: {error}</div>
            ) : loading ? (
              <div>Loading...</div>
            ) : main_categories.length ? (
              main_categories.map((main_category) => (
                <SingleMainCategory
                  key={main_category.id}
                  main_category={main_category}
                />
              ))
            ) : (
              <div>No data found</div>
            )}
          </div>
          {/* <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          /> */}
        </div>
      </div>

      {/* Popular Categories */}
      <PopularCategories />

      <Footer />
    </div>
  );
}

export default Home;
