import React, { useMemo } from "react";

import { Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { secondsToMinutesAndSeconds } from "../utils/validate";

const minus = "-";

const Duration = ({ time, seconds, maxTime }) => {
  const [mode, { toggle }] = useDisclosure(false);

  const duration = useMemo(() => {
    if (mode) {
      const value = maxTime - seconds;
      return secondsToMinutesAndSeconds(value);
    } else {
      return time;
    }
  }, [mode, time, seconds, maxTime]);

  return (
    <Text
      c={"dimmed"}
      mt={"lg"}
      className={"identityText"}
      onClick={toggle}
    >
      {mode && minus}
      {duration.minutes}:{duration.padSeconds}
    </Text>
  );
};

export default Duration;
