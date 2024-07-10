import React from "react";
import Graphics from "@/components/Cta/Graphics";
import Image from "next/image";
import Link from "next/link";
import screenPhone from "@/../public/images/kaamhai.png";

const Cta = () => {
  return (
    <>
      <section
        id="cta"
        className="relative z-10 pt-[110px] bg-stroke dark:bg-transparent"
      >
        <div className="container max-w-[1390px]">
          <div className="rounded-2xl bg-white px-10 pt-14 shadow-card dark:bg-dark dark:shadow-card-dark sm:px-20 lg:px-12 lg:pt-20 xl:px-20">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full self-center px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp mx-auto max-w-[530px] text-center lg:ml-0 lg:text-left"
                  data-wow-delay=".2s"
                >
                  <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[38px] md:leading-tight">
                    Download Kaamhai Now & Get started for free.
                  </h2>
                  <p className="mb-10 text-base text-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam lacus risus, molestie id condimentum ut, semper
                    vitae.
                  </p>

                  <div className="-mx-[10px] flex flex-wrap items-center justify-center lg:justify-start">
                    <div className="inline-block px-[10px]">
                      <Link
                        href="https://play.google.com/store/apps/details?id=com.kaamhai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-5 inline-flex items-center rounded-md bg-primary py-[10px] pl-4 pr-5 text-white hover:bg-opacity-90"
                      >
                        <span className="mr-[10px]">
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 28.9958V4.9125C4 4.07667 4.48167 3.34 5.19 3L19.1442 16.9542L5.19 30.9083C4.48167 30.5542 4 29.8317 4 28.9958ZM23.5642 21.3742L8.32083 30.1858L20.3483 18.1583L23.5642 21.3742ZM28.31 15.2683C28.7917 15.6508 29.1458 16.2458 29.1458 16.9542C29.1458 17.6625 28.8342 18.2292 28.3383 18.6258L25.0942 20.4958L21.5525 16.9542L25.0942 13.4125L28.31 15.2683ZM8.32083 3.7225L23.5642 12.5342L20.3483 15.75L8.32083 3.7225Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span className="text-left">
                          <span className="block text-xs opacity-70">
                            Get it on
                          </span>
                          <span className="block text-sm font-medium">
                            Google Play
                          </span>
                        </span>
                      </Link>
                    </div>

                    <div className="inline-block px-[10px]">
                      <Link
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-5 inline-flex items-center rounded-md bg-black py-[10px] pl-4 pr-5 text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
                      >
                        <span className="mr-[10px]">
                          <svg
                            height="34"
                            width="34"
                            viewBox="0 0 960 960"
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
                                d="M697.234 663.371C716.41 696.729 667.671 724.494 648.395 693.333C606.548 628.614 569.794 560.699 528.745 495.381C516.161 464.219 479.107 431.161 495.986 396.005C540.43 337.178 577.384 418.776 594.363 456.829C639.506 550.512 610.443 525.243 710.717 524.544C754.263 524.644 758.757 591.361 715.312 596.155C698.732 598.052 682.453 597.852 665.674 598.252C677.159 619.725 684.95 642.297 697.234 663.371Z"
                                fill="white"
                              ></path>{" "}
                              <path
                                d="M474.312 257.679C486.597 230.913 517.059 198.453 545.224 224.92C564.3 242.298 551.316 269.465 538.332 287.242C489.194 363.747 450.242 445.844 405.598 524.845C445.448 528.341 485.598 525.844 525.149 532.835C564.1 539.827 558.907 597.455 519.256 598.353C442.153 601.35 365.049 595.457 287.845 599.652C260.28 597.554 225.024 612.336 203.751 589.065C161.104 516.456 275.761 527.442 317.608 524.546C343.776 499.377 356.659 456.93 377.833 425.769C395.311 394.608 412.39 363.147 429.868 331.986C432.964 322.199 418.982 314.109 415.486 305.12C349.169 230.713 442.153 172.885 474.312 257.679Z"
                                fill="white"
                              ></path>{" "}
                              <path
                                d="M330.292 643.197C329.393 609.04 284.549 595.856 265.373 626.118C256.884 640.301 246.097 654.483 242.302 670.763C234.811 703.022 275.56 724.995 298.332 700.925C313.513 684.645 325.198 664.87 330.292 643.197ZM545.223 224.92C516.959 198.353 486.597 230.813 474.312 257.679C442.152 172.885 349.068 230.713 415.485 305.22C418.981 314.208 432.864 322.198 429.867 332.086C412.389 363.347 395.311 394.708 377.833 425.869C356.659 457.03 343.775 499.377 317.608 524.645C275.76 527.442 161.103 516.455 203.85 589.165C225.123 612.535 260.379 597.654 287.945 599.751C365.148 595.557 442.152 601.449 519.356 598.453C559.006 597.554 564.2 539.926 525.248 532.935C485.698 525.944 445.548 528.341 405.698 524.945C450.342 445.944 489.293 363.746 538.432 287.342C551.316 269.564 564.299 242.398 545.223 224.92ZM342.277 86.6927C463.326 84.6952 587.87 65.619 705.523 104.97C830.467 143.522 874.012 278.153 872.814 397.105C873.713 481.299 874.012 566.193 858.931 649.19C834.262 804.895 746.172 873.01 590.666 874.608C422.377 880.301 172.489 908.965 104.474 711.012C76.5092 599.452 86.6964 481.1 88.1946 366.843C98.9811 200.75 163.301 90.2882 342.277 86.6927ZM715.411 596.156C758.856 591.362 754.362 524.645 710.816 524.545C610.542 525.244 639.605 550.513 594.462 456.83C577.383 418.778 540.529 337.279 496.085 396.006C479.206 431.062 516.359 464.121 528.844 495.382C569.892 560.6 606.647 628.515 648.494 693.334C667.77 724.495 716.509 696.73 697.333 663.372C685.048 642.298 677.258 619.726 665.773 598.253C682.452 597.854 698.831 598.053 715.411 596.156Z"
                                fill="#000000"
                              ></path>{" "}
                              <path
                                d="M265.471 626.12C284.647 595.758 329.491 609.042 330.39 643.199C325.296 664.872 313.511 684.647 298.53 701.027C275.758 724.997 235.009 703.124 242.5 670.864C246.195 654.485 256.882 640.302 265.471 626.12Z"
                                fill="white"
                              ></path>{" "}
                            </g>
                          </svg>
                        </span>
                        <span className="text-left">
                          <span className="block text-xs opacity-70">
                            Download from
                          </span>
                          <span className="block text-sm font-medium">
                            App Store
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative z-10 mx-auto mt-20 max-w-[435px] lg:mt-0"
                  data-wow-delay=".3s"
                >
                  <Image
                    width={299}
                    height={419}
                    src={screenPhone}
                    alt="cta image"
                    className="mx-auto max-w-full rounded-3xl"
                  />

                  <div className="absolute -top-5 left-0 right-0 -z-10 aspect-square w-full rounded-full bg-gradient-2"></div>
                  <div className="absolute right-0 top-0 -z-10">
                    <svg
                      width="60"
                      height="43"
                      viewBox="0 0 60 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_47_16)">
                        <path
                          d="M18.3392 1.12402C18.342 1.06386 18.3451 1.00425 18.3484 0.94519C18.3456 1.00499 18.3425 1.06459 18.3392 1.12402C18.0601 7.2551 21.0899 18.9962 35.5087 18.295C29.6192 18.7078 17.9481 22.8922 18.347 36.3249C18.164 30.4662 14.3716 18.8894 0.685511 18.8251C0.56152 18.827 0.43993 18.8273 0.320892 18.8261C0.443205 18.8249 0.564743 18.8245 0.685511 18.8251C6.49532 18.7353 17.5757 15.1217 18.3392 1.12402Z"
                          fill="#7083F5"
                        />
                        <path
                          d="M48.8789 21.0097C48.8805 20.9735 48.8824 20.9378 48.8844 20.9023C48.8827 20.9382 48.8808 20.974 48.8789 21.0097C48.7114 24.6883 50.5293 31.733 59.1806 31.3122C55.6469 31.5599 48.6442 34.0705 48.8836 42.1302C48.7737 38.615 46.4983 31.6689 38.2867 31.6303C38.2123 31.6315 38.1393 31.6316 38.0679 31.6309C38.1413 31.6301 38.2142 31.6299 38.2867 31.6303C41.7725 31.5764 48.4208 29.4082 48.8789 21.0097Z"
                          fill="#19DEBB"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_47_16">
                          <rect
                            width="58.8596"
                            height="41.2017"
                            fill="white"
                            transform="translate(0.320892 0.94519)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 -z-10">
                    <svg
                      width="54"
                      height="30"
                      viewBox="0 0 54 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45.9917 2.36882C44.2769 2.15978 42.6317 2.85567 40.9325 4.31213C38.1361 6.70897 33.284 7.90131 28.9104 4.32298C27.0368 2.79004 25.4038 2.54769 24.0545 2.77256C22.6575 3.00539 21.4826 3.75015 20.559 4.36587C19.0962 5.34105 17.4854 6.36579 15.6302 6.60628C13.7152 6.85451 11.6704 6.25989 9.34099 4.31875C7.39062 2.69344 5.7217 2.38082 4.43974 2.57805C3.12805 2.77985 2.10604 3.53341 1.51791 4.22847C1.25454 4.53973 0.788703 4.57855 0.477442 4.31517C0.16618 4.0518 0.12736 3.58597 0.390736 3.2747C1.15611 2.37017 2.47833 1.38589 4.21521 1.11867C5.98181 0.846879 8.06579 1.33405 10.2863 3.18443C12.3865 4.93464 14.0331 5.32439 15.4403 5.14198C16.9074 4.95181 18.2496 4.13088 19.74 3.13731L20.1495 3.75159L19.74 3.13731C20.6621 2.52256 22.0711 1.60622 23.8118 1.3161C25.6002 1.01804 27.6585 1.39092 29.8454 3.18019C33.5527 6.21337 37.6 5.22376 39.9716 3.19104C41.8396 1.5899 43.8859 0.624641 46.1703 0.903125C48.432 1.17883 50.7386 2.65261 53.1915 5.48284C53.4585 5.79096 53.4252 6.25723 53.1171 6.52426C52.809 6.7913 52.3427 6.758 52.0757 6.44988C49.7297 3.74304 47.7293 2.58064 45.9917 2.36882Z"
                        fill="#F76D8D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45.9916 10.1093C44.2769 9.90026 42.6317 10.5961 40.9325 12.0526C38.1361 14.4494 33.2839 15.6418 28.9104 12.0635C27.0368 10.5305 25.4037 10.2882 24.0545 10.513C22.6575 10.7459 21.4825 11.4906 20.559 12.1063C19.0962 13.0815 17.4853 14.1063 15.6301 14.3468C13.7151 14.595 11.6704 14.0004 9.34098 12.0592C7.3906 10.4339 5.72169 10.1213 4.43972 10.3185C3.12804 10.5203 2.10603 11.2739 1.5179 11.9689C1.25452 12.2802 0.788688 12.319 0.477426 12.0557C0.166165 11.7923 0.127345 11.3264 0.39072 11.0152C1.15609 10.1107 2.47832 9.12637 4.2152 8.85915C5.98179 8.58736 8.06578 9.07453 10.2862 10.9249C12.3865 12.6751 14.0331 13.0649 15.4403 12.8825C16.9074 12.6923 18.2496 11.8714 19.7399 10.8778L20.1495 11.4921L19.7399 10.8778C20.6621 10.263 22.071 9.34669 23.8117 9.05658C25.6002 8.75852 27.6585 9.1314 29.8454 10.9207C33.5526 13.9538 37.6 12.9642 39.9716 10.9315C41.8396 9.33038 43.8858 8.36512 46.1703 8.6436C48.432 8.9193 50.7386 10.3931 53.1915 13.2233C53.4585 13.5314 53.4252 13.9977 53.1171 14.2647C52.809 14.5318 52.3427 14.4985 52.0757 14.1904C49.7297 11.4835 47.7292 10.3211 45.9916 10.1093Z"
                        fill="#F76D8D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45.9916 17.8577C44.2769 17.6487 42.6317 18.3446 40.9325 19.801C38.1361 22.1979 33.2839 23.3902 28.9104 19.8119C27.0368 18.2789 25.4037 18.0366 24.0545 18.2615C22.6575 18.4943 21.4825 19.239 20.559 19.8548C19.0962 20.8299 17.4853 21.8547 15.6301 22.0952C13.7151 22.3434 11.6704 21.7488 9.34098 19.8076C7.3906 18.1823 5.72169 17.8697 4.43972 18.0669C3.12804 18.2687 2.10603 19.0223 1.5179 19.7174C1.25452 20.0286 0.788688 20.0674 0.477426 19.8041C0.166165 19.5407 0.127345 19.0749 0.39072 18.7636C1.15609 17.8591 2.47832 16.8748 4.2152 16.6076C5.98179 16.3358 8.06578 16.8229 10.2862 18.6733C12.3865 20.4235 14.0331 20.8133 15.4403 20.6309C16.9074 20.4407 18.2496 19.6198 19.7399 18.6262L20.1495 19.2405L19.7399 18.6262C20.6621 18.0114 22.071 17.0951 23.8117 16.805C25.6002 16.5069 27.6585 16.8798 29.8454 18.6691C33.5526 21.7023 37.6 20.7127 39.9716 18.6799C41.8396 17.0788 43.8858 16.1135 46.1703 16.392C48.432 16.6677 50.7386 18.1415 53.1915 20.9717C53.4585 21.2799 53.4252 21.7461 53.1171 22.0132C52.809 22.2802 52.3427 22.2469 52.0757 21.9388C49.7297 19.2319 47.7292 18.0695 45.9916 17.8577Z"
                        fill="#F76D8D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45.9916 25.6056C44.2769 25.3966 42.6317 26.0925 40.9325 27.5489C38.1361 29.9458 33.2839 31.1381 28.9104 27.5598C27.0368 26.0269 25.4037 25.7845 24.0545 26.0094C22.6575 26.2422 21.4825 26.987 20.559 27.6027C19.0962 28.5779 17.4853 29.6026 15.6301 29.8431C13.7151 30.0913 11.6704 29.4967 9.34098 27.5556C7.3906 25.9303 5.72169 25.6176 4.43972 25.8149C3.12804 26.0167 2.10603 26.7702 1.5179 27.4653C1.25452 27.7765 0.788688 27.8154 0.477426 27.552C0.166165 27.2886 0.127345 26.8228 0.39072 26.5115C1.15609 25.607 2.47832 24.6227 4.2152 24.3555C5.98179 24.0837 8.06578 24.5709 10.2862 26.4212C12.3865 28.1715 14.0331 28.5612 15.4403 28.3788C16.9074 28.1886 18.2496 27.3677 19.7399 26.3741L20.1495 26.9884L19.7399 26.3741C20.6621 25.7594 22.071 24.843 23.8117 24.5529C25.6002 24.2549 27.6585 24.6277 29.8454 26.417C33.5526 29.4502 37.6 28.4606 39.9716 26.4279C41.8396 24.8267 43.8858 23.8615 46.1703 24.1399C48.432 24.4156 50.7386 25.8894 53.1915 28.7197C53.4585 29.0278 53.4252 29.494 53.1171 29.7611C52.809 30.0281 52.3427 29.9948 52.0757 29.6867C49.7297 26.9799 47.7292 25.8175 45.9916 25.6056Z"
                        fill="#F76D8D"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Graphics*/}
        <Graphics />
      </section>
    </>
  );
};

export default Cta;
