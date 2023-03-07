import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-purple-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:px-8 px-5 py-10 mx-20">
        <ul>
          <h1 className="mb-1 font-bold">Customer Service</h1>
          <li className="cursor-pointer">
            <Link>Contact us</Link>
          </li>
          <li className="cursor-pointer">
            <Link>FAQs</Link>
          </li>
        </ul>
        <ul>
          <h1 className="mb-1 font-bold">About</h1>
          <li className="cursor-pointer">
            <Link>About Pampered Pets</Link>
          </li>
          <li className="cursor-pointer">
            <Link>Privacy Policy</Link>
          </li>
          <li className="cursor-pointer">
            <Link>Terms and Conditions</Link>
          </li>
        </ul>
        <ul>
          <h1 className="mb-1 font-bold">Connect with us</h1>
          <div className="cursor-pointer flex text-2xl">
            <a className="pr-3" href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a className="pr-3" href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a className="pr-3" href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a className="pr-3" href="https://pinterest.com">
                <FontAwesomeIcon icon={faPinterest}/>
            </a>
          </div>
        </ul>
      </div>
      <div className="text-center pb-8">
        <p>Copyright @ 2023, Pampered Pets. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;