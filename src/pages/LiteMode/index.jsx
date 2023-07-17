import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import LiteModeFourRowfiltres from "components/LiteModeFourRowfiltres";
import LiteModeFourTab from "components/LiteModeFourTab";
import Sidebar1 from "components/Sidebar1";

const LiteModePage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_offer_gray_600.svg"
          alt="offer"
        />
      ),
      label: "Dashboard",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_volume.svg"
          alt="volume"
        />
      ),
      label: "Analytics",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowdown_white_a700.svg"
          alt="arrowdown"
        />
      ),
      label: "Products",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[5px] w-6"
          src="images/img_music.svg"
          alt="music"
        />
      ),
      label: "Payment",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_computer.svg" alt="computer" />
      ),
      label: "Orders",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />,
      label: "Users",
    },
    {
      icon: (
        <Img
          className="h-6 mb-1 w-6"
          src="images/img_computer_gray_600.svg"
          alt="computer_One"
        />
      ),
      label: "Marketing",
    },
    {
      icon: (
        <Img
          className="h-6 mb-1 w-6"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Setting",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-poppins items-center justify-end mx-auto pl-0.5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[247px] flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[5px] top-[0]" />
          <div className="flex flex-1 flex-col gap-4 items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 border-b border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-10 items-center justify-between p-[22px] sm:px-5 w-full">
              <div className="flex flex-col items-start justify-center ml-2.5 md:ml-[0] w-auto">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtPoppinsBold20"
                >
                  Welcome, James
                </Text>
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsMedium14"
                >
                  1 October 2022 | 11:59 AM GMT
                </Text>
              </div>
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-7 items-center justify-end mr-[26px] w-auto sm:w-full">
                <Img
                  className="h-10 rounded w-10"
                  src="images/img_car_gray_600_40x40.svg"
                  alt="car_One"
                />
                <Img
                  className="h-10 rounded w-10"
                  src="images/img_frame15.svg"
                  alt="frameFifteen"
                />
                <Line className="bg-blue_gray-100 h-8 sm:h-px sm:w-full w-px" />
                <Input
                  name="frameFive"
                  placeholder="Search"
                  className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-black-900 sm:h-auto sm:pr-5 text-base text-black-900 text-left w-full"
                  wrapClassName="bg-white-A700 flex outline outline-[1px] outline-blue_gray-100 pl-4 pr-[35px] py-[11px] rounded-lg w-[71%] sm:w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                  }
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-roboto gap-4 items-start justify-between w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start w-3/4 md:w-full">
                <div className="flex flex-col items-center justify-start p-4 w-full">
                  <div className="bg-gray-50 flex md:flex-col flex-row md:gap-5 items-center justify-start outline outline-gray-100_02 sm:px-5 px-[30px] rounded-tl-[20px] rounded-tr-[20px] w-[98%] md:w-full">
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <Button className="bg-white-A700 flex h-10 items-center justify-center p-1.5 rounded-[5px] shadow-bs w-10">
                        <Img
                          className="h-7"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                      </Button>
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtRobotoBold16"
                      >
                        Products
                      </Text>
                    </div>
                    <LiteModeFourTab className="flex flex-row gap-10 h-[90px] md:h-auto items-center justify-center md:ml-[0] ml-[262px] w-auto" />
                    <Button
                      className="bg-gray-900 cursor-pointer flex items-center justify-center min-w-[136px] md:ml-[0] ml-[31px] md:mt-0 my-[25px] outline outline-[1px] outline-blue_gray-400 pl-[15px] pr-5 py-1.5 rounded-[20px] shadow-bs4"
                      leftIcon={
                        <Img
                          className="h-7 mr-1"
                          src="images/img_plus.svg"
                          alt="plus"
                        />
                      }
                    >
                      <div className="font-black text-left text-white-A700 text-xs">
                        Add Product
                      </div>
                    </Button>
                  </div>
                  <div className="bg-white-A700 border-b-2 border-gray-100_02 border-solid flex flex-col h-[70px] md:h-auto items-center justify-between max-w-[852px] w-full">
                    <div className="flex sm:flex-col flex-row gap-2.5 h-[70px] md:h-auto items-center justify-between pl-[15px] pr-5 w-full">
                      <div className="flex flex-row gap-[5px] h-10 md:h-auto items-center justify-center pl-[15px] pr-5 py-1.5 rounded-[20px] w-auto">
                        <Img
                          className="h-7 w-7"
                          src="images/img_checkmark_indigo_100.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="text-blue_gray-400_01 text-xs w-auto"
                          size="txtRobotoBlack12"
                        >
                          Select All
                        </Text>
                      </div>
                      <LiteModeFourRowfiltres className="flex flex-row items-center justify-start shadow-bs w-auto" />
                      <div className="flex flex-row items-center justify-start shadow-bs w-auto">
                        <Button className="bg-white-A700 flex h-10 items-center justify-center outline outline-[1px] outline-gray-100_03 p-1.5 rounded-bl-[5px] rounded-tl-[5px] w-10">
                          <Img
                            className="h-7"
                            src="images/img_menu_indigo_100.svg"
                            alt="menu"
                          />
                        </Button>
                        <Button className="bg-white-A700 flex h-10 items-center justify-center outline outline-[1px] outline-gray-100_03 p-1.5 rounded-br-[5px] rounded-tr-[5px] w-10">
                          <Img
                            className="h-7"
                            src="images/img_grid.svg"
                            alt="grid"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-5 items-center mb-[25px] mt-5 w-[98%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-center justify-center max-w-[852px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start max-w-[852px] w-full">
                          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
                            <div className="bg-white-A700 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
                              <div className="flex flex-row items-start justify-start w-full">
                                <Button className="bg-gray-900 flex h-5 items-center justify-center outline outline-[1px] outline-blue_gray-400 p-1.5 rounded-[50%] shadow-bs4 w-5">
                                  <Img
                                    src="images/img_checkmark_white_a700.svg"
                                    alt="checkmark"
                                  />
                                </Button>
                                <div className="flex flex-1 flex-col h-[150px] md:h-auto items-center justify-center pl-2.5 sm:pr-5 pr-[30px] py-2.5 w-full">
                                  <Img
                                    className="h-[121px] md:h-auto object-cover w-[107px] sm:w-full"
                                    src="images/img_image042.png"
                                    alt="image042"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-5 items-center justify-start w-full">
                                <Text
                                  className="text-gray-900 text-xs w-auto"
                                  size="txtRobotoBold12"
                                >
                                  Echechca
                                </Text>
                                <Button className="bg-white-A700 cursor-pointer font-black h-[30px] min-w-[69px] py-[9px] rounded-[15px] shadow-bs text-[10px] text-blue_gray-400_01 text-center">
                                  N25,000
                                </Button>
                              </div>
                            </div>
                            <div className="bg-white-A700 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
                              <div className="flex flex-row items-start justify-start w-full">
                                <div className="bg-white-A700 h-5 outline outline-[1px] outline-gray-100_02 rounded-[50%] shadow-bs5 w-5"></div>
                                <div className="flex flex-1 flex-col h-[150px] md:h-auto items-center justify-center pl-2.5 sm:pr-5 pr-[30px] py-2.5 w-full">
                                  <Img
                                    className="h-[150px] md:h-auto object-cover w-[111px] sm:w-full"
                                    src="images/img_imgpricklypear2.png"
                                    alt="imgpricklypearTwo"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-5 items-center justify-start w-full">
                                <Text
                                  className="text-gray-900 text-xs w-auto"
                                  size="txtRobotoBold12"
                                >
                                  Samsung Smart Watch
                                </Text>
                                <Button className="bg-white-A700 cursor-pointer font-black h-[30px] min-w-[69px] py-[9px] rounded-[15px] shadow-bs text-[10px] text-blue_gray-400_01 text-center">
                                  N25,000
                                </Button>
                              </div>
                            </div>
                            <div className="bg-white-A700 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
                              <div className="flex flex-row items-start justify-start w-full">
                                <div className="bg-white-A700 h-5 outline outline-[1px] outline-gray-100_02 rounded-[50%] shadow-bs5 w-5"></div>
                                <div className="flex flex-1 flex-col h-[150px] md:h-auto items-center justify-center pl-2.5 sm:pr-5 pr-[30px] py-2.5 w-full">
                                  <Img
                                    className="h-[150px] md:h-auto object-cover w-[111px] sm:w-full"
                                    src="images/img_imgpricklypear2.png"
                                    alt="imgpricklypearTwo_One"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-5 items-center justify-start w-full">
                                <Text
                                  className="text-gray-900 text-xs w-auto"
                                  size="txtRobotoBold12"
                                >
                                  Samsung Smart Watch
                                </Text>
                                <Button className="bg-white-A700 cursor-pointer font-black h-[30px] min-w-[69px] py-[9px] rounded-[15px] shadow-bs text-[10px] text-blue_gray-400_01 text-center">
                                  N25,000
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center max-w-[852px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start max-w-[852px] w-full">
                          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
                            <div className="bg-white-A700 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
                              <div className="flex flex-row items-start justify-start w-full">
                                <Button className="bg-gray-900 flex h-5 items-center justify-center outline outline-[1px] outline-blue_gray-400 p-1.5 rounded-[50%] shadow-bs4 w-5">
                                  <Img
                                    src="images/img_checkmark_white_a700.svg"
                                    alt="checkmark"
                                  />
                                </Button>
                                <div className="flex flex-1 flex-col h-[150px] md:h-auto items-center justify-center pl-2.5 sm:pr-5 pr-[30px] py-2.5 w-full">
                                  <Img
                                    className="h-[121px] md:h-auto object-cover w-[107px] sm:w-full"
                                    src="images/img_image042.png"
                                    alt="image042"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-5 items-center justify-start w-full">
                                <Text
                                  className="text-gray-900 text-xs w-auto"
                                  size="txtRobotoBold12"
                                >
                                  Echechca
                                </Text>
                                <Button className="bg-white-A700 cursor-pointer font-black h-[30px] min-w-[69px] py-[9px] rounded-[15px] shadow-bs text-[10px] text-blue_gray-400_01 text-center">
                                  N25,000
                                </Button>
                              </div>
                            </div>
                            <div className="bg-white-A700 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
                              <div className="flex flex-row items-start justify-start w-full">
                                <div className="bg-white-A700 h-5 outline outline-[1px] outline-gray-100_02 rounded-[50%] shadow-bs5 w-5"></div>
                                <div className="flex flex-1 flex-col h-[150px] md:h-auto items-center justify-center pl-2.5 sm:pr-5 pr-[30px] py-2.5 w-full">
                                  <Img
                                    className="h-[150px] md:h-auto object-cover w-[111px] sm:w-full"
                                    src="images/img_imgpricklypear2.png"
                                    alt="imgpricklypearTwo"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-5 items-center justify-start w-full">
                                <Text
                                  className="text-gray-900 text-xs w-auto"
                                  size="txtRobotoBold12"
                                >
                                  Samsung Smart Watch
                                </Text>
                                <Button className="bg-white-A700 cursor-pointer font-black h-[30px] min-w-[69px] py-[9px] rounded-[15px] shadow-bs text-[10px] text-blue_gray-400_01 text-center">
                                  N25,000
                                </Button>
                              </div>
                            </div>
                            <div className="bg-white-A700 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
                              <div className="flex flex-row items-start justify-start w-full">
                                <div className="bg-white-A700 h-5 outline outline-[1px] outline-gray-100_02 rounded-[50%] shadow-bs5 w-5"></div>
                                <div className="flex flex-1 flex-col h-[150px] md:h-auto items-center justify-center pl-2.5 sm:pr-5 pr-[30px] py-2.5 w-full">
                                  <Img
                                    className="h-[150px] md:h-auto object-cover w-[111px] sm:w-full"
                                    src="images/img_imgpricklypear2.png"
                                    alt="imgpricklypearTwo_One"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-5 items-center justify-start w-full">
                                <Text
                                  className="text-gray-900 text-xs w-auto"
                                  size="txtRobotoBold12"
                                >
                                  Samsung Smart Watch
                                </Text>
                                <Button className="bg-white-A700 cursor-pointer font-black h-[30px] min-w-[69px] py-[9px] rounded-[15px] shadow-bs text-[10px] text-blue_gray-400_01 text-center">
                                  N25,000
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col font-poppins gap-7 items-center justify-start md:mt-0 mt-4 w-1/4 md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid md:h-[223px] h-[317px] px-4 py-5 relative rounded-[12px] w-[292px]">
                    <div className="absolute md:h-[223px] h-[228px] inset-x-[0] mx-auto top-[6%] w-[77%]">
                      <Text
                        className="absolute inset-x-[0] mx-auto text-black-900 text-xl top-[0] w-max"
                        size="txtPoppinsBold20"
                      >
                        Sales by Category
                      </Text>
                      <div className="absolute h-[223px] inset-[0] justify-center m-auto w-[223px]">
                        <div className="h-[223px] m-auto w-[223px]">
                          <div className="absolute bg-white-A700 border border-gray-300_01 border-solid h-[171px] inset-[0] justify-center m-auto rotate-[-176deg] rounded-[85px] w-[171px]"></div>
                          <div className="absolute bg-gray-300 border border-gray-300_01 border-solid h-[223px] inset-[0] justify-center m-auto rotate-[122deg] rounded-[111px] shadow-bs2 w-[223px]"></div>
                          <div className="absolute bg-white-A700 border border-gray-300_01 border-solid h-[161px] inset-[0] justify-center m-auto rounded-[80px] w-[161px]"></div>
                          <div className="absolute bg-white-A700 border border-gray-300_01 border-solid h-[180px] inset-[0] justify-center m-auto rotate-[-97deg] rounded-[50%] w-[180px]"></div>
                          <div className="absolute bg-white-A700 border border-gray-300_01 border-solid h-[203px] inset-[0] justify-center m-auto rotate-[-72deg] rounded-[101px] w-[203px]"></div>
                          <div className="absolute flex flex-col h-max inset-y-[0] justify-start my-auto right-[21%] w-[53%]">
                            <Text
                              className="md:ml-[0] ml-[67px] text-black-900 text-center text-sm"
                              size="txtPoppinsMedium14Black900"
                            >
                              22%
                            </Text>
                            <div className="flex flex-row items-start justify-between mt-[68px] w-full">
                              <Text
                                className="text-[10.51px] text-black-900 text-center"
                                size="txtPoppinsMedium1051"
                              >
                                22%
                              </Text>
                              <Text
                                className="text-[10.51px] text-black-900 text-center"
                                size="txtPoppinsMedium1051"
                              >
                                20%
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[55px] mt-3.5 text-[10.51px] text-black-900 text-center"
                              size="txtPoppinsMedium1051"
                            >
                              7%
                            </Text>
                          </div>
                        </div>
                        <div className="absolute flex flex-row h-max inset-[0] items-start justify-center m-auto w-[55%]">
                          <Text
                            className="mt-[11px] text-[10.51px] text-black-900 text-center"
                            size="txtPoppinsMedium1051"
                          >
                            34%
                          </Text>
                          <div className="md:h-[59px] h-[82px] ml-[5px] relative w-[63%]">
                            <Img
                              className="absolute h-[26px] right-[13%] top-[0] w-[26px]"
                              src="images/img_volume_black_900.svg"
                              alt="volume_One"
                            />
                            <div className="absolute bg-white-A700 border border-dashed border-white-A700 bottom-[0] flex flex-col h-[76px] inset-x-[0] items-center justify-start mx-auto p-[3px] rounded-[50%] shadow-bs3 w-[76px]">
                              <div className="md:h-[53px] h-[68px] p-[7px] relative w-[68px]">
                                <div className="bg-white-A700 h-[53px] m-auto rounded-[26px] w-[53px]"></div>
                                <Text
                                  className="absolute h-max inset-[0] justify-center leading-[15.00px] m-auto text-[10.13px] text-black-900 text-center w-2/5 sm:w-full"
                                  size="txtPoppinsMedium1013"
                                >
                                  Total Sales
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-4 ml-0.5 mt-2 w-4"
                            src="images/img_icons8cursor1.svg"
                            alt="icons8cursorOne"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[6%] flex flex-row gap-8 inset-x-[0] items-start justify-between mx-auto px-5 w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <div className="bg-deep_purple-A700 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Women
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <div className="bg-deep_purple-A700_01 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Men
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <div className="bg-deep_orange-500 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Kids
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <div className="bg-blue_gray-100_02 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Home
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <div className="bg-blue_gray-700 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-gray-600 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Wellness
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-center px-4 py-5 rounded-[12px] w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtPoppinsBold20"
                      >
                        Top Products
                      </Text>
                      <div className="bg-white-A700 flex flex-row gap-2 items-center justify-between outline outline-[1px] outline-blue_gray-100 px-4 py-1 rounded-lg w-[260px]">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_contrast_black_900.svg"
                            alt="contrast_One"
                          />
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtPoppinsMedium14Black900"
                          >
                            Search
                          </Text>
                        </div>
                        <Input
                          name="frameSeven"
                          placeholder="Enter"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-right text-sm text-white-A700 w-full"
                          wrapClassName="bg-gray-900_01 px-4 py-[3px] rounded"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col items-center w-auto"
                  orientation="vertical"
                >
                  <div className="border-b border-blue_gray-100 border-solid flex flex-row gap-4 items-center justify-start my-0 pb-3 pr-2 w-[261px]">
                    <div className="flex flex-col items-start justify-end py-0.5 w-[62%]">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        Speed Force : Knit{" "}
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[3px] w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsMedium14"
                        >
                          Women
                        </Text>
                        <Line className="bg-gray-600 h-4 w-px" />
                        <Button
                          className="bg-gray-300 cursor-pointer flex items-center justify-center min-w-[60px] px-2 py-1 rounded"
                          leftIcon={
                            <Img
                              className="h-4 my-px"
                              src="images/img_checkmark_green_900.svg"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="leading-[normal] text-green-900 text-left text-xs">
                            35%
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Img
                      className="h-[72px] md:h-auto object-cover w-[53px]"
                      src="images/img_imgpricklypear2.png"
                      alt="imgpricklypearTwo"
                    />
                  </div>
                  <div className="border-b border-blue_gray-100 border-solid flex flex-row gap-4 items-center justify-start my-0 pb-3 pr-2 w-[261px]">
                    <div className="flex flex-col items-start justify-end py-0.5 w-[62%]">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        Speed Force : Knit{" "}
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[3px] w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsMedium14"
                        >
                          Women
                        </Text>
                        <Line className="bg-gray-600 h-4 w-px" />
                        <Button
                          className="bg-gray-300 cursor-pointer flex items-center justify-center min-w-[60px] px-2 py-1 rounded"
                          leftIcon={
                            <Img
                              className="h-4 my-px"
                              src="images/img_checkmark_green_900.svg"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="leading-[normal] text-green-900 text-left text-xs">
                            35%
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Img
                      className="h-[72px] md:h-auto object-cover w-[53px]"
                      src="images/img_imgpricklypear2.png"
                      alt="imgpricklypearTwo"
                    />
                  </div>
                  <div className="border-b border-blue_gray-100 border-solid flex flex-row gap-4 items-center justify-start my-0 pb-3 pr-2 w-[261px]">
                    <div className="flex flex-col items-start justify-end py-0.5 w-[62%]">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        Speed Force : Knit{" "}
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[3px] w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsMedium14"
                        >
                          Women
                        </Text>
                        <Line className="bg-gray-600 h-4 w-px" />
                        <Button
                          className="bg-gray-300 cursor-pointer flex items-center justify-center min-w-[60px] px-2 py-1 rounded"
                          leftIcon={
                            <Img
                              className="h-4 my-px"
                              src="images/img_checkmark_green_900.svg"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="leading-[normal] text-green-900 text-left text-xs">
                            35%
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Img
                      className="h-[72px] md:h-auto object-cover w-[53px]"
                      src="images/img_imgpricklypear2.png"
                      alt="imgpricklypearTwo"
                    />
                  </div>
                  <div className="border-b border-blue_gray-100 border-solid flex flex-row gap-4 items-center justify-start my-0 pb-3 pr-2 w-[261px]">
                    <div className="flex flex-col items-start justify-end py-0.5 w-[62%]">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        Speed Force : Knit{" "}
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[3px] w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsMedium14"
                        >
                          Women
                        </Text>
                        <Line className="bg-gray-600 h-4 w-px" />
                        <Button
                          className="bg-gray-300 cursor-pointer flex items-center justify-center min-w-[60px] px-2 py-1 rounded"
                          leftIcon={
                            <Img
                              className="h-4 my-px"
                              src="images/img_checkmark_green_900.svg"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="leading-[normal] text-green-900 text-left text-xs">
                            35%
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Img
                      className="h-[72px] md:h-auto object-cover w-[53px]"
                      src="images/img_imgpricklypear2.png"
                      alt="imgpricklypearTwo"
                    />
                  </div>
                  <div className="border-b border-blue_gray-100 border-solid flex flex-row gap-4 items-center justify-start my-0 pb-3 pr-2 w-[261px]">
                    <div className="flex flex-col items-start justify-end py-0.5 w-[62%]">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        Speed Force : Knit{" "}
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[3px] w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsMedium14"
                        >
                          Women
                        </Text>
                        <Line className="bg-gray-600 h-4 w-px" />
                        <Button
                          className="bg-gray-300 cursor-pointer flex items-center justify-center min-w-[60px] px-2 py-1 rounded"
                          leftIcon={
                            <Img
                              className="h-4 my-px"
                              src="images/img_checkmark_green_900.svg"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="leading-[normal] text-green-900 text-left text-xs">
                            35%
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Img
                      className="h-[72px] md:h-auto object-cover w-[53px]"
                      src="images/img_imgpricklypear2.png"
                      alt="imgpricklypearTwo"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiteModePage;
