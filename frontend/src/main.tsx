import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singleplayer from "./pages/Singleplayer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/singleplayer" element={<Singleplayer />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

/**
 * todo CSS
 * todo socketIO
 */
