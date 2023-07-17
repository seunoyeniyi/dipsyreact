import React from "react";

const sizeClasses = {
  txtPoppinsMedium12Gray900: "font-medium font-poppins",
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsMedium1013: "font-medium font-poppins",
  txtPoppinsMedium14Black900: "font-medium font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsMedium16Bluegray400: "font-medium font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtRobotoBlack12: "font-black font-roboto",
  txtPoppinsBold25: "font-bold font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsMedium16Black900: "font-medium font-poppins",
  txtRobotoBlack12Gray900: "font-black font-roboto",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular8: "font-normal font-poppins",
  txtInterRegular12: "font-inter font-normal",
  txtRobotoBold16: "font-bold font-roboto",
  txtPoppinsMedium16Gray600: "font-medium font-poppins",
  txtRobotoBold12: "font-bold font-roboto",
  txtPoppinsMedium1051: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
