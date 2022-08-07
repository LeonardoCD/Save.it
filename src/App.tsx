import { GlobalStyles } from "./global/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { CreateContact } from "./pages/CreateContact";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            {/* public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/create-contact" element={<CreateContact />} />

            {/* creation routes */}
            {/* <Route element={<RequireAuth />}>
              <Route path="/" element={<CreateContact />} />
            </Route> */}

            {/* Not found */}
            {/* <Route path='*' element={<NotFound />}/> */}
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
