import React, { useEffect } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { Helmet } from 'react-helmet-async'
import { host } from "../server";

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <>
        <Helmet>
            <title>About Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/about`} />
        </Helmet>
            <Header activeHeading={6}/>
            <About />
            <Footer />
        </>
    );
};

const About = () => {
    return (
        <div className={`${styles.section} my-8`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Dotte</h2>
            <div className="mx-auto space-y-4">
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    Dotte, an innovative e-commerce platform, revolutionizes online shopping with its user-friendly interface and extensive product range.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    With seamless navigation and secure transactions, Dotte ensures a hassle-free shopping experience for customers worldwide.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    Dotte's personalized recommendations and dynamic search capabilities enhance customer satisfaction and drive sales growth.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    Through strategic partnerships and robust logistics, Dotte guarantees timely delivery and superior service excellence.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    Dotte prioritizes transparency and customer feedback, fostering trust and loyalty within its thriving online community.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    As a leader in the e-commerce landscape, Dotte continuously evolves its platform to meet the ever-changing demands of modern consumers.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;