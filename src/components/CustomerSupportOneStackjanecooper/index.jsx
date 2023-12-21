import React from "react";

import { Text } from "components";

const CustomerSupportOneStackjanecooper = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[7px] top-[0] w-full">
          <Text
            className="mb-[18px] md:ml-[0] ml-[60px] text-[17px] text-black-900 tracking-[0.50px]"
            size="txtAbrilFatfaceRegular17"
          >
            {props?.username}
          </Text>
        </div>
        {props?.teamstatus}
      </div>
    </>
  );
};

CustomerSupportOneStackjanecooper.defaultProps = {
  username: "Hammad Hussain",
  teamstatus: (
    <Text
      className="absolute bottom-[0] leading-[20.00px] right-[11%] text-[15px] text-gray-800_99 w-[71%] sm:w-full"
      size="txtActorRegular15"
    >
      <span className="text-gray-800_99 font-actor text-left font-normal">
        <>
          Customer Support Team
          <br />
        </>
      </span>
      <span className="text-gray-800_99 font-actor text-left font-normal">
        Status:{" "}
      </span>
      <span className="text-green-A700_99 font-abrilfatface text-left font-normal">
        Connected
      </span>
    </Text>
  ),
};

export default CustomerSupportOneStackjanecooper;
