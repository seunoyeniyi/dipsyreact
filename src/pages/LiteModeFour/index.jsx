import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import LiteModeFourRowfiltres from "components/LiteModeFourRowfiltres";
import LiteModeFourTab from "components/LiteModeFourTab";

const LiteModeFourPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

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
      <div className="bg-gray-100 flex flex-col font-poppins items-center justify-start mx-auto pl-0.5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[247px] flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[5px] top-[0]"
          >
            <div className="flex flex-row gap-5 items-center justify-center mb-[897px] ml-4 mr-[95px] mt-[42px] w-auto">
              <Img
                className="h-[43px] rounded-[5px] w-[42px]"
                src="images/img_car.svg"
                alt="car"
              />
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtPoppinsBold25"
              >
                DIPSY
              </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "7px 7px 7px 15px",
                  gap: "8px",
                  "background-color": "#ffffff",
                  color: "#7c7c7c",
                  "font-weight": 500,
                  "font-size": "16px",
                  "border-radius": "4px",
                  [`&:hover, &.ps-active`]: {
                    "background-color": "#ffffffff !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-[294px] mt-[120px] pt-2 px-4 w-[88%]"
            >
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-end mt-[72px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_user_gray_600.svg"
                      alt="user_One"
                    />
                  }
                >
                  <Text className="w-auto">User</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 mb-[5px] w-6"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  }
                >
                  <Text className="my-0.5 w-auto">Logout</Text>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
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
            <div className="flex flex-col font-roboto items-center justify-start w-[98%] md:w-full">
              <div className="flex flex-col items-center justify-center p-3.5 w-full">
                <div className="bg-gray-50 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 outline outline-gray-100_02 sm:px-5 px-[30px] rounded-tl-[20px] rounded-tr-[20px] w-[99%] md:w-full">
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
                  <LiteModeFourTab className="flex flex-row gap-10 h-[90px] md:h-auto items-center justify-center md:ml-[0] ml-[428px] w-auto" />
                  <Button
                    className="bg-gray-900 cursor-pointer flex items-center justify-center min-w-[136px] md:ml-[0] ml-[197px] md:mt-0 my-[25px] outline outline-[1px] outline-blue_gray-400 pl-[15px] pr-5 py-1.5 rounded-[20px] shadow-bs4"
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
                <div className="bg-white-A700 border-b-2 border-gray-100_02 border-solid flex flex-col h-[70px] md:h-auto items-center justify-between max-w-[1184px] w-full">
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
                  className="flex flex-col gap-5 items-center mb-[27px] mt-5 w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-center justify-center max-w-[1192px] w-full">
                    <div className="flex flex-col items-center justify-start px-1 w-full">
                      <div className="flex flex-col items-start justify-start max-w-[1183px] w-full">
                        <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                          <div className="bg-gray-50 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
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
                          <div className="bg-gray-50 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
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
                          <div className="bg-gray-50 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
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
                          <div className="bg-gray-50 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
                            <div className="flex flex-row items-start justify-start w-full">
                              <div className="bg-white-A700 h-5 outline outline-[1px] outline-gray-100_02 rounded-[50%] shadow-bs5 w-5"></div>
                              <div className="flex flex-1 flex-col h-[150px] md:h-auto items-center justify-center pl-2.5 sm:pr-5 pr-[30px] py-2.5 w-full">
                                <Img
                                  className="h-[150px] md:h-auto object-cover w-[111px] sm:w-full"
                                  src="images/img_imgpricklypear2.png"
                                  alt="imgpricklypearTwo_Two"
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
                  <div className="flex flex-1 flex-col items-center justify-center max-w-[1192px] w-full">
                    <div className="flex flex-col items-center justify-start px-1 w-full">
                      <div className="flex flex-col items-start justify-start max-w-[1183px] w-full">
                        <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                          <div className="bg-gray-50 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
                            <div className="flex flex-row items-start justify-start w-full">
                              <Button className="bg-white-A700 flex h-5 items-center justify-center outline outline-[1px] outline-gray-100_01 p-1.5 rounded-[50%] shadow-bs4 w-5">
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
                          <div className="bg-gray-50 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
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
                          <div className="bg-gray-50 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
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
                          <div className="bg-gray-50 flex flex-1 flex-col h-[265px] md:h-auto items-center justify-start p-5 rounded-[10px] w-full">
                            <div className="flex flex-row items-start justify-start w-full">
                              <div className="bg-white-A700 h-5 outline outline-[1px] outline-gray-100_02 rounded-[50%] shadow-bs5 w-5"></div>
                              <div className="flex flex-1 flex-col h-[150px] md:h-auto items-center justify-center pl-2.5 sm:pr-5 pr-[30px] py-2.5 w-full">
                                <Img
                                  className="h-[150px] md:h-auto object-cover w-[111px] sm:w-full"
                                  src="images/img_imgpricklypear2.png"
                                  alt="imgpricklypearTwo_Two"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LiteModeFourPage;
