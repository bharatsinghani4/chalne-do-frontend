import React from "react";

import { Text } from "@mantine/core";
import classes from "./MusicPlayer.module.css";

const TimeDisplayLabel = ({ time }) => {
  return (
    <Text
      c={"dimmed"}
      className={classes.playlistText}
    >
      {time.minutes}:{time.padSeconds}
    </Text>
  );
};

export default TimeDisplayLabel;
