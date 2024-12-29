import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CNICPrint from "../../../public/image/printingtool.png"
import ResumeBuilder from "../../../public/image/dynamicresumeBuilder.png"
import SimpleTodoApp from "../../../public/image/simpletodoapp.png"

const Projects = () => {
  return (
    <div id='projects'>
      <h1 className='text-center text-[30px] font-bold font-serif'>MY PROJECT</h1>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            width={400}
            height={400}
            src={CNICPrint}
            alt="Project-CNIC-print"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-[19px] font-bold title-font font-medium text-blue-400 mb-1">
              CNIC PRINTING TOOL
            </h2>
            <p className="leading-relaxed mb-3 text-justify">
              This Project is providing user to print cnic acurately on a single page with front and back
            </p>
            <div className="flex items-center flex-wrap ">
              <Link target='_blank' href={"https://cnic-print-oohj.vercel.app/"} className="text-indigo-500 inline-flex md:mb-0 lg:mb-0">
                Learn More
                </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={ResumeBuilder}
            width={300}
            height={300}
            alt="Resume-Builder"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-[19px] font-bold title-font font-medium text-blue-400 mb-1">
              DYNAMIC RESUME BUILDER
            </h2>
            <p className="leading-relaxed mb-3">
              its my second assignment of the Next.Js project
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={"https://resume-generator-beige-ten.vercel.app/"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={SimpleTodoApp}
            alt="Simpletodoapp"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-[19px] font-bold title-font font-medium text-blue-400 mb-1">
              SIMPLE TODO APP
            </h2>
            <p className="leading-relaxed mb-3">
              This is my first NextJS Project.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={"https://simpletodo-self.vercel.app/"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Projects
