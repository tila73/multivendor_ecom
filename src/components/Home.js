import { useState, useEffect } from "react";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
// import pets from "../assets/pets.jpg";
import banner from "../assets/3.png";
import Footer from "./Footer";
import reactlogo from "../logo.svg";
import Header from "./Header";
import SingleMainCategory from "./SingleMainCategory";

function Home() {
  const [main_categories, setMainCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("http://127.0.0.1:8000/api/main_categories/");
  }, []);

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
        setMainCategory(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

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
      <a href="#products-by-pet">
        <img className="w-full" src={banner} alt="pets" />
      </a>
      {/* <div><Link to="/dog" href="#">Dog</Link></div> */}
      <div className="my-8 mx-20">
        <h1 className="text-2xl font-bold">Best Selling Products</h1>
        {/* <div className="flex justify-center gap-x-10 pt-6"> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center gap-x-10">
          <div>
            <img src={reactlogo} alt="" className="h-40 w-40 pt-4 mt-3" />
            <h1 className="mt-3">Product name</h1>
            <h3>300</h3>
            {/* <p className='cursor-pointer underline'>Add to cart</p> */}
            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              Add to cart
            </button>
          </div>
          <div>
            <img src={reactlogo} alt="" className="h-40 w-40 pt-4 mt-3" />
            <h1 className="mt-3">Product name</h1>
            <h3>300</h3>
            {/* <p className='cursor-pointer underline'>Add to cart</p> */}
            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              Add to cart
            </button>
          </div>
          <div>
            <img src={reactlogo} alt="" className="h-40 w-40 pt-4 mt-3" />
            <h1 className="mt-3">Product name</h1>
            <h3>300</h3>
            {/* <p className='cursor-pointer underline'>Add to cart</p> */}
            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              Add to cart
            </button>
          </div>
          <div>
            <img src={reactlogo} alt="" className="h-40 w-40 pt-4 mt-3" />
            <h1 className="mt-3">Product name</h1>
            <h3>300</h3>
            {/* <p className='cursor-pointer underline'>Add to cart</p> */}
            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              Add to cart
            </button>
          </div>
          <div>
            <img src={reactlogo} alt="" className="h-40 w-40 pt-4 mt-3" />
            <h1 className="mt-3">Product name</h1>
            <h3>300</h3>
            {/* <p className='cursor-pointer underline'>Add to cart</p> */}
            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              Add to cart
            </button>
          </div>
          <div>
            <img src={reactlogo} alt="" className="h-40 w-40 pt-4 mt-3" />
            <h1 className="mt-3">Product name</h1>
            <h3>300</h3>
            {/* <p className='cursor-pointer underline'>Add to cart</p> */}
            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Shop Products By Pet */}
      <div className="my-10">
        <h1 className="text-2xl font-bold ml-20" id="products-by-pet">Shop Products By Pet</h1>
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
      <div className="my-10 mx-20 justify-center">
        <h1 className="text-2xl font-bold">Popular Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-x-10">
          <div>
            <Link>
              <img
                src={reactlogo}
                alt="Dog Food"
                className="h-40 w-40 pt-4 mt-3"
              />
            </Link>
            <Link>Dog Food</Link>
          </div>
          <div>
            <Link>
              <img
                src={reactlogo}
                alt="Dog Food"
                className="h-40 w-40 pt-4 mt-3"
              />
            </Link>
            <Link>Dog Food</Link>
          </div>
          <div>
            <Link>
              <img
                src={reactlogo}
                alt="Dog Food"
                className="h-40 w-40 pt-4 mt-3"
              />
            </Link>
            <Link>Dog Food</Link>
          </div>
          <div>
            <Link>
              <img
                src={reactlogo}
                alt="Dog Food"
                className="h-40 w-40 pt-4 mt-3"
              />
            </Link>
            <Link>Dog Food</Link>
          </div>
          <div>
            <Link>
              <img
                src={reactlogo}
                alt="Dog Food"
                className="h-40 w-40 pt-4 mt-3"
              />
            </Link>
            <Link>Dog Food</Link>
          </div>
          <div>
            <Link>
              <img
                src={reactlogo}
                alt="Dog Food"
                className="h-40 w-40 pt-4 mt-3"
              />
            </Link>
            <Link>Dog Food</Link>
          </div>
          <div>
            <Link>
              <img
                src={reactlogo}
                alt="Dog Food"
                className="h-40 w-40 pt-4 mt-3"
              />
            </Link>
            <Link>Dog Food</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
