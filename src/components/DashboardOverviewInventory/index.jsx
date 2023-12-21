import React from "react";

import { Text } from "components";

const DashboardOverviewInventory = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start p-1 w-60 md:w-full">
          <Text
            className="text-gray-900_02 text-xs w-auto"
            size="txtInterRegular12Gray90002"
          >
            {props?.hisense58inch}
          </Text>
          <div className="h-1 relative w-full">
            {!!props?.group122 ? (
              <div className="absolute h-1 inset-[0] justify-center m-auto overflow-hidden w-full">
                <div className="w-full h-full absolute bg-gray_500_6c rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-gray_500  rounded-[2px]"
                  style={{ width: `${NaN}%` }}
                ></div>
              </div>
            ) : null}
            {!!props?.group123 ? (
              <div className="absolute h-1 inset-[0] justify-center m-auto overflow-hidden w-full">
                <div className="w-full h-full absolute bg-gray_500_6c rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-gray_500  rounded-[2px]"
                  style={{ width: `${NaN}%` }}
                ></div>
              </div>
            ) : null}
            {!!props?.group124 ? (
              <div className="absolute h-1 inset-[0] justify-center m-auto overflow-hidden w-full">
                <div className="w-full h-full absolute bg-gray_500_6c rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-gray_500  rounded-[2px]"
                  style={{ width: `${NaN}%` }}
                ></div>
              </div>
            ) : null}
            {!!props?.group125 ? (
              <div className="absolute h-1 inset-[0] justify-center m-auto overflow-hidden w-full">
                <div className="w-full h-full absolute bg-gray_500_6c rounded-[2px]"></div>
                <div
                  className="h-full absolute bg-gray_500  rounded-[2px]"
                  style={{ width: `${NaN}%` }}
                ></div>
              </div>
            ) : null}
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            {props?.p1548sold}
            <Text
              className="text-gray-900_02 text-right text-xs"
              size="txtInterRegular12Gray90002"
            >
              {props?.eighthundredfiftyfour}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardOverviewInventory.defaultProps = {
  hisense58inch: "Product A",
  p1548sold: (
    <Text
      className="text-gray-900_02 text-xs"
      size="txtInterRegular12Gray90002"
    >
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
  eighthundredfiftyfour: "86.5%",
};

export default DashboardOverviewInventory;
