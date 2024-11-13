import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import bg from "../../../Assests/bg44.jpg";

const Hero = () => {
  return (
    
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(${bg})`,
        
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className="text-[35px] leading-[1.2] 800px:text-[60px] text2-[#3d3a3a] text-[#f6f6f6] font-[600] capitalize"
        >
          Best Collection for <br /> Home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Welcome to Dotte, your premier destination for seamless online shopping. <br />
          Dive into a world of limitless possibilities where convenience meets quality. <br />
          Discover curated collections, personalized recommendations, and exclusive deals tailored just for you. <br />
          Join our community of savvy shoppers and experience the future of e-commerce, where every click brings you closer to the perfect purchase. <br />
          Embrace innovation, embrace Dotte.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
