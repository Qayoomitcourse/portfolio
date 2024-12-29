
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React from 'react';
import Heroheading from './server';
import { Heroheading2 } from './server';
import profilePic from "../../../public/image/profilepic.jpg";


async function getData() {
  const fetchData = await client.fetch('*[_type == "heroSection"]');
  return fetchData;
}

export default async function HeroClient() {

  const data = await getData()
  console.log(data)

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <Heroheading />
            <br className="hidden lg:inline-block" />
            <Heroheading2 />
          </div>
          <p className="mb-8 leading-relaxed">
            I am currently pursuing a Generative AI course through the Governor Sindh IT Initiative Programme. In addition to my studies, I have been working as an Aviation Security Supervisor with the Pakistan Civil Aviation Authority since 2012. Alongside my professional career, I also provide consultancy services in Income Tax and Sales Tax.
          </p>
          <p>
            This platform is where I share my journey, projects, and insights as I explore the intersection of technology, aviation security, and taxation. Thank you for visiting, and I hope you find my work both informative and inspiring
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center mx-auto rounded-lg w-[20rem]"
            alt="hero"
            width={700}
            height={700}
            src={profilePic} 
          />
        </div>
      </div>
    </section>

  );
}
