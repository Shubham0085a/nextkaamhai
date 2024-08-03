import React from "react";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import ellipse1 from '@/../public/images/Ellipse 1.png';
import ellipse2 from '@/../public/images/Ellipse 2.png';
import ellipse3 from '@/../public/images/Ellipse 3.png';
import ellipse4 from '@/../public/images/Ellipse 4.png';

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
    authorName: "Devid Miller",
    authorRole: "manager",
  },
  {
    quote:
      "“We started using KaamHai as soon as it was introduced. It’s the one solution we wish we had for years. Previously, employees could join with minimal documentation and leave whenever they wanted, causing significant disruption. KaamHai not only professionalizes hiring but also helps us manage our workforce with features like payment tracking and leave management. It also simplifies the process of relieving employees with a notice period, allowing us to prepare and protect our business. Thank you.”",
    authorImage: ellipse3,
    authorName: "Justina Farnandes",
    authorRole: "Restaurant Owner",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative z-10 pb-[60px] pt-[110px] bg-stroke dark:bg-transparent">
      <div className="container">
        <div
          className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
          data-wow-delay=".2s"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            What <span className="inline bg-gradient-4 bg-clip-text text-transparent">Client&apos;s</span> Say
          </h2>
          <p className="text-base text-body">
          Discover why clients trust KaamHai to streamline their hiring and workforce management. Read firsthand accounts from business owners who have experienced our platform’s transformative impact. Join our community and set a benchmark for others to follow.
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
                      <Image
                        width={56}
                        height={56}
                        src={item.authorImage}
                        alt="author"
                        className="h-full w-full object-cover object-center"
                      />
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
