import React, { useEffect } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { Helmet } from "react-helmet-async";
import { host } from "../server";

const LocationPage = () => {
    return (
        <>
        <Helmet>
            <title>Location Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/location`} />
        </Helmet>
            <Header />
            <Location />
            <Footer />
        </>
    );
};

const Location = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return (
        <div className={`${styles.section} my-8`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dotte Location</h2>
            <div className="mx-auto space-y-4 items-center flex justify-center">
                <div className="h-[65vh] flex w-full rounded-[5px]" style={{width: "100%"}}><iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Cairo,%20Egypt+(Dotte)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
            </div>
        </div>
    )
}

export default LocationPage;