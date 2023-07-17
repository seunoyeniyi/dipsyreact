import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";

const LiteModeOnePage = () => {
  const table2Data = React.useRef([
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
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("no", {
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
      table2ColumnHelper.accessor("idcustomer", {
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
      table2ColumnHelper.accessor("customername", {
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
      table2ColumnHelper.accessor("city", {
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
      table2ColumnHelper.accessor("orderdate", {
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
      table2ColumnHelper.accessor("status", {
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
      table2ColumnHelper.accessor("amount", {
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

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-poppins items-center justify-end mx-auto pl-0.5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="bg-white-A700 border-blue_gray-100 border-r border-solid flex md:flex-1 flex-col gap-[43px] justify-start mb-14 md:px-5 py-[42px] w-[17%] md:w-full">
            <div className="flex flex-col items-center justify-start ml-4 md:ml-[0] w-[56%] md:w-full">
              <div className="flex flex-row gap-5 items-center justify-center w-auto">
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
            </div>
            <div className="flex flex-col gap-14 items-center justify-start mb-[168px] w-auto">
              <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                <Input
                  name="componentTwo"
                  placeholder="Dashboard"
                  className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 sm:pr-5 text-base text-blue_gray-400 text-left w-full"
                  wrapClassName="bg-white-A700 flex pl-4 pr-[35px] py-[7px] rounded w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-2"
                      src="images/img_offer_blue_gray_400.svg"
                      alt="offer"
                    />
                  }
                ></Input>
                <Input
                  name="componentThree"
                  placeholder="Analytics"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-base text-gray-600 text-left w-full"
                  wrapClassName="bg-white-A700 flex pl-4 pr-[35px] py-[7px] rounded w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-2"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                  }
                ></Input>
                <Input
                  name="componentFour"
                  placeholder="Products"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-base text-gray-600 text-left w-full"
                  wrapClassName="bg-white-A700 flex pl-4 pr-[35px] py-[7px] rounded w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-2"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                ></Input>
                <Input
                  name="componentNine"
                  placeholder="Payment"
                  className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 w-full"
                  wrapClassName="bg-gray-900 flex pb-[5px] pl-4 pr-[35px] pt-2 rounded w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-0.5 h-6 mr-2"
                      src="images/img_car_white_a700_24x24.svg"
                      alt="car"
                    />
                  }
                ></Input>
                <Input
                  name="componentTen"
                  placeholder="Orders"
                  className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 sm:pr-5 text-base text-blue_gray-400 text-left w-full"
                  wrapClassName="bg-white-A700 flex pl-4 pr-[35px] py-[7px] rounded w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-2"
                      src="images/img_computer_blue_gray_400.svg"
                      alt="computer"
                    />
                  }
                ></Input>
                <Input
                  name="componentFive"
                  placeholder="Users"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-base text-gray-600 text-left w-full"
                  wrapClassName="bg-white-A700 flex pl-4 pr-[35px] py-[7px] rounded w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-2"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  }
                ></Input>
                <Input
                  name="componentSeven"
                  placeholder="Marketing"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-base text-gray-600 text-left w-full"
                  wrapClassName="bg-white-A700 flex pb-[5px] pl-4 pr-[35px] pt-2 rounded w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-0.5 h-6 mr-2"
                      src="images/img_computer_gray_600.svg"
                      alt="computer"
                    />
                  }
                ></Input>
                <Input
                  name="componentEight"
                  placeholder="Setting"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-base text-gray-600 text-left w-full"
                  wrapClassName="bg-white-A700 flex pb-[5px] pl-4 pr-[35px] pt-2 rounded w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-0.5 h-6 mr-2"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                ></Input>
              </div>
              <div className="border-blue_gray-100 border-solid border-t flex flex-col gap-4 items-center justify-start p-4 w-auto sm:w-full">
                <Input
                  name="componentNine_One"
                  placeholder="User"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-base text-gray-600 text-left w-full"
                  wrapClassName="bg-white-A700 flex pl-4 pr-[35px] py-[7px] rounded w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-2"
                      src="images/img_user_gray_600.svg"
                      alt="user"
                    />
                  }
                ></Input>
                <Input
                  name="componentEight_One"
                  placeholder="Logout"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-base text-gray-600 text-left w-full"
                  wrapClassName="bg-white-A700 flex pb-[5px] pl-4 pr-[35px] pt-2 rounded w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-0.5 h-6 mr-2"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  }
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-8 items-center justify-start md:px-5 w-[84%] md:w-full">
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
            <div className="flex md:flex-col flex-row gap-9 items-start justify-between w-[96%] md:w-full">
              <div className="bg-white-A700 flex flex-col gap-4 h-[390px] md:h-auto items-start justify-between max-w-[875px] mb-[520px] outline outline-[1px] outline-blue_gray-100 px-4 py-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-[23px] items-center justify-between w-full">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsBold16"
                  >
                    Payment Invoice
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
                    columns={table2Columns}
                    data={table2Data.current}
                    rowClass={""}
                    headerClass="border border-blue_gray-100"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[26px] items-center justify-start w-1/4 md:w-full">
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
                          <div className="md:h-[37px] h-[82px] ml-[5px] relative w-[63%]">
                            <Img
                              className="absolute h-[26px] right-[13%] top-[0] w-[26px]"
                              src="images/img_volume_black_900.svg"
                              alt="volume_One"
                            />
                            <div className="absolute bg-white-A700 border border-dashed border-white-A700 bottom-[0] flex flex-col h-[76px] inset-x-[0] items-center justify-start mx-auto p-[3px] rounded-[50%] shadow-bs3 w-[76px]">
                              <div className="md:h-[31px] h-[68px] p-[18px] relative w-[68px]">
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

export default LiteModeOnePage;
