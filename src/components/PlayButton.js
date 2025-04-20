import React, { useMemo } from "react";

import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { ActionIcon } from "@mantine/core";

const PlayButton = ({ onClick, playing }) => {
  const IconPlay = useMemo(() => {
    return playing ? FaCirclePause : FaCirclePlay;
  }, [playing]);

  return (
    <ActionIcon
      color={"text"}
      variant={"transparent"}
      size={"lg"}
      onClick={onClick}
    >
      <IconPlay size={40} />
    </ActionIcon>
  );
};

export default PlayButton;
