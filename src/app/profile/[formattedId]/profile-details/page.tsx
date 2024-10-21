"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Image from "next/image";
import Mobina from "@/../public/images/Mobina.png";
import AppStore from "@/../public/images/app-store.png";
import PlayStore from "@/../public/images/play-store.png";
import KaamhaiImage from "@/../public/images/KaamhaiImage.png";

type TabContent = {
  title: string;
  content: React.ReactNode;
};

const jobs = [
  {
    title: "Senior Chef",
    company: "Biryani House",
    type: "Full Time",
    duration: "3 Years",
    location: "Pallakad",
    date: "May 2016 - Jun 2019",
    image: KaamhaiImage,
  },
  {
    title: "Junior Chef",
    company: "Tandoor Express",
    type: "Part Time",
    duration: "1 Year",
    location: "Mumbai",
    date: "Jan 2018 - Dec 2018",
    image: KaamhaiImage,
  },
];
const qualifications = ["Baking", "Pastry", "Beverages"];

const tabs: TabContent[] = [
  {
    title: "Basic Info",
    content: (
      <div className="pb-10">
        <div className="flex justify-between text-slate-400 pb-10">
          <div className="text-lg font-semibold">Basic Information</div>
          <div className="text-sm">Joined on 1/5/2024</div>
        </div>
        <div className="grid grid-cols-1 min-[769px]:grid-cols-2 gap-10">
          <div>
            <h1 className="font-semibold">First Name</h1>
            <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
              <p>Mobina Mirbagheri</p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Experience</h1>
            <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
              <p>2 Years</p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Kaamhai UID</h1>
            <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
              <p>WB21-0690-1234-9878</p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">State</h1>
            <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
              <p>Karnataka</p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Age</h1>
            <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
              <p>29</p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">City</h1>
            <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
              <p>Bangalore</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Experience",
    content: (
      <div className="pb-10">
        <div className="flex justify-between text-slate-400 pb-10">
          <div className="text-lg font-semibold">Experience</div>
          <div className="text-sm">Joined on 1/5/2024</div>
        </div>
        <div className="space-y-5 max-h-[296px] overflow-y-scroll scrollbar-thumb-yellow-400 scrollbar-track-slate-300 scrollbar-thin">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="w-[90%] min-[995px]:w-[75%] bg-yellow-100 flex py-5 rounded-md mb-4"
            >
              <div className="w-[25%] flex justify-center">
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <Image
                    src={job.image}
                    alt={job.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="w-[75%]">
                <div className="flex justify-between items-start w-full">
                  <div>
                    <h1 className="font-bold text-lg">{job.title}</h1>
                    <p>{job.company}</p>
                  </div>
                  <div className="font-bold bg-[#05354E] py-2 px-3 min-[768px]:px-6 rounded-l-xl text-white">
                    {job.type}
                  </div>
                </div>
                <p className="py-5">{job.duration}</p>
                <div className="flex flex-col min-[990px]:flex-row justify-between max-[990px]:gap-2 items-start min-[990px]:items-center w-full">
                  <div className="bg-[#FFCB08B0] py-2 px-5 rounded-2xl">
                    {job.location}
                  </div>
                  <div className="font-semibold pr-3">{job.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Qualification",
    content: (
      <div className="pb-10">
        <div className="flex justify-between text-slate-400 pb-10">
          <div className="text-lg font-semibold">Qualification</div>
          <div className="text-sm">Joined on 1/5/2024</div>
        </div>
        <div className="grid grid-cols-1 min-[769px]:grid-cols-2 gap-10">
          <div className="space-y-10 w-[75%]">
            <div>
              <h1 className="font-semibold">Category</h1>
              <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                <p>Restaurant</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Job Title</h1>
              <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                <p>Chef, Cook, Dosa Maker</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Qualification</h1>
              <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                <p>Below 10th</p>
              </div>
            </div>
          </div>
          <div className="w-[65%]">
            <div>
              <h1 className="font-semibold">Skills</h1>
              <div className="mt-1 flex flex-wrap gap-3">
                {qualifications.map((qualification, index) => (
                  <div
                    key={index}
                    className="bg-[#000] text-white px-8 py-1 rounded-lg shadow-md shadow-[#8c887b]"
                  >
                    {qualification}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Work Preference",
    content: (
      <div className="pb-10">
        <div className="flex justify-between text-slate-400 pb-10">
          <div className="text-lg font-semibold">Work Preference</div>
          <div className="text-sm">Joined on 1/5/2024</div>
        </div>
        <div className="grid grid-cols-1 min-[769px]:grid-cols-2 gap-10">
          <div className="space-y-10 w-[75%]">
            <div>
              <h1 className="font-semibold">Preferred Work Location</h1>
              <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                <p>Kerala</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Langguages Known</h1>
              <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                <p>English | Malayalam</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Preferred Work Type</h1>
              <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                <p>Full Time</p>
              </div>
            </div>
          </div>
          <div className="w-[100%] space-y-10">
            <div className="w-[80%]">
              <h1 className="font-semibold">Preferred Salary Type</h1>
              <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                <p>Monthly</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Preferred Work Time</h1>
              <div className="grid grid-cols-1 min-[1006px]:grid-cols-2">
                <div className="flex gap-5">
                  <h1 className="font-semibold">From</h1>
                  <div className="border-2 p-2 rounded-lg border-slate-300 mt-2">
                    <p>9:00 AM</p>
                  </div>
                </div>
                <div className="flex gap-10 min-[106px]:gap-5">
                  <h1 className="font-semibold">To</h1>
                  <div className="border-2 p-2 rounded-lg border-slate-300 mt-2">
                    <p>9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const ProfileDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="pt-[90px] text-[#000] flex flex-col justify-between h-screen">
      <div className="container lg:max-w-[1300px] bg-white shadow-[0_20px_25px_5px_rgba(0,0,0,0.3)] py-5 mx-auto px-0 rounded-sm hidden sm:block">
        <div
          className="bg-cover bg-center w-full"
          style={{ backgroundImage: "url('/images/Frame.png')" }}
        >
          <div className="h-[135px]"></div>
        </div>
        <div className="flex justify-between px-12 items-center -mt-12">
          <div className="flex items-center gap-10">
            <div className=" relative">
              <div className="h-36 w-36 rounded-full border-[5px] overflow-hidden">
                <Image
                  src={Mobina}
                  alt=""
                  className="object-cover w-full h-full"
                ></Image>
              </div>
              <div className="absolute right-3 bottom-1">
                <BsFillPatchCheckFill size={35} color="#0FA958" />
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-lg">Mobina Mirbagheri</h1>
              <p className="font-medium text-sm">Job Title</p>
            </div>
          </div>
          <div className="inline-flex gap-3 h-9">
            <div className="bg-yellow-300 rounded-full p-2">
              <Link href="/" className="">
                <IoMdDownload size={20} />
              </Link>
            </div>
            <div className="bg-yellow-300 rounded-full p-2">
              <Link href="/" className="">
                <FiShare2 size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="px-12 flex justify-between">
          <div>
            <div className="w-44 min-[993px]:w-64">
              <nav className="mt-10 py-3 px-3 space-y-5">
                {tabs.map((tab, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md focus:outline-none focus:bg-sky-200 transition ease-in-out duration-150 ${
                      activeTab === index
                        ? "text-[#000] bg-sky-200"
                        : "text-slate-300 hover:text-slate-500 hover:bg-slate-50"
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex-1 border-l border-slate-200">
            <div className="px-10">{tabs[activeTab].content}</div>
            <div className="px-1 my-5 font-semibold">
              <p>
                Found the perfect candidate?{" "}
                <Link
                  href="https://play.google.com/store/apps/details?id=com.kaamhai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400"
                >
                  Download our app
                </Link>{" "}
                to easily hire qualified professionals for your business needs!
              </p>
            </div>
            <div className="px-5 flex justify-center gap-5">
            <div>
              <Link
                href="https://play.google.com/store/apps/details?id=com.kaamhai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-36 h-10">
                  <Image
                    src={PlayStore}
                    alt="Play Store"
                    className=" object-cover w-full h-full"
                  ></Image>
                </div>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.apple.com/in/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-36 h-10">
                  <Image
                    src={AppStore}
                    alt="App Store"
                    className=" object-cover w-full h-full"
                  ></Image>
                </div>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="container lg:max-w-[460px] bg-white shadow-[0_20px_25px_5px_rgba(0,0,0,0.3)] py-5 mx-auto px-0 rounded-sm block sm:hidden">
        <div
          className="bg-cover bg-center w-full"
          style={{ backgroundImage: "url('/images/Frame.png')" }}
        >
          <div className="py-5">
            <div className="flex items-center justify-center w-full">
              <div className="relative">
                <div className="h-36 w-36 rounded-full border-[5px] overflow-hidden">
                  <Image
                    src={Mobina}
                    alt=""
                    className="object-cover w-full h-full"
                  ></Image>
                </div>
                <div className="absolute right-3 bottom-1">
                  <BsFillPatchCheckFill size={35} color="#0FA958" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-semibold text-lg">Mobina Mirbagheri</h1>
              <p className="font-medium text-sm">Job Title</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-5">
          <h1 className="text-slate-400 text-sm">Joined on 1/5/2024</h1>
          <div className="inline-flex gap-3 h-9">
            <div className="bg-yellow-300 rounded-full p-2">
              <Link href="/" className="">
                <IoMdDownload size={20} />
              </Link>
            </div>
            <div className="bg-yellow-300 rounded-full p-2">
              <Link href="/" className="">
                <FiShare2 size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="px-5 ">
          <div className="h-[25rem] overflow-y-scroll scrollbar-thumb-yellow-400 scrollbar-track-slate-300 scrollbar-thin">
            <div className="w-[90%] space-y-10">
              <div>
                <div className="text-lg font-semibold text-slate-400">
                  Basic Information
                </div>
                <div className="mt-5 space-y-5">
                  <div>
                    <h1 className="font-semibold">First Name</h1>
                    <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                      <p>Mobina Mirbagheri</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Kaamhai UID</h1>
                    <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                      <p>WB21-0690-1234-9878</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Experience</h1>
                    <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                      <p>2 Years</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Age</h1>
                    <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                      <p>29</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <h1 className="font-semibold">State</h1>
                      <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                        <p>Karnataka</p>
                      </div>
                    </div>
                    <div>
                      <h1 className="font-semibold">City</h1>
                      <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                        <p>Bangalore</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-slate-400">
                  Experience
                </div>
                <div className="mt-5">
                  {jobs.map((job, index) => (
                    <div
                      key={index}
                      className="w-[100%] bg-yellow-100 flex py-5 rounded-md mb-4"
                    >
                      <div className="w-[25%] flex justify-center">
                        <div className="h-16 w-16 rounded-full overflow-hidden">
                          <Image
                            src={job.image}
                            alt={job.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="w-[75%]">
                        <div className="flex justify-between items-start w-full">
                          <div>
                            <h1 className="font-bold">{job.title}</h1>
                            <p className="text-xs">{job.company}</p>
                          </div>
                          <div className="font-bold bg-[#05354E] text-xs py-2 px-2 min-[420px]:px-6 rounded-l-xl text-white">
                            {job.type}
                          </div>
                        </div>
                        <p className="py-5">{job.duration}</p>
                        <div className="flex flex-col min-[420px]:flex-row justify-between items-start min-[420px]:items-center w-full text-sm max-[420px]:gap-2">
                          <div className="bg-[#FFCB08B0] py-2 px-5 rounded-2xl">
                            {job.location}
                          </div>
                          <div className="font-semibold pr-3">{job.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-slate-400">
                  Qualification
                </div>
                <div className="mt-5 space-y-5">
                  <div>
                    <h1 className="font-semibold">Category</h1>
                    <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                      <p>Restaurant</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Job Title</h1>
                    <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                      <p>Chef, Cook, Dosa Maker</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Qualification</h1>
                    <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                      <p>Below 10th</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Skills</h1>
                    <div className="mt-1 flex flex-wrap gap-3">
                      {qualifications.map((qualification, index) => (
                        <div
                          key={index}
                          className="bg-[#000] text-white px-8 py-1 rounded-lg shadow-md shadow-[#8c887b]"
                        >
                          {qualification}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-slate-400">
                  Work Preference
                </div>
                <div className="mt-5 space-y-5">
                  <div>
                    <h1 className="font-semibold">Preferred Work Location</h1>
                    <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                      <p>Kerala</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Langguages Known</h1>
                    <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                      <p>English | Malayalam</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Preferred Work Type</h1>
                    <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                      <p>Full Time</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Preferred Salary Type</h1>
                    <div className="border-2 p-2 rounded-lg border-slate-300 mt-1">
                      <p>Monthly</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Preferred Work Time</h1>
                    <div className="grid grid-cols-1 min-[366px]:grid-cols-2">
                      <div className="flex gap-5">
                        <h1 className="font-semibold">From</h1>
                        <div className="border-2 p-2 rounded-lg border-slate-300 mt-2">
                          <p>9:00 AM</p>
                        </div>
                      </div>
                      <div className="flex gap-10 min-[366px]:gap-5">
                        <h1 className="font-semibold">To</h1>
                        <div className="border-2 p-2 rounded-lg border-slate-300 mt-2">
                          <p>9:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="px-1 my-5 font-semibold">
            <p className="text-center">
              Found the perfect candidate?{" "}
              <Link
                href="https://play.google.com/store/apps/details?id=com.kaamhai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400"
              >
                Download our app
              </Link>{" "}
              to easily hire qualified professionals for your business needs!
            </p>
          </div>
          <div className="px-5 flex justify-center gap-2 min-[366px]:gap-5">
            <div>
              <Link
                href="https://play.google.com/store/apps/details?id=com.kaamhai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-28 min-[366px]:w-36 h-8 min-[366px]:h-10">
                  <Image
                    src={PlayStore}
                    alt="Play Store"
                    className=" object-cover w-full h-full"
                  ></Image>
                </div>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.apple.com/in/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-28 min-[366px]:w-36 h-8 min-[366px]:h-10">
                  <Image
                    src={AppStore}
                    alt="App Store"
                    className=" object-cover w-full h-full"
                  ></Image>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#05293C] dark:bg-slate-900 text-white font-medium text-sm min-[574px]:text-xl">
        <p className="pl-10 min-[574px]:pl-24 pt-3 pb-5 tracking-wider">
          To Know More About Us{" "}
          <Link
            href="https://www.kaamhai.in/"
            target="_blank"
            rel="noopener noreferrer"
            className=" font-normal text-primary italic"
          >
            {" "}
            Click Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
