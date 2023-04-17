import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/";
function FAQs() {
  const [faqData, setFaqData] = useState([]);
  useEffect(()=>{
    try{
      axios.get(baseUrl+'faq/').then((res)=>{
        setFaqData(res.data.data);
      })
    }catch(error){
      console.log(error);
    }
  }, [])
  // const items = [
  //   {
  //     id: 1,
  //     title: "Dog Food",
  //     content:
  //       "We offer a wide variety of high-quality dog food brands to meet your pet's specific dietary needs. From grain-free to raw and organic, we have options for all types of dogs.",
  //   },
  //   {
  //     id: 2,
  //     title: "Cat Food",
  //     content:
  //       "Cats are finicky eaters, but we have options that will satisfy even the pickiest feline. Our selection of cat food includes everything from wet to dry and natural to grain-free.",
  //   },
  //   {
  //     id: 3,
  //     title: "Toys and Accessories",
  //     content:
  //       "We believe that playtime is essential for a happy and healthy pet. That's why we offer a wide range of toys and accessories to keep your furry friend entertained and engaged.",
  //   },
  //   {
  //     id: 4,
  //     title: "Grooming",
  //     content:
  //       "Regular grooming is essential for the overall health and well-being of your pet. Our grooming products include everything from shampoos and conditioners to brushes and combs.",
  //   },
  // ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    document.title = "FAQs";
  });

  return (
    <div>
      <Header />
      <div className="w-full max-w-md mx-auto mt-6 mb-20">
        <h1 className="text-xl font-bold text-center my-8">
          Frequently Asked Questions
        </h1>
        {faqData && faqData.map((item, index) => (
          <div key={index}>
            <div
              className="flex items-center justify-between py-3 px-4 border-b border-gray-400 cursor-pointer"
              onClick={() => handleItemClick(index)}
            >
              <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
              <span className="text-gray-600">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`${
                activeIndex === index ? "block" : "hidden"
              } py-3 px-4`}
            >
              <p className="text-gray-700">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default FAQs;
