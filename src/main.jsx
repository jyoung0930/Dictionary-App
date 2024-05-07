import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./main.css";
import { ThemeContextProvider } from "./Context/ThemeContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
