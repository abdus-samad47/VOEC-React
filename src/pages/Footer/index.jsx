import React from "react";

import { Text } from "components";

const FooterPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-solid flex flex-col font-publicsans h-[419px] items-center justify-start mx-auto p-8 sm:px-5 w-full white_A700_black_900_00_border11"
        style={{ backgroundImage: "url('images/img_dashboardoverview.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[1115px] mb-[165px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[36%] md:w-full">
            <Text
              className="leading-[44.00px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-1.50px]"
              size="txtPublicSansSemiBold36Black900"
            >
              <>
                VOICE OF ELITE
                <br />
                Sign up for our newsletter
              </>
            </Text>
            <Text
              className="mt-[26px] text-black-900 text-sm tracking-[-0.30px] w-full"
              size="txtPublicSansRegular14"
            >
              Be the first to know about our special offers, new product
              launches, and events
            </Text>
            <div className="border border-black-900 border-solid flex flex-row items-center justify-between mt-[3px] p-[9px] w-full">
              <Text
                className="ml-1.5 text-blue_gray-200 text-sm tracking-[-0.30px]"
                size="txtPublicSansRegular14Bluegray200"
              >
                Email Address
              </Text>
              <a
                href="javascript:"
                className="mb-[3px] mr-[3px] text-black-900 text-sm tracking-[-0.30px]"
              >
                <Text size="txtPublicSansBold14">Sign Up</Text>
              </a>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start mb-1 md:mt-0 mt-3.5 w-[55%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[77%] md:w-full">
              <Text
                className="text-base text-black-900_01 tracking-[-0.40px]"
                size="txtPublicSansSemiBold16Black90001"
              >
                Shop
              </Text>
              <Text
                className="sm:ml-[0] ml-[173px] text-base text-black-900_01 tracking-[-0.40px]"
                size="txtPublicSansSemiBold16Black90001"
              >
                Help
              </Text>
              <Text
                className="sm:ml-[0] ml-[177px] text-base text-black-900_01 tracking-[-0.40px]"
                size="txtPublicSansSemiBold16Black90001"
              >
                About
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="leading-[26.00px] text-base text-gray-900_87 tracking-[-0.20px]"
                size="txtPublicSansMedium16"
              >
                <>
                  Men
                  <br />
                  Women
                  <br />
                  Kid
                  <br />
                  Home
                  <br />
                  Accessories
                </>
              </Text>
              <Text
                className="leading-[26.00px] text-base text-gray-900_87 tracking-[-0.20px]"
                size="txtPublicSansMedium16"
              >
                <>
                  Customer Support
                  <br />
                  Order Status
                  <br />
                  Size Chart
                  <br />
                  Returns
                  <br />
                  Contact Us
                </>
              </Text>
              <Text
                className="leading-[26.00px] text-base text-gray-900_87 tracking-[-0.20px]"
                size="txtPublicSansMedium16"
              >
                <>
                  About Us
                  <br />
                  Customer Reviews
                  <br />
                  Explore our stories
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterPage;
