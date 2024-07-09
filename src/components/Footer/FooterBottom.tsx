import React from "react";
import Link from "next/link";

const FooterBottom = () => {
  return (
    <>
      <div className="bg-primary py-5 dark:bg-black">
        <div className="container max-w-[1390px]">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <p className=" text-center text-base text-white">
                © 2024 Kaamhai. All rights reserved | Technology partener{" "}
                <a
                  href="https://www.nityom.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nityom
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
