import React, { useEffect } from 'react';
import ReviewCard from '../components/Ratings/ReviewCard';
import review from "../Assests/reviews.png";
import client1 from "../Assests/client-1.png";
import client2 from "../Assests/client-2.png";
import client3 from "../Assests/client-3.png";
import styles from "../styles/styles";
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import { Helmet } from 'react-helmet-async';
import { host } from '../server';

const Reviews = () => {

    const reviews = [
        {
            name: "Mahmoud Mohamed",
            avatar: client1,
            profession: "Client",
            comment: "Dotte's personalized recommendations feature enhances the shopping experience by suggesting relevant products based on browsing history and preferences."
        },
        {
            name: "Mahmoud Mohamed",
            avatar: client2,
            profession: `Client`,
            comment: "Whether you're a buyer or seller, Dotte's intuitive design and comprehensive features make it a standout choice in the world of e-commerce."
        },
        {
            name: "Mahmoud Mohamed",
            avatar: client3,
            profession: `Buyer`,
            comment: "As a buyer on Dotte, I appreciate the user-friendly interface which makes navigating through products seamless and enjoyable."
        },
        {
            name: "Mahmoud Mohamed",
            avatar: client1,
            profession: `Seller`,
            comment: "As a seller, Dotte's platform offers robust tools for managing inventory and orders efficiently, streamlining the selling process and maximizing profits."
        },
        {
            name: "Mahmoud Mohamed",
            avatar: client2,
            profession: `Client`,
            comment: "Dotte's commitment to security and privacy instills confidence in both buyers and sellers, creating a trustworthy environment for conducting transactions."
        },
        {
            name: "Mahmoud Mohamed",
            avatar: client3,
            profession: `Client`,
            comment: "Dotte's extensive range of products caters to diverse interests, ensuring that every shopper can find exactly what they're looking for."
        },
        {
            name: "Mahmoud Mohamed",
            avatar: client3,
            profession: `Client`,
            comment: "The responsive customer service on Dotte promptly addresses any inquiries or concerns, fostering a positive experience for all users."
        },
    ]

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return(
        <>
        <Helmet>
            <title>Reviews Page Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/reviews`} />
        </Helmet>
            <Header/>
        <div className={`${styles.section} w-[90%]  800px:w-[85%] my-9`}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Dotte Reviews</h2>
            <div className="w-full 800px:flex items-center">
                <div className="800px:w-[50%] pb-2 w-full">
                    <img src={review} alt='review-img' width={700} height={700} />
                </div>
                <div className="800px:w-[50%] w-full">
                    <h3 className={`style.title} 800px:!text-[40px]`}>
                        The Most Of Reviews About Our Clients,Sellers,Buyers Giving US Feedbacks
                    </h3>
                    <br />
                    <p className={`text-[16px] font-Poppins text-black dark:text-white !m-3`}>
                    Reviews play a pivotal role on the e-commerce platform Dotte, serving as a cornerstone of trust and credibility within its vibrant community, where users, both buyers and sellers, actively engage in sharing their experiences, insights, and feedback, thereby facilitating informed purchasing decisions, fostering transparent interactions, and cultivating a dynamic marketplace environment characterized by authenticity, reliability, and mutual respect, ultimately enhancing the overall user satisfaction and fortifying Dotte's reputation as a premier destination for seamless and rewarding online shopping experiences.
                    </p>
                </div>
                <br />
                <br />
            </div>
            <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0">
                {
                    reviews && reviews.map((i,index)=>(
                        <ReviewCard item={i} key={index} />
                    ))
                }
            </div>
        </div>
        <Footer/>
        </>
    )
}   

export default Reviews;