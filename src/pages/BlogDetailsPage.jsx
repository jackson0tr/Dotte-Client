import React, { useEffect, useState } from "react";
import { post } from "../static/data";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import styles from "../styles/styles"
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { host } from "../server";

const BlogDetailsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { id } = useParams();
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        let posts = post.find((posts) => posts.id === parseInt(id));
        if (posts) {
            setPosts(posts);
        }
    })

    return (
        <>
            <Helmet>
                <title>{post?.title}</title>
                <meta 
                    name="description"
                    content={post?.caption}
                />
                <link rel="canonical" href={`${host}/blog/${post?.id}`} />
            </Helmet>
            <Header/>
            <div className={`${styles.section} h-auto my-8`}>
                {
                    posts ? (
                        <>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">{posts?.title} Blog</h2>
                            <div className="mx-auto space-y-4">
                                <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
                                    <article className="flex-1">
                                        <img
                                            className="rounded-xl w-fullitems-center justify-center"
                                            src={
                                                posts?.photo
                                            }
                                            alt={posts?.title}
                                        />
                                        <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                                            {posts?.title}
                                        </h1>
                                        <br />
                                        <h4 className="text-lg font-roboto m-4 text-gray-800 md:text-base">
                                            {posts.p1}
                                        </h4>
                                        <br />
                                        <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                                            {posts?.h1}
                                        </h1>
                                        <br />
                                        <h4 className="text-lg font-roboto m-4 text-gray-800 md:text-base">
                                            {posts.p2}
                                        </h4>
                                        <br />
                                        <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                                            {posts?.h2}
                                        </h1>
                                        <br />
                                        <h4 className="text-lg font-roboto m-4 text-gray-800 md:text-base">
                                            {posts.p3}
                                        </h4>
                                        <br />
                                        <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                                            {posts?.h3}
                                        </h1>
                                        <br />
                                        <h4 className="text-lg font-roboto m-4 text-gray-800 md:text-base">
                                            {posts.p4}
                                        </h4>
                                    </article>
                                </div>
                            </div>
                        </>
                    ) : null
                }
            </div>
            <Footer/>
        </>
    );
};

export default BlogDetailsPage;
