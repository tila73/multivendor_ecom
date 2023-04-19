import React from "react";
import { Link } from "react-router-dom";
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.jpg";
import category3 from "../assets/category3.jpg";
import category4 from "../assets/category4.jpg";
import category5 from "../assets/category5.jpg";
import category6 from "../assets/category6.jpg";
import category7 from "../assets/category7.jpg";
import category8 from "../assets/category8.jpg";
import category9 from "../assets/category9.jpg";
import category10 from "../assets/category10.jpg";

function PopularCategories() {
  return (
    <div className="my-10 mx-20 justify-center">
      <h1 className="text-2xl font-bold">Popular Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-x-10">
        <div>
          <Link>
            <img
              src={category1}
              alt="Dog Food"
              className="h-40 w-40 pt-4 mt-3"
            />
          </Link>
          <Link className="mt-3">Dog Food</Link>
        </div>
        <div>
          <Link>
            <img
              src={category2}
              alt="Cat Food"
              className="h-40 w-40 pt-4 mt-3"
            />
          </Link>
          <Link>Cat Food</Link>
        </div>
        <div>
          <Link>
            <img
              src={category3}
              alt="Bird Food"
              className="h-40 w-40 pt-4 mt-3"
            />
          </Link>
          <Link>Bird Food</Link>
        </div>
        <div>
          <Link>
            <img src={category4} alt="Bed" className="h-40 w-40 pt-4 mt-3" />
          </Link>
          <Link>Beds and furniture</Link>
        </div>
        <div>
          <Link>
            <img
              src={category5}
              alt="Pet Carrier"
              className="h-40 w-40 pt-4 mt-3"
            />
          </Link>
          <Link>Pet Carrier</Link>
        </div>
        <div>
          <Link>
            <img
              src={category6}
              alt="Cat Litter"
              className="h-40 w-40 pt-4 mt-3"
            />
          </Link>
          <Link>Cat Litter</Link>
        </div>
        <div>
          <Link>
            <img
              src={category7}
              alt="Aquarium"
              className="h-40 w-40 pt-4 mt-3"
            />
          </Link>
          <Link>Aquarium</Link>
        </div>
        <div>
          <Link>
            <img
              src={category8}
              alt="Pharmacy"
              className="h-40 w-40 pt-4 mt-3"
            />
          </Link>
          <Link>Pharmacy</Link>
        </div>
        <div>
          <Link>
            <img src={category9} alt="Toys" className="h-40 w-40 pt-4 mt-3" />
          </Link>
          <Link>Toys</Link>
        </div>
        <div>
          <Link>
            <img
              src={category10}
              alt="Clothes and Accessories"
              className="h-40 w-40 pt-4 mt-3"
            />
          </Link>
          <Link>Clothes and Accessories</Link>
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
