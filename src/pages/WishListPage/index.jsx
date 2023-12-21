import React from "react";

import { Button, Img, Text } from "components";

const WishListPagePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-solid flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[475px] h-[1431px] justify-start mx-auto pb-[21px] w-full white_A700_black_900_00_border12"
        style={{ backgroundImage: "url('images/img_dashboardoverview.png')" }}
      >
        <div className="flex flex-col items-center w-full">
          <div className="h-[123px] md:h-[658px] md:px-5 relative w-full">
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
                className="mb-0.5 md:ml-[0] ml-[11px] md:mt-0 mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[2.50px]"
                size="txtInterBold25"
              >
                <>
                  Voice of Elite
                  <br />
                  Customer
                </>
              </Text>
              <div className="bg-blue_gray-100 flex md:flex-1 flex-row font-inter sm:gap-10 items-start justify-between mb-[13px] md:ml-[0] ml-[67px] md:mt-0 mt-8 p-1 rounded-[20px] w-[46%] md:w-full">
                <Text
                  className="ml-[17px] my-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[2.50px]"
                  size="txtInterThin25"
                >
                  Search
                </Text>
                <Img
                  className="h-[30px] md:h-auto mr-3.5 mt-1.5 object-cover w-[30px]"
                  src="images/img_search_30x30.png"
                  alt="search_One"
                />
              </div>
              <Img
                className="h-[30px] md:h-auto mb-[17px] ml-14 md:ml-[0] md:mt-0 mt-[42px] object-cover w-[30px]"
                src="images/img_shoppingcart.png"
                alt="shoppingcart"
              />
              <Text
                className="mb-[13px] ml-4 md:ml-[0] md:mt-0 mt-11 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
                size="txtUrbanistRomanThin25"
              >
                My Cart
              </Text>
              <Img
                className="h-[30px] md:h-auto mb-[17px] ml-9 md:ml-[0] md:mt-0 mt-[42px] object-cover w-[30px]"
                src="images/img_favorite_30x30.png"
                alt="favorite"
              />
              <Text
                className="mb-4 md:ml-[0] ml-[15px] md:mt-0 mt-[41px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-center"
                size="txtUrbanistRomanThin25"
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
          <Text
            className="mt-14 md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center tracking-[-2.40px]"
            size="txtPublicSansSemiBold56"
          >
            Wish List
          </Text>
          <div className="flex flex-col items-center justify-center mt-[7px] p-2.5 md:px-5 w-auto md:w-full">
            <Text
              className="text-center text-gray-500_04 text-xl tracking-[-0.40px] w-auto"
              size="txtPublicSansRegular20Gray50004"
            >
              Your Favorite Items to this Wish List
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-[46px] md:px-5 w-[12%] md:w-full">
            <Button
              className="cursor-pointer font-semibold min-w-[194px] text-base text-center tracking-[-0.40px]"
              shape="square"
              color="black_900_02"
              size="lg"
              variant="outline"
            >
              Add More
            </Button>
          </div>
          <div className="flex md:flex-col flex-row gap-5 h-[459px] md:h-auto items-start justify-start max-w-[1497px] mt-[59px] mx-auto md:px-5 shadow-bs w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start shadow-bs w-1/4 md:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start mb-2.5 w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[29px] sm:px-5 w-[367px] md:w-full">
                  <Img
                    className="h-[310px] md:h-auto object-cover w-[67%]"
                    src="images/img_rectangle34624107.png"
                    alt="rectangle346241"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-[96%] md:w-full">
                  <Text
                    className="mt-[3px] text-[17px] text-black-900 tracking-[-0.40px]"
                    size="txtPublicSansBold17"
                  >
                    Pant
                  </Text>
                  <Img
                    className="h-5 md:h-auto mb-[3px] object-cover w-5"
                    src="images/img_heart.png"
                    alt="heart"
                  />
                </div>
                <Text
                  className="text-[17px] text-black-900 tracking-[-0.40px]"
                  size="txtPublicSansRegular17"
                >
                  $99
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start shadow-bs w-1/4 md:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start mb-2.5 w-full">
                <Img
                  className="h-[368px] sm:h-auto object-cover w-[367px] md:w-full"
                  src="images/img_productimage.png"
                  alt="productimage"
                />
                <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                  <Text
                    className="mt-[3px] text-[17px] text-black-900 tracking-[-0.40px]"
                    size="txtPublicSansBold17"
                  >
                    Shirt
                  </Text>
                  <Img
                    className="h-5 md:h-auto mb-[3px] object-cover w-5"
                    src="images/img_heart.png"
                    alt="heart_One"
                  />
                </div>
                <Text
                  className="text-[17px] text-black-900 tracking-[-0.40px]"
                  size="txtPublicSansRegular17"
                >
                  $99
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start shadow-bs w-1/4 md:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start mb-2.5 w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[21px] sm:px-5 w-[367px] md:w-full">
                  <Img
                    className="h-[326px] md:h-auto object-cover w-[64%]"
                    src="images/img_rectangle34624117.png"
                    alt="rectangle346241_One"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-[91%] md:w-full">
                  <Text
                    className="mt-[3px] text-[17px] text-black-900 tracking-[-0.40px]"
                    size="txtPublicSansBold17"
                  >
                    Jean
                  </Text>
                  <Img
                    className="h-5 md:h-auto mb-[3px] object-cover w-5"
                    src="images/img_heart.png"
                    alt="heart_Two"
                  />
                </div>
                <Text
                  className="text-[17px] text-black-900 tracking-[-0.40px]"
                  size="txtPublicSansRegular17"
                >
                  $99
                </Text>
              </div>
            </div>
            <div className="md:h-[457px] h-[459px] relative w-[23%] md:w-full">
              <div className="flex flex-col gap-4 h-full items-start justify-end m-auto pr-3 py-3 shadow-bs w-full">
                <Text
                  className="mt-[377px] text-[17px] text-black-900 tracking-[-0.40px]"
                  size="txtPublicSansBold17"
                >
                  Tie
                </Text>
                <Text
                  className="text-[17px] text-black-900 tracking-[-0.40px]"
                  size="txtPublicSansRegular17"
                >
                  $99
                </Text>
              </div>
              <div className="absolute inset-x-[0] mx-auto overflow-x-auto top-[0] w-full">
                <div className="h-[368px] relative w-full">
                  <div className="bg-white-A700 h-[368px] ml-auto my-auto w-[367px]"></div>
                  <Img
                    className="absolute h-[338px] inset-[0] justify-center m-auto object-cover w-[92%]"
                    src="images/img_rectangle34624116.png"
                    alt="rectangle346241_Two"
                  />
                </div>
              </div>
              <Img
                className="absolute bottom-[12%] h-5 object-cover right-[0] w-[6%]"
                src="images/img_heart.png"
                alt="heart_Three"
              />
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[479px] text-base text-center text-white-A700 tracking-[2.00px] uppercase"
          size="txtPublicSansMedium16WhiteA700"
        >
          Copyrights site.com. All Rights Reserved
        </Text>
      </div>
    </>
  );
};

export default WishListPagePage;
