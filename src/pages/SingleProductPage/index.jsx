import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import WireFrameDesktopProductTwoNavbar from "components/WireFrameDesktopProductTwoNavbar";

const SingleProductPagePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-solid flex flex-col font-inter h-[887px] items-center justify-start mx-auto w-full white_A700_white_A700_00_border2"
        style={{ backgroundImage: "url('images/img_dashboardoverview.png')" }}
      >
        <div className="flex flex-col items-start justify-start w-full">
          <div className="h-16 sm:h-[296px] md:h-[63px] md:px-5 relative w-full">
            <div className="absolute bg-gray-500 h-[63px] inset-[0] justify-center m-auto w-full"></div>
            <WireFrameDesktopProductTwoNavbar
              className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto pt-4 w-full"
              storiestext="Stories"
            />
          </div>
          <div className="flex md:flex-col flex-row font-publicsans gap-5 items-start justify-start md:ml-[0] ml-[30px] mt-[62px] md:px-5 w-[79%] md:w-full">
            <div className="flex flex-col items-center justify-start rounded-[20px] shadow-bs w-[51%] md:w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-between w-full">
                  <Img
                    className="h-[283px] md:h-auto object-cover rounded-[20px]"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                  <Img
                    className="h-[283px] md:h-auto object-cover rounded-[20px]"
                    src="images/img_image4.png"
                    alt="imageFour"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-between w-full">
                  <Img
                    className="h-[283px] md:h-auto mb-0.5 object-cover rounded-[20px]"
                    src="images/img_image3.png"
                    alt="imageThree"
                  />
                  <Img
                    className="h-[283px] md:h-auto sm:mt-0 mt-0.5 object-cover rounded-[20px]"
                    src="images/img_image2.png"
                    alt="imageTwo"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[48%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-1.50px]"
                size="txtPublicSansSemiBold36"
              >
                Shirt
              </Text>
              <Text
                className="h-[22px] mt-1.5 text-black-900 text-lg tracking-[-0.30px]"
                size="txtPublicSansRegular18"
              >
                99
              </Text>
              <Img
                className="h-[113px] ml-0.5 md:ml-[0] mt-[50px]"
                src="images/img_description.svg"
                alt="description"
              />
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[61px] items-start justify-end md:ml-[0] ml-[38px] mt-[232px] w-[93%] md:w-full">
                <div className="md:h-[101px] h-[177px] sm:h-[431px] relative w-[82%] sm:w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[93%]">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-center justify-start mb-3 w-[30%]">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text
                            className="text-black-900_87 text-lg tracking-[-0.30px]"
                            size="txtPublicSansRegular18Black90087"
                          >
                            Color
                          </Text>
                          <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                            <Img
                              className="h-[52px] w-[51px]"
                              src="images/img_close.svg"
                              alt="close"
                            />
                            <Img
                              className="h-[52px] w-[51px]"
                              src="images/img_contrast_black_900.svg"
                              alt="contrast"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start mt-[17px] w-[28%]">
                        <Text
                          className="text-black-900_87 text-lg tracking-[-0.30px]"
                          size="txtPublicSansRegular18Black90087"
                        >
                          Quantity
                        </Text>
                        <Input
                          name="quantityinput"
                          placeholder="2"
                          className="!placeholder:text-gray-500 !text-gray-500 font-inter md:h-auto p-0 sm:h-auto text-center text-lg tracking-[-0.30px] w-full"
                          wrapClassName="flex rounded-[20px] w-full"
                          prefix={
                            <Img
                              className="h-5 mr-[15px] my-px"
                              src="images/img_settings_gray_500.svg"
                              alt="settings"
                            />
                          }
                          suffix={
                            <Img
                              className="h-5 ml-[15px] my-px"
                              src="images/img_plus_gray_500.svg"
                              alt="plus"
                            />
                          }
                          color="black_900"
                          size="xl"
                          variant="outline"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col gap-[11px] inset-x-[0] items-start justify-start mx-auto w-full">
                    <Text
                      className="text-black-900_87 text-lg tracking-[-0.30px]"
                      size="txtPublicSansRegular18Black90087"
                    >
                      Size
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-2 grid sm:grid-cols-1 grid-cols-7 h-[55px] justify-start w-[406px] sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col h-[50px] items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-semibold h-[50px] rounded-[20px] text-base text-center tracking-[-0.40px] w-[50px]"
                          color="gray_500"
                          size="md"
                          variant="outline"
                        >
                          XS
                        </Button>
                      </div>
                      <div className="flex flex-col h-[50px] items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-semibold h-[50px] rounded-[20px] text-base text-center tracking-[-0.40px] w-[50px]"
                          color="gray_500"
                          size="md"
                          variant="outline"
                        >
                          S
                        </Button>
                      </div>
                      <div className="flex flex-col h-[50px] items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-semibold h-[50px] rounded-[20px] text-base text-center tracking-[-0.40px] w-[50px]"
                          color="gray_500"
                          size="md"
                          variant="outline"
                        >
                          M
                        </Button>
                      </div>
                      <div className="flex flex-col h-[50px] items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-semibold h-[50px] rounded-[20px] text-base text-center tracking-[-0.40px] w-[50px]"
                          color="gray_500"
                          size="md"
                          variant="outline"
                        >
                          L
                        </Button>
                      </div>
                      <div className="flex flex-col h-[50px] items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-semibold h-[50px] rounded-[20px] text-base text-center tracking-[-0.40px] w-[50px]"
                          color="gray_500"
                          size="md"
                          variant="outline"
                        >
                          XL
                        </Button>
                      </div>
                      <div className="flex flex-col h-[50px] items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-semibold h-[50px] rounded-[20px] text-base text-center tracking-[-0.40px] w-[50px]"
                          color="gray_500"
                          size="md"
                          variant="outline"
                        >
                          XXL
                        </Button>
                      </div>
                      <div className="flex flex-col h-[50px] items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-semibold h-[50px] rounded-[20px] text-base text-center tracking-[-0.40px] w-[50px]"
                          color="gray_500"
                          size="md"
                          variant="outline"
                        >
                          3XL
                        </Button>
                      </div>
                    </List>
                  </div>
                </div>
                <Img
                  className="h-[19px] sm:mt-0 mt-[91px]"
                  src="images/img_favorite_black_900.svg"
                  alt="favorite"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-publicsans md:gap-5 items-end justify-start mt-9 md:px-5 w-[85%] md:w-full">
            <div className="border border-black-900_75 border-solid h-[29px] md:mt-0 mt-[51px] w-[26%]"></div>
            <Button
              className="border border-gray-500 border-solid cursor-pointer font-semibold mb-7 min-w-[357px] md:ml-[0] ml-[341px] rounded-[20px] text-base text-center tracking-[-0.40px]"
              color="gray_500"
              size="lg"
              variant="fill"
            >
              Add to Cart - $90
            </Button>
            <Text
              className="mb-1 md:ml-[0] ml-[107px] md:mt-0 mt-[59px] text-[13px] text-black-900 tracking-[-0.30px] underline"
              size="txtPublicSansRegular13"
            >
              Size & Fit Guide
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPagePage;
