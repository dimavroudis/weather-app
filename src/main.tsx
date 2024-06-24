import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/carousel/styles.css";

import "./index.css";

import {
  createTheme,
  MantineColorsTuple,
  MantineProvider,
} from "@mantine/core";

const primaryColor: MantineColorsTuple = [
  "#FFC355",
  "#faecd3",
  "#f0d7aa",
  "#EACA8F",
  "#dfaf56",
  "#dba33e",
  "#d89d30",
  "#bf8922",
  "#ab791a",
  "#94670b",
];

// Your theme configuration is merged with default theme
const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  colors: {
    primary: primaryColor,
  },
  primaryColor: "primary",
  radius: {
    xs: "0.25rem", // 4
    sm: "0.625rem", //10
    md: "1rem", //16
    lg: "1.875rem", //30
    xl: "2.5rem", //40
  },
  defaultRadius: "xl",
  spacing: {
    xs: "0.25rem", // 4
    sm: "0.625rem", //10
    md: "1.25rem", //20
    lg: "1.875rem", //30
    xl: "2.5rem", //40
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
