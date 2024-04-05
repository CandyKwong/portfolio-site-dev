import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../src/components/Header';
import PageHome from './pages/PageHome';
import PageAbout from "./pages/PageAbout";
import PageWorks from "./pages/PageWorks";
import Footer from "./components/Footer";
import PageIndividualWork from "./pages/PageIndividualWork";
import ScrollToTop from "./components/ScrollToTop";
import Loading from '../src/components/Loading';
import { useState, useEffect } from "react";
import './styles/styles.scss';


function App(){
  const[isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 2000);
  }, []);

 
  return(
    
  
    <>
   {/* {isLoading?
   <Loading pageName="app"/>
   
   : */}
   <Router>
   <main id="main">
    <ScrollToTop/>
     <Header />
     <Routes>
       <Route path='/' element={<PageHome/>}/>
       <Route path='/about' element={<PageAbout/>}/>
       <Route path='/works' element={<PageWorks/>}/>
       <Route path='/individualworks/:id' element={<PageIndividualWork/>}/>
     </Routes>
   </main>
  <Footer/>
   </Router>
  
     
   </>
  )
}





export default App;
