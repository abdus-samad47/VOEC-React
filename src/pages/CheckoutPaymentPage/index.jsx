import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Switch,
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

const CheckoutPaymentPagePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-solid flex flex-col font-inter h-[900px] items-center justify-end mx-auto w-full white_A700_black_900_00_border8"
        style={{
          backgroundImage: "url('images/img_wireframedesktopcheckout.png')",
        }}
      >
        <div className="flex flex-col md:gap-10 gap-[62px] justify-end w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[900px] items-center justify-start pb-[302px] rounded-[60px] w-full"
            style={{ backgroundImage: "url('images/img_group106.png')" }}
          >
            <div className="flex flex-col gap-[51px] justify-start w-full">
              <Header className="bg-gray-500 flex flex-col items-center justify-center md:px-5 w-full" />
              <div className="flex flex-col font-publicsans gap-[13px] items-start justify-start md:ml-[0] ml-[141px] md:px-5 w-[76%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-1.50px]"
                  size="txtPublicSansSemiBold36"
                >
                  Checkout
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start w-[38%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <WireFrameDesktopCheckoutAddressRowaddress className="flex sm:flex-col flex-row gap-3.5 items-center justify-center ml-0.5 md:ml-[0] w-auto sm:w-full" />
                      <Text
                        className="mt-[90px] text-gray-900_03 text-xl tracking-[-0.40px]"
                        size="txtPublicSansRegular20"
                      >
                        Payment Details
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-start mt-[19px] w-auto sm:w-full">
                        <Input
                          name="input"
                          placeholder="Cardholder Name"
                          className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-left text-sm tracking-[-0.30px] w-full"
                          wrapClassName="rounded-[20px] w-full"
                          type="text"
                          color="black_900"
                          size="md"
                          variant="outline"
                        ></Input>
                        <Input
                          name="input_One"
                          placeholder="Card Number"
                          className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-left text-sm tracking-[-0.30px] w-full"
                          wrapClassName="rounded-[20px] w-full"
                          type="number"
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
                            placeholder="Month"
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
                            placeholder="Year"
                            shape="round"
                            color="black_900"
                            size="sm"
                            variant="outline"
                          />
                          <Text
                            className="border border-black-900 border-solid pl-4 sm:pr-5 pr-[35px] py-[11px] rounded-[20px] text-blue_gray-200 text-sm tracking-[-0.30px]"
                            size="txtPublicSansRegular14Bluegray200"
                          >
                            CVC
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[25px] w-full">
                        <Text
                          className="text-black-900 text-sm tracking-[-0.30px]"
                          size="txtPublicSansRegular14"
                        >
                          Save card data for future payments
                        </Text>
                        <Switch
                          onColor="#a18e80"
                          offColor="#a18e80"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Button
                        className="cursor-pointer font-semibold min-w-[397px] sm:min-w-full outline outline-[0.5px] outline-gray-500 rounded-[20px] text-base text-center tracking-[-0.40px]"
                        color="gray_500"
                        size="lg"
                        variant="fill"
                      >
                        Pay with card
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-7 items-start justify-start w-[39%] md:w-full">
                    <Text
                      className="text-gray-900_03 text-xl tracking-[-0.40px]"
                      size="txtPublicSansRegular20"
                    >
                      Your cart
                    </Text>
                    <List
                      className="flex flex-col gap-[17.5px] items-center w-full"
                      orientation="vertical"
                    >
                      <WireFrameDesktopCartTwoRowproductcounter
                        className="flex sm:flex-1 sm:flex-col flex-row gap-[7px] items-start justify-start rounded-[20px] w-[401px] sm:w-full"
                        sizel="Size: L"
                        quantityCounter="Quantity: 1"
                        price="$99"
                      />
                      <Line className="self-center h-px bg-gray-500_05 w-full" />
                      <WireFrameDesktopCartTwoRowproductcounter
                        className="flex sm:flex-1 sm:flex-col flex-row gap-[7px] items-start justify-start w-[401px] sm:w-full"
                        productimage="images/img_image1.png"
                        productcounter="Product 2"
                        sizel="Size: L"
                        quantityCounter="Quantity: 1"
                        price="$99"
                      />
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row font-publicsans items-center justify-between md:ml-[0] ml-[727px] mr-[346px] md:px-5 w-[24%] md:w-full">
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

export default CheckoutPaymentPagePage;
