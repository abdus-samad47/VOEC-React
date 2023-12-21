import React from "react";

import { Img, Text } from "components";

const DashboardOverviewEvent = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-6 rounded-[50%] w-6"
          src="images/img_iconsaxlineardocumenttext.svg"
          alt="iconsaxlineardo"
        />
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-[10px] text-black-900_66 tracking-[0.50px] uppercase w-full"
            size="txtInterRegular10"
          >
            {props?.ordertime}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardOverviewEvent.defaultProps = { ordertime: "New order 5m ago" };

export default DashboardOverviewEvent;
