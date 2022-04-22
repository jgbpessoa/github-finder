import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import User from "./pages/User";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <main className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </main>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
