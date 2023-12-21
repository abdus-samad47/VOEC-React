import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const LoginPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    const win = window.open("https://appleid.apple.com", "_blank");
    win.focus();
  }
  function handleNavigate1() {
    const win = window.open("https://mail.google.com", "_blank");
    win.focus();
  }
  function handleNavigate2() {
    const win = window.open("https://www.facebook.com", "_blank");
    win.focus();
  }

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-urbanist items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="bg-gray-500 h-[60px] mx-auto w-full"></div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[108px] items-start justify-start mt-[-48px] mx-auto p-4 w-full z-[1]"
              style={{ backgroundImage: "url('images/img_group13.svg')" }}
            >
              <div className="flex flex-row gap-[27px] items-center justify-start mb-3 md:ml-[0] ml-[71px] shadow-bs w-[23%] md:w-full">
                <div className="bg-blue_gray-100 h-[63px] rounded-[33px] w-[22%]"></div>
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtUrbanistRomanSemiBold20"
                >
                  Voice Of Elite Customer
                </Text>
              </div>
            </div>
          </div>
          <div className="h-[780px] md:h-[854px] md:px-5 relative w-full">
            <Img
              className="h-[780px] m-auto object-cover w-full"
              src="images/img_group71.png"
              alt="groupSeventyOne"
            />
            <div className="absolute h-[780px] md:h-[854px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[780px] m-auto object-cover w-full"
                src="images/img_texture.png"
                alt="texture"
              />
              <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-start justify-between m-auto w-[84%]">
                <div className="flex flex-col items-center justify-start rounded-[37px] shadow-bs w-[52%] md:w-full">
                  <Img
                    className="h-[400px] md:h-auto object-cover rounded-[37px] w-full"
                    src="images/img_rectangle7.png"
                    alt="rectangleSeven"
                  />
                </div>
                <div className="flex flex-col gap-9 items-center justify-start md:mt-0 mt-[52px] w-[29%] md:w-full">
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start shadow-bs w-full">
                      <Input
                        name="login"
                        placeholder="Enter Email"
                        className="font-semibold leading-[normal] p-0 placeholder:text-gray-600_01 text-center text-xl w-full"
                        wrapClassName="w-full"
                        type="email"
                        shape="round"
                        color="blue_gray_100"
                        size="2xl"
                        variant="fill"
                      ></Input>
                      <div className="bg-blue_gray-100 md:h-10 h-14 mt-4 p-2 relative rounded-lg w-full">
                        <Input
                          name="group118"
                          placeholder="Enter your Password"
                          className="font-semibold leading-[normal] p-0 placeholder:text-gray-600_01 text-center text-gray-600_01 text-xl w-full"
                          wrapClassName="absolute bottom-[18%] inset-x-[0] mx-auto w-[93%]"
                          type="password"
                        ></Input>
                        <Img
                          className="absolute h-[22px] right-[14%] top-[27%] w-[22px]"
                          src="images/img_fluenteye20filled.svg"
                          alt="fluenteye20fill"
                        />
                      </div>
                      <a className="md:ml-[0] ml-[173px] mt-[11px] text-gray-600_01 text-right text-xl">
                        <Text
                          className="common-pointer"
                          size="txtUrbanistRomanSemiBold20Gray60001"
                          onClick={() => navigate("/forgotpasswordpageone")}
                        >
                          Forgot Password?
                        </Text>
                      </a>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[331px] text-center text-xl"
                      onClick={() => navigate("/landingpage")}
                      shape="round"
                      color="gray_500"
                      size="lg"
                      variant="fill"
                    >
                      Login
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[41px] items-center justify-start shadow-bs w-full">
                    <div className="flex flex-col font-urbanist items-center justify-start w-full">
                      <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-between w-full">
                          <Line className="bg-indigo-50 h-px my-2 w-[34%]" />
                          <div className="flex relative w-[63%]">
                            <Text
                              className="my-auto text-gray-600_01 text-sm"
                              size="txtUrbanistRomanSemiBold14"
                            >
                              Or Register with
                            </Text>
                            <Line className="bg-indigo-50 h-px ml-[-5px] my-auto w-[54%] z-[1]" />
                          </div>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-2 grid grid-cols-3 justify-center w-full"
                          orientation="horizontal"
                        >
                          <div
                            className="common-pointer bg-white-A700 border border-indigo-50 border-solid flex flex-1 flex-col items-start justify-start p-[15px] rounded-lg w-full"
                            onClick={handleNavigate2}
                          >
                            <Img
                              className="h-[26px] md:ml-[0] ml-[22px] w-[26px]"
                              src="images/img_facebookic.svg"
                              alt="facebookic"
                            />
                          </div>
                          <div
                            className="common-pointer bg-white-A700 border border-indigo-50 border-solid flex flex-1 flex-col items-start justify-start p-[15px] rounded-lg w-full"
                            onClick={handleNavigate1}
                          >
                            <Img
                              className="h-[26px] md:ml-[0] ml-[22px] w-[26px]"
                              src="images/img_googleic.svg"
                              alt="googleic"
                            />
                          </div>
                          <div
                            className="common-pointer bg-white-A700 border border-indigo-50 border-solid flex flex-1 flex-col items-start justify-start p-[15px] rounded-lg w-full"
                            onClick={handleNavigate}
                          >
                            <Img
                              className="h-[26px] md:ml-[0] ml-[22px] w-[26px]"
                              src="images/img_cibapple.svg"
                              alt="cibapple"
                            />
                          </div>
                        </List>
                      </div>
                    </div>
                    <Text
                      className="common-pointer text-[15px] text-center text-gray-900 tracking-[0.15px]"
                      size="txtPoppinsSemiBold15"
                      onClick={() => navigate("/signuppage")}
                    >
                      <span className="text-gray-900 font-urbanist font-medium">
                        Already have an account?{" "}
                      </span>
                      <span className="text-cyan-400 font-urbanist font-bold">
                        Register Now
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row font-publicsans items-center justify-between md:ml-[0] ml-[727px] mt-[62px] md:px-5 w-[24%] md:w-full">
            <Text
              className="text-[17px] text-black-900 tracking-[-0.40px]"
              size="txtPublicSansRegular17"
            >
              $99
            </Text>
            <Text
              className="text-[17px] text-black-900 tracking-[-0.40px]"
              size="txtPublicSansRegular17"
            >
              $99
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
