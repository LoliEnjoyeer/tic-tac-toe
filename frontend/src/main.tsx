import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singleplayer from "./pages/Singleplayer";
import Multiplayer from "./pages/Multiplayer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/singleplayer" element={<Singleplayer />}></Route>
      <Route path="/multiplayer" element={<Multiplayer />}></Route>
    </Routes>
  </BrowserRouter>
);

/**
 * todo CSS
 * todo socketIO
 */
