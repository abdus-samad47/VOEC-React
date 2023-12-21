import React from "react";

import { Img, Input, Text } from "components";

const ForgotPasswordPageThreePage = () => {
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
          <div className="flex flex-col items-center justify-start shadow-bs w-full">
            <div className="h-[780px] md:px-5 relative w-full">
              <Img
                className="h-[780px] m-auto object-cover w-full"
                src="images/img_group71.png"
                alt="groupSeventyOne"
              />
              <div className="absolute inset-[0] justify-center m-auto overflow-x-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="bg-gray-300_01 flex md:flex-1 flex-col items-center justify-start mb-[250px] md:mt-0 mt-[130px] p-[146px] md:px-10 sm:px-5 rounded-[37px] w-[43%] md:w-full">
                    <Img
                      className="h-[97px] md:h-auto mb-[9px] object-cover w-[27%]"
                      src="images/img_photo4.png"
                      alt="photoFour"
                    />
                  </div>
                  <div className="h-[780px] md:h-[806px] relative w-full">
                    <Img
                      className="h-[780px] m-auto object-cover w-full"
                      src="images/img_texture.png"
                      alt="texture"
                    />
                    <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[17%] w-[84%]">
                      <div className="h-[400px] md:h-[419px] mb-[19px] relative w-[52%] md:w-full">
                        <Img
                          className="h-[400px] m-auto object-cover rounded-[37px] w-full"
                          src="images/img_rectangle7.png"
                          alt="rectangleSeven"
                        />
                        <div className="absolute bottom-[3%] h-3.5 left-[7%] shadow-bs w-3.5"></div>
                      </div>
                      <div className="flex flex-col md:gap-10 gap-[76px] items-center justify-start md:mt-0 mt-[35px] w-[29%] md:w-full">
                        <div className="flex flex-col items-center justify-start rounded-lg shadow-bs w-full">
                          <Input
                            name="enteryourname"
                            placeholder="Enter your Name"
                            className="font-semibold leading-[normal] p-0 placeholder:text-gray-600_01 text-center text-xl w-full"
                            wrapClassName="w-full"
                            type="text"
                            shape="round"
                            color="blue_gray_100"
                            size="2xl"
                            variant="fill"
                          ></Input>
                          <Input
                            name="enteryourpassword"
                            placeholder="Enter your Password"
                            className="font-semibold leading-[normal] p-0 placeholder:text-gray-600_01 text-center text-xl w-full"
                            wrapClassName="flex mt-3.5 w-full"
                            type="password"
                            suffix={
                              <div className="h-[22px] ml-3 w-[22px] shadow-bs my-px">
                                <Img
                                  className="h-[22px] my-auto"
                                  src="images/img_fluenteye20filled_gray_600_01.svg"
                                  alt="fluent:eye-20-filled"
                                />
                              </div>
                            }
                            shape="round"
                            color="blue_gray_100"
                            size="3xl"
                            variant="fill"
                          ></Input>
                          <Input
                            name="confirmyourpassword"
                            placeholder="Confirm your Password"
                            className="font-semibold leading-[normal] p-0 placeholder:text-gray-600_01 text-center text-xl w-full"
                            wrapClassName="mt-3.5 w-full"
                            type="password"
                            shape="round"
                            color="blue_gray_100"
                            size="2xl"
                            variant="fill"
                          ></Input>
                          <div className="bg-gray-500 flex flex-col items-center justify-end mt-[33px] p-[13px] rounded-lg w-full">
                            <a
                              href="javascript:"
                              className="mt-[5px] text-center text-white-A700 text-xl"
                            >
                              <Text size="txtUrbanistRomanSemiBold20WhiteA700">
                                Reset Password
                              </Text>
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col font-poppins items-center justify-start shadow-bs">
                          <Text
                            className="text-[15px] text-center text-gray-900 tracking-[0.15px]"
                            size="txtPoppinsSemiBold15"
                          >
                            <span className="text-gray-900 font-urbanist font-medium">
                              Remember Password?{" "}
                            </span>
                            <span className="text-cyan-400 font-urbanist font-bold">
                              Login
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default ForgotPasswordPageThreePage;
