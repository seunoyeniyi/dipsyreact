import React from "react";

import { Text } from "components";

const LiteModeFourTab = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="outline outline-gray-900 py-[35px] text-center text-gray-900 text-xs w-[35px]"
          size="txtRobotoBlack12Gray900"
        >
          {props?.activetab}
        </Text>
        <div className="flex flex-col h-[90px] md:h-auto items-center justify-between">
          <Text
            className="text-blue_gray-400_01 text-center text-xs w-auto"
            size="txtRobotoBlack12"
          >
            {props?.drafttab}
          </Text>
        </div>
        <div className="flex flex-col h-[90px] md:h-auto items-center justify-between">
          <Text
            className="text-blue_gray-400_01 text-center text-xs w-auto"
            size="txtRobotoBlack12"
          >
            {props?.assemblytab}
          </Text>
        </div>
      </div>
    </>
  );
};

LiteModeFourTab.defaultProps = {
  activetab: "Active",
  drafttab: "Draft",
  assemblytab: "Assembly",
};

export default LiteModeFourTab;
