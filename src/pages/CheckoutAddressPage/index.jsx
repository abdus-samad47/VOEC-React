import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
} from "components";
import Header from "components/Header";
import WireFrameDesktopCartTwoRowproductcounter from "components/WireFrameDesktopCartTwoRowproductcounter";
import WireFrameDesktopCheckoutAddressRowaddress from "components/WireFrameDesktopCheckoutAddressRowaddress";

const dropdowninputOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdowninputOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CheckoutAddressPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-solid flex flex-col font-inter h-[900px] items-center justify-end mx-auto w-full white_A700_black_900_00_border5"
        style={{ backgroundImage: "url('images/img_dashboardoverview.png')" }}
      >
        <div className="flex flex-col gap-[51px] justify-end w-full">
          <Header className="bg-gray-500 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col font-publicsans items-start justify-start md:ml-[0] ml-[141px] mr-[204px] md:px-5 w-[76%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-1.50px]"
              size="txtPublicSansSemiBold36"
            >
              Checkout
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] mt-1 w-[70%] md:w-full">
              <WireFrameDesktopCheckoutAddressRowaddress className="flex sm:flex-col flex-row gap-3.5 items-center justify-center sm:mt-0 mt-[9px] w-auto sm:w-full" />
              <Text
                className="text-gray-900_03 text-xl tracking-[-0.40px]"
                size="txtPublicSansRegular20"
              >
                Your cart
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-1 md:ml-[0] mt-[15px] w-full">
              <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start md:mt-0 mt-[65px] w-[39%] md:w-full">
                <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                    <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between w-full">
                      <Text
                        className="border border-black-900 border-solid pl-4 sm:pr-5 pr-[35px] py-[11px] rounded-[20px] text-blue_gray-200 text-sm tracking-[-0.30px]"
                        size="txtPublicSansRegular14Bluegray200"
                      >
                        First Name
                      </Text>
                      <Text
                        className="border border-black-900 border-solid pl-4 sm:pr-5 pr-[35px] py-[11px] rounded-[20px] text-blue_gray-200 text-sm tracking-[-0.30px]"
                        size="txtPublicSansRegular14Bluegray200"
                      >
                        Last Name
                      </Text>
                    </div>
                    <Input
                      name="input_Two"
                      placeholder="Address"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-left text-sm tracking-[-0.30px] w-full"
                      wrapClassName="rounded-[20px] w-full"
                      color="black_900"
                      size="lg"
                      variant="outline"
                    ></Input>
                    <Input
                      name="input_Three"
                      placeholder="Apartment, suite, etc (optional)"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-left text-sm tracking-[-0.30px] w-full"
                      wrapClassName="rounded-[20px] w-full"
                      color="black_900"
                      size="lg"
                      variant="outline"
                    ></Input>
                    <Input
                      name="input_Four"
                      placeholder="City"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-left text-sm tracking-[-0.30px] w-full"
                      wrapClassName="rounded-[20px] w-full"
                      color="black_900"
                      size="md"
                      variant="outline"
                    ></Input>
                    <div className="flex flex-row items-center justify-between w-full">
                      <SelectBox
                        className="sm:flex-1 leading-[normal] text-left text-sm tracking-[-0.30px] w-[31%] sm:w-full"
                        placeholderClassName="text-blue_gray-200"
                        indicator={
                          <Img
                            className="h-6 mr-[0] w-6"
                            src="images/img_arrowdown_black_900_24x24.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="dropdowninput"
                        options={dropdowninputOptionsList}
                        isSearchable={false}
                        placeholder="Country"
                        shape="round"
                        color="black_900"
                        size="sm"
                        variant="outline"
                      />
                      <SelectBox
                        className="sm:flex-1 leading-[normal] text-left text-sm tracking-[-0.30px] w-[31%] sm:w-full"
                        placeholderClassName="text-blue_gray-200"
                        indicator={
                          <Img
                            className="h-6 mr-[0] w-6"
                            src="images/img_arrowdown_black_900_24x24.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="dropdowninput_One"
                        options={dropdowninputOneOptionsList}
                        isSearchable={false}
                        placeholder="City"
                        shape="round"
                        color="black_900"
                        size="sm"
                        variant="outline"
                      />
                      <Text
                        className="border border-black-900 border-solid pl-4 sm:pr-5 pr-[35px] py-[11px] rounded-[20px] text-blue_gray-200 text-sm tracking-[-0.30px]"
                        size="txtPublicSansRegular14Bluegray200"
                      >
                        Zipcode
                      </Text>
                    </div>
                    <Input
                      name="input_Six"
                      placeholder="Optional"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-left text-sm tracking-[-0.30px] w-full"
                      wrapClassName="rounded-[20px] w-full"
                      color="black_900"
                      size="md"
                      variant="outline"
                    ></Input>
                  </div>
                  <CheckBox
                    className="!text-gray-500_04 leading-[normal] text-left text-sm tracking-[-0.30px]"
                    inputClassName="h-[19px] mr-[5px] w-[19px]"
                    name="savecontactinfo_One"
                    id="savecontactinfo_One"
                    label="Save contact information"
                    color="gray_500"
                    variant="outline"
                  ></CheckBox>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Button
                    className="common-pointer cursor-pointer font-semibold min-w-[397px] sm:min-w-full outline outline-[0.5px] outline-gray-500 text-base text-center tracking-[-0.40px]"
                    onClick={() => navigate("/checkoutshippingpage")}
                    shape="square"
                    color="gray_500"
                    size="lg"
                    variant="fill"
                  >
                    Continue to shipping
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[259px] justify-start w-[45%] md:w-full">
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[67px] w-[86%] md:w-full">
                  <WireFrameDesktopCartTwoRowproductcounter
                    className="flex sm:flex-col flex-row gap-[7px] items-start justify-start w-[401px] sm:w-full"
                    sizel="Size: L"
                    quantityCounter="Quantity: 1"
                    price="$99"
                  />
                  <Line className="bg-gray-500_05 h-px mt-[17px] w-full" />
                  <WireFrameDesktopCartTwoRowproductcounter
                    className="flex sm:flex-col flex-row gap-[7px] items-start justify-start mt-[17px] w-[401px] sm:w-full"
                    productimage="images/img_image1.png"
                    productcounter="Product 2"
                    sizel="Size: L"
                    quantityCounter="Quantity: 1"
                    price="$99"
                  />
                  <Input
                    name="input_Seven"
                    placeholder="Enter coupon code here"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-left text-sm tracking-[-0.30px] w-full"
                    wrapClassName="mt-6 rounded-[20px] w-full"
                    color="black_900"
                    size="md"
                    variant="outline"
                  ></Input>
                  <div className="flex flex-col gap-4 items-start justify-start mt-7 w-auto sm:w-full">
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
                </div>
                <div className="flex flex-row items-center justify-between w-[70%] md:w-full">
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
        </div>
      </div>
    </>
  );
};

export default CheckoutAddressPagePage;
