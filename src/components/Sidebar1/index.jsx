import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
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
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
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
              padding: "6px 6px 6px 15px",
              gap: "8px",
              "background-color": "#ffffff",
              color: "#7c7c7c",
              "font-weight": 500,
              "font-size": "16px",
              "font-family": "Poppins",
              "border-radius": "4px",
              [`&:hover, &.ps-active`]: {
                color: "#ffffff",
                "background-color": "#171717ff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[234px] mt-[120px] pt-2 px-4 w-[88%]"
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
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
