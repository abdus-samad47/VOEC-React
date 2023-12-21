import React from "react";

import { Img, Text } from "components";

const DashboardOverviewStatus = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[9px] items-center justify-start mb-1 w-[98%] md:w-full">
          <div className="flex flex-row items-center justify-between w-full">
            {!!props?.revenue ? (
              <Text
                className="text-gray-900_02 text-sm"
                size="txtInterSemiBold14"
              >
                {props?.revenue}
              </Text>
            ) : null}
            {!!props?.contrast ? (
              <Img className="h-6 w-6" alt="contrast" src={props?.contrast} />
            ) : null}
          </div>
          <div className="flex flex-row gap-5 items-center justify-between w-full">
            {!!props?.p25k ? (
              <Text
                className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                size="txtInterSemiBold24"
              >
                {props?.p25k}
              </Text>
            ) : null}
            <div className="flex flex-row gap-1 h-5 md:h-auto items-center justify-center px-[3px] w-auto">
              {!!props?.p1101 ? (
                <Text
                  className="text-green-700 text-right text-xs w-auto"
                  size="txtInterRegular12Green700"
                >
                  {props?.p1101}
                </Text>
              ) : null}
              {!!props?.cursor ? (
                <Img className="h-4 w-4" alt="cursor" src={props?.cursor} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardOverviewStatus.defaultProps = {};

export default DashboardOverviewStatus;
