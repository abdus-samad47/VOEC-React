import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header1 from "components/Header1";

const CustomerSupportPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-solid flex flex-col h-[900px] items-center justify-end mx-auto w-full white_A700_black_900_00_border9"
        style={{ backgroundImage: "url('images/img_dashboardoverview.png')" }}
      >
        <div className="flex flex-col justify-end w-full">
          <Header1 className="bg-gray-500 flex flex-col font-inter items-center justify-center md:px-5 w-full" />
          <Text
            className="md:ml-[0] ml-[51px] mr-[1059px] mt-[3px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-1.50px]"
            size="txtPublicSansSemiBold36"
          >
            Customer Support
          </Text>
          <div className="flex flex-col font-actor gap-[15px] items-center justify-start md:ml-[0] ml-[504px] mr-[570px] mt-[189px] md:px-5 w-[24%] md:w-full">
            <Input
              name="yourname"
              placeholder="Your Name"
              className="!placeholder:text-black-900 !text-black-900 p-0 text-left text-lg tracking-[0.72px] w-full"
              wrapClassName="border border-blue_gray-200_01 border-solid rounded-[31px] w-full"
              type="text"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
            <Input
              name="youremailaddress"
              placeholder="Your Email Address"
              className="!placeholder:text-black-900 !text-black-900 p-0 text-left text-lg tracking-[0.72px] w-full"
              wrapClassName="border border-blue_gray-200_01 border-solid rounded-[26px] w-full"
              type="email"
              color="white_A700"
              size="2xl"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col font-publicsans items-center justify-start md:ml-[0] ml-[468px] mr-[535px] mt-[42px] md:px-5 w-[29%] md:w-full">
            <Button
              className="common-pointer cursor-pointer font-semibold min-w-[397px] sm:min-w-full outline outline-[0.5px] outline-gray-500 rounded-[20px] text-center text-lg tracking-[-0.40px]"
              onClick={() => navigate("/customersupportchatpage")}
              color="gray_500"
              size="lg"
              variant="fill"
            >
              Start Chat
            </Button>
          </div>
          <div className="flex flex-row font-publicsans items-center justify-between md:ml-[0] ml-[727px] mr-[346px] mt-[444px] md:px-5 w-[24%] md:w-full">
            <Text
              className="text-[17px] text-black-900 tracking-[-0.40px]"
              size="txtPublicSansRegular17"
            >
              $99
            </Text>
            <Text
              className="text-[17px] text-black-900 tracking-[-0.40px]"
              size="txtPublicSansRegular17"
            >
              $99
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSupportPagePage;
