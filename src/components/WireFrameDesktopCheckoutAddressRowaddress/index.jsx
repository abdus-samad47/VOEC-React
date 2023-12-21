import React from "react";

import { Line, Text } from "components";

const WireFrameDesktopCheckoutAddressRowaddress = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-[17px] text-black-900 tracking-[-0.40px] w-auto"
          size="txtPublicSansBold17"
        >
          {props?.addresstext}
        </Text>
        <Line className="bg-black-900 h-px w-[18%]" />
        <Text
          className="text-[17px] text-black-900 tracking-[-0.40px] w-auto"
          size="txtPublicSansRegular17"
        >
          {props?.shippingtext}
        </Text>
        <Line className="bg-black-900 h-px w-[18%]" />
        <Text
          className="text-[17px] text-black-900 tracking-[-0.40px] w-auto"
          size="txtPublicSansRegular17"
        >
          {props?.paymenttext}
        </Text>
      </div>
    </>
  );
};

WireFrameDesktopCheckoutAddressRowaddress.defaultProps = {
  addresstext: "Address",
  shippingtext: "Shipping",
  paymenttext: "Payment",
};

export default WireFrameDesktopCheckoutAddressRowaddress;
