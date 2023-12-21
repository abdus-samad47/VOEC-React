import React from "react";

import { Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-center pt-4 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-center w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-4/5 md:w-full">
              <div className="flex flex-row gap-8 items-center justify-center w-auto">
                <Text
                  className="text-white-A700 text-xl tracking-[-0.60px] w-auto"
                  size="txtInterBold20"
                >
                  Voice of Elite
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-start w-[35%]">
                  <Img
                    className="h-4 w-[15px]"
                    src="images/img_search_black_900.svg"
                    alt="search"
                  />
                  <Text
                    className="text-[17px] text-gray-500_04 tracking-[-0.60px]"
                    size="txtInterRegular17Gray50004"
                  >
                    Search
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[3px] w-auto">
                <div className="flex flex-row gap-[7px] items-center justify-between w-full">
                  <Img
                    className="h-[21px]"
                    src="images/img_bag_white_a700.svg"
                    alt="bag"
                  />
                  <Text
                    className="text-[17px] text-white-A700 tracking-[-0.60px]"
                    size="txtInterRegular17"
                  >
                    2
                  </Text>
                </div>
              </div>
            </div>
            <Line className="bg-white-A700_87 h-px w-full" />
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
