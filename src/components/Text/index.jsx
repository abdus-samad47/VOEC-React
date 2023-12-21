import React from "react";

const sizeClasses = {
  txtPublicSansSemiBold16: "font-publicsans font-semibold",
  txtInterRegular12Green700: "font-inter font-normal",
  txtPublicSansSemiBold56: "font-publicsans font-semibold",
  txtAbrilFatfaceRegular17: "font-abrilfatface font-normal",
  txtInterRegular17Gray50004: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterBold25: "font-bold font-inter",
  txtInterRegular17Bluegray100: "font-inter font-normal",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterRegular14WhiteA70033: "font-inter font-normal",
  txtABeeZeeItalic38: "font-abeezee font-normal italic",
  txtActorRegular12: "font-actor font-normal",
  txtPoppinsSemiBold15: "font-poppins font-semibold",
  txtInterBold20: "font-bold font-inter",
  txtActorRegular15: "font-actor font-normal",
  txtPublicSansRegular20: "font-normal font-publicsans",
  txtSpartanRegular1222: "font-normal font-spartan",
  txtUrbanistRomanSemiBold20WhiteA700: "font-semibold font-urbanist",
  txtPublicSansSemiBold22: "font-publicsans font-semibold",
  txtUrbanistRomanThin25: "font-hairline font-urbanist",
  txtInterRegular10: "font-inter font-normal",
  txtInterBold14: "font-bold font-inter",
  txtInterRegular12Gray90002: "font-inter font-normal",
  txtUrbanistRomanSemiBold14: "font-semibold font-urbanist",
  txtSpartanRegular1222Gray40001: "font-normal font-spartan",
  txtSpartanRegular1096: "font-normal font-spartan",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular17: "font-inter font-normal",
  txtUrbanistRomanSemiBold20: "font-semibold font-urbanist",
  txtPublicSansMedium16: "font-medium font-publicsans",
  txtSpartanBold11Black900: "font-bold font-spartan",
  txtPublicSansSemiBold36: "font-publicsans font-semibold",
  txtABeeZeeItalic14: "font-abeezee font-normal italic",
  txtUrbanistRomanSemiBold20Gray60001: "font-semibold font-urbanist",
  txtSpartanBold224: "font-bold font-spartan",
  txtSpartanRegular1038Gray70001: "font-normal font-spartan",
  txtInterThin25: "font-hairline font-inter",
  txtPublicSansSemiBold36Black900: "font-publicsans font-semibold",
  txtSpartanRegular1426: "font-normal font-spartan",
  txtInterSemiBold14: "font-inter font-semibold",
  txtPublicSansRegular13: "font-normal font-publicsans",
  txtABeeZeeItalic24: "font-abeezee font-normal italic",
  txtPublicSansRegular14: "font-normal font-publicsans",
  txtPublicSansMedium16WhiteA700: "font-medium font-publicsans",
  txtPublicSansRegular16: "font-normal font-publicsans",
  txtPublicSansRegular17: "font-normal font-publicsans",
  txtPublicSansRegular18: "font-normal font-publicsans",
  txtPublicSansRegular18Black90087: "font-normal font-publicsans",
  txtPublicSansRegular20Gray50004: "font-normal font-publicsans",
  txtABeeZeeRegular18: "font-abeezee font-normal",
  txtPublicSansBold14: "font-bold font-publicsans",
  txtPublicSansBold17: "font-bold font-publicsans",
  txtABeeZeeRegular14: "font-abeezee font-normal",
  txtPublicSansRegular14Bluegray200: "font-normal font-publicsans",
  txtSpartanBold11: "font-bold font-spartan",
  txtPublicSansSemiBold16Black90001: "font-publicsans font-semibold",
  txtSpartanRegular1038: "font-normal font-spartan",
  txtHelvetica12: "font-helvetica font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
