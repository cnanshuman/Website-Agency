import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Lenis from "lenis";
import Mainlayput from "./Layout/Mainlayput";
import Servicepage from "./Pages/Servicepage";
import Portfoliopage from "./Pages/Portfoliopage";
import Blogspage from "./Pages/Blogspage";
import Careerspage from "./Pages/Careerspage";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";
import Servicedetailpage from "./Pages/Servicedetailpage";
import Blogsdetail from "./Component/Blogs/Blogsdetail";

function App() {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Mainlayput />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/About" element={<Aboutpage />} />
            <Route path="/Services" element={<Servicepage />} />
            <Route path="/Services/Uiux" element={<Servicedetailpage />} />
            <Route path="/Portfolio" element={<Portfoliopage />} />
            <Route path="/Blogs" element={<Blogspage />} />
            <Route path="/Blogs/:Blog" element={<Blogsdetail />} />
            <Route path="/Careers" element={<Careerspage />} />
            <Route path="/Contact" element={<Contactpage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
