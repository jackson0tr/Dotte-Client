import React from 'react'
import styles from '../../styles/styles'
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";
import { Helmet } from 'react-helmet-async';
import { host } from '../../server';
import { useParams } from 'react-router-dom';

const ShopPreviewPage = () => {
  const {id} = useParams();
  return (
    <>
    <Helmet>
            <title>Shop Preview Page Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/shop-preview/${id}`} />
        </Helmet>
    <div className={`${styles.section} bg-[#f5f5f5]`}>
         <div className="w-full 800px:flex py-10 justify-between">
          <div className="800px:w-[25%] bg-[#fff] rounded-[4px] shadow-sm 800px:overflow-y-scroll 800px:h-[90vh] 800px:sticky top-10 left-0 z-10">
            <ShopInfo isOwner={false} />
          </div>
          <div className="800px:w-[72%] mt-5 800px:mt-['unset'] rounded-[4px]">
            <ShopProfileData isOwner={false} />
          </div>
         </div>
    </div>
    </>
  )
}

export default ShopPreviewPage