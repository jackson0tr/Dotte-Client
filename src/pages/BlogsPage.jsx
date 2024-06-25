import React, { useEffect } from "react";
import BlogCard from "../components/Blog/BlogCard";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { Helmet } from "react-helmet-async";
import { host } from "../server";

const BlogsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header />
      <Blogs />
      <Footer />
    </div>
  );
};

const Blogs = () => {
  return (
    <>
    <Helmet>
            <title>Blogs Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/blogs`} />
        </Helmet>
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Dotte Blogs</h2>
      <div className="mx-auto space-y-4">
        <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
          <BlogCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogsPage;