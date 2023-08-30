import Footer from "../(components)/footer/page";
import Header from "../(components)/header/page";
import Card2 from "../(components)/card5/page";
import Image from "next/image";


function Pages() {
  return (
    <>
      <Header title="Pages" />
      <div className="Pages1">
      <Card2 source="/1.jpg" title="Programmer" text="Our Top dedicated professionals.Our Top dedicated professionalsOur Top dedicated 
        Our Top dedicated professionalsOur Top dedicated professionalsprofessionalsOur Top dedicated professionals"/>
        <Card2 source="/55.png" title="Developer" text="Our Top dedicated professionals.Our Top dedicated professionalsOur Top dedicated 
        Our Top dedicated professionalsOur Top dedicated professionalsprofessionalsOur Top dedicated professionals"/>
        <Card2 source="/1.jpg" title="Designer" text="Our Top dedicated professionals.Our Top dedicated professionalsOur Top dedicated 
        Our Top dedicated professionalsOur Top dedicated professionalsprofessionalsOur Top dedicated professionals"/>
      </div>
      <div className="Footer1"> <Footer/></div>

      
    </>
  );
}

export default Pages;