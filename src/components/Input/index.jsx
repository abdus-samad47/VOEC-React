import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    blue_gray_200_3f: "bg-blue_gray-200_3f text-black-900",
    deep_orange_600_01: "bg-deep_orange-600_01 text-white-A700",
    white_A700: "bg-white-A700 text-gray-400",
    white_A700_0c: "bg-white-A700_0c",
    blue_gray_100: "bg-blue_gray-100 text-gray-600_01",
  },
  outline: {
    black_900: "border border-black-900 border-solid text-blue_gray-200",
  },
};
const shapes = { round: "rounded-lg" };
const sizes = {
  xs: "p-[5px]",
  lg: "pb-[26px] pt-[13px] px-[13px]",
  md: "pb-2.5 pt-3 px-2.5",
  xl: "pb-3.5 pt-[15px] px-2.5",
  "2xl": "pb-[15px] pt-[17px] px-[15px]",
  "3xl": "pb-[18px] pt-[21px] px-[18px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "lg", "md", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_gray_200_3f",
    "deep_orange_600_01",
    "white_A700",
    "white_A700_0c",
    "blue_gray_100",
    "black_900",
  ]),
};

export { Input };
