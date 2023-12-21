import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, Text } from "components";
import Header from "components/Header";
import WireFrameDesktopCartTwoRowproductcounter from "components/WireFrameDesktopCartTwoRowproductcounter";
import WireFrameDesktopCheckoutAddressRowaddress from "components/WireFrameDesktopCheckoutAddressRowaddress";

const CheckoutShippingPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-solid flex flex-col font-inter h-[900px] items-center justify-end mx-auto w-full white_A700_black_900_00_border6"
        style={{ backgroundImage: "url('images/img_dashboardoverview.png')" }}
      >
        <div className="flex flex-col gap-[51px] justify-end w-full">
          <Header className="bg-gray-500 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col font-publicsans items-start justify-start md:ml-[0] ml-[141px] mr-[203px] md:px-5 w-[76%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-1.50px]"
              size="txtPublicSansSemiBold36"
            >
              Checkout
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-[13px] w-full">
              <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start w-[38%] md:w-full">
                <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                  <WireFrameDesktopCheckoutAddressRowaddress className="flex sm:flex-col flex-row gap-3.5 items-center justify-center w-auto sm:w-full" />
                  <div className="bg-gradient1  border border-solid flex flex-col gap-2.5 justify-end p-[15px] rounded-[20px] shadow-bs w-full white_A700_white_A700_00_border3">
                    <CheckBox
                      className="font-bold leading-[normal] md:ml-[0] ml-[3px] mr-[292px] mt-1.5 text-base text-left tracking-[-0.36px]"
                      inputClassName="h-[19px] mr-[5px] w-[19px]"
                      name="upsuspssurepost"
                      id="upsuspssurepost"
                      label="TCS"
                      color="gray_500"
                      variant="outline"
                    ></CheckBox>
                    <Text
                      className="ml-10 md:ml-[0] mr-[195px] text-base text-black-900 tracking-[-0.36px]"
                      size="txtPublicSansRegular16"
                    >
                      4-7 Business Days
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient1  border-2 border-solid flex flex-col gap-2.5 justify-end p-4 rounded-[20px] shadow-bs w-full white_A700_black_900_00_border7">
                  <CheckBox
                    className="font-bold leading-[normal] ml-0.5 md:ml-[0] mr-[214px] mt-1.5 text-base text-left tracking-[-0.36px]"
                    inputClassName="h-[19px] mr-[5px] w-[19px]"
                    name="tcsexpress"
                    id="tcsexpress"
                    label="TCS EXPRESS"
                    color="gray_500"
                    variant="outline"
                  ></CheckBox>
                  <Text
                    className="md:ml-[0] ml-[39px] mr-[191px] text-base text-black-900 tracking-[-0.36px]"
                    size="txtPublicSansRegular16"
                  >
                    3-5 Business Days
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[39px] w-[39%] md:w-full">
                <Text
                  className="text-gray-900_03 text-xl tracking-[-0.40px]"
                  size="txtPublicSansRegular20"
                >
                  Your cart
                </Text>
                <WireFrameDesktopCartTwoRowproductcounter
                  className="flex sm:flex-col flex-row gap-[7px] items-start justify-start mt-7 w-[401px] sm:w-full"
                  sizel="Size: L"
                  quantityCounter="Quantity: 1"
                  price="$99"
                />
                <Line className="bg-gray-500_05 h-px mt-[17px] w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[119px] w-[38%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer font-semibold min-w-[397px] sm:min-w-full outline outline-[0.5px] outline-gray-500 rounded-[20px] text-base text-center tracking-[-0.40px]"
                  onClick={() => navigate("/checkoutpaymentpage")}
                  color="gray_500"
                  size="lg"
                  variant="fill"
                >
                  Continue to payment
                </Button>
              </div>
              <WireFrameDesktopCartTwoRowproductcounter
                className="flex sm:flex-1 sm:flex-col flex-row gap-[7px] items-start justify-start mb-[35px] w-[401px] sm:w-full"
                productimage="images/img_image1.png"
                productcounter="Product 2"
                sizel="Size: L"
                quantityCounter="Quantity: 1"
                price="$99"
              />
            </div>
            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[586px] mt-[364px] w-[31%] md:w-full">
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
      </div>
    </>
  );
};

export default CheckoutShippingPagePage;
