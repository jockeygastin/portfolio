'use client';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sercices from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  
  return (
    <>
    <Header/>
    <About/>
    <Sercices/>
    <Work/>
    <Contact/>
    <Footer/>
    
    </>

  );
  
}