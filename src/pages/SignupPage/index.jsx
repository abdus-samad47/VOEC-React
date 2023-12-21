import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const SignupPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    const win = window.open("https://appleid.apple.com", "_blank");
    win.focus();
  }
  function handleNavigate4() {
    const win = window.open("https://mail.google.com", "_blank");
    win.focus();
  }
  function handleNavigate5() {
    const win = window.open("https://www.facebook.com", "_blank");
    win.focus();
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-abeezee items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[1024px] items-center justify-start w-full"
            style={{ backgroundImage: "url('images/img_group71.png')" }}
          >
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[1024px] items-center justify-end p-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_texture.png')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1343px] mt-[137px] mx-auto md:px-5 w-full">
                <Img
                  className="h-[418px] md:h-auto md:mt-0 mt-[115px] object-cover rounded-[37px]"
                  src="images/img_rectangle7_418x720.png"
                  alt="rectangleSeven"
                />
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="italic text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtABeeZeeItalic24"
                    >
                      Your logo
                    </Text>
                    <Text
                      className="italic mt-[15px] md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                      size="txtABeeZeeItalic38"
                    >
                      Register
                    </Text>
                    <Text
                      className="mt-[53px] text-lg text-white-A700"
                      size="txtABeeZeeRegular18"
                    >
                      Username
                    </Text>
                    <Input
                      name="groupThirtyOne"
                      placeholder="Username"
                      className="leading-[normal] p-0 placeholder:text-gray-400 text-left text-sm w-full"
                      wrapClassName="border border-gray-400 border-solid mt-[5px] rounded-[10px] w-full"
                      type="text"
                      shape="round"
                      color="white_A700"
                      size="2xl"
                      variant="fill"
                    ></Input>
                    <Text
                      className="mt-7 text-lg text-white-A700"
                      size="txtABeeZeeRegular18"
                    >
                      Email
                    </Text>
                    <Input
                      name="email_One"
                      placeholder="username@gmail.com"
                      className="leading-[normal] p-0 placeholder:text-gray-400 text-left text-sm w-full"
                      wrapClassName="border border-gray-400 border-solid mt-[5px] rounded-[10px] w-full"
                      type="email"
                      shape="round"
                      color="white_A700"
                      size="2xl"
                      variant="fill"
                    ></Input>
                    <Text
                      className="mt-7 text-lg text-white-A700"
                      size="txtABeeZeeRegular18"
                    >
                      Password
                    </Text>
                    <Input
                      name="groupThirtyTwo"
                      placeholder="Password"
                      className="leading-[normal] p-0 placeholder:text-gray-400 text-left text-sm w-full"
                      wrapClassName="border border-gray-400 border-solid flex mt-[5px] rounded-[10px] w-full"
                      type="password"
                      suffix={
                        <div className="h-4 ml-[35px] w-4 rounded-[50%] my-px">
                          <Img
                            className="h-4 rounded-lg my-auto"
                            src="images/img_clarityeyehideline.svg"
                            alt="clarity:eye-hide-line"
                          />
                        </div>
                      }
                      shape="round"
                      color="white_A700"
                      size="2xl"
                      variant="fill"
                    ></Input>
                    <Text
                      className="mt-7 text-lg text-white-A700"
                      size="txtABeeZeeRegular18"
                    >
                      Confirm Password
                    </Text>
                    <Input
                      name="groupThirty"
                      placeholder="Confirm Password"
                      className="leading-[normal] p-0 placeholder:text-gray-400 text-left text-sm w-full"
                      wrapClassName="border border-gray-400 border-solid mt-[5px] rounded-[10px] w-full"
                      type="password"
                      shape="round"
                      color="white_A700"
                      size="2xl"
                      variant="fill"
                    ></Input>
                    <Button
                      className="common-pointer cursor-pointer italic leading-[normal] min-w-[500px] sm:min-w-full mt-[41px] rounded-[10px] text-center text-xl"
                      onClick={() => navigate("/")}
                      shape="round"
                      color="black_900"
                      size="sm"
                      variant="fill"
                    >
                      Register
                    </Button>
                    <div className="flex flex-row font-urbanist gap-3 items-center justify-center md:ml-[0] ml-[75px] mt-[41px] w-[67%] md:w-full">
                      <Line className="bg-indigo-50 h-px mb-1.5 mt-[9px] w-[34%]" />
                      <div className="flex relative w-[63%]">
                        <a
                          href="javascript:"
                          className="my-auto text-gray-600_01 text-sm"
                        >
                          <Text size="txtUrbanistRomanSemiBold14">
                            Or Continue with
                          </Text>
                        </a>
                        <Line className="bg-indigo-50 h-px mb-1.5 ml-[-10px] mt-auto w-[54%] z-[1]" />
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-2 grid grid-cols-3 justify-center md:ml-[0] ml-[75px] mt-[22px] w-[67%]"
                      orientation="horizontal"
                    >
                      <div
                        className="common-pointer bg-white-A700 border border-indigo-50 border-solid flex flex-col items-start justify-start p-[15px] rounded-lg w-full"
                        onClick={handleNavigate5}
                      >
                        <Img
                          className="h-[26px] md:ml-[0] ml-[22px] w-[26px]"
                          src="images/img_facebookic.svg"
                          alt="facebookic"
                        />
                      </div>
                      <div
                        className="common-pointer bg-white-A700 border border-indigo-50 border-solid flex flex-col items-start justify-start p-[15px] rounded-lg w-full"
                        onClick={handleNavigate4}
                      >
                        <Img
                          className="h-[26px] md:ml-[0] ml-[22px] w-[26px]"
                          src="images/img_googleic.svg"
                          alt="googleic"
                        />
                      </div>
                      <div
                        className="common-pointer bg-white-A700 border border-indigo-50 border-solid flex flex-col items-start justify-start p-[15px] rounded-lg w-full"
                        onClick={handleNavigate3}
                      >
                        <Img
                          className="h-[26px] md:ml-[0] ml-[22px] w-[26px]"
                          src="images/img_cibapple.svg"
                          alt="cibapple"
                        />
                      </div>
                    </List>
                    <div className="flex flex-col font-abeezee justify-start md:ml-[0] ml-[173px] mt-[22px]">
                      <Text
                        className="mr-9 text-sm text-white-A700"
                        size="txtABeeZeeRegular14"
                      >
                        Already have an account?{" "}
                      </Text>
                      <a className="italic md:ml-[0] ml-[172px] text-light_blue-A200 text-sm">
                        <Text
                          className="common-pointer"
                          size="txtABeeZeeItalic14"
                          onClick={() => navigate("/loginpage")}
                        >
                          Login
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPagePage;
