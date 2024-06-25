import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import contact from "../Assests/contact.png"
import { sendMail } from "../redux/actions/mail";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { host } from "../server";

const ContactPage = () => {
    return (
        <>
        <Helmet>
            <title>Contact Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/contact`} />
        </Helmet>
            <Header />
            <Contact />
            <Footer />
        </>
    );
};

const Contact = () => {
    const dispatch = useDispatch()
    const { success, error } = useSelector((state) => state.mail);
    const [senderName, setSenderName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    useEffect(()=>{
        if(success){
            toast.success("Email Sent Successfully!!");
            setTimeout(()=>{
                window.location.reload();
            },2000)
        }
        if(error){
            toast.error(error.message);
            console.log("ERROR: ",error)
        }
    },[success,dispatch,error])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        const newForm = new FormData();

        newForm.append("senderName", senderName);
        newForm.append("message", message);
        newForm.append("senderEmail", senderEmail);
        newForm.append("subject", subject);

        dispatch(sendMail({
            senderName,
            message,
            senderEmail,
            subject
        }));

        // toast.success("Email Sent Successfully!!");

        // setTimeout(() => {
        //     window.location.reload();
        // }, 2000)
    }



    return (        
        <div className={`${styles.section} my-8`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact US</h2>
            <div className="flex justify-center items-center min-h-[100vh]">
                <div className="relative w-full h-[100vh] flex items-center justify-center 2bg-teal-400">
                    <div className="w-full h-[550px] grid grid-cols-2 max-w-[820px] rounded-[20px] shadow-md overflow-hidden ">
                        <div className="bg-[#fff]">
                            <div className="pl-[16px] pt-[20px] text-[35px] text-teal-400">
                                Let's get in touch
                            </div>
                            <img src={contact} className="h-[#320px] w-[320px]" alt="contact" />
                            <div className="social">
                                <span className="font-semibold text-[#8f50ec] pl-[10px]">Connect with us:</span>
                                <ul className="flex list-none">
                                    <li className="pl-[15px] text-base mt-[10px]">
                                        <Link>
                                            <AiFillFacebook size={25} className="cursor-pointer bg-teal-400 p-[5px] hover:bg-[#fff] hover:text-teal-400 rounded-[5px] duration-300 text-[#fff]" />
                                        </Link>
                                    </li>
                                    <li className="pl-[15px] text-base mt-[10px]">
                                        <Link>
                                            <AiOutlineTwitter className="cursor-pointer bg-teal-400 p-[5px] hover:bg-[#fff] hover:text-teal-400 rounded-[5px] duration-300 text-[#fff]" size={25} />
                                        </Link>
                                    </li>
                                    <li className="pl-[15px] text-base mt-[10px]">
                                        <Link>
                                            <AiFillInstagram className="cursor-pointer bg-teal-400 p-[5px] hover:bg-[#fff] hover:text-teal-400 rounded-[5px] duration-300 text-[#fff]" size={25} />
                                        </Link>
                                    </li>
                                    <li className="pl-[15px] text-base mt-[10px]">
                                        <Link>
                                            <AiFillYoutube className="cursor-pointer bg-teal-400 p-[5px] hover:bg-[#fff] hover:text-teal-400 rounded-[5px] duration-300 text-[#fff]" size={25} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-teal-400">
                            <h4 className="text-[25px] top-[20px] p-[10px] text-[#fff] relative">Contact US</h4>
                            <form onSubmit={handleSubmit} className="py-0 px-[50px] h-full overflow-hidden w-full">
                                <div className="h-[40px] input_box my-[30px] mx-0 relative w-[70%]">
                                    <input
                                        onChange={(e) => setSenderName(e.target.value)}
                                        placeholder="Enter Your Name"
                                        // onChange={handleChange} 
                                        value={senderName}
                                        // value={formData.name} 
                                        required id="name" className="w-full h-full transparent border-2 border-solid border-[#fff] rounded-[20px] pl-2 outline-none text-[16px]  " type="text" />
                                    {/* <label className="absolute top-[50%] left-[10px] pl-2 text-[15px] font-semibold text-teal-400 translate-y-[-50%] " htmlFor="">Full Name</label> */}
                                </div>
                                <div className="h-[40px] input_box my-[30px] mx-0 relative w-[70%]">
                                    <input
                                        // onChange={handleChange} 
                                        onChange={(e) => setSenderEmail(e.target.value)}
                                        value={senderEmail}
                                        placeholder="Enter Your Email"
                                        // value={formData.email} 
                                        required id="email" className="w-full h-full transparent border-2 border-solid border-[#fff] rounded-[20px] pl-2 outline-none text-[16px]  " type="text" />
                                    {/* <label className="absolute top-[50%] left-[10px] pl-2 text-[15px] font-semibold text-teal-400 translate-y-[-50%] " htmlFor="">Email</label> */}
                                </div>
                                <div className="h-[40px] input_box my-[30px] mx-0 relative w-[70%]">
                                    <input
                                        // onChange={handleChange}
                                        onChange={(e) => setSubject(e.target.value)}
                                        value={subject}
                                        placeholder="Enter Your Main Topic"
                                        //  value={formData.subject} 
                                        id="subject" required className="w-full h-full transparent border-2 border-solid border-[#fff] rounded-[20px] pl-2 outline-none text-[16px]  " type="text" />
                                    {/* <label className="absolute top-[50%] left-[10px] pl-2 text-[15px] font-semibold text-teal-400 translate-y-[-50%] " htmlFor="">Subject</label> */}
                                </div>
                                <div className="h-[40px] input_box my-[30px] mx-0 relative w-[70%]">
                                    <textarea
                                        // onChange={handleChange} 
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                        placeholder="Enter Your Message"
                                        // value={formData.message} 
                                        required name="" className="w-full overflow-auto resize-none min-h-[150px] h-full transparent border-2 border-solid border-[#fff] rounded-[20px] pl-2 outline-none text-[16px]" id="message" cols="30" rows="10"></textarea>
                                    {/* <label className="absolute top-[50%] left-[10px] pl-2 text-[15px] font-semibold text-teal-400 translate-y-[-50%] " htmlFor="">Message</label> */}
                                </div>
                                <input type="submit" className="relative top-[100px] outline-none border-none w-[30%] h-[45px] rounded-[4px] text-[16px] text-teal-400 bg-[#fff] shadow-md cursor-pointer hover:bg-teal-400 hover:text-[#fff] " value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;