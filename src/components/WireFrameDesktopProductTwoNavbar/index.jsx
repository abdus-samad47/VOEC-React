import React from "react";

import { Img, Line, Text } from "components";

const WireFrameDesktopProductTwoNavbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[81%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-white-A700 text-xl tracking-[-0.60px] w-auto"
                size="txtInterBold20"
              >
                {props?.logotext}
              </Text>
              <Text
                className="text-[17px] text-white-A700 tracking-[-0.60px] w-auto"
                size="txtInterRegular17"
              >
                {props?.shoptext}
              </Text>
              {!!props?.storiestext ? (
                <Text
                  className="text-[17px] text-white-A700 tracking-[-0.60px] w-auto"
                  size="txtInterRegular17"
                >
                  {props?.storiestext}
                </Text>
              ) : null}
              <Text
                className="text-[17px] text-white-A700 tracking-[-0.60px] w-auto"
                size="txtInterRegular17"
              >
                {props?.abouttext}
              </Text>
              <div className="flex flex-row gap-[13px] items-center justify-start w-[18%] sm:w-full">
                <Img
                  className="h-4 w-[15px]"
                  src="images/img_search_white_a700.svg"
                  alt="search"
                />
                <Text
                  className="text-[17px] text-blue_gray-100 tracking-[-0.60px]"
                  size="txtInterRegular17Bluegray100"
                >
                  {props?.searchtext}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[22px] items-start justify-start sm:mt-0 mt-[3px] w-auto">
              <div className="flex flex-row gap-[7px] items-center justify-between w-[36%]">
                <Img
                  className="h-[21px]"
                  src="images/img_bag_white_a700.svg"
                  alt="bag"
                />
                <Text
                  className="text-[17px] text-white-A700 tracking-[-0.60px]"
                  size="txtInterRegular17"
                >
                  {props?.bagcount}
                </Text>
              </div>
              <Text
                className="text-[17px] text-white-A700 tracking-[-0.60px] w-auto"
                size="txtInterRegular17"
              >
                {props?.logintext}
              </Text>
            </div>
          </div>
          <Line className="bg-white-A700_87 h-px shadow-bs w-full" />
        </div>
      </div>
    </>
  );
};

WireFrameDesktopProductTwoNavbar.defaultProps = {
  logotext: "Voice of Elite",
  shoptext: "Shop",
  abouttext: "About",
  searchtext: "Search",
  bagcount: "3",
  logintext: "Login",
};

export default WireFrameDesktopProductTwoNavbar;
