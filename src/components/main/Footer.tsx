import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className='w-screen flex flex-row justify-center items-center gap-2 flex-wrap p-2 fixed bottom-0 left-0 backdrop-blur-sm'>
        <div>
            <FaXTwitter title='Twitter' size={35}/>
        </div>
        <div>
            <CiInstagram title='Instagram' size={35}/>
        </div>
        <div>
            <FaFacebook title='Facebook' size={35}/>
        </div>
        <div>
            <FaGithub title='Github' size={35}/>
        </div>
        <div>
            <FaLinkedin title='Linkedin' size={35}/>
        </div>
    </footer>
  )
}
