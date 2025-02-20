'use client';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sercices from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Sercices/>
    <Work/>
    <Contact/>
    
    </>

  );
  
}