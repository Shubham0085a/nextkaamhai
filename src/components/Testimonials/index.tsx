import React from "react";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import ellipse1 from "@/../public/images/Ellipse 1.png";
import ellipse2 from "@/../public/images/Ellipse 2.png";
import ellipse3 from "@/../public/images/Ellipse 3.png";
import ellipse4 from "@/../public/images/Ellipse 4.png";

const testimonialData: Testimonial[] = [
  {
    quote:
      "“The most important thing we liked about this app is that not only does it give you a solid verified database of candidates, but we can also see their skills and work history with previous management feedback. That’s awesome because we don’t need to waste any more time and money over fake skills commitments.”",
    authorImage: ellipse4,
    authorName: "Joseph Fabin",
    authorRole: "CEO of KAFS Burgers",
  },
  {
    quote:
      "“Having a platform specifically designed for unorganized sector business owners is an awesome initiative. The fact that we get identification-verified candidates and can easily keep and maintain their records makes things so much easier. Thank you, KaamHai, and I wish you all the very best!”",
    authorImage: ellipse4,
    authorName: "Rashid",
    authorRole: "Managing Director of Khoys Biryani",
  },
  {
    quote:
      "“This app is the need of the hour for micro and small business owners. We used to spend a lot of time dealing with workforce-related issues, mainly because there was no system or process to manage them. KaamHai is bringing a much-needed process and benchmark with very simplified steps for businesses like ours, and this will support us in a big way. Thank you, and keep going!”",
    authorImage: ellipse4,
    authorName: "Vinod P",
    authorRole: "Outdoor Addvertisement",
  },
  {
    quote:
      "“We started using KaamHai as soon as it was introduced. It’s the one solution we wish we had for years. Previously, employees could join with minimal documentation and leave whenever they wanted, causing significant disruption. KaamHai not only professionalizes hiring but also helps us manage our workforce with features like payment tracking and leave management. It also simplifies the process of relieving employees with a notice period, allowing us to prepare and protect our business. Thank you.”",
    authorImage: ellipse3,
    authorName: "Vijesh",
    authorRole: "Drink Lab",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative z-10 pb-[60px] pt-[110px] bg-stroke dark:bg-transparent"
    >
      <div className="container">
        <div
          className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
          data-wow-delay=".2s"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            What{" "}
            <span className="inline bg-gradient-4 bg-clip-text text-transparent">
              Client&apos;s
            </span>{" "}
            Say
          </h2>
          <p className="text-base text-body">
            Discover why clients trust KaamHai to streamline their hiring and
            workforce management. Read firsthand accounts from business owners
            who have experienced our platform’s transformative impact. Join our
            community and set a benchmark for others to follow.
          </p>
        </div>
      </div>

      <div className="container overflow-hidden lg:max-w-[1160px]">
        <div className="-mx-6 flex flex-wrap">
          {testimonialData.map((item, index) => (
            <div key={index} className="w-full px-6 lg:w-1/2">
              <div
                className="wow fadeInUp mb-[50px] rounded-lg bg-white px-7 py-9 shadow-card dark:bg-dark dark:shadow-card-dark sm:px-9 lg:px-7 xl:px-9"
                data-wow-delay=".2s"
              >
                <div className="mb-5 border-b border-stroke dark:border-stroke-dark">
                  <p className="pb-9 text-base text-body">{item.quote}</p>
                </div>

                <div className="items-center justify-between sm:flex lg:block xl:flex">
                  <div className="mb-4 flex items-center sm:mb-0 lg:mb-4 xl:mb-0">
                    <div className="mr-4 h-[56px] w-full max-w-[56px] rounded-full">
                      {/* <Image
                        width={56}
                        height={56}
                        src={item.authorImage}
                        alt="author"
                        className="h-full w-full object-cover object-center"
                      /> */}
                      <div className="h-full w-full object-cover object-center">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          height={56}
                          width={56}
                          className="fill-black dark:fill-white"
                        >
                          <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z" />
                        </svg> */}
                        <svg
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          height={56}
                          width={56}
                          className="fill-black dark:fill-white"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"
                            ></path>{" "}
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-black dark:text-white">
                        {item.authorName}
                      </h5>
                      <p className="text-sm text-body">{item.authorRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:justify-end lg:justify-start xl:justify-end">
                    <div className="flex items-center space-x-[6px]">
                      {Array(5)
                        .fill(null)
                        .map((_, starIndex) => (
                          <span key={starIndex}>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_49_480)">
                                <path
                                  d="M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z"
                                  fill="#EABF23"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_49_480">
                                  <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                    transform="translate(0 0.000488281)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
