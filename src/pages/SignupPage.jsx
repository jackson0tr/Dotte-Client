import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Signup from "../components/Signup/Signup";
import { Helmet } from 'react-helmet-async';
import { host } from '../server';

const SignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/");
    }
  }, [])
  return (
    <>
    <Helmet>
            <title>Sign Up Page Dotte</title>
            <meta
            name="description"
            content="Welcome to Dotte E-Commerce Website. Let's know about Dotte Click for more..."
            />
            <link rel="canonical" href={`${host}/sign-up`} />
        </Helmet>
        <Signup />
    </>
  )
}

export default SignupPage