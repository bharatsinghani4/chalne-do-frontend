import { PlayerFullSyncProvider } from "@splicemood/react-music-player";
import HomePage from "./HomePage";

const FullSync = () => {
  return (
    <PlayerFullSyncProvider>
      <HomePage />
    </PlayerFullSyncProvider>
  );
};

export default FullSync;
