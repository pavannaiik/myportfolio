import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Experience from "./Experience";
import Project from "./Project";
import Education from "./Education";
import CustomCursor from "./CustomCursor";

function App() {
  return (
    <>
      <CustomCursor></CustomCursor>
      <div>
        <Header></Header>
      </div>

      <div className="flex flex-col min-h-screen">
        <LandingPage isLoggedIn={true} username="PavanKalyan Nayak Guguloth"></LandingPage>
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Education />
        </div>

      <div>
       <Footer></Footer>   
      </div>
    
    </>
  );
}
export default App;
