import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Blog } from "./components/Blog";
import { E404 } from "./components/E404";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Timeline } from "./components/Timeline";

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
