import Footer from "../(components)/footer/page";
import Header from "../(components)/header/page";
import Card2 from "../(components)/card5/page";


function Portfolio() {
  return (
    <>
      <Header title="Portfolio"/>
      <div className="data10">
        <h4>OUR PORTFOLIO</h4>
        <h1>Take A Look At Our Latest Work.</h1>

    </div>
      <div className="portfolio1">
      <Card2 title="Web Designing" source="/55.png"/>
      <Card2 title="Hosting" source="/1.jpg"/>
      <Card2 title="E Commerce" source="/55.png"/>
      <Card2 title="E loan" source="/1.jpg"/>
      <Card2 title="Portfolio" source="/55.png"/>
      <Card2 title="Calculater" source="/1.jpg"/>
      </div>
      <div className="Footer1"> <Footer/></div>

      
    </>
  );
}

export default Portfolio;