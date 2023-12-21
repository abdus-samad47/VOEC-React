import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const LandingPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-solid flex flex-col font-publicsans h-[1431px] items-center justify-start mx-auto pb-[21px] w-full white_A700_black_900_00_border13"
        style={{ backgroundImage: "url('images/img_dashboardoverview.png')" }}
      >
        <div className="sm:h-[487px] h-[610px] md:h-[628px] md:px-5 relative w-full">
          <div className="flex flex-col m-auto w-full">
            <div className="h-[123px] md:h-[628px] mx-auto w-full">
              <div className="flex flex-row md:gap-10 h-full items-start justify-between ml-[145px] mt-[15px] w-[66%]">
                <Text
                  className="text-base text-white-A700 tracking-[-0.60px]"
                  size="txtPublicSansMedium16WhiteA700"
                >
                  USD
                </Text>
                <a
                  href="javascript:"
                  className="text-base text-white-A700 tracking-[-0.60px]"
                >
                  <Text size="txtPublicSansMedium16WhiteA700">Support</Text>
                </a>
              </div>
              <div className="absolute bg-gray-500 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-end justify-center m-auto p-[17px] w-full">
                <Img
                  className="h-10 mb-5 md:mt-0 mt-[29px]"
                  src="images/img_megaphone.svg"
                  alt="megaphone"
                />
                <Text
                  className="mb-5 md:ml-[0] ml-[22px] md:mt-0 mt-[37px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[2.50px]"
                  size="txtInterBold25"
                >
                  Voice of Elite Customer
                </Text>
                <Img
                  className="h-[30px] md:h-auto mb-[17px] md:ml-[0] ml-[617px] md:mt-0 mt-[42px] object-cover w-[30px]"
                  src="images/img_search_30x30.png"
                  alt="search"
                />
                <Img
                  className="common-pointer h-[30px] md:h-auto mb-[17px] md:ml-[0] ml-[74px] md:mt-0 mt-[42px] object-cover w-[30px]"
                  src="images/img_shoppingcart.png"
                  alt="shoppingcart"
                  onClick={() => navigate("/mycartpage")}
                />
                <Text
                  className="common-pointer mb-[13px] ml-4 md:ml-[0] md:mt-0 mt-11 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
                  size="txtUrbanistRomanThin25"
                  onClick={() => navigate("/mycartpage")}
                >
                  My Cart
                </Text>
                <Img
                  className="h-[30px] md:h-auto mb-[17px] ml-9 md:ml-[0] md:mt-0 mt-[42px] object-cover w-[30px]"
                  src="images/img_favorite_30x30.png"
                  alt="favorite"
                />
                <Text
                  className="common-pointer mb-4 md:ml-[0] ml-[15px] md:mt-0 mt-[41px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
                  size="txtUrbanistRomanThin25"
                  onClick={() => navigate("/wishlistpage")}
                >
                  Wish List
                </Text>
                <div className="bg-blue_gray-100 h-[30px] mb-[17px] md:ml-[0] ml-[43px] md:mt-0 mt-[42px] rounded-[50%] shadow-bs w-[30px]"></div>
                <Text
                  className="mb-[13px] md:ml-[0] ml-[5px] md:mt-0 mt-11 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
                  size="txtUrbanistRomanThin25"
                >
                  My Profile
                </Text>
              </div>
            </div>
            <div className="md:h-[487px] h-[521px] mt-[-34px] mx-auto w-full z-[1]">
              <Img
                className="h-[521px] m-auto object-cover w-full"
                src="images/img_rectangle36.png"
                alt="rectangleThirtySix"
              />
              <Img
                className="absolute bottom-[32%] h-[158px] left-[0] object-cover w-[4%]"
                src="images/img_back.png"
                alt="back"
              />
            </div>
          </div>
          <Img
            className="absolute bottom-[33%] h-[119px] object-cover right-[0] w-[5%]"
            src="images/img_forward.png"
            alt="forward"
          />
        </div>
        <div className="flex flex-col gap-[30px] items-start mt-14 md:px-10 sm:px-5 px-[685px] w-full">
          <Text
            className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center tracking-[-2.40px]"
            size="txtPublicSansSemiBold56"
          >
            Categories
          </Text>
          <div className="flex flex-col items-center justify-start ml-9 md:ml-[0] w-[58%] md:w-full">
            <Button
              className="cursor-pointer font-semibold min-w-[194px] text-base text-center tracking-[-0.40px]"
              shape="square"
              color="black_900_02"
              size="lg"
              variant="outline"
            >
              Explore all
            </Button>
          </div>
        </div>
        <div className="flex flex-col max-w-screen-2xl mt-[119px] mx-auto md:px-5 relative w-full">
          <div className="flex md:flex-col flex-row gap-5 h-[459px] md:h-auto items-center justify-between m-auto shadow-bs w-auto">
            <div className="h-[459px] relative w-[24%] md:w-full">
              <div className="h-[459px] m-auto w-full">
                <div className="h-[459px] m-auto shadow-bs w-full"></div>
                <div className="absolute bg-white-A700 h-[368px] inset-x-[0] mx-auto top-[0] w-[367px]"></div>
                <Text
                  className="absolute bottom-[10%] left-[35%] text-[17px] text-black-900 tracking-[-0.40px]"
                  size="txtPublicSansBold17"
                >
                  Beauty
                </Text>
              </div>
              <Img
                className="absolute h-[368px] inset-x-[0] mx-auto object-cover top-[0] w-[367px]"
                src="images/img_rectangle34624107_368x367.png"
                alt="rectangle346241"
              />
            </div>
            <div className="h-[444px] relative w-1/4 md:w-full">
              <div className="absolute h-[444px] inset-[0] justify-center m-auto w-full">
                <div className="h-[444px] m-auto shadow-bs w-full"></div>
                <Text
                  className="absolute bottom-[7%] left-[36%] text-[17px] text-black-900 tracking-[-0.40px]"
                  size="txtPublicSansBold17"
                >
                  Pharmacy
                </Text>
              </div>
              <Img
                className="absolute h-[372px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                src="images/img_productimage_372x368.png"
                alt="productimage_One"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
              orientation="horizontal"
            >
              <div className="h-[459px] relative w-full">
                <div className="absolute h-[459px] inset-[0] justify-center m-auto w-full">
                  <div className="h-[459px] m-auto shadow-bs w-full"></div>
                  <div className="absolute bg-white-A700 h-[368px] inset-x-[0] mx-auto top-[0] w-[367px]"></div>
                  <Text
                    className="absolute bottom-[10%] left-[39%] text-[17px] text-black-900 tracking-[-0.40px]"
                    size="txtPublicSansBold17"
                  >
                    Fashion
                  </Text>
                </div>
                <Img
                  className="absolute h-[368px] inset-x-[0] mx-auto object-cover top-[0] w-[368px]"
                  src="images/img_rectangle34624106.png"
                  alt="rectangle346241"
                />
              </div>
              <div className="h-[459px] relative w-full">
                <div className="absolute h-[459px] inset-[0] justify-center m-auto w-full">
                  <div className="h-[459px] m-auto shadow-bs w-full"></div>
                  <div className="absolute bg-white-A700 h-[368px] inset-x-[0] mx-auto top-[0] w-[367px]"></div>
                  <Text
                    className="absolute bottom-[10%] inset-x-[0] mx-auto text-[17px] text-black-900 tracking-[-0.40px] w-max"
                    size="txtPublicSansBold17"
                  >
                    Grocery
                  </Text>
                </div>
                <Img
                  className="absolute h-[368px] inset-x-[0] mx-auto object-cover top-[0] w-[368px]"
                  src="images/img_rectangle34624108.png"
                  alt="rectangle346241"
                />
              </div>
            </List>
          </div>
          <Text
            className="ml-[392px] mt-[-0.29px] text-base text-center text-white-A700 tracking-[2.00px] uppercase z-[1]"
            size="txtPublicSansMedium16WhiteA700"
          >
            Copyrights site.com. All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
