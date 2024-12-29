import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../../public/image/Snapchat-1926901723.jpg'
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className=' bg-white z-50 sticky top-0'>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 ml-0 mb-4 md:mb-0">
                    <Image src={Logo} alt='Logo' width={40} height={60} className='rounded-full w-8'></Image>
                    <span className="ml-3 text-xl">Abdul Qayoom Rahimoon</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/"} className="mr-5 hover:text-blue-900">Hone</Link>
                    <Link href={"#"} className="mr-5 hover:text-blue-900">About</Link>
                    <Link href={"#"} className="mr-5 hover:text-blue-900">Skills</Link>
                    <Link href={"#projects"} className="mr-5 hover:text-blue-900">Project</Link>
                    <Link href={"#contact"} className="mr-5 hover:text-blue-900">Contact</Link>

                </nav>
                <a href="/image/Resume.pdf" target='_blank'>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Download Resume
                    <FiDownload className='ml-2'/>
                    
                </button>
                </a>
            </div>
        </header>
        </div>

    )
}

export default Navbar
