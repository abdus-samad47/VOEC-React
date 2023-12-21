import React from "react";

import { Button, Img, Line, List, Text } from "components";

const DashboardOverviewBlock = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
          <div className="flex flex-row sm:gap-10 items-start justify-between w-[539px] sm:w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col items-start justify-center px-2 py-1 w-auto">
                  <Text
                    className="text-gray-900_02 text-sm w-auto"
                    size="txtInterSemiBold14"
                  >
                    {props?.tabOne}
                  </Text>
                </div>
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
                <div className="font-inter text-gray-900_02 text-left text-sm">
                  {props?.thisWeekOne}
                </div>
              </Button>
            </div>
            <Img
              className="h-7 w-7"
              src="images/img_button.svg"
              alt="button_Two"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[539px] sm:w-full">
            <List
              className="border-b border-black-900_33 border-solid sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-4 justify-start w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col h-[34px] md:h-auto items-center justify-start sm:ml-[0] pl-3 pr-4 py-1 w-full">
                <Text
                  className="text-black-900_66 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  {props?.productname}
                </Text>
              </div>
              <div className="flex flex-1 flex-col h-full items-center justify-start sm:ml-[0] p-2 w-full">
                <Text
                  className="text-black-900_66 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  {props?.price}
                </Text>
              </div>
              <div className="flex flex-1 flex-col h-full items-center justify-start sm:ml-[0] p-2 w-full">
                <Text
                  className="text-black-900_66 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  {props?.sold}
                </Text>
              </div>
              <div className="flex flex-1 flex-col h-full items-center justify-start sm:ml-[0] p-2 w-full">
                <Text
                  className="text-black-900_66 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  {props?.sales}
                </Text>
              </div>
            </List>
            <List
              className="flex flex-col gap-px items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-start pl-3 pr-4 py-1 w-[150px]">
                  <div className="flex flex-row gap-2 h-8 md:h-auto items-center justify-start pr-2 py-1 w-auto">
                    {!!props?.productimage1 ? (
                      <Img
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        alt="frameFortyEight"
                        src={props?.productimage1}
                      />
                    ) : null}
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.text}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  {!!props?.p7949 ? (
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.p7949}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  {!!props?.eightytwo ? (
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.eightytwo}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  <Text
                    className="text-gray-900_02 text-xs w-auto"
                    size="txtInterRegular12Gray90002"
                  >
                    {props?.zipcode}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-start pl-3 pr-4 py-1 w-[150px]">
                  <div className="flex flex-row gap-2 h-8 md:h-auto items-center justify-start pr-2 py-1 w-auto">
                    {!!props?.productimage2 ? (
                      <Img
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        alt="frameFortyEight"
                        src={props?.productimage2}
                      />
                    ) : null}
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.language}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  {!!props?.p12850 ? (
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.p12850}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  {!!props?.thirtyseven ? (
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.thirtyseven}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  <Text
                    className="text-gray-900_02 text-xs w-auto"
                    size="txtInterRegular12Gray90002"
                  >
                    {props?.zipcode1}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-start pl-3 pr-4 py-1 w-[150px]">
                  <div className="flex flex-row gap-2 h-8 md:h-auto items-center justify-start pr-2 py-1 w-auto">
                    {!!props?.productimage3 ? (
                      <Img
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        alt="frameFortyEight"
                        src={props?.productimage3}
                      />
                    ) : null}
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.text1}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  {!!props?.p3999 ? (
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.p3999}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  {!!props?.sixtyfour ? (
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.sixtyfour}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  <Text
                    className="text-gray-900_02 text-xs w-auto"
                    size="txtInterRegular12Gray90002"
                  >
                    {props?.zipcode2}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-start pl-3 pr-4 py-1 w-[150px]">
                  <div className="flex flex-row gap-2 h-8 md:h-auto items-center justify-start pr-2 py-1 w-auto">
                    {!!props?.productimage4 ? (
                      <Img
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        alt="frameFortyEight"
                        src={props?.productimage4}
                      />
                    ) : null}
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.text2}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  {!!props?.p2000 ? (
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.p2000}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  {!!props?.onehundredeightyfour ? (
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.onehundredeightyfour}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  <Text
                    className="text-gray-900_02 text-xs w-auto"
                    size="txtInterRegular12Gray90002"
                  >
                    {props?.zipcode3}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-start pl-3 pr-4 py-1 w-[150px]">
                  <div className="flex flex-row gap-2 h-8 md:h-auto items-center justify-start pr-2 py-1 w-auto">
                    {!!props?.productimage5 ? (
                      <Img
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        alt="frameFortyEight"
                        src={props?.productimage5}
                      />
                    ) : null}
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.language1}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  {!!props?.p2849 ? (
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.p2849}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  {!!props?.sixtyfour1 ? (
                    <Text
                      className="text-gray-900_02 text-xs w-auto"
                      size="txtInterRegular12Gray90002"
                    >
                      {props?.sixtyfour1}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col items-center justify-start p-2 w-full">
                  <Text
                    className="text-gray-900_02 text-xs w-auto"
                    size="txtInterRegular12Gray90002"
                  >
                    {props?.zipcode4}
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardOverviewBlock.defaultProps = {
  tabOne: "Top Selling Products",
  thisWeekOne: "This week",
  productname: "Product name",
  price: "Price",
  sold: "Sold",
  sales: "Sales",
  text: "Bata Shoes",
  zipcode: "8000",
  language: "Gym  Bag",
  zipcode1: "7500",
  text1: "Gym Gloves",
  zipcode2: "4000",
  text2: "Lights",
  zipcode3: "2800",
  language1: "Gym Shirt ",
  zipcode4: "5600",
};

export default DashboardOverviewBlock;
