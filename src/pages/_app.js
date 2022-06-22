import "react-perfect-scrollbar/dist/css/styles.css";
import "../app.css";
import { ThemeProvider } from "next-themes";
import { GlobalProvider } from "../contexts/GlobalContext";
function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <ThemeProvider>
          <Component {...pageProps} />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default MyApp;
