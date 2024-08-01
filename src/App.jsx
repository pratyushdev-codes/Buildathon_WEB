

import './App.css'
import Features from './components/useComp/Features'
import Header from './components/useComp/Header'
import Hero from './components/useComp/Hero'
import { AnimatedListDemo } from './components/useComp/lists'
import MainHeader from './components/useComp/MainHeader'
import Navbar from './components/useComp/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TrainModel } from './components/useComp/TrainModel'






function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <MainHeader/>
      <Header/>
     <BrowserRouter>

     <Routes>

     <Route path="/" element={<TrainModel />}>
     



     </Route>
  




  
   

{/* <AnimatedListDemo/> */}



</Routes>

</BrowserRouter>
    </>
  )
}

export default App
