import React, { useEffect } from "react";
import Cat from "../assets/cat.jpg";
import Shiba from "../assets/shiba.jpg";
import Footer from "./Footer";
import Header from "./Header";

function AboutUs() {
  useEffect(() => {
    document.title = "About Us";
  });
  return (
    <div>
      <Header />
      <div className="py-8 about" id="about">
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row md:justify-center lg:justify-between">
            <div className="md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
              <img
                src={Shiba}
                alt="Dog"
                className="w-full h-full object-fit-cover"
              />
            </div>
            <div className="md:w-2/3 lg:w-1/2 lg:mx-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  About Pampered Pets
                </h2>
                <div className="w-full h-1 mx-auto md:mx-0 mb-4 bg-gray-600"></div>
              </div>
              <p className="text-md md:text-lg mb-4 text-justify">
                Pampered Pets is an online marketplace that offers a vast
                selection of high-quality pet products from multiple vendors.
                Our mission is to provide pet owners with a convenient,
                affordable, and enjoyable shopping experience for all their pet
                needs. We understand the importance of pets in our lives, and we
                strive to ensure that every pet gets pampered with the best
                products available in the market. Whether you are a dog owner, a
                cat parent, or a lover of any other pets, we have got you
                covered with our diverse range of pet products, including food,
                treats, toys, accessories, and much more.
              </p>
              <p className="text-md md:text-lg text-justify">
                Our website is user-friendly, secure, and designed to make
                shopping for your furry friends an easy and fun experience. Shop
                with us and give your pets the love they deserve!
              </p>
            </div>
            <div className="md:w-1/3 lg:w-1/4">
              <img
                src={Cat}
                alt="Cat"
                className="w-full h-full object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        @media (max-width: 1024px) {
          .about img {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default AboutUs;
