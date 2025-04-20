import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useAudio } from "@splicemood/react-music-player";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  ActionIcon,
  Box,
  FloatingIndicator,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";

import { secondsToMinutesAndSeconds } from "../utils/validate";
import styles from "./MusicPlayer.module.css";
import classes from "./PlayList.module.css";

const CoverButton = ({ cover, onClick, ref, isPlaying, isActive }) => {
  const IconCenter = useMemo(() => {
    return isPlaying ? FaCirclePause : FaCirclePlay;
  }, [isPlaying]);

  const backgroundImage = useMemo(
    () =>
      [cover, "icons/thumbnail.svg"]
        .filter(Boolean)
        .map((image) => `url('${image}')`)
        .join(","),
    [cover]
  );

  return (
    <Box
      className={classes.flex}
      onClick={onClick}
      ref={ref}
    >
      <div
        style={{
          backgroundImage,
          borderRadius: "var(--mantine-radius-sm)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <Box
          className={classes.control}
          mod={isActive}
        >
          <IconCenter
            size={28}
            className={classes.iconCenter}
          />
        </Box>
      </div>
    </Box>
  );
};

const p = {
  pt: "xs",
  pb: "xs",
  pl: "xs",
  pr: "sm",
};

const Recording = ({
  id,
  cover,
  author = "Unknown",
  title = "Untitled",
  setControlRef,
  active,
  isPlaying,
  setActive,
  play,
  togglePlayPause,
  children,
}) => {
  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: 200,
    duration: 500,
  });

  const isActive = useMemo(() => active === id, [active, id]);

  useEffect(() => {
    if (isActive) scrollIntoView();
  }, [isActive]);

  const handleClick = useCallback(() => {
    if (isActive) {
      togglePlayPause();
    } else {
      setActive(id);
      play();
    }
  }, [play, togglePlayPause, isActive, id]);

  const showPlaying = useMemo(() => {
    return isActive && isPlaying;
  }, [isPlaying, isActive]);

  return (
    <Group
      {...p}
      gap={0}
      ref={setControlRef(id)}
      onClick={handleClick}
    >
      <div
        ref={targetRef}
        data-scroll-target={true}
      />
      <CoverButton
        cover={cover}
        isPlaying={showPlaying}
        isActive={{ active: isActive }}
      />
      <Box
        ml={"xs"}
        flex={20}
      >
        <Text
          truncate
          size={"sm"}
          className={"identityText"}
        >
          {title}
        </Text>
        <Text
          c={"dimmed"}
          lineClamp={2}
          size={"xs"}
          className={"identityText"}
        >
          {author}
        </Text>
      </Box>
      {children}
    </Group>
  );
};

const PlayList = ({ nextPlaylist, prevPlaylist }) => {
  const audio = useAudio();
  const {
    currentTrackIndex: active,
    setCurrentTrack: setActive,
    isPlaying,
    togglePlayPause,
    play,
    playlist,
  } = audio;
  const [rootRef, setRootRef] = useState(null);
  const [controlsRefs, setControlsRefs] = useState({});

  console.log(audio.durations);
  console.log(playlist);

  const setControlRef = (name) => (node) => {
    controlsRefs[name] = node;
    setControlsRefs(controlsRefs);
  };

  const ref = useRef([]);

  return (
    playlist.length > 0 && (
      <Group
        className={classes.root}
        dir="ltr"
        ref={setRootRef}
      >
        <ActionIcon
          onClick={prevPlaylist}
          radius={"xl"}
          className={classes.actionIconLeft}
        >
          <IoIosArrowBack />
        </ActionIcon>

        <ActionIcon
          onClick={nextPlaylist}
          radius={"xl"}
          className={classes.actionIconRight}
        >
          <IoIosArrowForward />
        </ActionIcon>

        <FloatingIndicator
          target={controlsRefs[active]}
          parent={rootRef}
          className={classes.indicator}
        />

        <Stack
          w={"100%"}
          gap={2}
          className={classes.controlsGroup}
        >
          {playlist.map((song, index) => {
            const { minutes, padSeconds } = secondsToMinutesAndSeconds(
              audio?.durations[index]
            );

            return (
              <Recording
                key={"recording_" + song.id}
                id={index}
                title={song.title}
                author={song.author}
                cover={song.cover}
                active={active}
                setControlRef={setControlRef}
                setActive={setActive}
                togglePlayPause={ref && togglePlayPause}
                play={play}
                isPlaying={isPlaying}
              >
                <Text
                  c={"dimmed"}
                  className={styles.durationTime}
                >
                  {minutes}:{padSeconds}
                </Text>
              </Recording>
            );
          })}
        </Stack>
      </Group>
    )
  );
};

export default PlayList;
