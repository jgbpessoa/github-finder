import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <GithubProvider>
      <Router>
        <main className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </main>
      </Router>
    </GithubProvider>
  );
}

export default App;
