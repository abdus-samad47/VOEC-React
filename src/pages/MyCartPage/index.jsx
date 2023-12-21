import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, List, Text } from "components";
import WireFrameDesktopCartTwoRowproductcounter from "components/WireFrameDesktopCartTwoRowproductcounter";
import WireFrameDesktopProductTwoNavbar from "components/WireFrameDesktopProductTwoNavbar";

const MyCartPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-solid flex flex-col font-inter h-[900px] items-center justify-start mx-auto pb-[193px] w-full white_A700_black_900_00_border4"
        style={{ backgroundImage: "url('images/img_dashboardoverview.png')" }}
      >
        <div className="flex flex-col gap-[53px] justify-start w-full">
          <header className="bg-gray-500 flex flex-col items-center justify-center md:px-5 w-full">
            <WireFrameDesktopProductTwoNavbar
              className="flex flex-col items-center justify-center pt-4 w-full"
              bagcount="2"
            />
          </header>
          <div className="flex flex-col font-publicsans gap-[17px] items-start justify-start md:ml-[0] ml-[141px] md:px-5 w-[76%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-1.50px]"
              size="txtPublicSansSemiBold36"
            >
              Your cart
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[121px] items-center justify-start md:mt-0 mt-[45px] w-[55%] md:w-full">
                <List
                  className="flex flex-col gap-[19px] items-center w-[97%]"
                  orientation="vertical"
                >
                  <WireFrameDesktopCartTwoRowproductcounter className="flex sm:flex-col flex-row gap-[7px] h-[139px] md:h-auto items-start justify-start my-0 w-[560px] sm:w-full" />
                  <Line className="self-center h-px bg-gray-500_05 w-full" />
                  <WireFrameDesktopCartTwoRowproductcounter
                    className="flex sm:flex-col flex-row gap-[7px] h-[139px] md:h-auto items-start justify-start my-0 w-[560px] sm:w-full"
                    productimage="images/img_image1.png"
                    productcounter="Product 2"
                  />
                </List>
                <div className="flex flex-col h-[47px] md:h-auto items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.55px]"
                      size="txtPublicSansSemiBold22"
                    >
                      Order Information
                    </Text>
                    <Line className="bg-black-900 h-px w-full" />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[39%] md:w-full">
                <Text
                  className="ml-1 md:ml-[0] text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.55px]"
                  size="txtPublicSansSemiBold22"
                >
                  Order Summary
                </Text>
                <Input
                  name="input"
                  placeholder="Enter coupon code here"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-left text-sm tracking-[-0.30px] w-full"
                  wrapClassName="mt-[31px] rounded-[20px] w-full"
                  color="black_900"
                  size="lg"
                  variant="outline"
                ></Input>
                <div className="flex flex-col gap-4 h-[101px] md:h-auto items-start justify-start mt-[27px] w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-sm tracking-[-0.30px]"
                      size="txtPublicSansRegular14"
                    >
                      Subtotal
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-sm tracking-[-0.30px]"
                      size="txtPublicSansRegular14"
                    >
                      Shipping
                    </Text>
                  </div>
                  <Line className="bg-black-900 h-px w-full" />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-sm tracking-[-0.30px]"
                      size="txtPublicSansRegular14"
                    >
                      Total
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[37px] rounded-[20px] w-[99%] md:w-full">
                  <div
                    className="common-pointer bg-gray-500 flex flex-col items-center justify-start outline outline-[0.5px] outline-gray-500 p-4 rounded-[20px] w-full"
                    onClick={() => navigate("/checkoutaddresspage")}
                  >
                    <Text
                      className="text-base text-center text-white-A700 tracking-[-0.40px]"
                      size="txtPublicSansSemiBold16"
                    >
                      Continue to checkout
                    </Text>
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

export default MyCartPagePage;
