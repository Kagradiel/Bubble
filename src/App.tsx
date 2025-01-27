import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { BubbleSettingsProvider } from "./contexts/BubbleSettingsContext";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BubbleSettingsProvider>
        <BrowserRouter>
          <div style={{ minHeight: "80dvh" }}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </BubbleSettingsProvider>
    </>
  );
}

export default App;
