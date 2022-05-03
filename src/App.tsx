import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import GlobalProvider from "./styles/GlobalProvider";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalProvider />
    </ThemeProvider>
  );
}

export default App;
