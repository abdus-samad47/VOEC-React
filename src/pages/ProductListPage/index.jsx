import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

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
import DashboardOverviewBreadcrumb from "components/DashboardOverviewBreadcrumb";
import DashboardOverviewStatus from "components/DashboardOverviewStatus";

import { CloseSVG } from "../../assets/images";

const ProductListPagePage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-gradient1  border border-solid flex flex-col font-inter items-center justify-end mx-auto w-full white_A700_white_A700_00_border">
        <div className="flex flex-col justify-end overflow-auto w-full">
          <header className="bg-gray-500 flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[212px] md:px-5 w-full">
            <div className="md:h-14 h-8 mb-6 md:mt-0 mt-[39px] relative w-[32%] md:w-full">
              <Text
                className="absolute left-[0] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 top-[0] tracking-[2.50px]"
                size="txtInterBold25"
              >
                Voice of Elite Customer
              </Text>
              <div className="absolute flex flex-row gap-5 h-full inset-y-[0] items-center justify-between my-auto right-[0] w-auto">
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
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-end mb-7 md:ml-[0] ml-[532px] mr-[241px] md:mt-0 mt-10 w-auto">
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
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-[212px] bg-white-A700 border-black-900_19 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-bl-[100px] top-[0]">
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "3px 3px 3px 11px",
                    backgroundColor: "#ffffff",
                    gap: "8px",
                    color: "#1c1c1c",
                    fontSize: "14px",
                    borderRadius: "8px",
                    [`&:hover, &.ps-active`]: {
                      fontWeight: "400 !important",
                      backgroundColor: "#ffffffff !important",
                    },
                  },
                }}
                renderExpandIcon={() => (
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                )}
                className="flex flex-col items-center justify-start mt-[94px] pt-[5px] px-4 w-[85%]"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-5 w-5"
                      src="images/img_icon.svg"
                      alt="icon"
                    />
                  }
                  active={window.location.pathname === "/dashboardoverviewpage"}
                  href="/dashboardoverviewpage"
                >
                  <Text>Overview</Text>
                </MenuItem>
                <SubMenu
                  icon={
                    <Img
                      className="h-5 w-5"
                      src="images/img_bag.svg"
                      alt="bag"
                    />
                  }
                  label={<Text className="font-bold">Products</Text>}
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <SubMenu
                  icon={
                    <Img
                      className="h-5 w-5"
                      src="images/img_icon_gray_500.svg"
                      alt="icon_One"
                    />
                  }
                  label={<Text>Customers</Text>}
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <MenuItem
                  icon={
                    <Img
                      className="h-5 w-5"
                      src="images/img_icon_gray_500_20x20.svg"
                      alt="icon_Two"
                    />
                  }
                >
                  <Text>Orders</Text>
                </MenuItem>
              </Menu>
              <Line className="bg-deep_orange-600 h-4 md:ml-[0] ml-[13px] mr-[194px] rounded-sm w-[5px]" />
              <div className="flex flex-col items-center justify-center mt-[680px] mx-auto w-auto">
                <div className="flex flex-col items-center justify-start p-1 rounded-lg w-full">
                  <div className="flex flex-col items-center justify-center w-auto">
                    <a
                      href="javascript:"
                      className="text-center text-gray-900_02 text-sm w-auto"
                    >
                      <Text size="txtInterRegular14">Logout</Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[98px] mx-auto w-auto">
                <Text
                  className="text-black-900_66 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  © 2022 Acquco
                </Text>
              </div>
            </Sidebar>
            <div
              className="bg-cover bg-no-repeat border border-solid flex flex-1 flex-col h-[928px] items-center justify-start p-[22px] md:px-5 w-full white_A700_black_900_00_border"
              style={{
                backgroundImage: "url('images/img_dashboardoverview.png')",
              }}
            >
              <div className="flex md:flex-col flex-row gap-4 items-start justify-start mb-[132px] w-full">
                <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[77%] md:w-full">
                  <div className="flex flex-col items-center justify-between max-w-[884px] w-full">
                    <Text
                      className="text-center text-gray-900_02 text-sm w-auto"
                      size="txtInterSemiBold14"
                    >
                      Welcome back, Admin
                    </Text>
                  </div>
                  <div className="gap-3 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                    {new Array(8).fill({}).map((props, index) => (
                      <React.Fragment key={`DashboardOverviewStatus${index}`}>
                        <DashboardOverviewStatus
                          className="bg-white-A700 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start p-3.5 rounded-[16px] w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="gap-3 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                    {new Array(8).fill({}).map((props, index) => (
                      <React.Fragment key={`DashboardOverviewStatus${index}`}>
                        <DashboardOverviewStatus
                          className="bg-white-A700 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-start p-[7px] rounded-[16px] w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[37px] justify-start md:mt-0 mt-[47px] w-[22%] md:w-full">
                  <div className="bg-white-A700 flex flex-col gap-3.5 items-start justify-start ml-8 md:ml-[0] mr-2.5 px-5 py-6 rounded-[16px] w-auto">
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
                        alt="button"
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
                  <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-[16px] w-[257px]">
                    <div className="flex flex-col gap-3 items-center justify-start w-auto">
                      <div className="flex flex-row gap-[157px] items-center justify-between w-auto">
                        <Text
                          className="text-gray-900_02 text-sm w-auto"
                          size="txtInterSemiBold14"
                        >
                          Top Ads
                        </Text>
                        <Img
                          className="h-7 w-5"
                          src="images/img_button.svg"
                          alt="button_One"
                        />
                      </div>
                      <Img
                        className="h-[108px] w-[108px]"
                        src="images/img_figpie.svg"
                        alt="figpie"
                      />
                    </div>
                    <div className="flex flex-row gap-9 items-center justify-between w-[233px]">
                      <RadioGroup
                        className="flex flex-col gap-2 items-start justify-start w-[131px]"
                        name="radiogroup11sale1"
                      >
                        <Radio
                          value="11Sale"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale1"
                          label="11 Sale"
                          id="11Sale"
                        ></Radio>
                        <Radio
                          value="BlackFriday"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale1"
                          label="Black Friday"
                          id="BlackFriday"
                        ></Radio>
                        <Radio
                          value="EidGala"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale1"
                          label="Eid Gala"
                          id="EidGala"
                        ></Radio>
                        <Radio
                          value="RamadanBarkat"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale1"
                          label="Ramadan Barkat"
                          id="RamadanBarkat"
                        ></Radio>
                        <Radio
                          value="IndependenceSale"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale1"
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

export default ProductListPagePage;
