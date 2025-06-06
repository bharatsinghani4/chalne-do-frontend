import React, { useCallback, useEffect, useState } from "react";

import { useAudio } from "@splicemood/react-music-player";
import { Stack, Title } from "@mantine/core";
import { useDisclosure, useHotkeys } from "@mantine/hooks";

import HotKeys from "./HotKeys";
import PlayList from "./PlayList";
import { Layout } from "./Layout";

const HomePage = () => {
  const audio = useAudio();
  console.log({ audio });
  const [openedModal, { open: openModal, close: closeModal }] =
    useDisclosure(false);
  const [playlistNumber, setPlaylistNumber] = useState(
    Number(audio.currentPlaylistId) || 1
  );

  const fetchSongsMetadata = (index) => {
    fetch(
      `https://splicemood.github.io/react-music-player/tracks_${index}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        const baseURL = "https://splicemood.github.io/react-music-player/";
        const absoluteAudioLists = data.map((track) => ({
          ...track,
          src: new URL(track.src, baseURL).href,
        }));
        console.log({ absoluteAudioLists });
        audio.replacePlaylist(absoluteAudioLists);
      });
  };

  useEffect(() => {
    fetchSongsMetadata(playlistNumber);
    audio.setPlaylistId(playlistNumber);
  }, [playlistNumber]);

  useEffect(() => {
    if (audio.currentPlaylistId) {
      setPlaylistNumber(Number(audio.currentPlaylistId));
    }
  }, [audio.currentPlaylistId]);

  const handleNextPlaylist = useCallback(() => {
    let next = playlistNumber + 1;
    if (next > 3) next = 1;
    setPlaylistNumber(next);
  }, [playlistNumber]);

  const handlePrevPlaylist = useCallback(() => {
    let next = playlistNumber - 1;
    if (next < 1) next = 3;
    setPlaylistNumber(next);
  }, [playlistNumber]);

  useHotkeys([
    ["alt+ArrowLeft", handlePrevPlaylist],
    ["alt+ArrowRight", handleNextPlaylist],
    ["mod+Slash", openModal],
  ]);

  if (audio.durations.length !== 0) {
    return <div>Loading audio...</div>;
  }

  return (
    <Layout>
      <Stack gap={"xs"}>
        <Stack>
          <Title order={2}>Full Sync Demo</Title>
        </Stack>
        <HotKeys
          opened={openedModal}
          close={closeModal}
        />
        <PlayList
          nextPlaylist={handleNextPlaylist}
          prevPlaylist={handlePrevPlaylist}
        />
      </Stack>
    </Layout>
  );
};

export default HomePage;
