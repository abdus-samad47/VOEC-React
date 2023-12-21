import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
} from "components";
import DashboardOverviewBlock from "components/DashboardOverviewBlock";
import DashboardOverviewBreadcrumb from "components/DashboardOverviewBreadcrumb";
import DashboardOverviewEvent from "components/DashboardOverviewEvent";
import DashboardOverviewEvent1 from "components/DashboardOverviewEvent1";
import DashboardOverviewInventory from "components/DashboardOverviewInventory";
import DashboardOverviewStatus from "components/DashboardOverviewStatus";

import { CloseSVG } from "../../assets/images";

const buttonFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardOverviewPagePage = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState("");
  const dashboardOverviewStatusPropList = [
    {
      p1101: "+11.01%",
      revenue: "Revenue",
      cursor: "images/img_cursor.svg",
      p25k: "2500k",
    },
    {
      p1101: "+9.15%",
      revenue: "Visits",
      cursor: "images/img_cursor.svg",
      p25k: "367K",
    },
    {
      p1101: "-0.56%",
      revenue: "Orders",
      cursor: "images/img_arrow.svg",
      p25k: "56",
    },
    {
      p1101: "-1.48%",
      revenue: "Active Users",
      cursor: "images/img_arrow.svg",
      p25k: "239K",
    },
  ];
  const dashboardOverviewInventoryPropList = [
    {
      p1548sold: (
        <Text className="text-gray-900_02 text-xs">
          <span className="text-gray-900_02 font-inter text-left font-normal">
            451{" "}
          </span>
          <span className="text-black-900_33 font-inter text-left font-normal">
            /{" "}
          </span>
          <span className="text-gray-900_02 font-inter text-left font-normal">
            521{" "}
          </span>
          <span className="text-black-900_66 font-inter text-left font-normal">
            Sold
          </span>
        </Text>
      ),
    },
    {
      hisense58inch: "Product B",
      p1548sold: (
        <Text className="text-gray-900_02 text-xs">
          <span className="text-gray-900_02 font-inter text-left font-normal">
            15{" "}
          </span>
          <span className="text-black-900_33 font-inter text-left font-normal">
            /{" "}
          </span>
          <span className="text-gray-900_02 font-inter text-left font-normal">
            48{" "}
          </span>
          <span className="text-black-900_66 font-inter text-left font-normal">
            Sold
          </span>
        </Text>
      ),
      eighthundredfiftyfour: "85.4%",
    },
    {
      hisense58inch: "Product C",
      p1548sold: (
        <Text className="text-gray-900_02 text-xs">
          <span className="text-gray-900_02 font-inter text-left font-normal">
            159{" "}
          </span>
          <span className="text-black-900_33 font-inter text-left font-normal">
            /{" "}
          </span>
          <span className="text-gray-900_02 font-inter text-left font-normal">
            200{" "}
          </span>
          <span className="text-black-900_66 font-inter text-left font-normal">
            Sold
          </span>
        </Text>
      ),
      eighthundredfiftyfour: "79.5%",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-no-repeat black_900_black_900_00_border border border-solid flex flex-col font-inter h-[1024px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_dashboardoverview.png')" }}
      >
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-500 flex md:flex-col flex-row md:gap-5 items-start justify-start p-3.5 w-full">
            <Text
              className="md:mt-0 mt-[25px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[2.50px]"
              size="txtInterBold25"
            >
              Voice of Elite Customer
            </Text>
            <div className="flex flex-row gap-5 items-start justify-start mb-2.5 md:ml-[0] ml-[45px] md:mt-0 mt-[26px] md:px-5 w-auto">
              <Img
                className="h-7 w-16"
                src="images/img_settings_white_a700.svg"
                alt="settings"
              />
              <div className="flex flex-col items-center justify-start w-auto">
                <DashboardOverviewBreadcrumb className="flex flex-row gap-1 h-8 md:h-auto items-center justify-start w-auto" />
              </div>
            </div>
            <div className="flex flex-row gap-5 items-start justify-end md:ml-[0] ml-[529px] md:mt-0 mt-[26px] md:px-5 w-auto">
              <Input
                name="search"
                placeholder="Search"
                value={searchvalue}
                onChange={(e) => setSearchvalue(e)}
                className="!placeholder:text-white-A700_33 !text-white-A700_33 p-0 text-left text-sm w-full"
                wrapClassName="border border-black-900_19 border-solid flex w-[77%]"
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
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-[212px] bg-white-A700 border-black-900_19 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
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
                  label={<Text>Products</Text>}
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
              <div className="flex flex-col items-center justify-center mt-[555px] mx-auto w-auto">
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
              <div className="flex flex-col items-start justify-start mt-[120px] mx-auto w-auto">
                <Text
                  className="text-black-900_66 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  © 2022 Acquco
                </Text>
              </div>
            </Sidebar>
            <div className="bg-gray-50_02 flex flex-1 flex-col items-center justify-end pt-4 px-4 md:px-5 w-full">
              <div className="flex flex-col items-center justify-start mt-[5px] w-[99%] md:w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[884px] w-full">
                  <Text
                    className="text-center text-gray-900_02 text-sm w-auto"
                    size="txtInterSemiBold14"
                  >
                    Welcome back, Admin
                  </Text>
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Button
                      className="cursor-pointer flex h-8 items-center justify-center min-w-[77px]"
                      rightIcon={
                        <Img
                          className="h-4 mb-px ml-1"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      size="xs"
                    >
                      <div className="text-gray-900_02 text-left text-sm">
                        Today
                      </div>
                    </Button>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-9 w-[96%]"
                  orientation="horizontal"
                >
                  {dashboardOverviewStatusPropList.map((props, index) => (
                    <React.Fragment key={`DashboardOverviewStatus${index}`}>
                      <DashboardOverviewStatus
                        className="bg-white-A700 border border-black-900_19 border-solid flex flex-col items-center justify-start p-[22px] sm:px-5 rounded-[16px] w-full"
                        contrast="images/img_contrast_gray_900_02.svg"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-[68px] w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-start justify-start px-5 py-6 rounded-[16px] w-auto md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[621px] md:w-full">
                      <div className="flex flex-row gap-[61px] items-center justify-start w-[343px]">
                        <div className="flex flex-row gap-4 items-center justify-center w-full">
                          <div className="flex flex-col items-start justify-center px-2 py-1 w-auto">
                            <Text
                              className="text-gray-900_02 text-sm w-auto"
                              size="txtInterSemiBold14"
                            >
                              Revenue
                            </Text>
                          </div>
                          <Line className="bg-black-900_33 h-5 w-px" />
                          <Button
                            className="cursor-pointer flex h-8 items-center justify-center min-w-[103px]"
                            rightIcon={
                              <Img
                                className="h-4 ml-1 my-px"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            shape="round"
                            size="xs"
                          >
                            <div className="text-gray-900_02 text-left text-sm">
                              This week
                            </div>
                          </Button>
                        </div>
                        <CheckBox
                          className="text-gray-900_02 text-left text-sm"
                          inputClassName="mr-[5px]"
                          name="orders_One"
                          id="orders_One"
                          label="Orders"
                        ></CheckBox>
                      </div>
                      <Img
                        className="h-7 w-7"
                        src="images/img_button.svg"
                        alt="button"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-4 h-[236px] md:h-auto items-start justify-start w-[621px] md:w-full">
                        <div className="flex flex-col h-[236px] md:h-auto items-end justify-start">
                          <div className="flex flex-col gap-7 h-[206px] md:h-auto items-end justify-between w-auto">
                            <Text
                              className="text-black-900_66 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              36K
                            </Text>
                            <Text
                              className="text-black-900_66 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              27K
                            </Text>
                            <Text
                              className="text-black-900_66 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              18K
                            </Text>
                            <Text
                              className="text-black-900_66 text-right text-xs"
                              size="txtInterRegular12"
                            >
                              9K
                            </Text>
                            <Text
                              className="text-black-900_66 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 h-full items-start justify-start w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[206px] items-center justify-start p-4 w-full"
                            style={{
                              backgroundImage: "url('images/img_group28.svg')",
                            }}
                          >
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[105px] items-end justify-start mb-8 mt-[35px] p-[22px] sm:px-5 w-[98%] md:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group29.svg')",
                              }}
                            >
                              <div className="flex flex-col gap-[5px] items-center justify-start mb-4 mr-[119px] w-[76px]">
                                <Button
                                  className="cursor-pointer h-7 min-w-[76px] text-center text-xs"
                                  shape="round"
                                  color="black_900_cc"
                                  size="xs"
                                  variant="fill"
                                >
                                  Fri: 18,298
                                </Button>
                                <div className="bg-white-A700 flex flex-col h-3 items-center justify-start p-1 rounded-[50%] w-3">
                                  <div className="bg-blue_gray-900_01 h-1 rotate-[180deg] rounded-[50%] w-1"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row h-[18px] md:h-auto items-start justify-between w-full">
                            <Text
                              className="flex-1 text-black-900_66 text-center text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              Mon
                            </Text>
                            <Text
                              className="flex-1 text-black-900_66 text-center text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              Tue
                            </Text>
                            <Text
                              className="flex-1 text-black-900_66 text-center text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              Wed
                            </Text>
                            <Text
                              className="flex-1 text-black-900_66 text-center text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              Thu
                            </Text>
                            <Text
                              className="flex-1 text-black-900_66 text-center text-xs"
                              size="txtInterRegular12"
                            >
                              Fri
                            </Text>
                            <Text
                              className="flex-1 text-black-900_66 text-center text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              Sat
                            </Text>
                            <Text
                              className="flex-1 text-black-900_66 text-center text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              Sun
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3.5 items-start justify-start px-5 py-6 rounded-[16px] w-auto">
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
                </div>
                <div className="flex md:flex-col flex-row gap-2 items-center justify-between mt-2 w-[99%] md:w-full">
                  <DashboardOverviewBlock
                    className="bg-white-A700 flex flex-col gap-2.5 h-[324px] md:h-auto items-start justify-start p-6 sm:px-5 rounded-[16px] w-auto sm:w-full"
                    productimage1="images/img_frame48.png"
                    p7949="800"
                    eightytwo="10"
                    productimage2="images/img_frame48_24x24.png"
                    p12850="750"
                    thirtyseven="10"
                    productimage3="images/img_frame48_1.png"
                    p3999="400"
                    sixtyfour="10"
                    productimage4="images/img_frame48_2.png"
                    p2000="280"
                    onehundredeightyfour="10"
                    productimage5="images/img_frame48_3.png"
                    p2849="560"
                    sixtyfour1="10"
                  />
                  <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-[16px] w-auto">
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
                          alt="button_Three"
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
                        name="radiogroup11sale"
                      >
                        <Radio
                          value="11Sale"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale"
                          label="11 Sale"
                          id="11Sale"
                        ></Radio>
                        <Radio
                          value="BlackFriday"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale"
                          label="Black Friday"
                          id="BlackFriday"
                        ></Radio>
                        <Radio
                          value="EidGala"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale"
                          label="Eid Gala"
                          id="EidGala"
                        ></Radio>
                        <Radio
                          value="RamadanBarkat"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale"
                          label="Ramadan Barkat"
                          id="RamadanBarkat"
                        ></Radio>
                        <Radio
                          value="IndependenceSale"
                          className="text-gray-900_02 text-left text-xs"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroup11sale"
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
            <div className="bg-white-A700 border-black-900_19 border-l border-solid flex flex-1 flex-col gap-6 h-[914px] md:h-auto items-start justify-start md:mt-0 mt-3.5 px-5 py-6 w-full">
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <div className="flex flex-row gap-9 h-8 md:h-auto items-center justify-between pl-1 w-full">
                  <Text
                    className="text-gray-900_02 text-sm w-auto"
                    size="txtInterSemiBold14"
                  >
                    Recent events
                  </Text>
                  <Button
                    className="cursor-pointer flex h-8 items-center justify-center min-w-[103px]"
                    rightIcon={
                      <Img
                        className="h-4 ml-1 my-px"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    shape="round"
                    size="xs"
                  >
                    <div className="text-gray-900_02 text-left text-sm">
                      This week
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <List
                    className="flex flex-col gap-1 items-start w-auto"
                    orientation="vertical"
                  >
                    <DashboardOverviewEvent className="flex flex-row gap-2 items-start justify-start my-0 pl-1 py-1 rounded-lg w-60" />
                    <DashboardOverviewEvent1 className="flex flex-row gap-2 items-start justify-start my-0 pl-1 py-1 rounded-lg w-60" />
                    <DashboardOverviewEvent
                      className="flex flex-row gap-2 items-start justify-start my-0 pl-1 py-1 rounded-lg w-60"
                      ordertime="New order 35m ago"
                    />
                    <DashboardOverviewEvent1
                      className="flex flex-row gap-2 items-start justify-start my-0 pl-1 py-1 rounded-lg w-60"
                      newcustomertext="New customer 40m ago"
                    />
                    <DashboardOverviewEvent
                      className="flex flex-row gap-2 items-start justify-start my-0 pl-1 py-1 rounded-lg w-60"
                      ordertime="New order 55m ago"
                    />
                    <DashboardOverviewEvent1
                      className="flex flex-row gap-2 items-start justify-start my-0 pl-1 py-1 rounded-lg w-60"
                      newcustomertext="New customer 1 day ago"
                    />
                    <DashboardOverviewEvent
                      className="flex flex-row gap-2 items-start justify-start my-0 pl-1 py-1 rounded-lg w-60"
                      ordertime="New order 2 days ago"
                    />
                  </List>
                  <a
                    href="javascript:"
                    className="text-gray-900_02 text-sm w-auto"
                  >
                    <Text size="txtInterRegular14">See all</Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <div className="flex flex-row h-7 md:h-auto items-center justify-between pl-1 w-60">
                    <Text
                      className="text-gray-900_02 text-sm w-auto"
                      size="txtInterSemiBold14"
                    >
                      Inventory
                    </Text>
                    <SelectBox
                      className="h-7 text-gray-900_02 text-left text-xs w-[45%] sm:w-full"
                      placeholderClassName="text-gray-900_02"
                      indicator={
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowdown_black_900.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="button_Four"
                      options={buttonFourOptionsList}
                      isSearchable={false}
                      placeholder="Descending"
                      size="xs"
                    />
                  </div>
                  <List
                    className="flex flex-col gap-3 items-center w-full"
                    orientation="vertical"
                  >
                    {dashboardOverviewInventoryPropList.map((props, index) => (
                      <React.Fragment
                        key={`DashboardOverviewInventory${index}`}
                      >
                        <DashboardOverviewInventory
                          className="flex flex-col gap-2 items-start justify-start w-60"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                  <DashboardOverviewInventory
                    className="flex flex-col gap-2 items-start justify-start w-60"
                    p1548sold={
                      <Text className="text-gray-900_02 text-xs">
                        <span className="text-gray-900_02 font-inter text-left font-normal">
                          51{" "}
                        </span>
                        <span className="text-black-900_33 font-inter text-left font-normal">
                          /{" "}
                        </span>
                        <span className="text-gray-900_02 font-inter text-left font-normal">
                          99{" "}
                        </span>
                        <span className="text-black-900_66 font-inter text-left font-normal">
                          Sold
                        </span>
                      </Text>
                    }
                    hisense58inch="Product D"
                    eighthundredfiftyfour="51.5%"
                  />
                  <DashboardOverviewInventory
                    className="flex flex-col gap-2 items-start justify-start w-60"
                    p1548sold={
                      <Text className="text-gray-900_02 text-xs">
                        <span className="text-gray-900_02 font-inter text-left font-normal">
                          35{" "}
                        </span>
                        <span className="text-black-900_33 font-inter text-left font-normal">
                          /{" "}
                        </span>
                        <span className="text-gray-900_02 font-inter text-left font-normal">
                          153{" "}
                        </span>
                        <span className="text-black-900_66 font-inter text-left font-normal">
                          Sold
                        </span>
                      </Text>
                    }
                    hisense58inch="Product E"
                    eighthundredfiftyfour="22.9%"
                  />
                </div>
                <a
                  href="javascript:"
                  className="text-gray-900_02 text-sm w-auto"
                >
                  <Text size="txtInterRegular14">See all</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOverviewPagePage;
