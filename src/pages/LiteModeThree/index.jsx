import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  ReactTable,
  Text,
} from "components";
import Sidebar1 from "components/Sidebar1";

const LiteModeThreePage = () => {
  const tableData = React.useRef([
    {
      no: "1.",
      idcustomer: "#6545",
      customername: "Jane Cooper",
      city: "Sydney",
      orderdate: "01 Oct | 11:29 am",
      status: "Paid",
      amount: "$64",
    },
    {
      no: "2.",
      idcustomer: "#5412",
      customername: "Wade Warren",
      city: "Perth",
      orderdate: "01 Oct | 11:45 am",
      status: "Paid",
      amount: "$557",
    },
    {
      no: "3.",
      idcustomer: "#6622",
      customername: "Jenny Wilson",
      city: "Darwin",
      orderdate: "01 Oct | 12:10 pm",
      status: "Pending",
      amount: "$156",
    },
    {
      no: "4.",
      idcustomer: "#6462",
      customername: "Robert Fox",
      city: "Albany",
      orderdate: "01 Oct | 01:15 pm",
      status: "Paid",
      amount: "$265",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("no", {
        cell: (info) => (
          <Text
            className="pb-[5px] pl-4 pt-[23px] text-black-900 text-sm"
            size="txtPoppinsMedium14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[84px] pl-4 py-[7px] text-gray-600 text-sm"
            size="txtPoppinsMedium14"
          >
            No
          </Text>
        ),
      }),
      tableColumnHelper.accessor("idcustomer", {
        cell: (info) => (
          <Text
            className="pb-[5px] pt-[23px] text-black-900 text-sm"
            size="txtPoppinsMedium14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[135px] py-[7px] text-gray-600 text-sm"
            size="txtPoppinsMedium14"
          >
            Id Customer
          </Text>
        ),
      }),
      tableColumnHelper.accessor("customername", {
        cell: (info) => (
          <Text
            className="pb-[3px] pt-[25px] text-black-900 text-sm"
            size="txtPoppinsMedium14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[165px] py-[7px] text-gray-600 text-sm"
            size="txtPoppinsMedium14"
          >
            Customer Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("city", {
        cell: (info) => (
          <Text
            className="pb-[3px] pt-[25px] text-black-900 text-sm"
            size="txtPoppinsMedium14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[100px] py-[7px] text-gray-600 text-sm"
            size="txtPoppinsMedium14"
          >
            City
          </Text>
        ),
      }),
      tableColumnHelper.accessor("orderdate", {
        cell: (info) => (
          <Text
            className="pb-[5px] pl-0.5 pt-[23px] text-black-900 text-sm"
            size="txtPoppinsMedium14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[161px] pl-0.5 py-[7px] text-gray-600 text-sm"
            size="txtPoppinsMedium14"
          >
            Order Date
          </Text>
        ),
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-row gap-1 items-center justify-start">
            <div className="bg-light_green-800 h-2.5 rounded-[50%] w-2.5"></div>
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtPoppinsMedium14Black900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[123px] pl-0.5 py-[7px] text-gray-600 text-sm"
            size="txtPoppinsMedium14"
          >
            Status
          </Text>
        ),
      }),
      tableColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text
            className="pb-[5px] pt-[23px] text-black-900 text-sm"
            size="txtPoppinsMedium14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[73px] py-[7px] text-gray-600 text-sm"
            size="txtPoppinsMedium14"
          >
            Amount
          </Text>
        ),
      }),
    ];
  }, []);

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_component3.svg"
          alt="componentThree"
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
          src="images/img_arrowdown.svg"
          alt="arrowdown"
        />
      ),
      label: "Products",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[5px] w-6"
          src="images/img_car_gray_600.svg"
          alt="car_One"
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
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
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
                  alt="car_Two"
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
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-[98%] md:w-full">
              <div className="bg-gray-100 flex flex-col gap-8 items-center justify-start mb-14 pt-8 sm:px-5 px-8 w-[77%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start max-w-[875px] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col gap-6 h-[185px] md:h-auto items-start justify-between outline outline-[1px] outline-blue_gray-100 px-4 py-5 rounded-[12px] w-full">
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtPoppinsSemiBold20"
                    >
                      Average Revenue
                    </Text>
                    <div className="flex flex-row gap-5 items-end justify-between w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                          size="txtPoppinsBold32"
                        >
                          $25,565
                        </Text>
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Button
                            className="bg-gray-300 cursor-pointer flex items-center justify-center min-w-[60px] px-2 py-1 rounded"
                            leftIcon={
                              <Img
                                className="h-4 mr-1 my-px"
                                src="images/img_checkmark.svg"
                                alt="checkmark"
                              />
                            }
                          >
                            <div className="leading-[normal] text-blue_gray-900 text-left text-xs">
                              20%
                            </div>
                          </Button>
                          <Text
                            className="text-gray-600 text-sm w-auto"
                            size="txtPoppinsRegular14"
                          >
                            $20,452
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end pl-0.5 py-0.5 w-[37%]">
                        <Img
                          className="h-[79px] md:ml-[0] ml-[11px]"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px] mt-[3px] w-[95%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                M
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                T
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                W
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                T
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                F
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                S
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                S
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-6 h-[185px] md:h-auto items-start justify-between outline outline-[1px] outline-blue_gray-100 px-4 py-5 rounded-[12px] w-full">
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtPoppinsSemiBold20"
                    >
                      Customer Return
                    </Text>
                    <div className="flex flex-row gap-5 items-end justify-between w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                          size="txtPoppinsBold32"
                        >
                          7956
                        </Text>
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Button
                            className="bg-gray-100_01 cursor-pointer flex items-center justify-center min-w-[57px] px-2 py-1 rounded"
                            leftIcon={
                              <Img
                                className="h-4 mr-1 my-px"
                                src="images/img_checkmark.svg"
                                alt="checkmark"
                              />
                            }
                          >
                            <div className="leading-[normal] text-gray-900 text-left text-xs">
                              15%
                            </div>
                          </Button>
                          <Text
                            className="text-gray-600 text-sm w-auto"
                            size="txtPoppinsRegular14"
                          >
                            6759
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end pl-0.5 py-0.5 w-[37%]">
                        <Img
                          className="h-[79px] md:ml-[0] ml-[11px]"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px] mt-[3px] w-[95%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                M
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                T
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                W
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                T
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                F
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                S
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[8px] text-black-900 text-center"
                                size="txtPoppinsRegular8"
                              >
                                S
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 flex flex-col gap-3 items-start justify-center max-w-[875px] outline outline-[1px] outline-blue_gray-100 px-4 py-5 rounded-[12px] w-full">
                  <div className="flex flex-row gap-3 items-center justify-between w-full">
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtPoppinsSemiBold20"
                    >
                      Revenue vs Order
                    </Text>
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-gray-900 h-2.5 rounded-[50%] w-2.5"></div>
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsRegular14"
                        >
                          Revenue
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-gray-400 h-2.5 rounded-[50%] w-2.5"></div>
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsRegular14"
                        >
                          Order
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start pl-2.5 w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                      <div className="flex flex-col gap-5 items-end justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-gray-600 text-right text-xs"
                            size="txtInterRegular12"
                          >
                            1000
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[25px] items-start justify-start w-[79%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-gray-600 text-right text-xs"
                              size="txtInterRegular12"
                            >
                              750
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-gray-600 text-right text-xs"
                              size="txtInterRegular12"
                            >
                              500
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-gray-600 text-right text-xs"
                              size="txtInterRegular12"
                            >
                              250
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start ml-3.5 md:ml-[0]">
                            <Text
                              className="text-gray-600 text-right text-xs"
                              size="txtInterRegular12"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[164px] h-[182px] ml-1 md:ml-[0] md:mt-0 mt-[7px] relative w-[96%] md:w-full">
                      <Line className="absolute bg-black-900 bottom-[12%] h-[43px] right-[45%] w-px" />
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                        <Line className="bg-gray-600 h-px w-[99%]" />
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-center justify-start w-5">
                            <div className="bg-gray-600 h-1.5 w-[5%]"></div>
                            <Text
                              className="text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              Jan
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-5">
                            <div className="bg-gray-600 h-1.5 w-[5%]"></div>
                            <Text
                              className="text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              Feb
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[22px]">
                            <div className="bg-gray-600 h-1.5 w-[5%]"></div>
                            <Text
                              className="text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              Mar
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[3%]">
                            <div className="bg-gray-600 h-1.5 w-[5%]"></div>
                            <Text
                              className="text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              Apr
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[23px]">
                            <div className="bg-gray-600 h-1.5 w-[5%]"></div>
                            <Text
                              className="text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              May
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-5">
                            <div className="bg-gray-600 h-1.5 w-[5%]"></div>
                            <Text
                              className="text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              Jun
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[2%]">
                            <div className="bg-gray-600 h-1.5 w-[7%]"></div>
                            <Text
                              className="text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              Jul
                            </Text>
                          </div>
                          <div className="flex flex-col h-[22px] items-center justify-start w-[22px]">
                            <div className="bg-gray-600 h-1.5 w-[5%]"></div>
                            <Text
                              className="text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              Aug
                            </Text>
                          </div>
                          <div className="flex flex-col h-[22px] items-center justify-start w-[22px]">
                            <div className="bg-gray-600 h-1.5 w-[5%]"></div>
                            <Text
                              className="text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              Sep
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-5">
                            <div className="bg-gray-600 h-1.5 w-[5%]"></div>
                            <Text
                              className="text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              Oct
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[22px]">
                            <div className="bg-gray-600 h-1.5 w-[5%]"></div>
                            <Text
                              className="text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              Nov
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start w-[4%]">
                            <div className="bg-gray-600 h-1.5 w-[4%]"></div>
                            <Text
                              className="mr-1 text-center text-gray-600 text-xs"
                              size="txtInterRegular12"
                            >
                              Dec
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat flex font-poppins h-40 md:h-[164px] inset-x-[0] justify-end mx-auto pb-[3px] top-[0] w-[99%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group7.svg')",
                        }}
                      >
                        <Img
                          className="h-[138px] mb-[3px] mt-auto mx-auto"
                          src="images/img_group_gray_900.svg"
                          alt="group"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto p-[21px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group8.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-2 items-center justify-start mb-3.5 mr-[284px] w-[15%] md:w-full">
                            <div className="bg-white-A700 flex flex-col gap-0.5 items-start justify-start px-4 py-2 rounded-lg shadow-bs1 w-auto">
                              <Text
                                className="text-gray-600 text-xs w-auto"
                                size="txtPoppinsRegular12"
                              >
                                Jul, 2022
                              </Text>
                              <RadioGroup
                                className="flex flex-col w-full"
                                name="radiogroup25565"
                              >
                                <Radio
                                  value="25565"
                                  className="font-semibold leading-[normal] text-black-900 text-left text-sm"
                                  inputClassName="bg-gray-900 h-2.5 mr-[5px] outline outline-[1px] outline-black-900 w-2.5"
                                  checked={false}
                                  name="radiogroup25565"
                                  label="25565"
                                  id="25565"
                                ></Radio>
                                <Radio
                                  value="456"
                                  className="font-semibold leading-[normal] mr-[29px] text-black-900 text-left text-sm"
                                  inputClassName="bg-gray-400 h-2.5 mr-[5px] outline outline-[1px] outline-black-900 w-2.5"
                                  checked={false}
                                  name="radiogroup25565"
                                  label="456"
                                  id="456"
                                ></Radio>
                              </RadioGroup>
                              <Img
                                className="h-2 w-3"
                                src="images/img_offer.svg"
                                alt="offer"
                              />
                            </div>
                            <div className="bg-white-A700 h-3 outline outline-[2px] outline-black-900 rounded-[50%] w-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 h-[334px] md:h-auto items-start justify-between max-w-[875px] px-4 py-5 w-full">
                  <div className="bg-white-A700 flex flex-col gap-4 h-[334px] md:h-auto items-start justify-between max-w-[875px] outline outline-[1px] outline-blue_gray-100 px-4 py-5 rounded-[12px] w-full">
                    <div className="flex flex-row gap-[23px] items-center justify-between w-full">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtPoppinsBold16"
                      >
                        Recent Invoice
                      </Text>
                      <Button
                        className="bg-black-900 cursor-pointer flex items-center justify-center min-w-[81px] px-3 py-1.5 rounded-lg"
                        rightIcon={
                          <Img
                            className="h-5 ml-2"
                            src="images/img_menu.svg"
                            alt="menu"
                          />
                        }
                      >
                        <div className="leading-[normal] text-left text-white-A700 text-xs">
                          Filter
                        </div>
                      </Button>
                    </div>
                    <div className="overflow-auto w-full">
                      <ReactTable
                        columns={tableColumns}
                        data={tableData.current}
                        rowClass={""}
                        headerClass="border border-blue_gray-100"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between outline outline-gray-800 px-4 py-2 w-full">
                    <div className="flex flex-row items-center justify-start w-[75px]">
                      <div className="bg-light_green-800 h-px rounded-[5px] w-[14%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[26px] items-center justify-start md:mt-0 mt-8 w-[24%] md:w-full">
                <div className="flex flex-col gap-8 items-center justify-start w-full">
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
                          <div className="absolute bg-blue_gray-100_01 border border-gray-300_01 border-solid h-[223px] inset-[0] justify-center m-auto rotate-[122deg] rounded-[111px] shadow-bs2 w-[223px]"></div>
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
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="leading-[normal] text-gray-900 text-left text-xs">
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
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="leading-[normal] text-gray-900 text-left text-xs">
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
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="leading-[normal] text-gray-900 text-left text-xs">
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
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="leading-[normal] text-gray-900 text-left text-xs">
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

export default LiteModeThreePage;
