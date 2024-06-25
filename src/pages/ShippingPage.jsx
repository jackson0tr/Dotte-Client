import React, { useEffect } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { Helmet } from "react-helmet-async";
import { host } from "../server";

const ShippingPage = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <>
        <Helmet>
            <title>Shipping Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/shipping`} />
        </Helmet>
            <Header />
            <Shipping />
            <Footer />
        </>
    );
};

const Shipping = () => {
    return (
        <div className={`${styles.section} my-8`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Shipping Policy in Dotte</h2>
            <div className="mx-auto space-y-4">
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Shipping Methods and Timelines:
                        <br />
                        We offer multiple shipping methods to accommodate the diverse needs of our customers. The available shipping methods and their respective delivery timelines will be clearly communicated to customers during the checkout process. Our standard shipping times typically range from [X to Y] business days within [domestic/international] locations.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Order Processing:
                        <br />
                        Once an order is placed on our website, it will undergo thorough processing before being shipped out. This includes order verification, payment processing, and packaging. Orders are typically processed and dispatched within [Z] business days from the date of purchase, excluding weekends and public holidays.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Shipping Costs:
                        <br />
                        Shipping costs vary depending on the selected shipping method, delivery location, and order weight. Customers will be provided with a clear breakdown of shipping costs during the checkout process before finalizing their purchase. We may offer free shipping promotions under certain conditions, which will be clearly communicated on our website.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Order Tracking:
                        <br />
                        For the convenience of our customers, we provide order tracking services for all shipments. Once an order has been dispatched, customers will receive a tracking number via email, allowing them to monitor the status and progress of their delivery. Additionally, customers can track their orders directly through their Dotte account on our website.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Shipping Restrictions:
                        <br />
                        While we strive to deliver our products to customers worldwide, there may be certain locations that we are unable to ship to due to legal restrictions, logistical challenges, or other reasons. Customers will be notified during the checkout process if their delivery address falls within a restricted area. We appreciate your understanding in such cases.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Delivery Responsibility:
                        <br />
                        Once a package has been shipped from our warehouse and is in the possession of the designated shipping carrier, Dotte relinquishes responsibility for the delivery process. While we make every effort to ensure timely and accurate deliveries, we cannot be held liable for delays, damages, or lost packages caused by the shipping carrier or factors beyond our control.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Shipping Address Accuracy:
                        <br />
                        It is the responsibility of the customer to ensure that the shipping address provided during checkout is accurate and complete. Dotte will not be held liable for any delays or misdeliveries resulting from incorrect or incomplete shipping information provided by the customer.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Shipping Policy Updates:
                        <br />
                        Dotte reserves the right to update or modify this Shipping Policy at any time without prior notice. Any changes to the policy will be effective immediately upon posting on our website. We encourage customers to review this policy periodically to stay informed about our shipping practices.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ShippingPage;