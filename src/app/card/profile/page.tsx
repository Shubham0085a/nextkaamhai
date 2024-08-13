import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileImage from "@/../public/images/profile.png";
import profileBackground from "@/../public/svgs/profilebackground.svg";
import backArrow from "@/../public/svgs/backarrow.svg";
import copy from "@/../public/svgs/copy.svg";
import edit from "@/../public/svgs/edit.svg";
import editpen from "@/../public/svgs/editpen.svg";
import mark from "@/../public/svgs/mark.svg";
import xmark from "@/../public/svgs/xmark.svg";
import timer from "@/../public/svgs/timer.svg"

const Profile = () => {
  const options = Array.from({ length: 61 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  return (
    <section className="flex justify-center">
      <div className="mt-[3.75rem] w-[430px] sm:w-[670px] text-[#000000]">
        <div className="">
          <div className="absolute -z-10 ">
            <Image
              src={profileBackground}
              alt="background svg"
              width={200}
              className="w-[430px] sm:w-[670px] bg-[#FCB726]"
            />
          </div>
          <div className="relative flex justify-around pt-10 pb-16">
            <Link href="/card" className=" inline-flex gap-2 items-center">
              <Image src={backArrow} alt="" />
              <p className=" font-medium ">My profile</p>
            </Link>
            <div className="inline-flex gap-2 items-center">
              <p className="text-xs font-semibold">WB21-0690-XXXX-XXXX</p>
              <div>
                <Image src={copy} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#05293C] rounded-t-[2rem]">
            <div className="flex flex-col items-center">
              <Image src={ProfileImage} alt="" width={100} className="-mt-12 shadow-2xl rounded-full" />
            </div>
          </div>
          <div className="bg-white dark:bg-[#05293C]">
            <div className="flex justify-end mr-5">
              <div className="bg-[#000000] inline-flex items-center gap-1 px-3 py-1 rounded-full">
                <Image src={edit} alt="edit svg" />
                <p className="text-white">Edit Profile</p>
              </div>
            </div>
            <div className="flex justify-end items-center mr-5 space-x-1 mt-3">
              <div>
                <Image src={mark} alt="mark svg" width={25}  className=""/>
              </div>
              <div className="bg-[#21AD1E] w-10 h-6 flex items-center justify-end px-1 rounded-full">
                <div className="bg-white w-4 h-4 rounded-full"></div>
              </div>
              <p className="dark:text-white">Open to Work</p>
            </div>
            <div className="pl-5 space-y-1 dark:text-white">
              <p className=" font-medium">Kumar Khan | Age : 27</p>
              <p>Assam | Experience : 2 Year</p>
              <p className=" text-xs">Chef | Cleaner | Dosa Maker</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#05293C]">
          <div className="pt-10">
            <div className=" bg-gradient-to-l from-transparent from-50% to-[#FFCB08] to-100% h-8 mx-5"></div>
            <div className="rounded-tr-lg rounded-br-lg rounded-bl-lg mx-5 bg-slate-200 p-3">
              <form>
                <p className="font-semibold">Experience & Qualifications</p>
                <div className="flex flex-row justify-around mt-3">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="category" className=" font-medium text-sm">
                      Category
                    </label>
                    <select className="bg-white text-xs w-36 lg:w-[18rem] h-6 px-2 rounded-md border border-[#000000]">
                      <option disabled selected>
                        Restaurant
                      </option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                      <option>option 4</option>
                      <option>option 5</option>
                      <option>option 6</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="Job" className=" font-medium text-sm">
                      Job
                    </label>
                    <select className="bg-white text-xs w-36 lg:w-[18rem] h-6 px-2 rounded-md border border-[#000000]">
                      <option disabled selected>
                        Add Job title
                      </option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                      <option>option 4</option>
                      <option>option 5</option>
                      <option>option 6</option>
                    </select>
                  </div>
                </div>
                <div className="text-white mt-5 space-x-2">
                  <div className="bg-[#000000] inline-flex items-center gap-5 px-5 py-1 rounded-md shadow-2xl shadow-red-900">
                    <h1>Cook</h1>
                    <div className="cursor-pointer">
                      <Image src={xmark} alt="xmark svg" />
                    </div>
                  </div>
                  <div className="bg-[#000000] inline-flex items-center gap-5 px-5 py-1 rounded-md">
                    <h1>Services</h1>
                    <div className="cursor-pointer">
                      <Image src={xmark} alt="xmark svg" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col space-y-1 mt-5">
                    <label htmlFor="Job" className="font-medium text-sm">
                      Skills
                    </label>
                    <select className="bg-white text-xs w-full h-6 px-2 rounded-md border border-[#000000]">
                      <option disabled selected>
                        Press + Button to add skills
                      </option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                      <option>option 4</option>
                      <option>option 5</option>
                      <option>option 6</option>
                    </select>
                  </div>
                  <div className="text-white mt-5 flex flex-wrap gap-2">
                    <div className="bg-[#000000] inline-flex items-center gap-5 px-5 py-1 rounded-md">
                      <h1>Baking</h1>
                      <div className="cursor-pointer">
                        <Image src={xmark} alt="xmark svg" />
                      </div>
                    </div>
                    <div className="bg-[#000000] inline-flex items-center gap-5 px-5 py-1 rounded-md">
                      <h1>Communication</h1>
                      <div className="cursor-pointer">
                        <Image src={xmark} alt="xmark svg" />
                      </div>
                    </div>
                    <div className="bg-[#000000] inline-flex items-center gap-5 px-5 py-1 rounded-md">
                      <h1>Cooking</h1>
                      <div className="cursor-pointer">
                        <Image src={xmark} alt="xmark svg" />
                      </div>
                    </div>
                    <div className="bg-[#000000] inline-flex items-center gap-5 px-5 py-1 rounded-md">
                      <h1>Pastry</h1>
                      <div className="cursor-pointer">
                        <Image src={xmark} alt="xmark svg" />
                      </div>
                    </div>
                    <div className="bg-[#000000] inline-flex items-center gap-5 px-5 py-1 rounded-md">
                      <h1>Beverages</h1>
                      <div className="cursor-pointer">
                        <Image src={xmark} alt="xmark svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="font-semibold">Total Experience (in years)</p>
                  <div className="block bg-white w-16 border border-[#000000] mt-2">
                    <p className="py-1 text-center mx-auto">1</p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className=" inline-flex justify-between w-full">
                    <p className="font-semibold">Experience</p>
                    <div>
                      <Image src={editpen} alt="editpen svg" />
                    </div>
                  </div>
                  <div className="bg-[#F6F6F6] w-[90%] p-5 flex flex-row flex-wrap gap-5 mt-5 rounded-xl">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="80"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                        <circle
                          cx="20"
                          cy="20"
                          r="20"
                          fill="url(#pattern0_1489_2000)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_1489_2000"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_1489_2000"
                              transform="translate(-0.0474684) scale(0.00632911)"
                            />
                          </pattern>
                          <image
                            id="image0_1489_2000"
                            width="173"
                            height="158"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h1 className="font-semibold text-2xl">Senior Chef</h1>
                      <h2 className="font-medium text-xl">Biryani House</h2>
                      <div className="flex flex-row gap-2">
                        <h3>Pallakad |</h3>
                        <div className="text-sm bg-[#000000] text-white py-1 px-2 rounded-xl">
                          Full Time
                        </div>
                      </div>
                      <h2 className="font-medium text-xl pt-2">
                        May 2016 - June 2019
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="inline-flex justify-between w-full">
                    <p className="font-semibold">Qualification</p>
                    <div>
                      <Image src={editpen} alt="editpen svg" />
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Choose from the list below"
                  className="bg-white placeholder:text-[#000000] w-full h-8 px-5 border border-[#000000] rounded-lg mt-5"
                />
                <div className="mt-5 flex flex-wrap gap-2">
                  <div className="bg-[#000000] text-white inline-flex items-center gap-8 px-5 py-1 rounded-md">
                    <h1>Below 10th</h1>
                    <div className="cursor-pointer">
                      <Image src={xmark} alt="xmark svg" />
                    </div>
                  </div>
                  <div className="bg-[#E4E4E4] border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                    <h1>10th Pass</h1>
                  </div>
                  <div className="bg-[#E4E4E4] border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                    <h1>Plus two</h1>
                  </div>
                  <div className="bg-[#E4E4E4] border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                    <h1>Degree</h1>
                  </div>
                  <div className="bg-[#E4E4E4] border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                    <h1>Masters</h1>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#05293C]">
          <div className="pt-10">
            <div className=" bg-gradient-to-l from-transparent from-50% to-[#FFCB08] to-100% h-8 mx-5"></div>
            <div className="rounded-tr-lg rounded-br-lg rounded-bl-lg mx-5 bg-slate-200 p-3">
              <form>
                <p className="font-semibold">Work Preferences</p>
                <div className="flex flex-row mt-3">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="location" className=" font-medium text-sm">
                      Preferred work location
                    </label>
                    <select className="bg-white text-xs w-36 lg:w-[18rem] h-6 px-2 rounded-md border border-[#000000]">
                      <option disabled selected>
                        Kerala
                      </option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                      <option>option 4</option>
                      <option>option 5</option>
                      <option>option 6</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col space-y-1 mt-5">
                    <label htmlFor="Job" className="font-medium text-sm">
                      Languages Known
                    </label>
                    <select className="bg-white text-xs w-full h-6 px-2 rounded-md border border-[#000000]">
                      <option disabled selected>
                        Enter Language & Press + Button
                      </option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                      <option>option 4</option>
                      <option>option 5</option>
                      <option>option 6</option>
                    </select>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <div className="bg-[#E4E4E4] border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                      <h1>English</h1>
                    </div>
                    <div className="bg-[#E4E4E4] border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                      <h1>Malayalam</h1>
                    </div>
                    <div className="bg-[#E4E4E4] border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                      <h1>Hindi</h1>
                    </div>
                    <div className="bg-[#E4E4E4] border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                      <h1>Urdu</h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="font-semibold">Preferred Work Type</p>
                  <div className="mt-5">
                    <div className="inline-flex gap-3 ml-2">
                      <input type="radio" className="w-6 h-6" />
                      <label htmlFor="parttime">Part Time</label>
                    </div>
                    <div className="inline-flex gap-3 ml-2">
                      <input type="radio" className="w-6 h-6" />
                      <label htmlFor="fulltime">Full Time</label>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="font-semibold">Preferred Salary Type</p>
                  <div className="inline-flex flex-wrap gap-3 mt-5">
                    <div className="text-white bg-[#000000] border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                      <h1>Monthly</h1>
                    </div>
                    <div className="border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                      <h1>Weekly</h1>
                    </div>
                    <div className="border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                      <h1>Daily</h1>
                    </div>
                    <div className="border border-[#000000] inline-flex items-center px-5 py-1 rounded-md">
                      <h1>Hourly</h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="font-semibold">Preferred Salary Type</p>
                  <div className="mt-5">
                    <div className="flex flex-col mt-5">
                      <label htmlFor="time" className=" font-medium text-sm">
                        From
                      </label>
                      <div className="inline-flex items-center gap-3 mt-5">
                        <select className="bg-white text-xs h-8 px-2 rounded-md border border-[#000000]">
                          <option disabled selected>
                            09
                          </option>
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                        <select className="bg-white text-xs h-8 px-2 rounded-md border border-[#000000]">
                          <option disabled selected>
                            00
                          </option>
                          {options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <select className="bg-white text-xs h-8 px-2 rounded-md border border-[#000000]">
                          <option disabled selected>
                            AM
                          </option>
                          <option>PM</option>
                        </select>
                        <div>
                          <Image src={timer} alt="timer svg"/>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-5">
                      <label htmlFor="time" className=" font-medium text-sm">
                        To
                      </label>
                      <div className="inline-flex items-center gap-3 mt-5">
                        <select className="bg-white text-xs h-8 px-2 rounded-md border border-[#000000]">
                          <option disabled selected>
                            09
                          </option>
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                        <select className="bg-white text-xs h-8 px-2 rounded-md border border-[#000000]">
                          <option disabled selected>
                            00
                          </option>
                          {options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <select className="bg-white text-xs h-8 px-2 rounded-md border border-[#000000]">
                          <option disabled selected>
                            AM
                          </option>
                          <option>PM</option>
                        </select>
                        <div>
                        <Image src={timer} alt="timer svg"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 w-[95%] flex justify-center mb-10">
                  <div className="flex flex-row flex-wrap justify-center gap-2">
                    <div className="text-white w-[45%] min-w-[250px] bg-[#000000] border border-[#000000] inline-flex items-center justify-center py-2 rounded-md">
                      <h1>Get you Insurance </h1>
                    </div>
                    <div className="text-white w-[45%] min-w-[250px] bg-[#000000] border border-[#000000] inline-flex items-center justify-center py-2 rounded-md">
                      <h1>Get you Insurance </h1>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
