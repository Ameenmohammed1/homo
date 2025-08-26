import About from "@/Components/About";
import Case from "@/Components/Case";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Main from "@/Components/Main";
import Steps from "@/Components/Steps";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Main/>
   <About/>
   <Case/>
   <Steps/>
   <Contact/>
   <Footer/>
   </>
  );
}
