import React from "react";
import Lottie from 'lottie-react';
import Animation from '../assets/Animation.json';
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Profile = () => {


    return (
        <>
        <div className='flex flex-wrap'>
<div className='flex-shrink-0 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 w-11/12 mx-auto mt-4 md:mt-0 lg:mt-0 md:w-1/2 lg:w-1/2 rounded-md shadow-md text-center'>
  <img className='w-40 h-40 rounded-full mx-auto m-3 bg-slate-900'
  src='zkpo.png' />
<h1 className='text-3xl font-bold text-gray-800 mb-4'>Hello,<br />I'm <strong className='text-red-700'>Muhammad Zahir</strong> Pahore</h1>
<p className='text-lg text-gray-600 font-bold'>Passionate MERN Stack Developer</p>
<hr className='my-6 mx-auto border-0 bg-green-500 h-1 w-4/5 rounded-md' />

<div className='flex justify-center gap-8 bg-gradient-to-r from-pink-400 to-pink-600'>
  <a href="https://github.com/Zkpahore" target="_blank">
  <FaGithub className="w-10 h-10"/>
  </a>
<a href="https://www.facebook.com/profile.php?id=100088421584668&mibextid=gik2fB" target="_blank">
<FaFacebook className="h-10 w-10" />
  </a>
  <a href="https://www.linkedin.com/in/muhammad-zahir-pahore-720049184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
  <FaLinkedin className="w-10 h-10"/>
  </a>
   <a href="https://twitter.com/Muhamma22385581" target="_blank">
   <FaTwitter className="w-10 h-10"/>
  </a>
</div>
<hr className="my-6 w-48 h-1 bg-green-500 border-0 rounded-md mx-auto" />
</div>

<div className='flex w-full md:w-1/2 lg:w-1/2'>
<Lottie
        animationData={Animation}
        loop={true}
        autoplay={true}
      />
</div>
</div>
        </>
    )
}
export default Profile;