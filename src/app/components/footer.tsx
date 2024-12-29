import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/image/Snapchat-1926901723.jpg'
import { FaFacebook, FaYoutube, FaGitSquare } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={Logo} alt='Logo' width={40} height={60} className='rounded-full w-8'></Image>
            <span className="ml-3 text-xl">Abdul Qayoom</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            2024 Abdul Qayoom. All Rights Reserved—

          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href={''} className="text-gray-500">
              <FaFacebook className='text-blue-800 size-9 mr-2' />
            </Link>
            <Link href={''} className="text-gray-500">
              <FaYoutube className='text-red-800 size-9 mr-2' />
            </Link>
            <Link href={''} className="text-gray-500">
              <FaGitSquare className='text-black-800 size-9 mr-2' />
            </Link>
          </span>
        </div>
      </footer>


    </div>
  )
}

export default Footer
