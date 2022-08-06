import { GlobalStyles } from "./global/global";
import { Home } from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <GlobalStyles />
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </>
  );
}

export default App;
