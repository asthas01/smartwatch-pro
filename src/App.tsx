import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { JSX } from "react";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <Navbar />

      {/* Main content with padding so Navbar does not overlap */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;