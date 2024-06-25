import React, { useState, useEffect } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import CareerCard from "../components/Career/CareerCard";
import styles from "../styles/styles";
import { host, server } from "../server";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const CareersPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/career/get-all-careers`, {withCredentials: true}).then((res) => {
        setData(res.data.careers);
    })
  }, []);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  
  return (
    <>
      <Helmet>
            <title>Careers Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/career`} />
        </Helmet>
          <div>
            <Header />
            <br />
            <br />
            <div className={`${styles.section} my-8`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Careers</h2>
            <div className="mx-auto space-y-4">
              <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                {data && data.map((i, index) => <CareerCard data={i} key={index} />)}
              </div>
              {data && data.length === 0 ? (
                <h1 className="text-center w-full pb-[100px] text-[20px]">
                  No jobs Found!
                </h1>
              ) : null}
              </div>
            </div>
            <Footer />
          </div>
         
    </>

  );
};

export default CareersPage;