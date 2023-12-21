import React from "react";

import { Img, Text } from "components";

const WireFrameDesktopCartTwoRowproductcounter = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[133px] md:h-auto object-cover rounded-[20px] w-[129px] sm:w-full"
          alt="productimage"
          src={props?.productimage}
        />
        <div className="flex flex-col gap-[7px] items-start justify-start px-[5px] py-1.5 w-full">
          <Text
            className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.55px] w-auto"
            size="txtPublicSansSemiBold22"
          >
            {props?.productcounter}
          </Text>
          {!!props?.sizel ? (
            <Text
              className="text-black-900 text-sm tracking-[-0.40px] w-auto"
              size="txtPublicSansRegular14"
            >
              {props?.sizel}
            </Text>
          ) : null}
          {!!props?.quantityCounter ? (
            <Text
              className="text-black-900 text-sm tracking-[-0.40px] w-auto"
              size="txtPublicSansRegular14"
            >
              {props?.quantityCounter}
            </Text>
          ) : null}
          {!!props?.price ? (
            <Text
              className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.55px] w-auto"
              size="txtPublicSansSemiBold22"
            >
              {props?.price}
            </Text>
          ) : null}
        </div>
        <Text
          className="text-black-900 text-sm tracking-[-0.40px] underline w-[50px]"
          size="txtPublicSansRegular14"
        >
          {props?.removebutton}
        </Text>
      </div>
    </>
  );
};

WireFrameDesktopCartTwoRowproductcounter.defaultProps = {
  productimage: "images/img_image2.png",
  productcounter: "Product 1",
  removebutton: "Remove",
};

export default WireFrameDesktopCartTwoRowproductcounter;
