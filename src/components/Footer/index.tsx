import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterBottom from "@/components/Footer/FooterBottom";
import { FooterMenu } from "@/types/footerMenu";
import logoBlack from "@/../public/images/black-logo.png";
import logo from "@/../public/images/logo.svg";

const footerNavData: FooterMenu[] = [
  // {
  //   title: "Home",
  //   navItems: [
  //     {
  //       label: "Product",
  //       route: "#",
  //     },
  //     {
  //       label: "Pricing",
  //       route: "#",
  //     },
  //     {
  //       label: "Business",
  //       route: "#",
  //     },
  //     {
  //       label: "Enterprise",
  //       route: "#",
  //     },
  //   ],
  // },
  {
    title: "Resource",
    navItems: [
      {
        label: "Home",
        route: "#",
      },
      {
        label: "Features",
        route: "/#features",
      },
      {
        label: "About",
        route: "/#about",
      },
      {
        label: "How it Works",
        route: "/#work-process",
      },
    ],
  },
  {
    title: "Know More",
    navItems: [
      {
        label: "Privacy Policy",
        route: "/privacy",
      },
      {
        label: "Refund Policy",
        route: "/refund",
      },
      {
        label: "Terms and conditions",
        route: "/termsconditions",
      },
    ],
  },
  // {
  //   title: "Help & Support",
  //   navItems: [
  //     {
  //       label: "FAQs",
  //       route: "/#faq",
  //     },
  //     {
  //       label: "Email: info@kaamhai.in",
  //       route: "mailto:info@kaamhai.in",
  //     },
  //   ],
  // },
];

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[#F8FAFB] pb-[46px] pt-[95px] dark:bg-dark">
          <div className="container max-w-[1390px]">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-4/12 xl:w-3/12">
                <div className="mb-8 max-w-[320px]">
                  <Link href="/" className="mb-8 inline-block">
                    <Image
                      width={173}
                      height={34}
                      src={logoBlack}
                      alt="Logo"
                      priority
                      className="block max-w-full dark:hidden"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <Image
                      width={173}
                      height={34}
                      src={logo}
                      alt="Logo"
                      priority
                      className="hidden max-w-full dark:block"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </Link>
                  <p className="text-base text-body">
                    Simplified workforce hiring & Management solution.
                  </p>
                  <p className="text-base text-body">
                    Powered by{" "}
                    <Link
                      href="https://www.offbeatx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline bg-gradient-4 bg-clip-text text-transparent"
                    >
                      Offbeat Technet Pvt Ltd
                    </Link>
                  </p>
                </div>
              </div>

              <div className="w-full px-4 lg:w-8/12 xl:w-6/12">
                <div className="-mx-4 flex flex-wrap">
                  {footerNavData.map((group, groupIndex) => (
                    <div
                      key={groupIndex}
                      className={`w-full px-4 sm:w-1/2 md:w-6/12 lg:w-6/12 ${groupIndex === 0 ? "md:w-6/12 lg:w-6/12" : groupIndex === 3 ? "md:w-6/12 lg:w-6/12" : "md:w-6/12 lg:w-6/12"}`}
                    >
                      <div className="mb-11">
                        <h3 className="mb-8 text-[22px] font-medium text-black dark:text-white">
                          {group.title}
                        </h3>

                        <ul className="space-y-[10px]">
                          {group.navItems &&
                            group.navItems.map((item, index) => (
                              <li key={index}>
                                <Link
                                  href={item.route}
                                  className="inline-block text-base text-body hover:text-primary"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12 xl:w-3/12">
                <div className="max-w-[320px]">
                  <h1 className="mb-8 font-medium text-[22px] text-black dark:text-white">
                    Help & Support
                  </h1>
                  <div className="flex flex-col space-y-2">
                    <p className="inline-block text-base text-body hover:text-primary">
                      <Link href="/#faq" className="inline-block">
                        FAQs
                      </Link>
                    </p>
                    <p className="inline-block text-base text-body hover:text-primary">
                      <Link
                        href="mailto:info@kaamhai.in"
                        className="inline-block"
                      >
                        Email: info@kaamhai.in
                      </Link>
                    </p>
                    <p className="inline-block text-base text-body">
                      Connect with Us
                    </p>
                    <div>
                      <div className="mb-4 flex items-center justify-center text-base text-body hover:text-primary space-x-5 md:mb-0 md:justify-start lg:justify-start">
                        <Link
                          href="https://www.facebook.com/kaamhai.in"
                          className="opacity-70 hover:opacity-100"
                          rel="external nofollow noopener"
                          target="_blank"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_53_163)">
                              <path
                              className="fill-black dark:fill-white"
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_53_163">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>

                        <Link
                          href="https://x.com/KaamHai_in"
                          rel="external nofollow noopener"
                          target="_blank"
                          className="text-white opacity-70 hover:opacity-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="white"
                            viewBox="0 0 512 512"
                          >
                            <path className="fill-black dark:fill-white" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                          </svg>
                        </Link>

                        <Link
                          href="https://www.instagram.com/kaamhai.in"
                          rel="external nofollow noopener"
                          target="_blank"
                          className="text-white opacity-70 hover:opacity-100"
                        >
                          <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                              className="fill-black dark:fill-white"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              ></path>{" "}
                              <path
                                d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                                className="fill-black dark:fill-white"
                              ></path>{" "}
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                                className="fill-black dark:fill-white"
                              ></path>{" "}
                            </g>
                          </svg>
                        </Link>
                        <Link
                          href="https://www.linkedin.com/company/kaamhai/"
                          rel="external nofollow noopener"
                          target="_blank"
                          className="text-white opacity-70 hover:opacity-100"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_53_169)">
                              <path
                              className="fill-black dark:fill-white"
                                d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46943 6.99929 4.939 6.99902C4.40857 6.99876 3.89996 6.78779 3.52508 6.41253C3.15019 6.03727 2.93973 5.52846 2.94 4.99802C2.94027 4.46759 3.15123 3.95899 3.52649 3.5841C3.90175 3.20922 4.41057 2.99876 4.941 2.99902C5.47143 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_53_169">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                        <Link
                          href="https://wa.me/917090121000"
                          rel="external nofollow noopener"
                          target="_blank"
                          className="text-white opacity-70 hover:opacity-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            fill="white"
                            viewBox="0 0 448 512"
                          >
                            <path className="fill-black dark:fill-white" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterBottom />
      </footer>
    </>
  );
};

export default Footer;
