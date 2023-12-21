import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LoginorSignupPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-urbanist items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="bg-gray-500 h-[60px] mx-auto w-full"></div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[108px] items-start justify-start mt-[-48px] mx-auto p-4 w-full z-[1]"
              style={{ backgroundImage: "url('images/img_group13.svg')" }}
            >
              <div className="flex flex-row gap-[27px] items-center justify-start mb-3 md:ml-[0] ml-[71px] shadow-bs w-[23%] md:w-full">
                <div className="bg-blue_gray-100 h-[63px] rounded-[33px] w-[22%]"></div>
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtUrbanistRomanSemiBold20"
                >
                  Voice Of Elite Customer
                </Text>
              </div>
            </div>
          </div>
          <div className="h-[780px] md:px-5 relative w-full">
            <Img
              className="h-[780px] m-auto object-cover w-full"
              src="images/img_group71.png"
              alt="groupSeventyOne"
            />
            <div className="absolute h-[780px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[780px] m-auto object-cover w-full"
                src="images/img_texture.png"
                alt="texture"
              />
              <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[17%] w-[88%]">
                <div className="flex flex-col items-center justify-start rounded-[37px] shadow-bs w-1/2 md:w-full">
                  <Img
                    className="h-[400px] md:h-auto object-cover rounded-[37px] w-full"
                    src="images/img_rectangle7.png"
                    alt="rectangleSeven"
                  />
                </div>
                <div className="flex flex-col gap-[25px] items-center justify-start md:mt-0 mt-[168px] w-[34%] md:w-full">
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[410px] sm:min-w-full text-center text-xl"
                    onClick={() => navigate("/loginpage")}
                    shape="round"
                    color="gray_500"
                    size="xl"
                    variant="fill"
                  >
                    Login
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[410px] sm:min-w-full text-center text-xl"
                    onClick={() => navigate("/signuppage")}
                    shape="round"
                    color="gray_500"
                    size="xl"
                    variant="fill"
                  >
                    Signup
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row font-publicsans items-center justify-between md:ml-[0] ml-[727px] mt-[62px] md:px-5 w-[24%] md:w-full">
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

export default LoginorSignupPagePage;
