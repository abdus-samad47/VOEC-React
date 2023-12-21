import React from "react";

import { Img, Text } from "components";

const ForgotPasswordPageFourPage = () => {
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
            <div className="bg-gray-300_01 flex flex-col h-full items-center justify-start ml-[100px] mt-[130px] p-[146px] md:px-10 sm:px-5 rounded-[37px] w-[43%]">
              <Img
                className="h-[97px] md:h-auto mb-[9px] object-cover w-[27%]"
                src="images/img_photo4.png"
                alt="photoFour"
              />
            </div>
            <div className="absolute h-[780px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[780px] m-auto object-cover w-full"
                src="images/img_group71.png"
                alt="groupSeventyOne"
              />
              <div className="absolute h-[780px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="absolute h-[780px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_texture.png"
                  alt="texture"
                />
                <div className="absolute flex flex-col gap-10 items-center justify-start right-[9%] top-[21%] w-[24%]">
                  <div className="flex flex-col gap-12 items-center justify-start shadow-bs w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[100px] items-center justify-start p-[26px] sm:px-5 w-[100px]"
                      style={{
                        backgroundImage: "url('images/img_group76.svg')",
                      }}
                    >
                      <Img
                        className="h-9 mb-[3px] mt-[7px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                    <div className="bg-blue_gray-100 h-[75px] rounded-bl-[38px] rounded-br-[37px] rounded-tl-[38px] rounded-tr-[37px] w-[85%]"></div>
                    <div className="bg-gray-500 flex flex-col items-center justify-end p-[11px] rounded-lg w-full">
                      <Text
                        className="mt-[9px] text-center text-white-A700 text-xl"
                        size="txtUrbanistRomanSemiBold20WhiteA700"
                      >
                        Verify
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-poppins items-center justify-start shadow-bs">
                    <Text
                      className="text-[15px] text-center text-gray-900 tracking-[0.15px]"
                      size="txtPoppinsSemiBold15"
                    >
                      <span className="text-gray-900 font-urbanist font-medium">
                        Didn’t Receive Code?{" "}
                      </span>
                      <span className="text-cyan-400 font-urbanist font-bold">
                        Resend
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[33%] h-3.5 left-[10%] shadow-bs w-3.5"></div>
                <Img
                  className="absolute h-[400px] left-[7%] object-cover rounded-[37px] top-[17%] w-[43%]"
                  src="images/img_rectangle7.png"
                  alt="rectangleEight"
                />
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

export default ForgotPasswordPageFourPage;
