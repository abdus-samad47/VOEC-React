import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import CustomerSidebara from "components/CustomerSidebara";
import DashboardOverviewBlock from "components/DashboardOverviewBlock";
import DashboardOverviewBreadcrumb from "components/DashboardOverviewBreadcrumb";

import { CloseSVG } from "../../assets/images";

const CustomerListPagePage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-solid flex flex-col font-inter h-[1024px] items-center justify-start mx-auto w-full white_A700_black_900_00_border2"
        style={{ backgroundImage: "url('images/img_dashboardoverview.png')" }}
      >
        <div className="flex flex-col items-center justify-start w-full">
          <header className="bg-gray-500 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Text
              className="mb-[25px] ml-3.5 md:ml-[0] md:mt-0 mt-[39px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[2.50px]"
              size="txtInterBold25"
            >
              Voice of Elite Customer
            </Text>
            <div className="flex flex-row gap-5 items-start justify-start mb-6 md:ml-[0] ml-[45px] md:mt-0 mt-10 w-auto">
              <Img
                className="h-7 w-16"
                src="images/img_settings_white_a700.svg"
                alt="settings"
              />
              <div className="flex flex-col items-center justify-start w-auto">
                <DashboardOverviewBreadcrumb
                  className="flex flex-row gap-1 h-8 md:h-auto items-center justify-start w-auto"
                  overviewbutton="Products"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-end mb-7 md:ml-[0] ml-[532px] mr-[29px] md:mt-0 mt-10 w-auto">
              <Input
                name="search"
                placeholder="Search"
                value={searchvalue}
                onChange={(e) => setSearchvalue(e)}
                className="!placeholder:text-white-A700_33 !text-white-A700_33 p-0 text-left text-sm w-full"
                wrapClassName="border border-black-900_19 border-solid flex w-[77%] md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-4 my-px"
                    src="images/img_search.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#ffffff33"
                    className="cursor-pointer h-4 my-auto"
                    onClick={() => setSearchvalue("")}
                    style={{
                      visibility:
                        searchvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={16}
                    width={16}
                    viewBox="0 0 16 16"
                  />
                }
                shape="round"
                color="white_A700_0c"
                size="xs"
                variant="fill"
              ></Input>
              <Img
                className="h-7 w-7"
                src="images/img_iconsaxtwotone.svg"
                alt="iconsaxtwotone"
              />
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <CustomerSidebara className="bg-white-A700 border-black-900_19 border-r border-solid flex md:flex-1 flex-col items-center justify-end pt-3.5 px-3.5 md:px-5 rounded-bl-[100px] w-[15%] md:w-full" />
            <div
              className="bg-cover bg-no-repeat border border-solid flex md:flex-1 flex-col h-[928px] items-center justify-start p-[19px] md:px-5 w-[86%] md:w-full white_A700_black_900_00_border3"
              style={{
                backgroundImage: "url('images/img_dashboardoverview.png')",
              }}
            >
              <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start mb-[137px] mt-[3px] w-[99%] md:w-full">
                <div className="flex flex-col gap-[41px] items-center justify-start mb-[35px] w-[76%] md:w-full">
                  <div className="flex flex-col items-center justify-between max-w-[884px] w-full">
                    <Text
                      className="text-center text-gray-900_02 text-sm w-auto"
                      size="txtInterSemiBold14"
                    >
                      Welcome back, Admin
                    </Text>
                  </div>
                  <DashboardOverviewBlock
                    className="bg-white-A700 flex flex-col gap-2.5 h-[654px] md:h-auto items-start justify-start max-w-[861px] p-6 sm:px-5 rounded-[16px] shadow-bs w-full"
                    tabOne="Customer List"
                    thisWeekOne="All"
                    productname="Customer Name"
                    price="Contact"
                    sold="Address"
                    sales="rating"
                    text="Hammad Hussain"
                    zipcode="5"
                    language="Noman"
                    zipcode1="5"
                    text1="Sajid"
                    zipcode2="5"
                    text2="Asad"
                    zipcode3="5"
                    language1="Hamza"
                    zipcode4="5"
                  />
                </div>
                <div className="flex flex-col gap-[35px] justify-start md:mt-0 mt-[47px] w-1/4 md:w-full">
                  <div className="bg-white-A700 flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[54px] mr-3.5 px-5 py-6 rounded-[16px] shadow-bs w-auto">
                    <div className="flex flex-row gap-[-2px] items-center justify-between w-full">
                      <Text
                        className="text-gray-900_02 text-sm w-auto"
                        size="txtInterSemiBold14"
                      >
                        Revenue by Region
                      </Text>
                      <Img
                        className="h-7 w-7"
                        src="images/img_button.svg"
                        alt="button_One"
                      />
                    </div>
                    <div className="md:h-[136px] h-[234px] relative w-[174px]">
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto shadow-bs w-auto">
                        <Img
                          className="h-[82px] w-[174px]"
                          src="images/img_worldmap.svg"
                          alt="worldmap"
                        />
                      </div>
                      <List
                        className="absolute bottom-[0] flex flex-col gap-4 items-start left-[0] w-auto"
                        orientation="vertical"
                      >
                        <div className="flex flex-col items-center justify-start my-0 w-full">
                          <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-gray-900_02 text-xs"
                                size="txtInterRegular12Gray90002"
                              >
                                Sindh
                              </Text>
                              <Text
                                className="text-gray-900_02 text-right text-xs"
                                size="txtInterRegular12Gray90002"
                              >
                                49%
                              </Text>
                            </div>
                            <div className="h-0.5 relative w-full">
                              <Line className="absolute bg-gray-500_6c h-0.5 inset-[0] justify-center m-auto w-full" />
                              <Line className="absolute bg-gray-500 h-0.5 inset-y-[0] left-[0] my-auto w-[57%]" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start my-0 w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-gray-900_02 text-xs"
                                size="txtInterRegular12Gray90002"
                              >
                                Punjab
                              </Text>
                              <Text
                                className="text-gray-900_02 text-right text-xs"
                                size="txtInterRegular12Gray90002"
                              >
                                25%
                              </Text>
                            </div>
                            <div className="h-0.5 md:h-1.5 mt-1 relative w-full">
                              <Line className="absolute bg-gray-500_6c h-0.5 inset-[0] justify-center m-auto w-full" />
                              <Line className="absolute bg-gray-500 h-0.5 inset-y-[0] left-[0] my-auto w-[31%]" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start my-0 w-full">
                          <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-gray-900_02 text-xs"
                                size="txtInterRegular12Gray90002"
                              >
                                KPK
                              </Text>
                              <Text
                                className="text-gray-900_02 text-right text-xs"
                                size="txtInterRegular12Gray90002"
                              >
                                15%
                              </Text>
                            </div>
                            <div className="h-0.5 relative w-full">
                              <Line className="absolute bg-gray-500_6c h-0.5 inset-[0] justify-center m-auto w-full" />
                              <Line className="absolute bg-gray-500 h-0.5 inset-y-[0] left-[0] my-auto w-[16%]" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start my-0 w-full">
                          <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-gray-900_02 text-xs"
                                size="txtInterRegular12Gray90002"
                              >
                                Balochistan
                              </Text>
                              <Text
                                className="text-gray-900_02 text-right text-xs"
                                size="txtInterRegular12Gray90002"
                              >
                                11%
                              </Text>
                            </div>
                            <div className="h-0.5 relative w-full">
                              <Line className="absolute bg-gray-500_6c h-0.5 inset-[0] justify-center m-auto w-full" />
                              <Line className="absolute bg-gray-500 h-0.5 inset-y-[0] left-[0] my-auto w-[8%]" />
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-[16px] shadow-bs w-[283px]">
                    <div className="flex flex-col gap-3 items-center justify-start w-auto">
                      <div className="flex flex-row gap-[157px] items-center justify-between w-auto">
                        <Text
                          className="text-gray-900_02 text-sm w-auto"
                          size="txtInterSemiBold14"
                        >
                          Top Ads
                        </Text>
                        <Img
                          className="h-7 w-7"
                          src="images/img_button.svg"
                          alt="button_Two"
                        />
                      </div>
                      <Img
                        className="h-[108px] w-[108px]"
                        src="images/img_figpie.svg"
                        alt="figpie"
                      />
                    </div>
                    <div className="flex flex-row gap-9 items-center justify-between w-[241px]">
                      <RadioGroup
                        className="flex flex-col gap-2 items-start justify-start w-[131px]"
                        name="radiogroup11sale2"
                      >
                        <Radio
                          value="11Sale"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale2"
                          label="11 Sale"
                          id="11Sale"
                        ></Radio>
                        <Radio
                          value="BlackFriday"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale2"
                          label="Black Friday"
                          id="BlackFriday"
                        ></Radio>
                        <Radio
                          value="EidGala"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale2"
                          label="Eid Gala"
                          id="EidGala"
                        ></Radio>
                        <Radio
                          value="RamadanBarkat"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale2"
                          label="Ramadan Barkat"
                          id="RamadanBarkat"
                        ></Radio>
                        <Radio
                          value="IndependenceSale"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale2"
                          label="Independence Sale"
                          id="IndependenceSale"
                        ></Radio>
                      </RadioGroup>
                      <div className="flex flex-col gap-2.5 items-end justify-start w-auto">
                        <Text
                          className="text-gray-900_02 text-right text-xs w-auto"
                          size="txtInterRegular12Gray90002"
                        >
                          38.6k reach
                        </Text>
                        <Text
                          className="text-gray-900_02 text-xs w-auto"
                          size="txtInterRegular12Gray90002"
                        >
                          30.8k reach
                        </Text>
                        <Text
                          className="text-gray-900_02 text-xs w-auto"
                          size="txtInterRegular12Gray90002"
                        >
                          22.5k reach
                        </Text>
                        <Text
                          className="text-gray-900_02 text-xs w-auto"
                          size="txtInterRegular12Gray90002"
                        >
                          5.0k reach
                        </Text>
                        <Text
                          className="text-gray-900_02 text-xs w-auto"
                          size="txtInterRegular12Gray90002"
                        >
                          3.1k reach
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerListPagePage;
