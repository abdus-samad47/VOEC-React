import React from "react";

import { Img, Line, Text } from "components";

const SalesDetailsPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <header className="bg-gray-500 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700_01 flex md:flex-1 flex-col items-center justify-start mb-[62px] ml-5 md:ml-[0] md:mt-0 mt-[66px] p-2 rounded-[19px] shadow-bs w-[4%] md:w-full">
            <Img
              className="h-px my-2.5"
              src="images/img_arrow2.svg"
              alt="arrowTwo"
            />
          </div>
          <div className="bg-gray-50 flex md:flex-1 flex-row sm:gap-10 gap-[441px] items-center justify-center mb-[37px] md:ml-[0] ml-[374px] md:mt-0 mt-[81px] p-[11px] rounded-[24px] shadow-bs w-2/5 md:w-full">
            <Text
              className="ml-3.5 text-black-900_49 text-xl"
              size="txtInterRegular20"
            >
              Search
            </Text>
            <Img
              className="h-[23px] mr-[27px] w-[22px]"
              src="images/img_contrast.svg"
              alt="contrast"
            />
          </div>
          <Img
            className="h-9 mb-[46px] md:ml-[0] ml-[45px] mr-[389px] md:mt-0 mt-[83px]"
            src="images/img_iconshopping.svg"
            alt="iconshopping"
          />
        </header>
        <div className="bg-gray-100 h-[38px] w-full"></div>
        <div className="font-spartan md:h-[1208px] h-[778px] md:px-5 relative w-full">
          <Img
            className="h-[778px] m-auto object-cover w-full"
            src="images/img_group71.png"
            alt="groupSeventyOne"
          />
          <div className="absolute md:h-[1208px] h-[778px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[778px] m-auto object-cover w-full"
              src="images/img_texture.png"
              alt="texture"
            />
            <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[12%] w-[91%]">
              <div className="bg-gradient  flex flex-col items-center justify-start mb-[69px] p-[41px] md:px-10 sm:px-5 w-[64%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[41px] mt-[34px] w-[98%] md:w-full">
                  <div className="flex flex-col items-center justify-start rounded-[30px] shadow-bs w-[44%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="gap-[9px] grid grid-cols-2 justify-center min-h-[auto] w-full">
                        <div className="bg-white-A700 border-2 border-gray-200_01 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[30px] w-full">
                          <div className="flex flex-col items-start justify-start my-[3px] w-[96%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="bg-gray-200_02 flex flex-col items-center justify-start p-1 rounded-[14px]">
                                <Img
                                  className="h-[21px] rounded-[9px]"
                                  src="images/img_location.svg"
                                  alt="location"
                                />
                              </div>
                              <Img
                                className="h-[29px] rounded-[12px]"
                                src="images/img_user.svg"
                                alt="user"
                              />
                            </div>
                            <Text
                              className="mt-[9px] text-[12.22px] text-gray-700_01 tracking-[0.12px]"
                              size="txtSpartanRegular1222"
                            >
                              Total Sales
                            </Text>
                            <Text
                              className="mt-[3px] sm:text-[18.4px] md:text-[20.4px] text-[22.4px] text-black-900 tracking-[0.22px]"
                              size="txtSpartanBold224"
                            >
                              $8,678.93
                            </Text>
                            <div className="flex flex-row items-start justify-start mt-[18px] w-[82%] md:w-full">
                              <div className="md:h-2 h-[7px] mt-0.5 relative w-[10%]">
                                <Img
                                  className="absolute bottom-[0] h-1.5 left-[0] rounded-[50%] w-full"
                                  src="images/img_user_teal_a700.svg"
                                  alt="user_One"
                                />
                                <Img
                                  className="absolute h-[3px] right-[0] rounded-[1px] top-[0] w-0.5"
                                  src="images/img_vector.svg"
                                  alt="vector"
                                />
                              </div>
                              <Text
                                className="ml-0.5 text-[10.38px] text-teal-A700 tracking-[0.10px]"
                                size="txtSpartanRegular1038"
                              >
                                13.02%
                              </Text>
                              <Text
                                className="ml-0.5 text-[10.38px] text-gray-700_01 tracking-[0.10px]"
                                size="txtSpartanRegular1038Gray70001"
                              >
                                From Jan
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 border-2 border-gray-200_01 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[30px] w-full">
                          <div className="flex flex-col items-start justify-start my-[3px] w-[96%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="bg-gray-100_03 flex flex-col items-center justify-start p-[3px] rounded-[14px]">
                                <Img
                                  className="h-[23px]"
                                  src="images/img_user_red_a700_01.svg"
                                  alt="user"
                                />
                              </div>
                              <Img
                                className="h-[29px] rounded-[12px]"
                                src="images/img_user.svg"
                                alt="user_One"
                              />
                            </div>
                            <Text
                              className="mt-2.5 text-[12.22px] text-gray-700_01 tracking-[0.12px]"
                              size="txtSpartanRegular1222"
                            >
                              Total Sales
                            </Text>
                            <Text
                              className="mt-0.5 sm:text-[18.4px] md:text-[20.4px] text-[22.4px] text-black-900 tracking-[0.22px]"
                              size="txtSpartanBold224"
                            >
                              $234.14
                            </Text>
                            <div className="flex flex-row items-start justify-start mt-[18px] w-[82%] md:w-full">
                              <div className="md:h-2 h-[7px] mt-0.5 relative w-[10%]">
                                <Img
                                  className="absolute bottom-[0] h-1.5 left-[0] rounded-[50%] w-full"
                                  src="images/img_user_teal_a700.svg"
                                  alt="user_Two"
                                />
                                <Img
                                  className="absolute h-[3px] right-[0] rounded-[1px] top-[0] w-0.5"
                                  src="images/img_vector.svg"
                                  alt="vector"
                                />
                              </div>
                              <Text
                                className="ml-0.5 text-[10.38px] text-teal-A700 tracking-[0.10px]"
                                size="txtSpartanRegular1038"
                              >
                                13.02%
                              </Text>
                              <Text
                                className="ml-0.5 text-[10.38px] text-gray-700_01 tracking-[0.10px]"
                                size="txtSpartanRegular1038Gray70001"
                              >
                                From Jan
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 border-2 border-gray-200_01 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[30px] w-full">
                          <div className="flex flex-col items-start justify-start my-0.5 w-[96%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="bg-gray-200_02 flex flex-col items-center justify-start mt-0.5 p-1 rounded-[14px]">
                                <Img
                                  className="h-[23px]"
                                  src="images/img_settings.svg"
                                  alt="settings"
                                />
                              </div>
                              <Img
                                className="h-[29px] rounded-[12px]"
                                src="images/img_user.svg"
                                alt="user"
                              />
                            </div>
                            <Text
                              className="mt-[9px] text-[12.22px] text-gray-700_01 tracking-[0.12px]"
                              size="txtSpartanRegular1222"
                            >
                              Total Sales
                            </Text>
                            <Text
                              className="mt-0.5 sm:text-[18.4px] md:text-[20.4px] text-[22.4px] text-black-900 tracking-[0.22px]"
                              size="txtSpartanBold224"
                            >
                              $82.94%
                            </Text>
                            <div className="flex flex-row items-start justify-start md:ml-[0] ml-[3px] mt-[18px] w-[82%] md:w-full">
                              <Img
                                className="h-2 mt-1"
                                src="images/img_user_red_a700_01_8x10.svg"
                                alt="user_One"
                              />
                              <Text
                                className="ml-[3px] text-[10.96px] text-red-A700_01 tracking-[0.11px]"
                                size="txtSpartanRegular1096"
                              >
                                0.32%
                              </Text>
                              <Text
                                className="ml-[3px] text-[10.38px] text-gray-700_01 tracking-[0.10px]"
                                size="txtSpartanRegular1038Gray70001"
                              >
                                From Jan
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 border-2 border-gray-200_01 border-solid flex flex-1 flex-col items-center justify-start p-[11px] rounded-[30px] w-full">
                          <div className="flex flex-col items-start justify-start my-[3px] w-[96%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="bg-gray-200_02 flex flex-col items-center justify-start mt-0.5 p-[5px] rounded-[14px]">
                                <Img
                                  className="h-[19px]"
                                  src="images/img_settings_red_a700_01.svg"
                                  alt="settings"
                                />
                              </div>
                              <Img
                                className="h-[29px] rounded-[12px]"
                                src="images/img_user.svg"
                                alt="user"
                              />
                            </div>
                            <Text
                              className="mt-[9px] text-[12.22px] text-gray-700_01 tracking-[0.12px]"
                              size="txtSpartanRegular1222"
                            >
                              Total Sales
                            </Text>
                            <Text
                              className="mt-[3px] sm:text-[18.4px] md:text-[20.4px] text-[22.4px] text-black-900 tracking-[0.22px]"
                              size="txtSpartanBold224"
                            >
                              $143,422
                            </Text>
                            <div className="flex flex-row items-start justify-start mt-[18px] w-[82%] md:w-full">
                              <div className="md:h-2 h-[7px] mt-0.5 relative w-[10%]">
                                <Img
                                  className="absolute bottom-[0] h-1.5 left-[0] rounded-[50%] w-full"
                                  src="images/img_user_teal_a700.svg"
                                  alt="user_One"
                                />
                                <Img
                                  className="absolute h-[3px] right-[0] rounded-[1px] top-[0] w-0.5"
                                  src="images/img_vector.svg"
                                  alt="vector"
                                />
                              </div>
                              <Text
                                className="ml-0.5 text-[10.38px] text-teal-A700 tracking-[0.10px]"
                                size="txtSpartanRegular1038"
                              >
                                13.02%
                              </Text>
                              <Text
                                className="ml-0.5 text-[10.38px] text-gray-700_01 tracking-[0.10px]"
                                size="txtSpartanRegular1038Gray70001"
                              >
                                From Jan
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] justify-start w-[44%] md:w-full">
                    <Text
                      className="bg-white-A700 h-[23px] justify-center ml-1.5 md:ml-[0] mr-[221px] pb-0.5 pt-[7px] px-[15px] rounded-[11px] text-[11px] text-gray-900_01 text-shadow-ts tracking-[0.11px] w-[111px]"
                      size="txtSpartanBold11"
                    >
                      Top countries
                    </Text>
                    <div className="bg-white-A700 flex flex-col gap-[15px] items-center justify-start p-[26px] sm:px-5 rounded-[30px] shadow-bs w-full">
                      <Text
                        className="bg-white-A700 h-[46px] justify-center pb-3.5 pt-5 sm:px-5 px-[35px] rounded-[23px] text-[11px] text-black-900 text-shadow-ts tracking-[0.11px] w-[274px]"
                        size="txtSpartanBold11Black900"
                      >
                        1
                      </Text>
                      <Text
                        className="bg-white-A700 h-[46px] justify-center sm:px-5 px-[35px] py-[17px] rounded-[23px] text-[11px] text-black-900 text-shadow-ts tracking-[0.11px] w-[274px]"
                        size="txtSpartanBold11Black900"
                      >
                        2
                      </Text>
                      <Text
                        className="bg-white-A700 h-[46px] justify-center sm:px-5 px-[35px] py-[17px] rounded-[23px] text-[11px] text-black-900 text-shadow-ts tracking-[0.11px] w-[274px]"
                        size="txtSpartanBold11Black900"
                      >
                        3
                      </Text>
                      <Text
                        className="bg-white-A700 h-[46px] justify-center sm:px-5 px-[35px] py-[17px] rounded-[23px] text-[11px] text-black-900 text-shadow-ts tracking-[0.11px] w-[274px]"
                        size="txtSpartanBold11Black900"
                      >
                        4
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:mt-0 mt-[75px] w-[31%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[210px] justify-start w-full">
                  <div className="bg-white-A700 border-2 border-gray-500_03 border-solid flex flex-col items-center justify-start p-[9px] rounded-[20px] w-full">
                    <div className="flex flex-col gap-[21px] items-start justify-start mt-[5px] w-[97%] md:w-full">
                      <div className="flex flex-row items-start justify-start w-[59%] md:w-full">
                        <Text
                          className="text-[12.22px] text-gray-700_01 tracking-[0.12px]"
                          size="txtSpartanRegular1222"
                        >
                          Overall Sales
                        </Text>
                        <Text
                          className="mt-0.5 sm:text-[18.4px] md:text-[20.4px] text-[22.4px] text-black-900 tracking-[0.22px]"
                          size="txtSpartanBold224"
                        >
                          $ 0.00
                        </Text>
                        <Text
                          className="ml-9 mt-1 text-[14.26px] text-teal-A700 tracking-[0.14px]"
                          size="txtSpartanRegular1426"
                        >
                          0.0%
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-1.5 items-end justify-between w-full">
                        <Text
                          className="text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                          size="txtSpartanRegular1222Gray40001"
                        >
                          $300K
                        </Text>
                        <Line className="bg-gray-300 h-px sm:mt-0 my-1 w-[91%]" />
                      </div>
                    </div>
                    <div className="sm:h-[126px] h-[73px] md:h-[91px] mt-[21px] relative w-[99%] sm:w-full">
                      <div className="sm:h-[105px] md:h-[70px] h-[73px] m-auto w-full">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col gap-5 items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row gap-1.5 items-end justify-between w-[99%] md:w-full">
                              <Text
                                className="text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                                size="txtSpartanRegular1222Gray40001"
                              >
                                $250K
                              </Text>
                              <Line className="bg-gray-300 h-px sm:mt-0 my-1 w-[91%]" />
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[5px] items-end justify-evenly w-[99%] md:w-full">
                              <Text
                                className="text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                                size="txtSpartanRegular1222Gray40001"
                              >
                                $200K
                              </Text>
                              <Line className="bg-gray-300 h-px sm:mt-0 my-1 w-[91%]" />
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-between w-[99%] md:w-full">
                              <Text
                                className="text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                                size="txtSpartanRegular1222Gray40001"
                              >
                                $150K
                              </Text>
                              <Line className="bg-gray-300 h-px sm:mt-0 my-1 w-[91%]" />
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[66px] left-[11%] top-[0]"
                          src="images/img_vector2.svg"
                          alt="vectorTwo"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[7%] h-[46px] left-[11%]"
                        src="images/img_vector3.svg"
                        alt="vectorThree"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[15px] mt-[19px] w-[94%] md:w-full">
                      <div className="flex flex-col gap-[5px] justify-start w-full">
                        <div className="flex flex-row gap-2 items-end justify-between w-full">
                          <Text
                            className="text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                            size="txtSpartanRegular1222Gray40001"
                          >
                            $100K
                          </Text>
                          <Line className="bg-gray-300 h-px mb-1 mt-[7px] w-[91%]" />
                        </div>
                        <div className="flex flex-row items-center justify-start ml-10 md:ml-[0] w-[58%] md:w-full">
                          <Text
                            className="text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                            size="txtSpartanRegular1222Gray40001"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[21px] text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                            size="txtSpartanRegular1222Gray40001"
                          >
                            3
                          </Text>
                          <Text
                            className="ml-[22px] text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                            size="txtSpartanRegular1222Gray40001"
                          >
                            4
                          </Text>
                          <Text
                            className="ml-[22px] text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                            size="txtSpartanRegular1222Gray40001"
                          >
                            5
                          </Text>
                          <Text
                            className="ml-[21px] text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                            size="txtSpartanRegular1222Gray40001"
                          >
                            6
                          </Text>
                          <Text
                            className="ml-[21px] text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                            size="txtSpartanRegular1222Gray40001"
                          >
                            7
                          </Text>
                          <Text
                            className="ml-[22px] text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                            size="txtSpartanRegular1222Gray40001"
                          >
                            8
                          </Text>
                          <Text
                            className="ml-[21px] text-[12.22px] text-gray-400_01 tracking-[0.12px]"
                            size="txtSpartanRegular1222Gray40001"
                          >
                            9
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[11px] md:ml-[0] ml-[179px] w-2.5"
                    src="images/img_up.svg"
                    alt="up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesDetailsPagePage;
