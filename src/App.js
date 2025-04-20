import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";

import { MantineProvider } from "@mantine/core";
import { Router } from "./components/Router";
import { theme } from "./utils/theme";

export default function App() {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme={"dark"}
    >
      <Router />
    </MantineProvider>
  );
}
