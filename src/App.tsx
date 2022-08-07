import { GlobalStyles } from "./global/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <GlobalStyles />
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            {/* public routes */}
            <Route path="/" element={<Home />} />

            {/* creation routes */}
            {/* <Route element={<RequireAuth />}>
              <Route path="/" element={<CreateContact />} />
            </Route> */}

            {/* Not found */}
            {/* <Route path='*' element={<NotFound />}/> */}
          </Routes>
        </BrowserRouter>
        <Home />
      </ChakraProvider>
    </>
  );
}

export default App;
