import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../src/components/Header';
import PageHome from './pages/PageHome';
import PageAbout from "./pages/PageAbout";
import PageWorks from "./pages/PageWorks";
import Footer from "./components/Footer";
import PageIndividualWork from "./pages/PageIndividualWork";

function App(){
  return(
    
  
    <>
   
      <Router>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<PageHome/>}/>
          <Route path='/about' element={<PageAbout/>}/>
          <Route path='/works' element={<PageWorks/>}/>
          <Route path='/individualworks' element={<PageIndividualWork/>}/>
        </Routes>
      </main>
     <Footer/>
      </Router>
   </>
  )
}





export default App;
