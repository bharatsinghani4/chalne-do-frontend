import React from "react";

import { ActionIcon } from "@mantine/core";

const IconButton = ({ onClick, children }) => {
  return (
    <ActionIcon
      pb={"lg"}
      pt={"lg"}
      variant={"transparent"}
      color={"text"}
      onClick={onClick}
    >
      {children}
    </ActionIcon>
  );
};

export default IconButton;
