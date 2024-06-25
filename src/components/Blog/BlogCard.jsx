import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { post } from "../../static/data";
import { Link } from "react-router-dom";

const BlogCard = () => {
  console.log("POST", post);

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]`}
    >{
        post?.map((item, index) => {
          return (
            <div key={index}>
              <Link to={`/blog/${item.id}`}>
                <img
                  src={item.photo}
                  alt="title"
                  className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
              </Link>
              <div className="p-5">
                <Link to={`/blog/${item.id}`}>
                  <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                    {item.title}
                  </h2>
                </Link>
                <div className="flex justify-between flex-nowrap items-center mt-6">
                  <div className="flex items-center gap-x-2 md:gap-x-2.5">
                    <img
                      src={item.img}
                      alt="post profile"
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                        {item.writer}
                      </h4>
                      <div className="flex items-center gap-x-2">
                        <span
                          className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full"
                        >
                          <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                        </span>
                        <span className="italic text-dark-light text-xs md:text-sm">
                          Verified Writer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  );
};

export default BlogCard;