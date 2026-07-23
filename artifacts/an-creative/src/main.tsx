import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

declare global {
  interface Window {
    openSallaSecretsCheckout?: () => void;
  } 
}

createRoot(document.getElementById("root")!).render(<App />);
