import React, { useCallback, useEffect, useState } from "react";

import { useAudio } from "@splicemood/react-music-player";
import { Stack, Title } from "@mantine/core";
import { useDisclosure, useHotkeys } from "@mantine/hooks";

import HotKeys from "./HotKeys";
import PlayList from "./PlayList";
import { Layout } from "./Layout";

const HomePage = () => {
  const audio = useAudio();
  const [openedModal, { open: openModal, close: closeModal }] =
    useDisclosure(false);
  const [playlistNumber, setPlaylistNumber] = useState(
    Number(audio.currentPlaylistId) || 1
  );

  const fetchSongsMetadata = (index) => {
    fetch(`tracks_${index}.json`)
      .then((res) => res.json())
      .then(audio.replacePlaylist);
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
