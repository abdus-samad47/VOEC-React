import React from "react";

import { Img, Text } from "components";

const DashboardOverviewEvent1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-6 rounded-[50%] w-6"
          src="images/img_iconsaxlineardocumenttext_gray_500.svg"
          alt="iconsaxlineardo"
        />
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-[10px] text-black-900_66 tracking-[0.50px] uppercase w-full"
            size="txtInterRegular10"
          >
            {props?.newcustomertext}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardOverviewEvent1.defaultProps = {
  newcustomertext: "New customer 10m ago",
};

export default DashboardOverviewEvent1;
