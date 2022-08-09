import { GlobalStyles } from "./global/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateContact, EditContact, Home } from "./pages";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ChakraProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
          <Routes>
            {/* public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/create-contact" element={<CreateContact />} />
            <Route path="/edit-contact" element={<EditContact />} />

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
