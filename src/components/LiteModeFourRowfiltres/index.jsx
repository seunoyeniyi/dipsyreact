import React from "react";

import { Button, Img, Text } from "components";

const LiteModeFourRowfiltres = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="bg-white-A700 cursor-pointer flex items-center justify-center min-w-[93px] outline outline-[1px] outline-gray-100_03 pl-2.5 pr-[15px] py-1.5 rounded-bl-[5px] rounded-tl-[5px]"
          leftIcon={
            <Img
              className="h-7 mr-[5px]"
              src="images/img_filter.svg"
              alt="filter"
            />
          }
        >
          <div className="font-black font-roboto text-gray-900 text-left text-xs">
            {props?.filter}
          </div>
        </Button>
        <Button
          className="bg-white-A700 cursor-pointer flex items-center justify-center min-w-[96px] outline outline-[1px] outline-gray-100_03 pl-2.5 pr-[15px] py-1.5"
          leftIcon={
            <Img
              className="h-7 mr-[5px]"
              src="images/img_search.svg"
              alt="search"
            />
          }
        >
          <div className="font-black font-roboto text-gray-900 text-left text-xs">
            {props?.search}
          </div>
        </Button>
        <Button
          className="bg-white-A700 cursor-pointer flex items-center justify-center min-w-[79px] outline outline-[1px] outline-gray-100_03 pl-2.5 pr-[15px] py-1.5"
          leftIcon={
            <Img
              className="h-7 mr-[5px]"
              src="images/img_edit.svg"
              alt="edit"
            />
          }
        >
          <div className="font-black font-roboto text-gray-900 text-left text-xs">
            {props?.edit}
          </div>
        </Button>
        <div className="bg-white-A700 flex flex-row gap-[5px] h-10 md:h-auto items-center justify-center outline outline-[1px] outline-gray-100_03 pl-2.5 pr-5 py-1.5 rounded-br-[5px] rounded-tr-[5px] w-auto">
          <Img className="h-7 w-7" src="images/img_trash.svg" alt="trash" />
          <Text
            className="text-gray-900 text-xs w-auto"
            size="txtRobotoBlack12Gray900"
          >
            {props?.delete}
          </Text>
        </div>
      </div>
    </>
  );
};

LiteModeFourRowfiltres.defaultProps = { delete: "Delete" };

export default LiteModeFourRowfiltres;
