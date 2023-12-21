import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-lg" };
const variants = {
  fill: {
    gray_700: "bg-gray-700 text-gray-50_01",
    black_900_cc: "bg-black-900_cc text-white-A700",
    gray_500: "bg-gray-500 text-white-A700",
    blue_gray_200_3f: "bg-blue_gray-200_3f text-black-900",
    black_900: "bg-black-900 text-white-A700",
  },
  outline: {
    black_900_02:
      "outline outline-[0.5px] outline-black-900_02 text-black-900_02",
    gray_500: "outline outline-[0.5px] outline-gray-500 text-gray-500",
  },
};
const sizes = {
  xs: "p-[7px]",
  sm: "p-3",
  md: "pl-[13px] pr-3.5 py-[15px]",
  lg: "p-4",
  xl: "p-7 sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "gray_700",
    "black_900_cc",
    "gray_500",
    "blue_gray_200_3f",
    "black_900",
    "black_900_02",
  ]),
};

export { Button };
