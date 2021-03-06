import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";

const boxBackgroundColor = theme("mode", {
  light: "#fff",
  dark: "#000"
});

const Container = styled.div`
  background-color: ${boxBackgroundColor};
`;

function App() {
  return (
    <ThemeProvider theme={{ mode: "light" }}>
      <Container className="App">
        <Header />
        <Body />
      </Container>
    </ThemeProvider>
  );
}

export default App;
