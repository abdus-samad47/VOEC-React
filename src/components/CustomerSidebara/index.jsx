import React from "react";

import { Img, Input, Line, Text } from "components";

const CustomerSidebara = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[236px] md:h-[322px] mt-[86px] relative w-[99%]">
          <div className="absolute flex flex-col gap-6 h-full inset-[0] items-center justify-start m-auto w-auto">
            <Input
              name="sidebaritem"
              placeholder="Overview"
              className="!placeholder:text-gray-900_02 !text-gray-900_02 font-inter p-0 text-left text-sm w-full"
              wrapClassName="flex w-full"
              prefix={
                <Img
                  className="h-5 mr-2"
                  src="images/img_icon.svg"
                  alt="Icon"
                />
              }
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
            <div className="bg-white-A700 flex flex-row items-center justify-start p-1 rounded-lg w-full">
              <Img
                className="h-5 ml-2 w-5"
                src="images/img_bag.svg"
                alt="bag"
              />
              <Text
                className="ml-2 text-gray-900_02 text-sm"
                size="txtInterRegular14"
              >
                {props?.productstext}
              </Text>
              <Img
                className="h-4 ml-[19px] w-4"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
            <div className="bg-white-A700 flex flex-row items-center justify-start p-1 rounded-lg w-full">
              <Img
                className="h-5 ml-2 w-5"
                src="images/img_icon_gray_500.svg"
                alt="icon"
              />
              <Text
                className="ml-2 text-gray-900_02 text-sm"
                size="txtInterBold14"
              >
                {props?.customerstext}
              </Text>
              <Img
                className="h-4 ml-[3px] w-4"
                src="images/img_arrowright.svg"
                alt="arrowright_One"
              />
            </div>
            <Input
              name="sidebaritem_One"
              placeholder="Orders"
              className="!placeholder:text-gray-900_02 !text-gray-900_02 font-inter p-0 text-left text-sm w-full"
              wrapClassName="flex w-full"
              prefix={
                <Img
                  className="h-5 mr-2"
                  src="images/img_icon_gray_500_20x20.svg"
                  alt="Icon"
                />
              }
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
            <div className="bg-white-A700 h-7 rounded-lg w-full"></div>
          </div>
          <Line className="absolute bg-deep_orange-600 bottom-[36%] h-4 left-[0] rounded-sm w-[5px]" />
        </div>
        <div className="flex flex-col items-center justify-center mt-[498px] w-auto">
          <div className="flex flex-col items-center justify-start p-1 rounded-lg w-full">
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="text-center text-gray-900_02 text-sm w-auto"
                size="txtInterRegular14"
              >
                {props?.logouttext}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start mt-[120px] w-auto">
          <Text
            className="text-black-900_66 text-xs w-auto"
            size="txtInterRegular12"
          >
            {props?.copyrighttext}
          </Text>
        </div>
      </div>
    </>
  );
};

CustomerSidebara.defaultProps = {
  productstext: "Products",
  customerstext: "Customers",
  logouttext: "Logout",
  copyrighttext: "© 2022 Acquco",
};

export default CustomerSidebara;
