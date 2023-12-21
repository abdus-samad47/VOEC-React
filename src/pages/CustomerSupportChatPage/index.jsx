import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import CustomerSupportOneStackjanecooper from "components/CustomerSupportOneStackjanecooper";
import Header1 from "components/Header1";

const CustomerSupportChatPagePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-solid flex flex-col h-[900px] items-center justify-end mx-auto w-full white_A700_black_900_00_border10"
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
          <div className="flex md:flex-col flex-row font-actor md:gap-10 items-start justify-between max-w-[1352px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[34px] items-end justify-start mb-[70px] w-[55%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[101px] justify-start w-full">
                <div className="md:h-[55px] h-[61px] relative w-[55%] sm:w-full">
                  <CustomerSupportOneStackjanecooper
                    className="absolute md:h-[55px] h-[61px] inset-y-[0] my-auto right-[0] w-[94%] sm:w-full"
                    teamstatus={
                      <Text className="absolute bottom-[0] font-actor leading-[20.00px] right-[11%] text-[15px] text-gray-800_99">
                        <span className="text-gray-800_99 text-left font-normal">
                          <>
                            Customer Support Team
                            <br />
                          </>
                        </span>
                        <span className="text-gray-800_99 text-left font-normal">
                          Status:{" "}
                        </span>
                        <span className="text-green-A700_99 font-abrilfatface text-left font-normal">
                          Connected
                        </span>
                      </Text>
                    }
                  />
                  <Img
                    className="absolute bottom-[8%] h-10 left-[0] object-cover w-[28%]"
                    src="images/img_1280pxlogonike.png"
                    alt="1280pxlogonike"
                  />
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start ml-9 md:ml-[0] pb-[35px] sm:pr-5 pr-[35px] w-[96%] md:w-full">
                  <Text
                    className="text-gray-700_02 text-xs"
                    size="txtHelvetica12"
                  >
                    9:51 AM
                  </Text>
                  <Input
                    name="niketeambubble"
                    placeholder="Thanks for contacting Voice of Elite Customer! My name is Hammad, how can I help you?"
                    className="font-actor p-0 placeholder:text-black-900 text-[17px] text-left tracking-[-0.41px] w-full"
                    wrapClassName="rounded-bl-sm rounded-br-[18px] rounded-tl-[18px] rounded-tr-[18px] w-[97%]"
                    type="text"
                    color="blue_gray_200_3f"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pb-9 sm:pr-5 pr-9 w-[96%] md:w-full">
                <Text
                  className="text-gray-700_02 text-xs"
                  size="txtActorRegular12"
                >
                  9:51 AM
                </Text>
                <Button
                  className="cursor-pointer min-w-[476px] sm:min-w-full mt-1 rounded-bl-sm rounded-br-[18px] rounded-tl-[18px] rounded-tr-[18px] text-[17px] text-center tracking-[-0.41px]"
                  color="blue_gray_200_3f"
                  size="sm"
                  variant="fill"
                >
                  Please provide your order number and article you want to
                  return
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[22px] items-center justify-start md:mt-0 mt-[244px] w-1/5 md:w-full">
              <div className="flex flex-col gap-1.5 items-end justify-start pb-[43px] w-full">
                <Text
                  className="text-gray-700_02 text-right text-xs"
                  size="txtHelvetica12"
                >
                  9:51 AM
                </Text>
                <Input
                  name="customerbubble"
                  placeholder="I want to return one item"
                  className="font-actor p-0 placeholder:text-white-A700 text-[17px] text-left tracking-[-0.41px] w-full"
                  wrapClassName="rounded-bl-[18px] rounded-br-sm rounded-tl-[18px] rounded-tr-[18px] w-full"
                  color="deep_orange_600_01"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1.5 items-end justify-start pb-[43px] w-full">
                <Text
                  className="text-gray-700_02 text-right text-xs"
                  size="txtHelvetica12"
                >
                  9:51 AM
                </Text>
                <Input
                  name="customerbubble_One"
                  placeholder="I want to return one item"
                  className="font-actor p-0 placeholder:text-white-A700 text-[17px] text-left tracking-[-0.41px] w-full"
                  wrapClassName="rounded-bl-[18px] rounded-br-sm rounded-tl-[18px] rounded-tr-[18px] w-full"
                  color="deep_orange_600_01"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-actor gap-[18px] items-center justify-start max-w-[1266px] mt-[210px] mx-auto md:px-5 w-full">
            <Input
              name="group102"
              placeholder="Write your message here"
              className="!placeholder:text-black-900 !text-black-900 p-0 text-left text-lg tracking-[0.72px] w-full"
              wrapClassName="border border-blue_gray-200_01 border-solid md:flex-1 rounded-[31px] w-[91%] md:w-full"
              color="white_A700"
              size="3xl"
              variant="fill"
            ></Input>
            <div className="flex md:flex-1 flex-col font-publicsans items-center justify-start w-[9%] md:w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[102px] outline outline-[0.5px] outline-gray-500 rounded-[20px] text-center text-lg tracking-[-0.40px]"
                color="gray_500"
                size="lg"
                variant="fill"
              >
                Send{" "}
              </Button>
            </div>
          </div>
          <div className="flex flex-row font-publicsans items-center justify-between md:ml-[0] ml-[727px] mr-[346px] mt-[120px] md:px-5 w-[24%] md:w-full">
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

export default CustomerSupportChatPagePage;
