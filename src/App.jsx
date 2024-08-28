import React from "react";

import Home from "./pages/Home/Home";
import CoinPage from "./pages/CoinPage/CoinPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
const App = () => {
  return (
    <ChakraProvider>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CoinPage/:id" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
